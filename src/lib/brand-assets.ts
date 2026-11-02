'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

// Global custom event name for live asset synchronization across the website
export const ASSET_SYNC_EVENT = 'restiturecore-asset-synced';

export interface StorageAssetFile {
  name: string;
  id?: string | null;
  updated_at?: string | null;
  created_at?: string | null;
  last_accessed_at?: string | null;
  metadata?: {
    size?: number;
    mimetype?: string;
    [key: string]: any;
  } | null;
  publicUrl: string;
  [key: string]: any;
}

/**
 * Dispatches an event to notify all components that an asset was updated in Supabase
 */
export function notifyAssetSynced(assetName: string) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(ASSET_SYNC_EVENT, { 
        detail: { assetName, timestamp: Date.now() } 
      })
    );
  }
}

/**
 * Get the public URL for an asset in the Supabase 'assets' bucket
 */
export function getStorageAssetUrl(fileName: string, cacheBust = true): string {
  try {
    const { data } = supabase.storage.from('assets').getPublicUrl(fileName);
    if (!data?.publicUrl) return '';
    return cacheBust ? `${data.publicUrl}?t=${Date.now()}` : data.publicUrl;
  } catch {
    return '';
  }
}

/**
 * List all live files stored in the Supabase 'assets' bucket
 */
export async function listSupabaseAssets(): Promise<StorageAssetFile[]> {
  try {
    const { data, error } = await supabase.storage.from('assets').list('', {
      limit: 100,
      sortBy: { column: 'name', order: 'asc' },
    });

    if (error || !data) {
      console.warn('Could not list assets from Supabase storage:', error?.message);
      return [];
    }

    return data
      .filter(item => item.name && !item.name.startsWith('.'))
      .map(item => {
        const { data: urlData } = supabase.storage.from('assets').getPublicUrl(item.name);
        return {
          ...item,
          publicUrl: urlData?.publicUrl ? `${urlData.publicUrl}?t=${Date.now()}` : '',
        };
      });
  } catch (err) {
    console.error('Error listing assets from Supabase:', err);
    return [];
  }
}

/**
 * Upload a file to the Supabase 'assets' bucket
 */
export async function uploadSupabaseAsset(
  fileName: string, 
  file: File
): Promise<{ success: boolean; publicUrl?: string; error?: string }> {
  try {
    const { error } = await supabase.storage
      .from('assets')
      .upload(fileName, file, {
        upsert: true,
        contentType: file.type || 'image/png',
      });

    if (error) throw error;

    const { data: urlData } = supabase.storage.from('assets').getPublicUrl(fileName);
    const publicUrl = urlData?.publicUrl ? `${urlData.publicUrl}?t=${Date.now()}` : '';

    notifyAssetSynced(fileName);
    return { success: true, publicUrl };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to upload asset' };
  }
}

/**
 * Delete a file from the Supabase 'assets' bucket
 */
export async function deleteSupabaseAsset(
  fileName: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.storage
      .from('assets')
      .remove([fileName]);

    if (error) throw error;

    notifyAssetSynced(fileName);
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to delete asset' };
  }
}

/**
 * React hook to synchronize any brand asset from Supabase storage across website components
 */
export function useBrandAsset(fileName: string, fallbackUrl: string | null = null) {
  const [url, setUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchAsset = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const { data } = supabase.storage.from('assets').getPublicUrl(fileName);
      if (data?.publicUrl) {
        setUrl(`${data.publicUrl}?t=${Date.now()}`);
      } else {
        setUrl(fallbackUrl);
      }
    } catch {
      setUrl(fallbackUrl);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [fileName, fallbackUrl]);

  useEffect(() => {
    fetchAsset();

    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent;
      const syncedName = customEvent.detail?.assetName;
      if (!syncedName || syncedName === fileName || syncedName === 'all') {
        fetchAsset();
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener(ASSET_SYNC_EVENT, handleSync);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener(ASSET_SYNC_EVENT, handleSync);
      }
    };
  }, [fetchAsset, fileName]);

  const handleImageError = () => {
    setHasError(true);
    setUrl(fallbackUrl);
  };

  return {
    url,
    isLoading,
    hasError,
    refresh: fetchAsset,
    handleImageError,
  };
}

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { 
  Shield, 
  Activity, 
  FileText, 
  ChevronRight, 
  User, 
  Globe, 
  Clock, 
  LogOut, 
  Search,
  Filter,
  Trash2,
  MoreVertical,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Fingerprint,
  Target,
  ShieldCheck,
  Network,
  Upload,
  Image as ImageIcon,
  Settings,
  Info,
  Layers,
  Star,
  Plus,
  TrendingUp,
  Landmark,
  Wallet,
  Briefcase,
  Download,
  Database,
  Lock,
  Copy,
  ExternalLink,
  RefreshCw,
  Check,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger 
} from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import placeholderData from '@/app/lib/placeholder-images.json';
import { 
  useBrandAsset, 
  listSupabaseAssets, 
  uploadSupabaseAsset, 
  deleteSupabaseAsset, 
  StorageAssetFile,
  getStorageAssetUrl 
} from '@/lib/brand-assets';

type CaseRecord = {
  id: string;
  case_id: string;
  case_type: string;
  user_name: string;
  user_email: string;
  user_phone?: string;
  user_country: string;
  risk_level: string;
  evidence_integrity: string;
  status: string;
  created_at: string;
  description: string;
  result_data: any;
  form_values: any;
  evidence_files: {name: string, path: string, url: string}[];
  best_contact_time?: string;
  preferred_method?: string;
};

type SuccessStory = {
  id: string;
  case_id: string;
  case_type: string;
  amount: string;
  status: string;
  challenge: string;
  focus: string;
  outcome: string;
  narrative: string;
  icon_name: string;
};

/**
 * InstitutionalDecryptor - Clinical state wrapper for sensitive case file expansion.
 */
function InstitutionalDecryptor({ children, caseId, label = "Case File" }: { children: React.ReactNode, caseId?: string, label?: string }) {
  const [state, setState] = useState<'decrypting' | 'open'>('decrypting');

  useEffect(() => {
    const timer = setTimeout(() => setState('open'), 450);
    return () => clearTimeout(timer);
  }, []);

  if (state === 'decrypting') {
    return (
      <div className="h-[400px] flex flex-col items-center justify-center space-y-6">
        <div className="flex items-center gap-3">
           <div className="w-2 h-2 bg-primary animate-breathing" />
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{label} {caseId && `: ${caseId}`}</span>
        </div>
        <div className="text-2xl font-headline font-bold uppercase tracking-tighter animate-pulse text-white">
           Decrypting Access Keys...
        </div>
        <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden">
           <div className="absolute top-0 h-full w-24 bg-primary animate-stream-pulse" />
        </div>
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground">Authorized Access Only</p>
      </div>
    );
  }

  return <div className="animate-in fade-in duration-500">{children}</div>;
}

export default function AdminDashboard() {
  const [cases, setCases] = useState<CaseRecord[]>([]);
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Logo State & Real-time Brand Sync Hook
  const { url: dynamicLogoUrl } = useBrandAsset('logo.png');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  // Hero Background State
  const [heroBgFile, setHeroBgFile] = useState<File | null>(null);
  const [heroBgPreview, setHeroBgPreview] = useState<string | null>(null);
  const [uploadingHeroBg, setUploadingHeroBg] = useState(false);
  const [heroBgUrl, setHeroBgUrl] = useState<string | null>(null);

  // Security Seal & Social OpenGraph State
  const [sealFile, setSealFile] = useState<File | null>(null);
  const [sealPreview, setSealPreview] = useState<string | null>(null);
  const [uploadingSeal, setUploadingSeal] = useState(false);
  const [sealUrl, setSealUrl] = useState<string | null>(null);

  const [ogFile, setOgFile] = useState<File | null>(null);
  const [ogPreview, setOgPreview] = useState<string | null>(null);
  const [uploadingOg, setUploadingOg] = useState(false);
  const [ogUrl, setOgUrl] = useState<string | null>(null);

  // Unified Brand & Assets Manager State
  const [isAssetManagerOpen, setIsAssetManagerOpen] = useState(false);
  const [storageAssets, setStorageAssets] = useState<StorageAssetFile[]>([]);
  const [loadingAssets, setLoadingAssets] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [assetSearchQuery, setAssetSearchQuery] = useState('');
  const [activeAssetTab, setActiveAssetTab] = useState('branding');

  // Custom Asset Upload State
  const [customName, setCustomName] = useState('');
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [customPreview, setCustomPreview] = useState<string | null>(null);
  const [uploadingCustom, setUploadingCustom] = useState(false);
  
  // Success Story Form State
  const [isStoryDialogOpen, setIsStoryDialogOpen] = useState(false);
  const [storyForm, setStoryForm] = useState<Partial<SuccessStory>>({
    case_id: '',
    case_type: '',
    amount: '',
    status: 'Resolved',
    challenge: '',
    focus: '',
    outcome: '',
    narrative: '',
    icon_name: 'TrendingUp'
  });

  // Media Library State
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);
  const [assetFile, setAssetFile] = useState<File | null>(null);
  const [assetPreview, setAssetPreview] = useState<string | null>(null);
  const [uploadingAsset, setUploadingAsset] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    initDashboard();
    fetchLogo();
    fetchHeroBg();
    fetchSeal();
    fetchOg();
  }, []);

  /**
   * Initialise dashboard: verify auth first, then fetch data with the
   * authenticated session so Supabase RLS (TO authenticated) policies are met.
   */
  const initDashboard = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
      return;
    }
    // Session confirmed — RLS-protected SELECT will now succeed
    fetchCases();
    fetchStories();
  };

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
    }
  };

  const fetchLogo = async () => {
    try {
      const { data } = supabase.storage
        .from('assets')
        .getPublicUrl('logo.png');
      
      if (data?.publicUrl) {
        setLogoUrl(`${data.publicUrl}?t=${Date.now()}`);
      }
    } catch (error) {
      setLogoUrl(null);
    }
  };

  const fetchHeroBg = async () => {
    try {
      const { data } = supabase.storage
        .from('assets')
        .getPublicUrl('hero-bg.png');
      
      if (data?.publicUrl) {
        setHeroBgUrl(`${data.publicUrl}?t=${Date.now()}`);
      }
    } catch (error) {
      setHeroBgUrl(null);
    }
  };

  const fetchSeal = async () => {
    try {
      const { data } = supabase.storage
        .from('assets')
        .getPublicUrl('seal.png');
      
      if (data?.publicUrl) {
        setSealUrl(`${data.publicUrl}?t=${Date.now()}`);
      }
    } catch {
      setSealUrl(null);
    }
  };

  const fetchOg = async () => {
    try {
      const { data } = supabase.storage
        .from('assets')
        .getPublicUrl('og-image.png');
      
      if (data?.publicUrl) {
        setOgUrl(`${data.publicUrl}?t=${Date.now()}`);
      }
    } catch {
      setOgUrl(null);
    }
  };

  const fetchCases = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('cases')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching cases:', error);
    } else {
      setCases(data || []);
    }
    setLoading(false);
  };

  const fetchStories = async () => {
    const { data, error } = await supabase
      .from('success_stories')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching stories:', error);
    } else {
      setStories(data || []);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  const deleteCase = async (id: string) => {
    if (confirm('Permanently delete this forensic record?')) {
      const { error } = await supabase.from('cases').delete().eq('id', id);
      if (!error) {
        setCases(cases.filter(c => c.id !== id));
      }
    }
  };

  const deleteStory = async (id: string) => {
    if (confirm('Delete this case insight?')) {
      const { error } = await supabase.from('success_stories').delete().eq('id', id);
      if (!error) {
        setStories(stories.filter(s => s.id !== id));
        toast({ title: "Insight Removed" });
      }
    }
  };

  const saveStory = async () => {
    if (!storyForm.case_id || !storyForm.challenge) return;

    try {
      const { error } = await supabase
        .from('success_stories')
        .insert([storyForm]);

      if (error) throw error;

      toast({ title: "Resolution Registered", description: "The clinical case insight is now live." });
      setIsStoryDialogOpen(false);
      setStoryForm({
        case_id: '',
        case_type: '',
        amount: '',
        status: 'Resolved',
        challenge: '',
        focus: '',
        outcome: '',
        narrative: '',
        icon_name: 'TrendingUp'
      });
      fetchStories();
    } catch (error: any) {
      toast({ variant: 'destructive', title: "Save Failed", description: error.message });
    }
  };

  const loadStorageAssets = async () => {
    setLoadingAssets(true);
    try {
      const list = await listSupabaseAssets();
      setStorageAssets(list);
    } catch (e) {
      console.error('Error listing assets from Supabase:', e);
    } finally {
      setLoadingAssets(false);
    }
  };

  const handleCopyUrl = (url: string) => {
    if (!url) return;
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2500);
    toast({
      title: "Public CDN URL Copied",
      description: "Direct Supabase storage public link copied to clipboard.",
    });
  };

  const handleDeleteStorageAsset = async (fileName: string) => {
    if (!confirm(`Are you sure you want to permanently delete "${fileName}" from Supabase Storage? This will remove it from all synced website sections.`)) return;
    const res = await deleteSupabaseAsset(fileName);
    if (res.success) {
      toast({
        title: "Asset Removed",
        description: `"${fileName}" was removed from Supabase storage and website components were notified.`,
      });
      loadStorageAssets();
      if (fileName === 'logo.png') fetchLogo();
      if (fileName === 'hero-bg.png') fetchHeroBg();
      if (fileName === 'seal.png') fetchSeal();
      if (fileName === 'og-image.png') fetchOg();
    } else {
      toast({
        variant: "destructive",
        title: "Delete Failed",
        description: res.error,
      });
    }
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes || bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const uploadLogo = async () => {
    if (!logoFile) return;
    setUploadingLogo(true);
    const res = await uploadSupabaseAsset('logo.png', logoFile);
    setUploadingLogo(false);

    if (res.success) {
      toast({
        title: "Platform Logo Synchronized",
        description: "The website logo has been uploaded to Supabase Storage and synced with Header, Footer, Admin Login, and Command Center.",
      });
      setLogoFile(null);
      setLogoPreview(null);
      fetchLogo();
      loadStorageAssets();
    } else {
      toast({
        variant: "destructive",
        title: "Upload Error",
        description: res.error || "Ensure 'assets' bucket exists and is Public.",
      });
    }
  };

  const handleHeroBgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setHeroBgFile(file);
      setHeroBgPreview(URL.createObjectURL(file));
    }
  };

  const uploadHeroBg = async () => {
    if (!heroBgFile) return;
    setUploadingHeroBg(true);
    const res = await uploadSupabaseAsset('hero-bg.png', heroBgFile);
    setUploadingHeroBg(false);

    if (res.success) {
      toast({
        title: "Hero Background Synchronized",
        description: "The hero background has been uploaded to Supabase Storage and synced with the homepage Hero section.",
      });
      setHeroBgFile(null);
      setHeroBgPreview(null);
      fetchHeroBg();
      loadStorageAssets();
    } else {
      toast({
        variant: "destructive",
        title: "Upload Error",
        description: res.error,
      });
    }
  };

  const handleSealChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSealFile(file);
      setSealPreview(URL.createObjectURL(file));
    }
  };

  const uploadSeal = async () => {
    if (!sealFile) return;
    setUploadingSeal(true);
    const res = await uploadSupabaseAsset('seal.png', sealFile);
    setUploadingSeal(false);

    if (res.success) {
      toast({
        title: "Security Seal Synchronized",
        description: "Security Trust Seal uploaded to Supabase Storage and synced with trust badges.",
      });
      setSealFile(null);
      setSealPreview(null);
      fetchSeal();
      loadStorageAssets();
    } else {
      toast({
        variant: "destructive",
        title: "Upload Error",
        description: res.error,
      });
    }
  };

  const handleOgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setOgFile(file);
      setOgPreview(URL.createObjectURL(file));
    }
  };

  const uploadOg = async () => {
    if (!ogFile) return;
    setUploadingOg(true);
    const res = await uploadSupabaseAsset('og-image.png', ogFile);
    setUploadingOg(false);

    if (res.success) {
      toast({
        title: "Social Banner Synchronized",
        description: "OpenGraph social preview banner uploaded to Supabase Storage.",
      });
      setOgFile(null);
      setOgPreview(null);
      fetchOg();
      loadStorageAssets();
    } else {
      toast({
        variant: "destructive",
        title: "Upload Error",
        description: res.error,
      });
    }
  };

  const handleAssetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAssetFile(file);
      setAssetPreview(URL.createObjectURL(file));
    }
  };

  const uploadAsset = async () => {
    if (!assetFile || !selectedAssetId) return;
    setUploadingAsset(true);
    const fileName = `${selectedAssetId}.png`;
    const res = await uploadSupabaseAsset(fileName, assetFile);
    setUploadingAsset(false);

    if (res.success) {
      toast({
        title: "Media Synchronized",
        description: `The asset '${selectedAssetId}' has been uploaded to Supabase Storage and synced across the website.`,
      });
      setAssetFile(null);
      setAssetPreview(null);
      setSelectedAssetId(null);
      loadStorageAssets();
    } else {
      toast({
        variant: "destructive",
        title: "Media Error",
        description: res.error,
      });
    }
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCustomFile(file);
      setCustomPreview(URL.createObjectURL(file));
      if (!customName) {
        setCustomName(file.name);
      }
    }
  };

  const uploadCustomAsset = async () => {
    if (!customFile || !customName.trim()) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please specify both a target file and filename.",
      });
      return;
    }
    setUploadingCustom(true);
    const sanitized = customName.trim().replace(/[^a-zA-Z0-9._-]/g, '-');
    const finalName = sanitized.includes('.') ? sanitized : `${sanitized}.png`;
    const res = await uploadSupabaseAsset(finalName, customFile);
    setUploadingCustom(false);

    if (res.success) {
      toast({
        title: "Custom Asset Synchronized",
        description: `Successfully uploaded '${finalName}' to Supabase Storage and broadcast to website components.`,
      });
      setCustomFile(null);
      setCustomPreview(null);
      setCustomName('');
      loadStorageAssets();
    } else {
      toast({
        variant: "destructive",
        title: "Upload Error",
        description: res.error,
      });
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <nav className="h-20 border-b border-white/5 bg-card/50 backdrop-blur-md flex items-center justify-between px-4 md:px-8 sticky top-0 z-50">
        <div className="flex items-center gap-3 md:gap-4">
          <div className={cn(
            "w-10 h-10 md:w-12 md:h-12 rounded flex items-center justify-center transition-all overflow-hidden",
            (dynamicLogoUrl || logoUrl) ? "bg-transparent p-0.5" : "bg-primary shadow-lg"
          )}>
            {(dynamicLogoUrl || logoUrl) ? (
              <img 
                src={dynamicLogoUrl || logoUrl || ''} 
                alt="Logo" 
                className="w-full h-full object-contain"
                onError={() => setLogoUrl(null)}
              />
            ) : (
              <Shield className="text-white w-6 h-6 md:w-7 md:h-7" />
            )}
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg md:text-xl font-headline font-bold tracking-tight uppercase">Command Center</h1>
            <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-primary">Forensic Management Engine</p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden h-9 w-9 p-0 border-white/5">
                <Settings className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-white/10 w-56">
               <DropdownMenuItem onClick={() => setIsStoryDialogOpen(true)} className="uppercase text-[10px] font-black tracking-widest cursor-pointer">
                  <Star className="w-3.5 h-3.5 mr-2" /> Resolutions
               </DropdownMenuItem>
               <DropdownMenuItem 
                 onClick={() => {
                   setIsAssetManagerOpen(true);
                   loadStorageAssets();
                 }} 
                 className="uppercase text-[10px] font-black tracking-widest cursor-pointer text-primary"
               >
                  <Sparkles className="w-3.5 h-3.5 mr-2" /> Brand & Assets Sync
               </DropdownMenuItem>
               <DropdownMenuItem onClick={handleLogout} className="text-destructive uppercase text-[10px] font-black tracking-widest cursor-pointer">
                  <LogOut className="w-3.5 h-3.5 mr-2" /> Logout
               </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="hidden lg:flex items-center gap-4">
            <Dialog open={isStoryDialogOpen} onOpenChange={setIsStoryDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="border-white/5 bg-white/5 uppercase text-[9px] font-black tracking-widest h-9">
                  <Star className="w-3.5 h-3.5 mr-2" /> Resolutions
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-card border-white/10 max-w-5xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl font-headline font-bold uppercase tracking-tight">Forensic Case Records</DialogTitle>
                  <DialogDescription className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Manage institutional case insights and technical outcomes</DialogDescription>
                </DialogHeader>
                
                <div className="py-6 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8 p-8 border border-primary/20 bg-primary/5">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2"><Plus className="w-4 h-4" /> Register New Insight</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-[8px] uppercase tracking-widest">Case Identifier</Label>
                          <Input placeholder="LRX-00000" className="bg-black/50 border-white/10" value={storyForm.case_id} onChange={e => setStoryForm({...storyForm, case_id: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[8px] uppercase tracking-widest">Division</Label>
                          <Input placeholder="Trading Fraud" className="bg-black/50 border-white/10" value={storyForm.case_type} onChange={e => setStoryForm({...storyForm, case_type: e.target.value})} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-[8px] uppercase tracking-widest">Value Resolved</Label>
                          <Input placeholder="$50,000" className="bg-black/50 border-white/10" value={storyForm.amount} onChange={e => setStoryForm({...storyForm, amount: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[8px] uppercase tracking-widest">Visual Class</Label>
                          <Select value={storyForm.icon_name} onValueChange={val => setStoryForm({...storyForm, icon_name: val})}>
                            <SelectTrigger className="bg-black/50 border-white/10">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="TrendingUp">Market/Forex</SelectItem>
                              <SelectItem value="Landmark">Institutional</SelectItem>
                              <SelectItem value="Wallet">Digital Asset/Crypto</SelectItem>
                              <SelectItem value="Briefcase">Employment</SelectItem>
                              <SelectItem value="Database">Intelligence</SelectItem>
                              <SelectItem value="Search">Forensics</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[8px] uppercase tracking-widest">Technical Challenge</Label>
                        <Input placeholder="e.g. Obfuscated fund movements" className="bg-black/50 border-white/10" value={storyForm.challenge} onChange={e => setStoryForm({...storyForm, challenge: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[8px] uppercase tracking-widest">Investigative Focus</Label>
                        <Input placeholder="e.g. Multi-chain cluster analysis" className="bg-black/50 border-white/10" value={storyForm.focus} onChange={e => setStoryForm({...storyForm, focus: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[8px] uppercase tracking-widest">Technical Outcome</Label>
                        <Input placeholder="e.g. Asset interdiction successful" className="bg-black/50 border-white/10" value={storyForm.outcome} onChange={e => setStoryForm({...storyForm, outcome: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[8px] uppercase tracking-widest">Summary Narrative</Label>
                        <Textarea placeholder="Clinical summary..." className="bg-black/50 border-white/10 min-h-[80px]" value={storyForm.narrative} onChange={e => setStoryForm({...storyForm, narrative: e.target.value})} />
                      </div>
                      <button onClick={saveStory} className="w-full bg-primary text-black font-black uppercase tracking-widest text-[10px] h-12 hover:bg-primary/90 transition-colors">Register Resolution</button>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Live Insights</h4>
                      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                        {stories.map(s => (
                          <div key={s.id} className="p-4 bg-white/5 border border-white/5 flex justify-between items-start group">
                            <div>
                              <p className="text-[9px] font-black text-primary uppercase">{s.case_id} | {s.case_type}</p>
                              <p className="text-[10px] font-bold text-white mt-1">{s.challenge}</p>
                              <p className="text-[8px] text-muted-foreground mt-2 line-clamp-1">{s.outcome}</p>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => deleteStory(s.id)} className="h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* UNIFIED SUPABASE BRAND & MEDIA ASSET SYNC CENTER */}
            <Dialog open={isAssetManagerOpen} onOpenChange={setIsAssetManagerOpen}>
              <DialogTrigger asChild>
                <Button 
                  onClick={() => {
                    setIsAssetManagerOpen(true);
                    loadStorageAssets();
                  }}
                  variant="outline" 
                  size="sm" 
                  className="border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-black uppercase text-[9px] font-black tracking-widest h-9 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-2" /> Brand & Assets Sync
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-card border-white/10 max-w-5xl max-h-[92vh] overflow-y-auto p-6 md:p-8">
                <DialogHeader className="border-b border-white/5 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <DialogTitle className="text-xl md:text-2xl font-headline font-bold uppercase tracking-tight flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" /> Brand & Storage Assets Sync Center
                      </DialogTitle>
                      <DialogDescription className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                        Upload to Supabase Storage bucket (<span className="text-primary font-bold">assets</span>) with real-time website synchronization
                      </DialogDescription>
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary text-[9px] uppercase tracking-widest hidden sm:inline-flex">
                      Bucket: assets (Public)
                    </Badge>
                  </div>
                </DialogHeader>

                <Tabs defaultValue="branding" value={activeAssetTab} onValueChange={setActiveAssetTab} className="mt-6">
                  <TabsList className="bg-white/5 border border-white/10 p-1 w-full justify-start overflow-x-auto h-auto flex-wrap">
                    <TabsTrigger value="branding" className="text-[9px] uppercase font-black tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black">
                      <ImageIcon className="w-3.5 h-3.5 mr-1.5" /> Core Brand Assets
                    </TabsTrigger>
                    <TabsTrigger value="team" className="text-[9px] uppercase font-black tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black">
                      <User className="w-3.5 h-3.5 mr-1.5" /> Personnel & Facilities
                    </TabsTrigger>
                    <TabsTrigger value="custom" className="text-[9px] uppercase font-black tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black">
                      <Upload className="w-3.5 h-3.5 mr-1.5" /> Custom File Uploader
                    </TabsTrigger>
                    <TabsTrigger 
                      value="explorer" 
                      onClick={loadStorageAssets}
                      className="text-[9px] uppercase font-black tracking-widest data-[state=active]:bg-primary data-[state=active]:text-black"
                    >
                      <Database className="w-3.5 h-3.5 mr-1.5" /> Storage Explorer ({storageAssets.length})
                    </TabsTrigger>
                  </TabsList>

                  {/* TAB 1: CORE BRAND ASSETS */}
                  <TabsContent value="branding" className="mt-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      
                      {/* Brand Logo Card */}
                      <Card className="glass-card border-white/10 p-6 flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex justify-between items-start mb-3">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                              <Shield className="w-3.5 h-3.5" /> Platform Logo (<code className="text-white">logo.png</code>)
                            </Label>
                            <Badge variant="outline" className="text-[8px] uppercase tracking-widest border-primary/20 text-primary">
                              Header / Footer / Login
                            </Badge>
                          </div>
                          <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-4">
                            High-resolution PNG or SVG logo displayed across the entire platform.
                          </p>
                          <div className="flex flex-col items-center justify-center p-6 border border-dashed border-white/10 bg-black/40 relative group cursor-pointer overflow-hidden min-h-[140px]">
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="absolute inset-0 opacity-0 cursor-pointer z-20"
                              onChange={handleLogoChange}
                            />
                            {logoPreview ? (
                              <img src={logoPreview} alt="Preview" className="h-16 w-auto object-contain mb-2" />
                            ) : (dynamicLogoUrl || logoUrl) ? (
                              <img src={dynamicLogoUrl || logoUrl || ''} alt="Current Logo" className="h-16 w-auto object-contain mb-2" />
                            ) : (
                              <Upload className="w-8 h-8 text-muted-foreground opacity-30 mb-2" />
                            )}
                            <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground text-center px-4">
                              {logoFile ? logoFile.name : 'Click or drop to replace logo'}
                            </p>
                          </div>
                        </div>
                        <Button 
                          onClick={uploadLogo} 
                          disabled={!logoFile || uploadingLogo}
                          size="sm"
                          className="w-full h-10 bg-primary text-black font-black uppercase tracking-widest premium-cta"
                        >
                          {uploadingLogo ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Upload className="w-4 h-4 mr-2" />}
                          Sync Platform Logo
                        </Button>
                      </Card>

                      {/* Hero Background Card */}
                      <Card className="glass-card border-white/10 p-6 flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex justify-between items-start mb-3">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                              <ImageIcon className="w-3.5 h-3.5" /> Hero Background (<code className="text-white">hero-bg.png</code>)
                            </Label>
                            <Badge variant="outline" className="text-[8px] uppercase tracking-widest border-primary/20 text-primary">
                              Homepage Hero
                            </Badge>
                          </div>
                          <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-4">
                            High-resolution atmospheric image rendered with dark forensic overlay on the main hero.
                          </p>
                          <div className="flex flex-col items-center justify-center p-6 border border-dashed border-white/10 bg-black/40 relative group cursor-pointer overflow-hidden min-h-[140px]">
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="absolute inset-0 opacity-0 cursor-pointer z-20"
                              onChange={handleHeroBgChange}
                            />
                            {heroBgPreview ? (
                              <img src={heroBgPreview} alt="Preview" className="h-20 w-full object-cover mb-2" />
                            ) : heroBgUrl ? (
                              <img src={heroBgUrl} alt="Current Hero BG" className="h-20 w-full object-cover opacity-60 mb-2" />
                            ) : (
                              <Upload className="w-8 h-8 text-muted-foreground opacity-30 mb-2" />
                            )}
                            <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground text-center px-4">
                              {heroBgFile ? heroBgFile.name : 'Click or drop to replace hero background'}
                            </p>
                          </div>
                        </div>
                        <Button 
                          onClick={uploadHeroBg} 
                          disabled={!heroBgFile || uploadingHeroBg}
                          size="sm"
                          className="w-full h-10 bg-primary text-black font-black uppercase tracking-widest premium-cta"
                        >
                          {uploadingHeroBg ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Upload className="w-4 h-4 mr-2" />}
                          Sync Hero Background
                        </Button>
                      </Card>

                      {/* Security Trust Seal */}
                      <Card className="glass-card border-white/10 p-6 flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex justify-between items-start mb-3">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                              <ShieldCheck className="w-3.5 h-3.5" /> Security Trust Seal (<code className="text-white">seal.png</code>)
                            </Label>
                            <Badge variant="outline" className="text-[8px] uppercase tracking-widest border-white/10">
                              Verification Crest
                            </Badge>
                          </div>
                          <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-4">
                            Cryptographic verification seal or official crest for institutional trust.
                          </p>
                          <div className="flex flex-col items-center justify-center p-6 border border-dashed border-white/10 bg-black/40 relative group cursor-pointer overflow-hidden min-h-[140px]">
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="absolute inset-0 opacity-0 cursor-pointer z-20"
                              onChange={handleSealChange}
                            />
                            {sealPreview ? (
                              <img src={sealPreview} alt="Preview" className="h-16 w-auto object-contain mb-2" />
                            ) : sealUrl ? (
                              <img src={sealUrl} alt="Current Seal" className="h-16 w-auto object-contain mb-2" />
                            ) : (
                              <ShieldCheck className="w-8 h-8 text-muted-foreground opacity-30 mb-2" />
                            )}
                            <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground text-center px-4">
                              {sealFile ? sealFile.name : 'Click or drop to replace seal'}
                            </p>
                          </div>
                        </div>
                        <Button 
                          onClick={uploadSeal} 
                          disabled={!sealFile || uploadingSeal}
                          size="sm"
                          className="w-full h-10 bg-primary text-black font-black uppercase tracking-widest premium-cta"
                        >
                          {uploadingSeal ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Upload className="w-4 h-4 mr-2" />}
                          Sync Security Seal
                        </Button>
                      </Card>

                      {/* Social OpenGraph Banner */}
                      <Card className="glass-card border-white/10 p-6 flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex justify-between items-start mb-3">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                              <Globe className="w-3.5 h-3.5" /> Social OG Banner (<code className="text-white">og-image.png</code>)
                            </Label>
                            <Badge variant="outline" className="text-[8px] uppercase tracking-widest border-white/10">
                              SEO & Social Share
                            </Badge>
                          </div>
                          <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-4">
                            1200x630 banner shown when links are shared on LinkedIn, X, Telegram, and WhatsApp.
                          </p>
                          <div className="flex flex-col items-center justify-center p-6 border border-dashed border-white/10 bg-black/40 relative group cursor-pointer overflow-hidden min-h-[140px]">
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="absolute inset-0 opacity-0 cursor-pointer z-20"
                              onChange={handleOgChange}
                            />
                            {ogPreview ? (
                              <img src={ogPreview} alt="Preview" className="h-20 w-full object-cover mb-2" />
                            ) : ogUrl ? (
                              <img src={ogUrl} alt="Current OG Banner" className="h-20 w-full object-cover mb-2" />
                            ) : (
                              <Globe className="w-8 h-8 text-muted-foreground opacity-30 mb-2" />
                            )}
                            <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground text-center px-4">
                              {ogFile ? ogFile.name : 'Click or drop to replace OG banner'}
                            </p>
                          </div>
                        </div>
                        <Button 
                          onClick={uploadOg} 
                          disabled={!ogFile || uploadingOg}
                          size="sm"
                          className="w-full h-10 bg-primary text-black font-black uppercase tracking-widest premium-cta"
                        >
                          {uploadingOg ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Upload className="w-4 h-4 mr-2" />}
                          Sync Social Banner
                        </Button>
                      </Card>

                    </div>
                  </TabsContent>

                  {/* TAB 2: PERSONNEL & FACILITIES */}
                  <TabsContent value="team" className="mt-6 space-y-6">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                      Select any forensic investigator or facility avatar below to upload and sync its high-resolution replacement.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                      {placeholderData.placeholderImages.map((asset) => (
                        <div 
                          key={asset.id}
                          onClick={() => setSelectedAssetId(asset.id)}
                          className={cn(
                            "p-3 border border-white/5 bg-white/5 cursor-pointer hover:border-primary/50 transition-all text-center space-y-2",
                            selectedAssetId === asset.id && "border-primary bg-primary/10 ring-1 ring-primary"
                          )}
                        >
                          <div className="aspect-square bg-black/50 flex items-center justify-center relative overflow-hidden">
                             <img 
                               src={`https://rehqxfabupmrwnofzfke.supabase.co/storage/v1/object/public/assets/${asset.id}.png`} 
                               alt={asset.id} 
                               className="object-cover w-full h-full"
                               onError={(e) => {
                                 (e.target as HTMLElement).style.display = 'none';
                               }}
                             />
                             <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                                <User className="w-6 h-6 text-white/20" />
                             </div>
                          </div>
                          <p className="text-[8px] font-black uppercase tracking-wider truncate">{asset.id}</p>
                        </div>
                      ))}
                    </div>

                    {selectedAssetId && (
                      <div className="p-6 border border-primary/20 bg-primary/5 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex justify-between items-center">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                            <Upload className="w-3.5 h-3.5" /> Upload Replacement for: <code className="text-white bg-black/60 px-2 py-0.5">{selectedAssetId}.png</code>
                          </h4>
                          <Button variant="ghost" size="sm" onClick={() => setSelectedAssetId(null)} className="h-6 text-[8px] uppercase font-bold tracking-widest">Cancel</Button>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center p-8 border border-dashed border-primary/20 bg-black/40 relative group cursor-pointer">
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="absolute inset-0 opacity-0 cursor-pointer z-20"
                            onChange={handleAssetChange}
                          />
                          {assetPreview ? (
                            <img src={assetPreview} alt="Preview" className="h-28 w-auto object-contain mb-3" />
                          ) : (
                            <Upload className="w-8 h-8 text-primary opacity-40 mb-3" />
                          )}
                          <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                            {assetFile ? assetFile.name : `Select high-resolution media for ${selectedAssetId}`}
                          </p>
                        </div>

                        <Button 
                          onClick={uploadAsset} 
                          disabled={!assetFile || uploadingAsset}
                          className="w-full h-11 bg-primary text-black font-black uppercase tracking-widest premium-cta"
                        >
                          {uploadingAsset ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <ShieldCheck className="w-4 h-4 mr-2" />}
                          Sync {selectedAssetId} Media Asset
                        </Button>
                      </div>
                    )}
                  </TabsContent>

                  {/* TAB 3: CUSTOM FILE UPLOADER */}
                  <TabsContent value="custom" className="mt-6 space-y-6">
                    <Card className="glass-card border-white/10 p-6 md:p-8 space-y-6">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-tight text-white flex items-center gap-2">
                          <Upload className="w-4 h-4 text-primary" /> Upload Arbitrary Asset to Supabase Storage
                        </h4>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                          Upload any custom image, report graphic, badge, or document to the public <code className="text-primary font-bold">assets</code> bucket.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label className="text-[9px] uppercase tracking-widest">Target Storage Filename</Label>
                            <Input 
                              placeholder="e.g. proof-audit-report.png" 
                              className="bg-black/50 border-white/10"
                              value={customName}
                              onChange={(e) => setCustomName(e.target.value)}
                            />
                            <p className="text-[8px] text-muted-foreground uppercase tracking-wider">
                              Will be stored in Supabase as: <code>{customName.trim() || 'filename.png'}</code>
                            </p>
                          </div>

                          <div className="p-4 bg-white/5 border border-white/5 space-y-2">
                            <p className="text-[9px] font-black uppercase tracking-widest text-primary flex items-center gap-1.5">
                              <Info className="w-3.5 h-3.5" /> Automatic Broadcasting
                            </p>
                            <p className="text-[8px] text-muted-foreground uppercase tracking-widest leading-relaxed">
                              Whenever an asset is uploaded, the website automatically broadcasts a cache-busting notification to ensure instant presentation without redeploying.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex flex-col items-center justify-center p-8 border border-dashed border-white/10 bg-black/40 relative group cursor-pointer min-h-[160px]">
                            <input 
                              type="file" 
                              accept="image/*,.pdf,.svg" 
                              className="absolute inset-0 opacity-0 cursor-pointer z-20"
                              onChange={handleCustomChange}
                            />
                            {customPreview ? (
                              <img src={customPreview} alt="Preview" className="h-24 w-auto object-contain mb-3" />
                            ) : (
                              <Upload className="w-8 h-8 text-muted-foreground opacity-30 mb-3" />
                            )}
                            <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground text-center">
                              {customFile ? customFile.name : 'Select or drop any file here'}
                            </p>
                          </div>

                          <Button 
                            onClick={uploadCustomAsset} 
                            disabled={!customFile || !customName.trim() || uploadingCustom}
                            className="w-full h-11 bg-primary text-black font-black uppercase tracking-widest premium-cta"
                          >
                            {uploadingCustom ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Upload className="w-4 h-4 mr-2" />}
                            Upload & Synchronize Asset
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  {/* TAB 4: SUPABASE STORAGE EXPLORER */}
                  <TabsContent value="explorer" className="mt-6 space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-4">
                      <div className="flex items-center gap-3">
                        <Input 
                          placeholder="Filter assets by name..." 
                          className="bg-black/50 border-white/10 w-64 h-9 text-xs"
                          value={assetSearchQuery}
                          onChange={(e) => setAssetSearchQuery(e.target.value)}
                        />
                        <Button 
                          onClick={loadStorageAssets} 
                          variant="outline" 
                          size="sm" 
                          className="border-white/10 bg-white/5 h-9 uppercase text-[9px] font-black tracking-widest"
                          disabled={loadingAssets}
                        >
                          <RefreshCw className={cn("w-3.5 h-3.5 mr-1.5", loadingAssets && "animate-spin")} />
                          Refresh List
                        </Button>
                      </div>
                      <Badge variant="outline" className="text-[9px] uppercase tracking-widest border-primary/20 text-primary">
                        {storageAssets.length} Total Files in Bucket
                      </Badge>
                    </div>

                    {loadingAssets ? (
                      <div className="py-16 text-center space-y-4">
                        <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                          Querying Supabase Storage API...
                        </p>
                      </div>
                    ) : storageAssets.length === 0 ? (
                      <div className="py-16 text-center space-y-4 border border-dashed border-white/10">
                        <Database className="w-10 h-10 text-muted-foreground/30 mx-auto" />
                        <p className="text-xs uppercase font-bold text-white tracking-widest">No assets found in Supabase 'assets' bucket</p>
                        <p className="text-[9px] text-muted-foreground uppercase tracking-widest max-w-md mx-auto">
                          Upload your logo or brand assets from the Core Brand or Custom Uploader tabs to populate the live bucket.
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[550px] overflow-y-auto pr-1">
                        {storageAssets
                          .filter(a => a.name.toLowerCase().includes(assetSearchQuery.toLowerCase()))
                          .map((asset) => (
                            <div 
                              key={asset.name} 
                              className="p-3 border border-white/5 bg-white/5 hover:border-primary/30 transition-all flex flex-col justify-between space-y-3 group"
                            >
                              <div className="aspect-video bg-black/50 relative overflow-hidden flex items-center justify-center">
                                <img 
                                  src={asset.publicUrl} 
                                  alt={asset.name} 
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    (e.target as HTMLElement).style.display = 'none';
                                  }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                                  <ImageIcon className="w-6 h-6 text-white/10" />
                                </div>
                              </div>

                              <div>
                                <p className="text-[10px] font-bold text-white truncate" title={asset.name}>
                                  {asset.name}
                                </p>
                                <div className="flex justify-between items-center text-[8px] text-muted-foreground uppercase tracking-wider mt-1">
                                  <span>{formatFileSize(asset.metadata?.size)}</span>
                                  {asset.updated_at && (
                                    <span>{new Date(asset.updated_at).toLocaleDateString()}</span>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-1.5 pt-2 border-t border-white/5">
                                <Button 
                                  onClick={() => handleCopyUrl(asset.publicUrl)}
                                  variant="ghost" 
                                  size="sm" 
                                  className="flex-1 h-7 text-[8px] font-black uppercase tracking-widest bg-white/5 hover:bg-primary hover:text-black"
                                >
                                  {copiedUrl === asset.publicUrl ? (
                                    <>
                                      <Check className="w-3 h-3 mr-1 text-green-400" /> Copied
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3 mr-1" /> Copy URL
                                    </>
                                  )}
                                </Button>
                                <a 
                                  href={asset.publicUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="h-7 w-7 inline-flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white"
                                  title="Open in new tab"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                                <Button 
                                  onClick={() => handleDeleteStorageAsset(asset.name)}
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                  title="Delete asset"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>

            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground hover:text-destructive">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="p-4 md:p-8 max-w-[1600px] mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: 'Total Investigations', value: cases.length, icon: FileText },
            { label: 'Critical Risk Cases', value: cases.filter(c => c.risk_level === 'Critical').length, icon: AlertCircle, color: 'text-destructive' },
            { label: 'High Trust Assets', value: cases.filter(c => c.evidence_integrity === 'Substantial').length, icon: Shield, color: 'text-primary' },
            { label: 'Pending Verification', value: cases.filter(c => c.status === 'Review Pending').length, icon: Clock, color: 'text-secondary' },
          ].map((stat, i) => (
            <Card key={i} className="glass-card border-white/5 hover:border-primary/20 transition-all p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded">
                  <stat.icon className={`w-5 h-5 ${stat.color || 'text-muted-foreground'}`} />
                </div>
                <Badge variant="outline" className="border-white/10 text-[9px] uppercase tracking-widest">Live</Badge>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{stat.label}</p>
              <h3 className="text-2xl md:text-3xl font-headline font-bold">{stat.value}</h3>
            </Card>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              placeholder="Search Case ID or Participant..."
              className="w-full h-12 bg-card/50 border border-white/5 rounded-none pl-12 pr-4 text-sm focus:border-primary/50 outline-none transition-colors"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button variant="outline" className="flex-1 md:flex-none h-12 border-white/5 bg-card/50 uppercase text-[10px] font-black tracking-widest">
              <Filter className="w-3.5 h-3.5 mr-2" /> Filters
            </Button>
            <Button onClick={fetchCases} variant="outline" className="flex-1 md:flex-none h-12 border-white/5 bg-card/50 uppercase text-[10px] font-black tracking-widest">
              Refresh Node
            </Button>
          </div>
        </div>

        <Card className="glass-card border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="hover:bg-transparent border-white/5">
                  <TableHead className="text-[10px] font-black uppercase tracking-widest py-6 px-4 md:px-8">Case Identity</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest">Participant</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest">Category</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest text-center">Risk Factor</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest text-center">Status</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest text-right px-4 md:px-8">Operation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-64 text-center">
                      <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary mb-4" />
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Synchronizing Records...</p>
                    </TableCell>
                  </TableRow>
                ) : cases.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-64 text-center">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">No Investigative Records Found</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  cases.map((c) => (
                    <TableRow key={c.id} className="border-white/5 hover:bg-white/[0.02] group transition-colors">
                      <TableCell className="py-4 md:py-6 px-4 md:px-8 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <Fingerprint className="w-4 h-4 text-primary shrink-0" />
                          <div>
                            <p className="font-bold text-sm text-white">{c.case_id}</p>
                            <p className="text-[9px] text-muted-foreground uppercase tracking-widest">
                              {new Date(c.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <User className="w-3.5 h-3.5 opacity-50 shrink-0" />
                          <div>
                            <p className="text-xs font-medium text-foreground">{c.user_name}</p>
                            <p className="text-[10px] text-muted-foreground">{c.user_email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <Badge variant="outline" className="border-white/10 text-[9px] font-black uppercase tracking-widest bg-white/5">
                          {c.case_type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center whitespace-nowrap">
                        <div className="inline-flex items-center gap-2">
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            c.risk_level === 'Critical' ? 'bg-destructive animate-pulse' : 
                            c.risk_level === 'High' ? 'bg-primary/70' : 'bg-primary'
                          )} />
                          <span className={cn(
                            "text-[10px] font-black uppercase tracking-widest",
                            c.risk_level === 'Critical' ? 'text-destructive' : 'text-foreground'
                          )}>{c.risk_level}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center whitespace-nowrap">
                        <Badge className="bg-primary/10 text-primary border-primary/20 text-[9px] uppercase tracking-widest">
                          {c.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right px-4 md:px-8 whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" className="h-9 border-white/5 bg-white/5 hover:bg-primary hover:text-black uppercase text-[9px] font-black tracking-widest">
                                Review
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card border-white/10 p-0">
                              <DialogTitle className="sr-only">Investigation Brief #{c.case_id}</DialogTitle>
                              <DialogDescription className="sr-only">Detailed forensic intake data for participant {c.user_name}.</DialogDescription>
                              <InstitutionalDecryptor caseId={c.case_id} label="Investigation Brief">
                                <DialogHeader className="p-6 md:p-8 border-b border-white/5 bg-card/50">
                                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
                                    <div className="flex items-center gap-4">
                                      <div className="p-3 bg-primary/10 rounded">
                                        <FileText className="w-6 h-6 text-primary" />
                                      </div>
                                      <div>
                                        <div className="text-2xl font-headline font-bold uppercase tracking-tight">Investigation Brief</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-primary">Case #{c.case_id}</div>
                                      </div>
                                    </div>
                                    <Badge className="bg-primary text-black uppercase tracking-widest text-[10px] py-1.5 px-4">{c.status}</Badge>
                                  </div>
                                </DialogHeader>
                                <div className="p-6 md:p-8 space-y-8 md:space-y-12">
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                    <div className="space-y-4">
                                      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2"><User className="w-3.5 h-3.5" /> Participant Details</h4>
                                      <div className="p-6 bg-white/5 border border-white/5 space-y-3">
                                        <div><p className="text-[9px] text-muted-foreground uppercase">Full Name</p><p className="text-sm font-bold">{c.user_name}</p></div>
                                        <div><p className="text-[9px] text-muted-foreground uppercase">Email</p><p className="text-sm font-bold">{c.user_email}</p></div>
                                        <div><p className="text-[9px] text-muted-foreground uppercase">Phone</p><p className="text-sm font-bold">{c.user_phone}</p></div>
                                        <div><p className="text-[9px] text-muted-foreground uppercase">Location</p><p className="text-sm font-bold">{c.user_country}</p></div>
                                      </div>
                                    </div>
                                    <div className="space-y-4">
                                      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2"><Activity className="w-3.5 h-3.5" /> Intake Metrics</h4>
                                      <div className="p-6 bg-white/5 border border-white/5 space-y-3">
                                        <div><p className="text-[9px] text-muted-foreground uppercase">Risk Factor</p><p className="text-sm font-bold uppercase text-primary">{c.risk_level}</p></div>
                                        <div><p className="text-[9px] text-muted-foreground uppercase">Evidence Status</p><p className="text-sm font-bold uppercase">{c.evidence_integrity}</p></div>
                                        <div><p className="text-[9px] text-muted-foreground uppercase">Preferred Method</p><p className="text-sm font-bold uppercase">{c.preferred_method} ({c.best_contact_time})</p></div>
                                      </div>
                                    </div>
                                    <div className="space-y-4">
                                      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2"><Target className="w-3.5 h-3.5" /> Platform Data</h4>
                                      <div className="p-6 bg-white/5 border border-white/5 space-y-3">
                                        {Object.entries(c.form_values || {}).map(([key, val]: any) => (
                                          <div key={key}>
                                            <p className="text-[9px] text-muted-foreground uppercase">{key.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-sm font-bold">{val}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2"><Search className="w-3.5 h-3.5" /> Technical Narrative</h4>
                                      <div className="p-6 bg-card border border-white/10 italic text-sm text-foreground/80 leading-relaxed border-l-2 border-l-primary">
                                        "{c.description}"
                                      </div>
                                    </div>
                                    <div className="space-y-4">
                                      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" /> Encrypted Evidence</h4>
                                      <div className="grid gap-2">
                                        {c.evidence_files && c.evidence_files.length > 0 ? (
                                          c.evidence_files.map((file, i) => (
                                            <a 
                                              key={i} 
                                              href={file.url} 
                                              target="_blank" 
                                              rel="noopener noreferrer"
                                              className="flex items-center justify-between p-3 bg-white/5 border border-white/5 hover:border-primary/50 transition-colors group"
                                            >
                                              <div className="flex items-center gap-3 min-w-0">
                                                <FileText className="w-4 h-4 text-primary shrink-0" />
                                                <span className="text-[11px] font-bold uppercase tracking-tight truncate">{file.name}</span>
                                              </div>
                                              <Download className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary shrink-0" />
                                            </a>
                                          ))
                                        ) : (
                                          <div className="p-4 border border-dashed border-white/5 text-center">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">No Evidence Files Uploaded</p>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                  {c.result_data?.preliminaryCaseFindings && (
                                    <div className="space-y-6">
                                      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" /> AI Forensic Findings</h4>
                                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {Object.entries(c.result_data.preliminaryCaseFindings).map(([key, val]: any) => (
                                          <div key={key} className="p-4 bg-white/5 border border-white/5">
                                            <p className="text-[8px] text-muted-foreground uppercase mb-1">{key.replace(/([A-Z])/g, ' $1')}</p>
                                            <p className="text-[11px] font-bold uppercase">{val}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {c.result_data?.investigativeFocusAreas && (
                                    <div className="space-y-6">
                                      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2"><Network className="w-3.5 h-3.5" /> Suggested Roadmap</h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {c.result_data.investigativeFocusAreas.map((area: any, i: number) => (
                                          <div key={i} className="p-6 bg-white/5 border border-white/5 space-y-3">
                                            <h5 className="text-[11px] font-black uppercase tracking-widest text-primary">{area.categoryName}</h5>
                                            <p className="text-[10px] text-muted-foreground leading-relaxed uppercase">{area.description}</p>
                                            <ul className="space-y-1 pt-2 border-t border-white/5">
                                              {area.specificItems.map((item: string, j: number) => (
                                                <li key={j} className="text-[9px] font-bold text-foreground/60 flex items-center gap-2">
                                                  <ChevronRight className="w-3 h-3 text-primary shrink-0" /> {item}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </InstitutionalDecryptor>
                            </DialogContent>
                          </Dialog>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:bg-white/5">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-card border-white/10 shadow-2xl w-48">
                              <DropdownMenuItem className="py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-primary/10 hover:text-primary">
                                <Activity className="w-3.5 h-3.5 mr-2" /> Mark Investigating
                              </DropdownMenuItem>
                              <DropdownMenuItem className="py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-emerald-500/10 hover:text-emerald-500">
                                <CheckCircle2 className="w-3.5 h-3.5 mr-2" /> Mark Resolved
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => deleteCase(c.id)}
                                className="py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-destructive/10 hover:text-destructive"
                              >
                                <Trash2 className="w-3.5 h-3.5 mr-2" /> Delete Record
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>

      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/[0.01] rounded-full blur-[120px]" />
      </div>
    </main>
  );
}

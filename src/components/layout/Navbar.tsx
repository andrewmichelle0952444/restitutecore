'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';
import { useBrandAsset } from '@/lib/brand-assets';

import { SERVICE_CATEGORIES } from '@/lib/services-data';

const navLinks = [
  { href: "/services", label: "All Services" },
  { href: "/#process", label: "How It Works" },
  { href: "/#approach", label: "Our Approach" },
  { href: "/#why-us", label: "Why RESTITUTECORE" },
  { href: "/#resources", label: "Resources & FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { url: logoUrl, handleImageError } = useBrandAsset('logo.png');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-white/[0.06]">
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <div className={cn(
            "w-9 h-9 md:w-12 md:h-12 rounded-sm flex items-center justify-center transition-all overflow-hidden",
            logoUrl ? "bg-transparent p-0.5" : "bg-primary text-primary-foreground"
          )}>
            {logoUrl ? (
              <img 
                src={logoUrl} 
                alt="RESTITUTECORE Logo" 
                className="w-full h-full object-contain"
                onError={handleImageError}
              />
            ) : (
              <Shield className="text-primary-foreground w-5 h-5 md:w-6 md:h-6" />
            )}
          </div>
          <span className="text-lg md:text-xl font-headline font-bold tracking-wider uppercase text-[#F5F0E7]">
            RESTITUTECORE<span className="text-primary font-serif">.</span>
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto mr-8">
          {mounted && (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#F5F0E7]/80 hover:text-primary transition-colors outline-none py-2">
                Services <ChevronDown className="w-3 h-3 opacity-60 text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[680px] bg-[#16171A] border-white/10 shadow-2xl p-6 rounded-md">
                <div className="grid grid-cols-3 gap-6">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="space-y-3">
                      <div className="border-b border-white/[0.08] pb-2">
                        <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] block">
                          {cat.badge}
                        </span>
                        <p className="text-xs font-headline font-bold text-white uppercase tracking-tight line-clamp-1 mt-0.5">
                          {cat.title.replace(/^Category [ABC] — /, '')}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        {cat.services.map((srv) => (
                          <DropdownMenuItem key={srv.slug} asChild className="p-0 focus:bg-transparent">
                            <Link 
                              href={`/services/${srv.slug}`} 
                              className="block py-1.5 px-2 rounded text-[11px] hover:bg-white/[0.05] hover:text-primary tracking-wide text-muted-foreground hover:text-white transition-colors"
                            >
                              {srv.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px]">
                  <span className="text-muted-foreground">11 Scam Types & 1 Wallet Access Service</span>
                  <Link href="/services" className="text-primary font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                    Explore All Services Directory →
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[11px] font-semibold uppercase tracking-wider text-[#F5F0E7]/80 hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button asChild className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider h-9 md:h-10 px-4 md:px-5 rounded-sm text-xs">
            <Link href="/#case-assessment">
              Request a Case Assessment
            </Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10 text-primary">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-white/5 w-full sm:max-w-md p-0 overflow-y-auto">
              <SheetHeader className="p-6 border-b border-white/5 text-left">
                <SheetTitle className="text-xl font-headline font-bold uppercase tracking-tight flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" /> RESTITUTECORE
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-6 space-y-6">
                <div className="space-y-6">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="space-y-2.5">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                        {cat.title}
                      </p>
                      <div className="grid gap-2 pl-2 border-l border-white/10">
                        {cat.services.map((srv) => (
                          <Link 
                            key={srv.slug} 
                            href={`/services/${srv.slug}`} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium py-1"
                          >
                            {srv.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-[#F5F0E7] hover:text-primary transition-colors uppercase tracking-wider"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-xs rounded-sm">
                    <Link href="/#case-assessment" onClick={() => setIsMobileMenuOpen(false)}>
                      Request a Case Assessment
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

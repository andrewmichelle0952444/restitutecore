'use client';

import { Shield, Twitter, Linkedin, Send, Radio, Mail } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';
import { useBrandAsset } from '@/lib/brand-assets';

export function Footer() {
  const { url: logoUrl, handleImageError } = useBrandAsset('logo.png');

  return (
    <footer id="contact" className="bg-card border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className={cn(
                "w-12 h-12 rounded flex items-center justify-center transition-all overflow-hidden",
                logoUrl ? "bg-transparent p-1" : "bg-primary shadow-lg"
              )}>
                {logoUrl ? (
                  <img 
                    src={logoUrl} 
                    alt="Restiturecore Logo" 
                    className="w-full h-full object-contain"
                    onError={handleImageError}
                  />
                ) : (
                  <Shield className="text-white w-7 h-7" />
                )}
              </div>
              <span className="text-xl font-headline font-bold">RESTITURECORE</span>
            </Link>
            <p className="text-muted-foreground text-[11px] leading-relaxed mb-8 uppercase tracking-wider opacity-80 font-medium">
              Specialist scam recovery assistance, financial fraud investigations, and digital asset tracing. Delaware-registered investigative entity.
            </p>
            
            <div className="flex items-center gap-4">
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Send className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Radio className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div>
            <h5 className="text-[10px] font-bold mb-6 text-foreground uppercase tracking-[0.25em]">Recovery Services</h5>
            <ul className="space-y-3.5 text-xs text-muted-foreground font-medium">
              <li><Link href="/#services" className="hover:text-primary transition-colors">Investment Scam Recovery</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Crypto Scam Recovery</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Bank Transfer & APP Scams</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Romance & Impersonation Scams</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Fake Exchange Scam Recovery</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-[10px] font-bold mb-6 text-foreground uppercase tracking-[0.25em]">Process & Approach</h5>
            <ul className="space-y-3.5 text-xs text-muted-foreground font-medium">
              <li><Link href="/#process" className="hover:text-primary transition-colors">3-Stage Assessment</Link></li>
              <li><Link href="/#approach" className="hover:text-primary transition-colors">Fraud Investigation Methodology</Link></li>
              <li><Link href="/#why-us" className="hover:text-primary transition-colors">Why Restiturecore & Credentials</Link></li>
              <li><Link href="/#resources" className="hover:text-primary transition-colors">Scam Recovery Guides & FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-bold mb-6 text-foreground uppercase tracking-[0.25em]">Ethical Standards</h5>
            <ul className="space-y-3.5 text-xs text-muted-foreground font-medium">
              <li><Link href="/#why-us" className="hover:text-primary transition-colors">No Guaranteed Recovery Policy</Link></li>
              <li><Link href="/#resources" className="hover:text-primary transition-colors">Secondary Recovery Scam Warning</Link></li>
              <li><Link href="/#approach" className="hover:text-primary transition-colors">Chain of Custody Protocols</Link></li>
              <li><Link href="/#case-assessment" className="hover:text-primary transition-colors">Confidential Initial Assessment</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-[10px] font-black mb-6 text-foreground uppercase tracking-[0.3em]">Enquiries</h5>
            <ul className="space-y-4 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
              <li><a href="mailto:investigator@restiturecore.com" className="text-white block hover:text-primary transition-colors">investigator@restiturecore.com</a></li>
              <li><Link href="/#case-assessment" className="text-primary hover:underline">Request a Case Assessment</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Direct Contact Portal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Restiturecore. Delaware Division of Corporations Registered.
          </p>
          <div className="flex gap-6">
            <p className="text-[9px] text-muted-foreground max-w-xl text-left md:text-right leading-relaxed uppercase tracking-[0.05em] opacity-60 font-medium">
              Legal Disclosure: Restiturecore provides investigative assistance, forensic evidence compilation, and digital asset tracing. Restiturecore does not provide regulated legal representation or guarantee financial recovery. Outcomes depend on case-specific facts, evidence preservation, and available regulatory or banking recovery channels.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

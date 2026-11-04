import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
        <Shield className="w-8 h-8 text-primary" />
      </div>
      <h1 className="text-4xl md:text-5xl font-headline font-bold mb-3 text-[#F5F0E7]">404 - Page Not Found</h1>
      <p className="text-muted-foreground text-sm max-w-md mb-8 leading-relaxed">
        The page or investigation resource you are looking for does not exist or has been relocated.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-xs h-11 px-6 rounded-sm shadow-md shadow-primary/20">
            Return Home <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
        <Link href="/services">
          <Button variant="outline" className="border-white/10 hover:border-primary/40 text-xs font-semibold uppercase tracking-wider h-11 px-6 rounded-sm text-[#F5F0E7]">
            Browse Services Directory
          </Button>
        </Link>
      </div>
    </div>
  );
}

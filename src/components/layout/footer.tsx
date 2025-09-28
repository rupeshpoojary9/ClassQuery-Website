import Link from 'next/link';
import { BookOpenCheck, Twitter, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/assets/logo.png';


const Footer = () => {
  const footerLinks = [
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Contact' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', 'label': 'Terms of Service' },
  ];

  const socialLinks = [
    { href: '#', icon: <Twitter className="h-5 w-5" /> },
    { href: '#', icon: <Linkedin className="h-5 w-5" /> },
    { href: '#', icon: <Facebook className="h-5 w-5" /> },
  ];

  return (
    <footer className="bg-background/80">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex items-center gap-2">
            <Image
                src={Logo}  
                alt="ClassQuery Logo"
                width={64}
                height={64}
                className="h-10 w-10"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                ClassQuery
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Revolutionizing education with AI.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-start">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ClassQuery. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {social.icon}
                <span className="sr-only">{social.href}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

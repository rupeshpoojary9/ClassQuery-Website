import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/particle-background';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedWrapper } from '@/components/animated-wrapper';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-classroom');

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <ParticleBackground />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <AnimatedWrapper>
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                The AI Assistant That Joins Your Class.
              </h1>
            </AnimatedWrapper>
            <AnimatedWrapper delay={200}>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl lg:mx-0">
                ClassQuery is the first LMS with an AI Tutor smart enough to
                assist students live in your Google Meet, Zoom, and Teams
                sessions.
              </p>
            </AnimatedWrapper>
            <AnimatedWrapper delay={400}>
              <div className="mt-8 flex justify-center gap-3 lg:justify-start">
                <Button size="lg" className="shadow-lg shadow-primary/20 transition-all hover:-translate-y-px hover:shadow-xl hover:shadow-primary/30">
                  Request a Demo
                </Button>
              </div>
            </AnimatedWrapper>
          </div>
          <div className="flex items-center justify-center">
            <AnimatedWrapper delay={300}>
              <div className="relative rounded-2xl p-2 shadow-2xl shadow-primary/10">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={600}
                    height={400}
                    className="rounded-xl"
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
                 <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-background/80 p-2 pr-4 text-sm font-semibold text-foreground shadow-md backdrop-blur-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-destructive-foreground"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                  </div>
                  Quinn is in the call
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

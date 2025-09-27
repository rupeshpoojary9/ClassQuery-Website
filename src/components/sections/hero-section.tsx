'use client';

import { Button } from '@/components/ui/button';
import { AnimatedWrapper } from '@/components/animated-wrapper';
import { NetworkAnimation } from '@/components/network-animation';
import { useState } from 'react';
import { RequestDemoModal } from '../request-demo-modal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <NetworkAnimation />
      </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 text-center">
          <div>
            <AnimatedWrapper>
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                The AI Assistant That Joins Your Class.
              </h1>
            </AnimatedWrapper>
            <AnimatedWrapper delay={200}>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
                ClassQuery is the first LMS with an AI Tutor smart enough to
                assist students live in your Google Meet, Zoom, and Teams
                sessions.
              </p>
            </AnimatedWrapper>
            <AnimatedWrapper delay={400}>
              <div className="mt-8 flex justify-center gap-3">
                <Button 
                  size="lg" 
                  className="shadow-lg shadow-primary/20 transition-all hover:-translate-y-px hover:shadow-xl hover:shadow-primary/30"
                  onClick={() => setIsModalOpen(true)}
                >
                  Request a Demo
                </Button>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </section>
    <RequestDemoModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default HeroSection;

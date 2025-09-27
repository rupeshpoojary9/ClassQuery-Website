import { Button } from '@/components/ui/button';
import { AnimatedWrapper } from '@/components/animated-wrapper';

const FinalCtaSection = () => {
  return (
    <section id="final-cta" className="py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Ready to Transform Your Learning Environment?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Schedule a personalized demo today and see how ClassQuery can empower your students and teachers.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="destructive" className="shadow-lg shadow-destructive/20 transition-all hover:-translate-y-px hover:shadow-xl hover:shadow-destructive/30">
                Request a Demo
              </Button>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default FinalCtaSection;

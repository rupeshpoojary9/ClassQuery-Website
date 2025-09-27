import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedWrapper } from '@/components/animated-wrapper';
import { cn } from '@/lib/utils';

const PricingSection = () => {
  const tiers = [
    {
      name: 'Marvin',
      price: '$49',
      priceDescription: '/teacher/month',
      description: 'For small teams getting started with AI.',
      features: [
        '24/7 AI Chat Tutor',
        'Lesson Plan Generator',
        'Auto-Generated Assessments (MCQs)',
        'Plagiarism Detection',
      ],
      isPopular: false,
    },
    {
      name: 'Robin',
      price: '$99',
      priceDescription: '/teacher/month',
      description: 'For growing institutions ready to scale.',
      features: [
        'All Marvin features, PLUS:',
        'Teacher Escalation',
        'Adaptive Learning Styles',
        'Automated Essay Grading',
        'Study Group Optimizer',
        'Parent Communication Assistant',
      ],
      isPopular: true,
    },
    {
      name: 'Quinn',
      price: 'Custom',
      priceDescription: 'for your institution',
      description: 'The ultimate AI solution for district-wide transformation.',
      features: [
        'All Robin features, PLUS:',
        'AI Joins Live Sessions (Zoom, Meet, Teams)',
        'Behavioral & Emotional Intelligence',
        'Socratic Method Teaching',
        'Full Accessibility & Inclusion Suite',
        'Advanced Teacher/Admin Analytics',
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Find the Perfect Plan
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with a plan that fits your needs and scale as you grow.
            </p>
          </div>
        </AnimatedWrapper>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <AnimatedWrapper key={tier.name} delay={index * 200}>
              <Card className={cn("flex h-full flex-col", tier.isPopular && "border-destructive shadow-2xl shadow-destructive/10")}>
                <CardHeader className="relative">
                  {tier.isPopular && (
                    <Badge variant="destructive" className="absolute -top-4 right-6">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="flex items-baseline gap-2">
                     <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                     <span className="text-sm text-muted-foreground">{tier.priceDescription}</span>
                  </div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-destructive" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={cn(
                      "w-full transition-all hover:-translate-y-px",
                      tier.isPopular 
                          ? "shadow-lg shadow-destructive/20 hover:shadow-xl hover:shadow-destructive/30" 
                          : "shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
                    )}
                    variant={tier.isPopular ? 'destructive' : 'default'}
                  >
                    {tier.name === 'Quinn' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

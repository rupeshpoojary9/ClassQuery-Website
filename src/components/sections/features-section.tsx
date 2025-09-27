import {
  BrainCircuit,
  FileText,
  Users,
  LifeBuoy,
  Accessibility,
  HeartHandshake,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/animated-wrapper';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-destructive" />,
      title: 'Adaptive Intelligence',
      description: 'Our AI tailors content and teaching styles to each student’s unique learning pace and preferences.',
    },
    {
      icon: <FileText className="h-8 w-8 text-destructive" />,
      title: 'Advanced Assessment',
      description: 'Automatically generate, grade, and analyze assessments, from multiple-choice quizzes to complex essays.',
    },
    {
      icon: <Users className="h-8 w-8 text-destructive" />,
      title: 'Collaborative Learning',
      description: 'AI-optimized study groups and project teams to maximize peer-to-peer learning and engagement.',
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-destructive" />,
      title: 'Teacher Support',
      description: 'Automate lesson planning, administrative tasks, and parent communication to free up valuable teacher time.',
    },
    {
      icon: <Accessibility className="h-8 w-8 text-destructive" />,
      title: 'Accessibility & Inclusion',
      description: 'Built-in tools to support diverse learning needs, including real-time translation and screen reader compatibility.',
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-destructive" />,
      title: 'Behavioral Intelligence',
      description: 'Gain insights into student engagement and well-being with respectful, privacy-focused behavioral analytics.',
    },
  ];

  return (
    <section id="features" className="bg-background/80 py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              An Ecosystem of Intelligence
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our platform is built on a suite of specialized AI systems designed to enhance every aspect of the educational experience.
            </p>
          </div>
        </AnimatedWrapper>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedWrapper key={feature.title} delay={index * 100}>
              <Card className="h-full transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  {feature.icon}
                  <CardTitle className="pt-4">{feature.title}</CardTitle>
                  <CardDescription className="pt-2">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

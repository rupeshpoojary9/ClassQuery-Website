import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatedWrapper } from '@/components/animated-wrapper';
import { School, Building, Briefcase } from 'lucide-react';

const WhoItsForSection = () => {
  const tabs = [
    {
      value: 'k12',
      label: 'K-12 Schools',
      icon: <School className="mr-2 h-5 w-5" />,
      content:
        'Empower your teachers and prepare students for the future with personalized learning paths and automated support. Our platform integrates seamlessly with your existing curriculum to enhance learning outcomes for every student.',
    },
    {
      value: 'higher-ed',
      label: 'Higher Education',
      icon: <Building className="mr-2 h-5 w-5" />,
      content:
        'Enhance university courses with scalable AI assistance, advanced analytics, and seamless integration with your LMS. Support research, facilitate large-scale collaboration, and provide every student with an AI-powered tutor.',
    },
    {
      value: 'corporate',
      label: 'Corporate Training',
      icon: <Briefcase className="mr-2 h-5 w-5" />,
      content:
        'Onboard and upskill your teams effectively with engaging, AI-driven training modules. Track progress, personalize content for different roles, and ensure your workforce stays ahead of the curve with cutting-edge knowledge.',
    },
  ];

  return (
    <section id="who-its-for" className="py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              A Solution for Every Classroom
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From kindergarten to the corporate world, ClassQuery adapts to your unique learning environment.
            </p>
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper delay={200}>
          <div className="mt-12">
            <Tabs defaultValue="k12" className="mx-auto w-full max-w-4xl">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
                {tabs.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value} className="text-base">
                    {tab.icon}
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <div className="mt-6 rounded-xl border bg-card p-8 text-center shadow-sm">
                    <p className="text-lg text-card-foreground">
                      {tab.content}
                    </p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default WhoItsForSection;

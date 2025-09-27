import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedWrapper } from '@/components/animated-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        'ClassQuery has transformed our student support system. The live AI assistant is a game-changer.',
      author: 'Dr. Eleanor Vance',
      title: 'Dean of Innovation, Northwood University',
      image: PlaceHolderImages.find((img) => img.id === 'testimonial-1'),
    },
    {
      quote:
        "I'm saving 10 hours a week on grading and lesson planning. It's an indispensable tool.",
      author: 'Maria Garcia',
      title: 'High School STEM Teacher',
      image: PlaceHolderImages.find((img) => img.id === 'testimonial-2'),
    },
    {
      quote:
        'The ability to get deep insights into student confusion points after a lecture is incredible. My teaching has become far more effective.',
      author: 'David Chen',
      title: 'Professor of Computer Science',
      image: PlaceHolderImages.find((img) => img.id === 'testimonial-3'),
    },
  ];

  return (
    <section id="testimonials" className="bg-background/80 py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Trusted by Leading Educators
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear what teachers and administrators have to say about ClassQuery.
            </p>
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper delay={200}>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="mx-auto mt-12 w-full max-w-5xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/2"
                >
                  <div className="p-4">
                    <Card className="h-full shadow-lg">
                      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                        <p className="flex-grow text-base italic text-foreground">
                          "{testimonial.quote}"
                        </p>
                        <div className="mt-6 flex items-center">
                          {testimonial.image && (
                            <Image
                              src={testimonial.image.imageUrl}
                              alt={testimonial.author}
                              width={48}
                              height={48}
                              className="rounded-full"
                              data-ai-hint={testimonial.image.imageHint}
                            />
                          )}
                          <div className="ml-4 text-left">
                            <p className="font-semibold text-foreground">
                              {testimonial.author}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default TestimonialsSection;

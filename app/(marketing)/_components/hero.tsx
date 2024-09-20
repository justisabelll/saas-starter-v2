import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { ArrowRight } from 'lucide-react';

// UI Components
import { Button } from '@/components/ui/button';

// Custom Components
import { Section, Container } from '@/components/craft';

// Assets
import Placeholder from './placeholder.webp';

export default function Hero() {
  return (
    <Section className="bg-gradient-to-b from-background to-background-subtle">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Button
            asChild
            className="not-prose mb-8 flex w-fit animate-pulse"
            size="sm"
            variant="outline"
          >
            <Link href="https://9d8.dev">
              Discover Our Latest Feature <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
          <h1 className="!mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            <Balancer>
              Transform Your Workflow with Our Innovative Solution
            </Balancer>
          </h1>

          <h2 className="text-muted-foreground mb-8 max-w-2xl text-xl font-light sm:text-2xl">
            <Balancer>
              Streamline your processes, boost productivity, and achieve your
              goals faster than ever before. Experience the future of work
              today.
            </Balancer>
          </h2>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border shadow-lg transition-transform hover:scale-[1.02] md:h-[480px] md:rounded-xl">
            <img
              className="not-prose h-full w-full object-cover object-bottom"
              src={Placeholder.src}
              width={1920}
              height={1080}
              alt="Innovative workspace showcasing our solution"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

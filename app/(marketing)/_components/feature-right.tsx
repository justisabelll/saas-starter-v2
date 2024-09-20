// React and Next.js imports
import Link from 'next/link';
import Image from 'next/image';

// UI component imports
import { Section, Container } from '@/components/craft';
import { Button } from '@/components/ui/button';

// Asset imports
import Placeholder from './placeholder.webp';

const Feature = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-4 py-8">
          <h3 className="!my-0 text-2xl font-semibold text-primary">
            Discover Our Unique Features
          </h3>
          <p className="font-light leading-[1.6] text-muted-foreground">
            Elevate your experience with our innovative solutions designed to
            enhance productivity and streamline your workflow.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started Now</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Explore More {'->'}</Link>
            </Button>
          </div>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border shadow-lg">
          <Image
            src={Placeholder}
            alt="Showcasing our innovative features"
            className="fill object-cover"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Feature;

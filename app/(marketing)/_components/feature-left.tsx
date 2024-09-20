// React and Next.js imports
import Image from 'next/image';
import Link from 'next/link';

// UI component imports
import * as Craft from '@/components/craft';
import { Button } from '@/components/ui/button';

// Asset imports
import Placeholder from './placeholder.webp';

const Feature = () => {
  return (
    <Craft.Section>
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border shadow-lg">
          <Image
            src={Placeholder}
            alt="Showcasing our feature"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0 text-xl font-semibold text-primary">
            Unlock Your Potential
          </h3>
          <p className="font-light leading-[1.6] text-muted-foreground">
            Experience seamless integration and elevate your workflow with our
            innovative solutions.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started Today</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Discover More {'->'}</Link>
            </Button>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Feature;

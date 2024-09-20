// React and Next.js imports
import Link from 'next/link';

// Third-party library imports
import Balancer from 'react-wrap-balancer';

// UI component imports
import { Button } from '@/components/ui/button';

// Custom components
import { Container, Section } from '@/components/craft';

const CTA = () => {
  return (
    <Section className="bg-secondary text-secondary-foreground py-16">
      <Container className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Transform Your Workflow?
        </h2>
        <h4 className="text-xl mb-8">
          <Balancer>
            Experience the future of productivity with our innovative solution.
            Start your journey today.
          </Balancer>
        </h4>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-gray-100"
          >
            <Link href="#">Get Started</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
            asChild
          >
            <Link href="#">Learn More</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;

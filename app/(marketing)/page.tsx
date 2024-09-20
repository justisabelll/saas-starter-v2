import { Header } from '@/app/(marketing)/_components/header';
import Hero from '@/app/(marketing)/_components/hero';
import FeatureLeft from '@/app/(marketing)/_components/feature-left';
import FeatureRight from '@/app/(marketing)/_components/feature-right';
import { SocialProof } from '@/app/(marketing)/_components/social-proof';
import CTA from '@/app/(marketing)/_components/cta';
import { Pricing } from '@/app/(marketing)/_components/pricing';
import { Footer } from '@/app/(marketing)/_components/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SocialProof />
      <CTA />
      <div id="features">
        <FeatureRight />
        <FeatureLeft />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}

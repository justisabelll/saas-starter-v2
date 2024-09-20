import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';
// import { StarFilledIcon } from '@radix-ui/react-icons';
import { Icon } from '@iconify/react';
import { Section, Container } from '@/components/craft';

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold',
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: React.ReactNode;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) => (
  <div
    className={cn(
      'flex w-full cursor-pointer flex-col items-center justify-between gap-6 rounded-xl p-6 border border-neutral-200 bg-white/50 backdrop-blur-sm transition-all hover:shadow-lg dark:bg-black/50 dark:border-neutral-700',
      className
    )}
    {...props}
  >
    <div className="text-sm font-normal text-neutral-700 dark:text-neutral-300">
      {description}
      <div className="flex py-2">
        {[...Array(5)].map((_, index) => (
          <Icon
            icon="mdi:star"
            key={index}
            className="size-4 text-yellow-500"
          />
        ))}
      </div>
    </div>
    <div className="flex w-full items-center justify-start gap-4">
      <img
        src={img}
        className="h-12 w-12 rounded-full ring-2 ring-primary/20 ring-offset-2"
        alt={`${name}'s picture`}
      />
      <div>
        <p className="font-semibold text-neutral-800 dark:text-neutral-200">
          {name}
        </p>
        <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
          {role}
        </p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: 'Alex Rivera',
    role: 'CTO at InnovateTech',
    img: 'https://randomuser.me/api/portraits/men/91.jpg',
    description: (
      <p>
        The AI-driven analytics from <Highlight>#QuantumInsights</Highlight>{' '}
        have revolutionized our product development cycle. Insights are now
        sharper and faster than ever. A game-changer for tech companies.
      </p>
    ),
  },
  {
    name: 'Samantha Lee',
    role: 'Marketing Director at NextGen Solutions',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    description: (
      <p>
        Implementing <Highlight>#AIStream</Highlight>&apos;s customer prediction
        model has significantly enhanced our targeting strategy. Seeing a 50%
        increase in conversion rates! Highly recommend their solutions.
      </p>
    ),
  },
  {
    name: 'Raj Patel',
    role: 'Founder & CEO at StartUp Grid',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    description: (
      <p>
        As a startup, we need to move fast and stay ahead.{' '}
        <Highlight>#CodeAI</Highlight>&apos;s automated coding assistant is our
        secret weapon. Our development speed has doubled! An essential tool for
        any startup.
      </p>
    ),
  },
  {
    name: 'Emily Chen',
    role: 'Product Manager at Digital Wave',
    img: 'https://randomuser.me/api/portraits/women/83.jpg',
    description: (
      <p>
        <Highlight>#VoiceGen</Highlight>&apos;s AI-driven voice synthesis has
        made global product creation effortless. Localization is now seamless
        and efficient. A must-have for global product teams.
      </p>
    ),
  },
  {
    name: 'Michael Brown',
    role: 'Data Scientist at FinTech Innovations',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: (
      <p>
        Leveraging <Highlight>#DataCrunch</Highlight>&apos;s AI for our
        financial models has given us a competitive edge in predictive accuracy.
        Our investment strategies are now powered by real-time data analytics.
        investment strategies are now powered by real-time data analytics.
        Transformative for the finance industry.
      </p>
    ),
  },
  {
    name: 'Linda Wu',
    role: 'VP of Operations at LogiChain Solutions',
    img: 'https://randomuser.me/api/portraits/women/5.jpg',
    description: (
      <p>
        <Highlight>#LogiTech</Highlight>&apos;s supply chain optimization tools
        have dramatically cut our operational costs. Efficiency and accuracy in
        logistics have never been better.
      </p>
    ),
  },
  {
    name: 'Carlos Gomez',
    role: 'Head of R&D at EcoInnovate',
    img: 'https://randomuser.me/api/portraits/men/14.jpg',
    description: (
      <p>
        By integrating <Highlight>#GreenTech</Highlight>&apos;s sustainable
        energy solutions, we&apos;ve significantly reduced our carbon footprint.
        Leading the way in eco-friendly business practices.
      </p>
    ),
  },
  {
    name: 'Aisha Khan',
    role: 'Chief Marketing Officer at Fashion Forward',
    img: 'https://randomuser.me/api/portraits/women/56.jpg',
    description: (
      <p>
        <Highlight>#TrendSetter</Highlight>&apos;s market analysis AI has
        transformed how we approach fashion trends. Our campaigns are now
        data-driven with higher customer engagement. Revolutionizing fashion
        marketing.
      </p>
    ),
  },
  {
    name: 'Tom Chen',
    role: 'Director of IT at HealthTech Solutions',
    img: 'https://randomuser.me/api/portraits/men/18.jpg',
    description: (
      <p>
        Implementing <Highlight>#MediCareAI</Highlight> in our patient care
        systems has improved patient outcomes significantly. Technology and
        healthcare working hand in hand for better health. A milestone in
        medical technology.
      </p>
    ),
  },
  {
    name: 'Sofia Patel',
    role: 'CEO at EduTech Innovations',
    img: 'https://randomuser.me/api/portraits/women/73.jpg',
    description: (
      <p>
        <Highlight>#LearnSmart</Highlight>&apos;s AI-driven personalized
        learning plans have doubled student performance metrics. Education
        tailored to every learner&apos;s needs. Transforming the educational
        landscape.
      </p>
    ),
  },
  {
    name: 'Jake Morrison',
    role: 'CTO at SecureNet Tech',
    img: 'https://randomuser.me/api/portraits/men/25.jpg',
    description: (
      <p>
        With <Highlight>#CyberShield</Highlight>&apos;s AI-powered security
        systems, our data protection levels are unmatched. Ensuring safety and
        trust in digital spaces. Redefining cybersecurity standards.
      </p>
    ),
  },
  {
    name: 'Nadia Ali',
    role: 'Product Manager at Creative Solutions',
    img: 'https://randomuser.me/api/portraits/women/78.jpg',
    description: (
      <p>
        <Highlight>#DesignPro</Highlight>&apos;s AI has streamlined our creative
        process, enhancing productivity and innovation. Bringing creativity and
        technology together. A game-changer for creative industries.
      </p>
    ),
  },
  {
    name: 'Omar Farooq',
    role: 'Founder at Startup Hub',
    img: 'https://randomuser.me/api/portraits/men/54.jpg',
    description: (
      <p>
        <Highlight>#VentureAI</Highlight>&apos;s insights into startup
        ecosystems have been invaluable for our growth and funding strategies.
        Empowering startups with data-driven decisions. A catalyst for startup
        success.
      </p>
    ),
  },
];

export function SocialProof() {
  return (
    <Section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-background to-background-subtle"
    >
      <Container>
        <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <div className="relative mt-10 max-h-[650px] overflow-hidden">
          <div className="gap-6 md:columns-2 xl:columns-3 2xl:columns-4">
            {Array(Math.ceil(testimonials.length / 3))
              .fill(0)
              .map((_, i) => (
                <Marquee
                  vertical
                  key={i}
                  className={cn({
                    '[--duration:60s]': i === 1,
                    '[--duration:30s]': i === 2,
                    '[--duration:70s]': i === 3,
                  })}
                >
                  {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                    <TestimonialCard {...card} key={idx} />
                  ))}
                </Marquee>
              ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
        </div>
      </Container>
    </Section>
  );
}

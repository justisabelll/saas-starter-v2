'use client';

import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/craft';
import Balancer from 'react-wrap-balancer';

interface Plan {
  name: string;
  price: { monthly: string; yearly: string };
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: { monthly: '$9', yearly: '$99' },
    description: 'Perfect for individuals and small projects.',
    features: [
      '100 AI generations per month',
      'Basic text-to-image conversion',
      'Email support',
      'Access to community forum',
    ],
    buttonText: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: { monthly: '$29', yearly: '$290' },
    description: 'Ideal for professionals and growing businesses.',
    features: [
      '1000 AI generations per month',
      'Advanced text-to-image conversion',
      'Priority email support',
      'API access',
      'Custom AI model fine-tuning',
      'Collaboration tools',
    ],
    buttonText: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', yearly: 'Custom' },
    description: 'Tailored pricing for large teams and enterprises.',
    features: [
      'Unlimited AI generations',
      'Custom AI model development',
      'Dedicated account manager',
      'On-premise deployment options',
      '24/7 premium support',
      'Advanced analytics and reporting',
    ],
    buttonText: 'Contact Sales',
    popular: false,
  },
];

const PlanCard: React.FC<{
  plan: Plan;
  billingCycle: 'monthly' | 'yearly';
}> = ({ plan, billingCycle }) => (
  <Card
    className={cn('relative', plan.popular ? 'border-2 border-primary' : '')}
  >
    {plan.popular && (
      <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-primary-foreground">
        Most Popular
      </div>
    )}
    <CardHeader>
      <CardTitle>{plan.name}</CardTitle>
      <CardDescription>{plan.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="mb-6 flex items-baseline">
        <motion.span
          key={plan.price[billingCycle]}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl font-bold"
        >
          {plan.price[billingCycle]}
        </motion.span>
        <span className="ml-2 text-sm text-muted-foreground">
          /{billingCycle === 'monthly' ? 'month' : 'year'}
        </span>
      </div>
      <ul className="mb-8 space-y-2">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <CheckIcon className="mr-2 h-5 w-5 text-primary" />
            <span className="font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full">{plan.buttonText}</Button>
    </CardContent>
  </Card>
);

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly'
  );

  const handleTabChange = (tab: 'monthly' | 'yearly') => {
    setBillingCycle(tab);
  };

  return (
    <Section
      id="pricing"
      className="bg-gradient-to-b from-background to-background-subtle"
    >
      <Container className="py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            <Balancer>Simple pricing for everyone</Balancer>
          </h2>
          <p className="mt-6 text-xl font-light text-muted-foreground">
            <Balancer>
              Choose an <strong>affordable plan</strong> that&apos;s packed with
              the best features for engaging your audience, creating customer
              loyalty, and driving sales.
            </Balancer>
          </p>
        </div>
        <div className="py-10">
          <div className="mx-auto mb-8 flex w-fit items-center rounded-full border p-1.5">
            {['monthly', 'yearly'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab as 'monthly' | 'yearly')}
                className={cn(
                  'relative z-[1] px-4 py-2',
                  billingCycle === tab
                    ? 'text-primary-foreground'
                    : 'text-foreground dark:text-white'
                )}
              >
                {billingCycle === tab && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {tab === 'yearly' && (
                    <span className="ml-2 text-xs font-semibold text-green-500">
                      Save 25%
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {plans.slice(0, 2).map((plan, index) => (
            <PlanCard key={index} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>
        <div className="mt-6 w-full">
          <Card className="flex items-center justify-between overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <CardTitle className="mb-2 text-2xl">{plans[2].name}</CardTitle>
              <CardDescription className="mb-6">
                {plans[2].description}
              </CardDescription>
              <Button>{plans[2].buttonText}</Button>
            </CardContent>
            <div className="before:content-[''] relative isolate hidden h-[240px] w-full before:absolute before:left-32 before:top-0 before:z-[-1] before:h-full before:w-full before:skew-x-[-45deg] before:border-l before:border-muted before:bg-muted md:block lg:w-2/3">
              <div className="ml-12 flex h-full w-full flex-col items-center justify-center gap-y-0.5">
                <h1 className="text-4xl font-bold">50% off</h1>
                <p>for the first 100 customers</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';
import appInfo from '@/lib/appInfo';

import { Button } from '@/components/ui/button';

interface NavItem {
  name: string;
  href: string;
}

const navs: NavItem[] = [
  // { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', href: `https://blog.${appInfo.domain}` },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [activeTab, setActiveTab] = useState<string>(navs[0].name);
  const { setTheme, theme } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-background/50 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">{appInfo.name}</span>
          </Link>
        </motion.div>
        <nav className="hidden md:flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex items-center rounded-full bg-secondary/10 p-1"
          >
            {navs.map((option, index) => (
              <Link
                key={option.name}
                href={option.href}
                onClick={() => setActiveTab(option.name)}
                className={cn(
                  'relative z-[1] px-3 py-2 transition-all duration-200 ease-in-out',
                  {
                    'text-primary': activeTab === option.name,
                    'text-muted-foreground hover:text-primary':
                      activeTab !== option.name,
                  }
                )}
              >
                {activeTab === option.name && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="relative block text-sm font-medium"
                >
                  {option.name}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        </nav>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center"
        >
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full p-2 transition-colors duration-200 hover:bg-secondary/20 "
          >
            <div className="relative h-5 w-5">
              <Icon
                icon="ph:sun-bold"
                className="absolute inset-0 h-full w-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              />
              <Icon
                icon="ph:moon-bold"
                className="absolute inset-0 h-full w-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
            </div>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}

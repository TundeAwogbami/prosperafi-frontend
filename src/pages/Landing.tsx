import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ArrowRight, Wallet, TrendingUp, Shield, Zap, BarChart3, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';

const features = [
  {
    icon: Wallet,
    title: 'Multi-Wallet Support',
    description: 'Connect with MetaMask, WalletConnect, and more. Seamless integration across all major wallets.',
  },
  {
    icon: TrendingUp,
    title: 'Token Swaps',
    description: 'Swap tokens instantly with the best rates from aggregated DEX liquidity pools.',
  },
  {
    icon: Coins,
    title: 'Staking Rewards',
    description: 'Earn passive income by staking your tokens with competitive APY rates.',
  },
  {
    icon: BarChart3,
    title: 'Portfolio Analytics',
    description: 'Track your holdings, monitor performance, and analyze your DeFi positions.',
  },
  {
    icon: Shield,
    title: 'Secure & Audited',
    description: 'Your assets are protected with industry-leading security standards.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Execute transactions quickly with optimized gas estimation.',
  },
];

const stats = [
  { value: '$2.4B+', label: 'Total Value Locked' },
  { value: '150K+', label: 'Active Users' },
  { value: '$890M+', label: 'Trading Volume' },
  { value: '99.9%', label: 'Uptime' },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">

      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              The Future of Decentralized Finance
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Trade, Stake &</span>
              <br />
              <span className="text-primary">
                Grow Your Crypto
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Access the most powerful DeFi tools in one platform. Swap tokens, earn staking rewards, 
              and track your portfolio with real-time analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link to="/dashboard">
                  Launch App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-border/50 hover:bg-card/50">
                <Link to="/swap">
                  Start Trading
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-card/30 backdrop-blur-xl border border-border/30"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

           {/* Features Section */}
      <section className="relative py-28 px-4 bg-secondary/30">
        <div className="container mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            {/* Eyebrow label — small text above the heading */}
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
              Platform Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-foreground tracking-tight">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Powerful tools designed for both beginners and experienced DeFi users
            </p>
          </motion.div>

          {/* Feature cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={cn(
                    "group relative p-7 rounded-2xl bg-white border border-border/60",
                    "shadow-[0_2px_12px_rgba(0,0,0,0.04)]",
                    "hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
                    "hover:border-primary/30 hover:-translate-y-0.5",
                    "transition-all duration-300 cursor-default"
                  )}
                >
                  {/* Top row: icon + arrow-on-hover */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon box — solid background, crisp */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                    </div>
                    {/* Arrow that slides in on hover — subtle interaction cue */}
                    <span className="text-muted-foreground/0 group-hover:text-primary group-hover:translate-x-0 -translate-x-1 transition-all duration-300 text-lg font-light select-none">
                      →
                    </span>
                  </div>

                  {/* Text content */}
                  <h3 className="text-base font-semibold mb-2 text-foreground tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom accent line — grows on hover */}
                  <div className="absolute bottom-0 left-7 right-7 h-[2px] rounded-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-card border border-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Start Your DeFi Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of users already trading, staking, and earning with our platform.
            </p>
            <Button asChild size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90">
              <Link to="/dashboard">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-border/30">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          © 2024 DeFi Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing;

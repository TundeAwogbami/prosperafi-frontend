import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, ArrowLeftRight, Coins, LayoutDashboard, LogOut, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';

// What it does: defines the nav links — path, label, and icon for each page
const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/swap',      label: 'Swap',       icon: ArrowLeftRight  },
  { path: '/stake',     label: 'Stake',       icon: Coins           },
  { path: '/portfolio', label: 'Portfolio',   icon: Wallet          },
];

export function Header() {
  const location  = useLocation();
  const navigate  = useNavigate();
  const { user, signOut } = useAuth();

  const handleAuthAction = async () => {
    if (user) {
      await signOut();
      navigate('/');
    } else {
      navigate('/auth');
    }
  };

  return (
    // Removed: border-b border-border/50
    // Added: transparent background that gets a clean white card feel via the inner wrapper
    <header className="sticky top-0 z-50 w-full px-4 pt-4 pb-2">
      <div className="container mx-auto">
        {/* 
          The nav is now a floating card — clean white background, 
          soft shadow, rounded pill shape. No hard border line.
        */}
        <div className="flex h-14 items-center justify-between rounded-2xl bg-white/90 backdrop-blur-md shadow-sm border border-border/40 px-4">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center shadow-sm">
                <span className="text-base font-bold text-white">P</span>
              </div>
              <span className="text-lg font-bold text-foreground tracking-tight">
                Prospera<span className="text-primary">Fi</span>
              </span>
            </Link>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;

                return (
                  <Link key={item.path} to={item.path}>
                    <motion.div
                      className={cn(
                        "relative px-3.5 py-2 rounded-xl flex items-center gap-2 text-sm font-medium transition-colors duration-200",
                        isActive
                          ? "text-primary bg-primary/8"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-xl bg-primary/10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Sign In / Sign Out button — clean solid style, no gradient */}
          <Button
            size="sm"
            onClick={handleAuthAction}
            className="rounded-xl px-5 font-semibold text-sm h-9"
          >
            {user ? (
              <>
                <LogOut className="h-4 w-4" />
                Sign Out
              </>
            ) : (
              <>
                <LogIn className="h-4 w-4" />
                Sign In
              </>
            )}
          </Button>

        </div>
      </div>
    </header>
  );
}
import { cn } from "@/lib/utils";

interface TokenIconProps {
  symbol: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Maps token symbol to CoinGecko coin ID
// CoinGecko is the most reliable free crypto icon source — no API key needed
const COINGECKO_IDS: Record<string, string> = {
  ETH:  'ethereum',
  WETH: 'weth',
  USDC: 'usd-coin',
  USDT: 'tether',
  DAI:  'dai',
  WBTC: 'wrapped-bitcoin',
  MATIC:'matic-network',
  BNB:  'binancecoin',
  LINK: 'chainlink',
  UNI:  'uniswap',
  AAVE: 'aave',
};

const sizeClasses = {
  sm: 'h-6 w-6',
  md: 'h-10 w-10',
  lg: 'h-14 w-14',
};

export function TokenIcon({ symbol, size = 'md', className }: TokenIconProps) {
  const coinId = COINGECKO_IDS[symbol];

  // If we don't have a mapping, show a clean text fallback
  if (!coinId) {
    return (
      <div className={cn(
        "flex items-center justify-center rounded-full font-bold bg-primary/10 text-primary text-xs border border-primary/20",
        sizeClasses[size],
        className
      )}>
        {symbol.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={`https://coin-images.coingecko.com/coins/images/thumb/${coinId}.png`}
      alt={`${symbol} logo`}
      className={cn("rounded-full object-contain", sizeClasses[size], className)}
      onError={(e) => {
        // If image fails, replace with text fallback — never shows broken image
        const el = e.currentTarget;
        el.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.className = el.className + ' flex items-center justify-center bg-primary/10 text-primary text-xs font-bold border border-primary/20';
        fallback.textContent = symbol.slice(0, 2).toUpperCase();
        el.parentNode?.insertBefore(fallback, el);
      }}
    />
  );
}
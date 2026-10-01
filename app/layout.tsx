import type { Metadata } from 'next';
import './globals.css';
import './section-how-learning.css';
import './section-bonuses.css';
import './section-talent.css';
import './section-tariff-v3.css';
import './section-academy-v2.css';
import './site-footer.css';
import './section-calc.css';
import './section-my-results.css';
import './offer.css';
import './mobile.css';
import './palette.css';
import './animations.css';
import './mobile-polish.css';
import './proportional-desktop.css';

export const metadata: Metadata = {
  title: 'REMARENKO P2P EDUCATION — Опануй професію майбутнього',
  description:
    'Міні-курс по P2P торгівлі. Опануй сферу P2P за 7 днів та почни заробляти від 500$.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function setDesktopScale(){var root=document.documentElement;var width=window.innerWidth;var scale=width/1920;root.style.setProperty('--desktop-scale',String(scale));root.style.setProperty('--desktop-viewport-height',(window.innerHeight/scale)+'px');}setDesktopScale();window.addEventListener('resize',setDesktopScale,{passive:true});})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&family=Montserrat:ital,wght@0,700;1,700;1,800&family=Unbounded:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          href="/images/IMG000-boy-cutout.png"
          type="image/png"
          fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

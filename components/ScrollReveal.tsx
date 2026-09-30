'use client';

import { useEffect } from 'react';

type RevealGroup = {
  selector: string;
  effect: 'reveal-up' | 'reveal-left' | 'reveal-right' | 'reveal-scale';
  stagger?: number;
};

const REVEAL_GROUPS: RevealGroup[] = [
  {
    selector: [
      '.about-v2__title',
      '.calc-header',
      '.about-v2__video-title',
      '.who-v2__title',
      '.program-v2__heading',
      '.how-learning__title',
      '.bonuses-section__title',
      '.talanta-section__header',
      '.speakers-title-wrapper',
      '.tariff-v3__title',
      '.academy-v2__kicker',
      '.rv2-header',
      '.section-faq .light-gradient-text',
    ].join(','),
    effect: 'reveal-up',
  },
  {
    selector: [
      '.about-img',
      '.section-video .video',
      '.speaker-img_big-wrapper',
      '.academy-v2__left',
    ].join(','),
    effect: 'reveal-scale',
  },
  {
    selector: [
      '.calc-result',
      '.program-v2__result',
      '.talanta-results',
      '.academy-v2__right',
    ].join(','),
    effect: 'reveal-right',
  },
  {
    selector: [
      '.about-task-wrapper',
      '.calc-row',
      '.who-v2__panel',
      '.program-v2__card',
      '.how-learning__card',
      '.bonuses-card',
      '.talanta-section__factor',
      '.talanta-results__item',
      '.slide-content-wrapper',
      '.tariff-v3__grid > *',
      '.academy-v2__stat',
      '.mr-card',
      '.rv2-card',
      '.section-faq .dropdown',
    ].join(','),
    effect: 'reveal-up',
    stagger: 85,
  },
];

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const nodes = new Set<HTMLElement>();

    REVEAL_GROUPS.forEach(({ selector, effect, stagger = 0 }) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((node, index) => {
        if (nodes.has(node)) return;

        node.classList.add('scroll-reveal', effect);
        node.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * stagger}ms`);
        nodes.add(node);
      });
    });

    document.documentElement.classList.add('scroll-reveal-enabled');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -7% 0px',
      },
    );

    requestAnimationFrame(() => nodes.forEach((node) => observer.observe(node)));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('scroll-reveal-enabled');
      nodes.forEach((node) => {
        node.classList.remove('scroll-reveal', 'reveal-up', 'reveal-left', 'reveal-right', 'reveal-scale', 'is-visible');
        node.style.removeProperty('--reveal-delay');
      });
    };
  }, []);

  return null;
}

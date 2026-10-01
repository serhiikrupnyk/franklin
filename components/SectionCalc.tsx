"use client";
import { useMemo, useState } from "react";

const superscriptDigits: Record<string, string> = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
};

function formatScientificMoney(log10Value: number) {
  let exponent = Math.floor(log10Value);
  let mantissa = Number(Math.pow(10, log10Value - exponent).toFixed(2));

  if (mantissa >= 10) {
    mantissa = 1;
    exponent += 1;
  }

  const superscriptExponent = String(exponent)
    .split("")
    .map((digit) => superscriptDigits[digit] ?? digit)
    .join("");

  return `$${mantissa.toLocaleString("en-US", { maximumFractionDigits: 2 })} × 10${superscriptExponent}`;
}

export default function SectionCalc() {
  const [budget, setBudget] = useState(1000);
  const [percent, setPercent] = useState(0.7);
  const [cycles, setCycles] = useState(3);
  const [days, setDays] = useState(30);

  const { profitText, totalText } = useMemo(() => {
    const p = percent / 100;
    const totalCycles = cycles * days;
    const log10Total = Math.log10(budget) + totalCycles * Math.log10(1 + p);

    // Past this point the full integer no longer fits comfortably in the UI
    // (and extreme settings eventually exceed JavaScript's numeric range).
    if (log10Total >= 10) {
      const compactValue = formatScientificMoney(log10Total);
      return { profitText: compactValue, totalText: compactValue };
    }

    const total = budget * Math.pow(1 + p, totalCycles);
    const profit = Math.round(total - budget);
    return {
      profitText: `$${profit.toLocaleString("en-US")}`,
      totalText: `$${Math.round(total).toLocaleString("en-US")}`,
    };
  }, [budget, percent, cycles, days]);

  const budgetPct  = ((budget  - 100)  / (10000 - 100))  * 100;
  const percentPct = ((percent - 0.1)  / (10    - 0.1))  * 100;
  const cyclesPct  = ((cycles  - 1)    / (100   - 1))    * 100;
  const daysPct    = ((days    - 1)    / (90    - 1))    * 100;

  return (
    <section className="section-calc">
      <div className="container">
        <div className="calc-wrapper">

          <div className="calc-header">
            <span className="calc-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f1d302" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </span>
            <h2 className="calc-title">
              ДІЗНАЙСЯ СВІЙ <span className="calc-title--accent">ПОТЕНЦІЙНИЙ ДОХІД</span>
            </h2>
            <p className="calc-desc">
              Все залежить від системи, а не від стартової суми. Перевір на своїх цифрах!
            </p>
          </div>

          <div className="calc-sliders">

            <div className="calc-row">
              <div className="calc-row__info">
                <span className="calc-row__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </span>
                <span className="calc-row__label">Бюджет, який крутиш</span>
              </div>
              <div className="calc-row__slider-wrap">
                <input className="calc-slider" type="range"
                  min={100} max={10000} step={100} value={budget}
                  style={{ "--pct": `${budgetPct}%` } as React.CSSProperties}
                  onChange={(e) => setBudget(Number(e.target.value))}
                />
                <div className="calc-row__limits"><span>$100</span><span>$10 000</span></div>
              </div>
              <div className="calc-row__value">${budget.toLocaleString("en")}</div>
            </div>

            <div className="calc-row">
              <div className="calc-row__info">
                <span className="calc-row__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
                  </svg>
                </span>
                <span className="calc-row__label">Прибуток за 1 круг</span>
              </div>
              <div className="calc-row__slider-wrap">
                <input className="calc-slider" type="range"
                  min={0.1} max={10} step={0.1} value={percent}
                  style={{ "--pct": `${percentPct}%` } as React.CSSProperties}
                  onChange={(e) => setPercent(Number(e.target.value))}
                />
                <div className="calc-row__limits"><span>0.1%</span><span>10%</span></div>
              </div>
              <div className="calc-row__value">{percent.toFixed(1)}%</div>
            </div>

            <div className="calc-row">
              <div className="calc-row__info">
                <span className="calc-row__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span className="calc-row__label">Кількість кругів на день</span>
              </div>
              <div className="calc-row__slider-wrap">
                <input className="calc-slider" type="range"
                  min={1} max={100} step={1} value={cycles}
                  style={{ "--pct": `${cyclesPct}%` } as React.CSSProperties}
                  onChange={(e) => setCycles(Number(e.target.value))}
                />
                <div className="calc-row__limits"><span>1</span><span>100</span></div>
              </div>
              <div className="calc-row__value">{cycles}</div>
            </div>

            <div className="calc-row">
              <div className="calc-row__info">
                <span className="calc-row__icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <span className="calc-row__label">Кількість днів</span>
              </div>
              <div className="calc-row__slider-wrap">
                <input className="calc-slider" type="range"
                  min={1} max={90} step={1} value={days}
                  style={{ "--pct": `${daysPct}%` } as React.CSSProperties}
                  onChange={(e) => setDays(Number(e.target.value))}
                />
                <div className="calc-row__limits"><span>1 день</span><span>90 днів</span></div>
              </div>
              <div className="calc-row__value">{days} дн</div>
            </div>

          </div>

          <div className="calc-result">
            <div className="calc-result__row">
              <span className="calc-result__label">Потенційний прибуток:</span>
              <span className="calc-result__amount">{profitText}</span>
            </div>
            <div className="calc-result__divider" />
            <div className="calc-result__row calc-result__row--secondary">
              <span className="calc-result__label">Загальна сума:</span>
              <span className="calc-result__total">{totalText}</span>
            </div>
            <p className="calc-result__note">
              ⓘ Складний відсоток — прибуток кожного круга додається до бюджету і далі теж працює.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

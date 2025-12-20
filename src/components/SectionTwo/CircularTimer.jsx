import { useEffect, useState } from "react";

const TOTAL_TICKS = 60;

export default function CircularTimer() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date()); // update current time every second
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = now.getSeconds();

  // seconds decide active ticks
  const activeTicks = seconds;

  return (
    <div className="flex items-center justify-center bg-[#cfd7c6]">
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 220 220" className="w-full h-full">
          <g transform="translate(110,110)">
            {[...Array(TOTAL_TICKS)].map((_, i) => {
              const angle = (360 / TOTAL_TICKS) * i;
              const isActive = i < activeTicks;

              return (
                <line
                  key={i}
                  x1="0"
                  y1="-90"
                  x2="0"
                  y2="-100"
                  transform={`rotate(${angle})`}
                  className={isActive ? "stroke-[#2f3e2f]" : "stroke-[#9aa49a]"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              );
            })}
          </g>
        </svg>

        {/* Center Time (HH:MM) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-medium text-[#2f3e2f]">
            {hours}:{minutes}
          </span>
        </div>
      </div>
    </div>
  );
}

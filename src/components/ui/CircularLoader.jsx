import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function CircularLoader({ onComplete }) {
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);
  const percentageRef = useRef({ value: 0 });
  const circleRefs = useRef([]);

  const circlesData = [
    { text: "HELLO", radius: 60, fontSize: 10, speed: 20 },
    { text: "HELLO WORLD", radius: 100, fontSize: 12, speed: 15 },
    { text: "MY NAME IS THIS", radius: 140, fontSize: 14, speed: 10 },
    { text: "CREATIVE DEVELOPER", radius: 180, fontSize: 16, speed: 8 },
    { text: "FULL STACK DEVELOPER", radius: 220, fontSize: 18, speed: 6 },
    { text: "THIS KINDS OF WORDS", radius: 260, fontSize: 20, speed: 5 },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    circleRefs.current.forEach((circle, index) => {
      if (circle) {
        gsap.to(circle, {
          rotation: 360,
          duration: circlesData[index].speed,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });
      }
    });

    gsap.to(percentageRef.current, {
      value: 100,
      duration: 4,
      ease: "power2.inOut",
      onUpdate: () => {
        setPercentage(Math.floor(percentageRef.current.value));
      },
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
            onComplete?.();
          },
        });
      },
    });

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 bg-[#c2cabb] flex items-center justify-center"
    >
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        className="w-full h-full max-w-[90vw] max-h-[90vh]"
      >
        {circlesData.map((circle, index) => (
          <g
            key={index}
            ref={(el) => (circleRefs.current[index] = el)}
            style={{ transformOrigin: "300px 300px" }}
          >
            <circle
              cx="300"
              cy="300"
              r={circle.radius}
              fill="none"
              stroke="rgb(255, 255, 255)"
              strokeWidth="0"
            />
            <path
              id={`circlePath${index}`}
              d={`
                M 300, 300
                m -${circle.radius}, 0
                a ${circle.radius},${circle.radius} 0 1,1 ${circle.radius * 2},0
                a ${circle.radius},${circle.radius} 0 1,1 -${
                circle.radius * 2
              },0
              `}
              fill="none"
            />
            <text
              fill="white"
              fontSize={circle.fontSize}
              fontWeight="500"
              letterSpacing="2"
              className="uppercase"
            >
              <textPath
                href={`#circlePath${index}`}
                startOffset="25%"
                textAnchor="middle"
              >
                {circle.text}
              </textPath>
            </text>
          </g>
        ))}

        <text
          x="300"
          y="310"
          textAnchor="middle"
          fill="white"
          fontSize="25"
          fontWeight="700"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
}

import React, { useState, useRef } from "react";

function Table() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [bgTransform, setBgTransform] = useState({ y: 0, height: 0 });
  const tableRef = useRef(null);
  const rowRefs = useRef([]);

  const tableData = [
    { time: "2X", award: "Awwwards", title: "Site of the Day" },
    { time: "1X", award: "Awwwards", title: "Developer Award" },
    { time: "1X", award: "Awwwards", title: "Portfolio Honors" },
    { time: "2X", award: "Awwwards", title: "Honorable Mention" },
    { time: "2X", award: "FWA", title: "Site of the Day" },
    { time: "4X", award: "GSAP", title: "Site of the Day" },
    { time: "1X", award: "CSS Design Awards", title: "Site of the Day" },
    { time: "1X", award: "Codrops", title: "Case Study Article" },
    { time: "2X", award: "Muzli", title: "Top 100 Portfolios of 2024, 2025" },
    { time: "1X", award: "Muzli", title: "Web Design Trends 2025" },
    { time: "1X", award: "WD Awards", title: "Site of the Day" },
  ];

  const handleMouseEnter = (index) => {
    const rowElement = rowRefs.current[index];
    const tableElement = tableRef.current;

    if (rowElement && tableElement) {
      const rowRect = rowElement.getBoundingClientRect();
      const tableRect = tableElement.getBoundingClientRect();

      const y = rowRect.top - tableRect.top;
      const height = rowRect.height;

      setBgTransform({ y, height });
      setHoveredRow(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  return (
    <div className="flex items-end justify-end relative z-30 mt-16">
      <div className="w-[77.5%] relative" ref={tableRef}>
        {/* Floating background div with effects */}
        <div
          className="absolute left-0 right-0 bg-[#d2d8cb] pointer-events-none transition-all duration-300 ease-out will-change-transform"
          style={{
            height: `${bgTransform.height}px`,
            transform: `translateY(${bgTransform.y}px)`,
            opacity: hoveredRow !== null ? 1 : 0,
          }}
        />

        <table className="w-full relative z-10">
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                ref={(el) => (rowRefs.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="border-b border-black text-[15.2px] font-medium uppercase cursor-default"
              >
                <td className="pt-2 w-[60px]">{row.time}</td>
                <td className="pt-2 w-[200px]">{row.award}</td>
                <td className="pt-2">{row.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

import React, { forwardRef } from "react";

// Simple presentational component
const SlidingText = forwardRef(({ text, className }, ref) => (
  // The wrapper hides the text when it is translated "up"
  <div className="w-full overflow-hidden">
    <p
      ref={ref}
      className={className}
      // Initial state is handled by GSAP, but we set a default here to prevent flash
      style={{ transform: "translateY(-150px)", opacity: 0 }}
    >
      {text}
    </p>
  </div>
));

SlidingText.displayName = "SlidingText";

export default SlidingText;

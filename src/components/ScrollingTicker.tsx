import React from 'react';

interface ScrollingTickerProps {
  items: string[];
}

const ScrollingTicker: React.FC<ScrollingTickerProps> = ({ items }) => {
  // We duplicate the items to create a seamless infinite scroll effect
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div style={{ 
      overflow: "hidden", 
      whiteSpace: "nowrap", 
      padding: "2rem 0", 
      background: "rgba(0, 208, 255, 0.02)", 
      borderTop: "1px solid rgba(0, 208, 255, 0.08)", 
      borderBottom: "1px solid rgba(0, 208, 255, 0.08)",
      margin: "4rem 0"
    }}>
      <div className="ticker-track" style={{ display: "flex", gap: "3rem", width: "max-content", paddingLeft: "3rem" }}>
        {repeatedItems.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
            <span style={{ 
              fontWeight: 800, 
              fontSize: "1.2rem", 
              letterSpacing: "4px", 
              textTransform: "uppercase", 
              color: "rgba(255, 255, 255, 0.8)" 
            }}>
              {item}
            </span>
            <span style={{ color: "#00d0ff", fontSize: "1.5rem" }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingTicker;

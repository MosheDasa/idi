import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./notification.css";

// Base64 encoded placeholder images
const chestImg = "./img/chest-icon-transparent.png";
const coinsImg = "./img/coins-icon-transparent.png";

const App: React.FC = () => {
  const [userData, setUserData] = useState<{
    name: string;
    cas: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return () => {
      // Cleanup if needed
    };
  }, []);

  const handleClose = () => {
    window.close();
  };

  return (
    <div className={`notification ${!isVisible ? "visible" : ""}`}>
      <div className="notification-content">
        <button className="close-btn" onClick={handleClose} aria-label="סגור">
          ×
        </button>
        <img className="icon" src={chestImg} alt="תיבת אוצר" loading="lazy" />
        <div className="title">וואו aaa!</div>
        <div className="subtitle">הצלחת לצבור</div>
        <div className="amount">
          <span className="amount-text">₪1,000</span>
          <img src={coinsImg} alt="מטבעות" loading="lazy" />
        </div>
        <div className="footer">כל הכבוד לך!</div>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

import React from "react";
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return (
    <div className="container-fluid bg-light p-3 rounded shadow">
      <div className="text-center">
        <h3 className="mb-0">שלום משה</h3>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

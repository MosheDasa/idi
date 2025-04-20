import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-4">ברוך הבא</h1>
          <p className="lead">Welcome to the Disk App</p>
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

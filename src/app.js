import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// const cardNameStyle = {
//   color: "black",
// };

const AppLayout = () => {
  return (
    <div className="appLayout">
      <div>
        <Header />
        <div className="body-container">
          <Body />
        </div>
      </div>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

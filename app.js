import React, { Component } from "react";
import ReactDom from "react-dom/client";
import NavbarComponent from "./NavbarComponentAssignment";

const jsxHeading = (
  <h1 id="heading" className="attributeToH1Tag">
    Namaste from JSX
  </h1>
);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "attributeToH1Tag" },
//   ["Namaste From React app build through CDN Links!", jsxHeading]
// );

// Component
//  Functional Component
// if we use return at that time use {} for the arrow function
// if we do not use return at that time use () for the arrow function
// putting component inside the other component is known as composition
const Title = <h1 className="heading">Namaste from React Component</h1>;

const SubTitle = () => <span>Greeting!</span>;
//Injecting Title React element inside component through {}
const Container = () => (
  <div className="mainContainer">
    {Title}{" "}
    {/*we can call function/component as well in {} like as per above example
        we can call like this SubTitle() */}
    {SubTitle()}
    <div className="container">
      <h4>
        <SubTitle />
      </h4>
      <p>
        Hey welcome to my react application, Hope you're practicing well &
        becoming a good developer, No great developer!
      </p>
      <GreetingCardDescription />
    </div>
  </div>
);


const GreetingCardDescription = () => {
  return (
    <p>
      Hope you like our <SubTitle /> Cards...
      {/* {Elem} - This will make the code into inifinte loop like parent inside child & child inside parent*/}
    </p>
  );
};

// Assignment 03 start here
const assign = <h1>Coding Assignment 03</h1>;
const divContainer = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Header 1"),
  React.createElement("h2", {}, "Header 2"),
  React.createElement("h3", {}, "Header 3"),
]);

//  Implementing using JSX through Component:
const UsingComponent = () =>{
  return(
    <div>
      <span>By JSX Code</span>
      <h1 className="heading">Heading 01</h1>
      <h2>Heading 02</h2>
      <h3>Heading 03</h3>
    </div>
  )
}
// Main Component which we use to render in web Browser like driver code
// Example of agging component inside other(Composition) & adding React element inside component
const DriverComponent = () => {
  return (
    <div>
      {assign}
      {divContainer}
      <UsingComponent/>
    </div>
  );
};



//  This code is from previos implemetion - place due to avoide inizialize error
//Injecting component inside React Element
const Elem = (
  <div>
    <NavbarComponent/>
    Injecting Component inside this element over here:
    <Container />
    <DriverComponent/>
  </div>
);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(Elem);

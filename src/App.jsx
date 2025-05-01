import React from "react";
import { ButtonCss } from "./components/ButtonCss";
import { Button } from "./components/button";

export const App = () => {
  return (
    <div className="app">
      <h1>React App</h1>
      <ButtonCss />
      <Button>ORDER</Button>
      <Button outlined>ORDER</Button>
    </div>
  );
};

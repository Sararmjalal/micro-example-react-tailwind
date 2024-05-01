import React from "react";
import "./index.scss";
import { createRoot } from 'react-dom/client';
import Header from "./components/header";
import Footer from "./components/footer";

export const tw = (...classes) =>
  classes
    .map((cls) =>
      cls
        .split(' ')
        .map((className) => `home-${className}`)
        .join(' ')
    )
    .join(' ');

const App = () => {
  return (
    <div className={tw("text-3xl mx-auto max-w-6xl")}>
      <Header />
      <div className={tw("my-10")}>
        Home page Content
      </div>
      <Footer />
    </div>

  )
}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);

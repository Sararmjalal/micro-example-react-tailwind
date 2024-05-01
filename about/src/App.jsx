import React from "react";
import "./index.scss";
import { createRoot } from 'react-dom/client';
import Header from "home/components/header";
import Footer from "home/components/footer";

const App = () => {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="text-center">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          className="rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
        />
        <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
        <p className="text-gray-500">Web designer</p>
      </div>
      <Footer />
    </div>
  )
}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);

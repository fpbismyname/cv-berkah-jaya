import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Contents";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-[100vh] bg-gray-200 p-8 gap-12">
        <Navbar />
        <Whatsapp/>
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default App;

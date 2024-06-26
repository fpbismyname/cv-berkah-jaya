import React, { useRef } from "react";
import Content from "./components/Contents";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

const App = () => {

  return (
    <>
      <div className="flex flex-col min-h-[100vh] bg-gray-200 gap-12">
        <Whatsapp/>
        <Content/>
      </div>
      <Footer />
    </>
  );
};

export default App;

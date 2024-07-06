import React, { useRef } from "react";
import Content from "./components/Contents";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <MainPage>
        <Navbar />
        <Content />
        <Footer />
      </MainPage>
    </>
  );
};

const MainPage = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[100vh] bg-gray-200 gap-12">
      {children}
    </div>
  );
};

export default App;

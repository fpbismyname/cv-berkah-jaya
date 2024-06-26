import React from "react";
import Icon_Whatsapp from "/icon-whatsapp.webp";

const whatsapp = () => {
  return (
    <div className="fixed  bottom-10 right-10 bg-white p-5 rounded-full cursor-pointer hover:drop-shadow-xl">
      <div className="flex flex-row gap-5 h-full w-full justify-center items-center">
        <img src={Icon_Whatsapp} className="w-[30px]" />
        <h1 className="flex-1 flex-col font-bold text-md text-green-500 drop-shadow-md">
          Kontak Kami
        </h1>
      </div>
    </div>
  );
};

export default whatsapp;
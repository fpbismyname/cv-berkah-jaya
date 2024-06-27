import React from "react";
import Icon_Whatsapp from "/icon-whatsapp.webp";

const whatsapp = () => {
  return (
    <div className="fixed z-10 bottom-10 right-10 bg-white p-5 rounded-full cursor-pointer hover:drop-shadow-[0px_0px_10px_#37eb34] drop-shadow-md transition mobile:p-3 tablet:p-3">
      <div className="flex flex-row gap-5 h-full w-full mobile:gap-3 tablet:gap-3">
        <a href="https://wa.me/+6281572497182" className="flex flex-row gap-4 justify-center items-center ">
        <img src={Icon_Whatsapp} className="w-[30px] mobile:w-[20px] tablet:w-[20px]" />
        <h1 className="flex-1 flex-col font-bold text-md text-green-500 drop-shadow-md mobile:text-sm tablet:text-sm">
          Kontak Kami
        </h1>
        </a>
      </div>
    </div>
  );
};

export default whatsapp;
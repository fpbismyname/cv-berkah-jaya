import React from "react";
import Icon from "/berkah-jaya.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const content = () => {
  return (
    <>
      {/* Welcome Contenr */}
      <div className="flex flex-col bg-white shadow-xl p-12 rounded-md tablet:p-28 mobile:p-10 justify-center">
        <div className="flex flex-row justify-center gap-12 tablet:flex-col-reverse mobile:flex-col-reverse tablet:gap-8 mobile:gap-4">
          <div className="flex flex-col justify-center w-1/2 gap-4 tablet:w-full mobile:w-full">
            <h1 className="text-5xl tablet:text-3xl tablet:text-center mobile:text-2xl mobile:text-center p-3">
              Selamat Datang di{" "}
              <span className="text-orange-500 font-bold">CV. Berkah Jaya</span>{" "}
            </h1>
            <p className="text-md tablet:text-md mobile:text-sm">
              Kami senang Anda mengunjungi situs kami. Di sini, Anda akan
              menemukan berbagai informasi dan layanan yang kami tawarkan dalam
              bidang konstruksi dan pemborongan bangunan. Bersama kami, impian
              Anda menjadi nyata.
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src="https://www.matamatanews.com/sites/default/files/field/image/foto-2_19.jpg"
              className="object-contain w-full rounded-md shadow-[0px_0px_10px_gray]"
            />
          </div>
        </div>
      </div>
      {/* Tentang kami */}
      <div className="flex flex-col bg-white shadow-xl p-12 rounded-md tablet:p-28 mobile:p-10 justify-center gap-12">
        <div className="flex flex-col justify-center gap-3">
          <div className="flex flex-row justify-center">
            <h1 className="text-center text-3xl font-bold">
              Tentang Kami
            </h1>
          </div>
          <div className="flex flex-row justify-center">
            <span className="block w-52 h-1 bg-orange-500 rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-center gap-12 tablet:flex-col-reverse mobile:flex-col-reverse tablet:gap-8 mobile:gap-4">
          <div className="flex flex-col justify-center w-1/2 gap-4 tablet:w-full mobile:w-full">
            <h1 className="text-5xl tablet:text-3xl tablet:text-center mobile:text-2xl mobile:text-center p-3">
              <span className="text-orange-500 font-bold">CV. Berkah Jaya</span>
            </h1>
            <p className="text-md tablet:text-md mobile:text-sm">
              CV Berkah Jaya adalah perusahaan baru yang bergerak di bidang jasa
              konstruksi dan pemborongan bangunan. Meskipun kami masih baru di
              industri ini, kami memiliki tekad kuat untuk memberikan pelayanan
              terbaik kepada setiap klien kami. Dengan berlandaskan pada tiga
              prinsip utama yaitu amanah, profesional, dan terpercaya, kami siap
              menjadi mitra Anda dalam mewujudkan berbagai proyek konstruksi
              yang berkualitas tinggi.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center tablet:flex-row mobile:flex-row">
              <img
                src={Icon}
                className="object-contain w-10/12 rounded-md drop-shadow-[0px_0px_10px_gray]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default content;

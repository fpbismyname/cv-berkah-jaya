import React, { useRef } from "react";
import Icon from "/berkah-jaya.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Navbar";

const content = (props) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col p-24 desktop:p-8 mobile:p-0 tablet:p-0 gap-24 mobile:gap-8 tablet:gap-8">
        {/* Welcome Contenr */}
        <div
          className="flex flex-col p-0 rounded-md tablet:p-28 mobile:p-10 justify-center"
          id="home"
        >
          <div className="flex flex-row justify-center gap-12 tablet:flex-col-reverse mobile:flex-col-reverse tablet:gap-8 mobile:gap-4">
            <div className="flex flex-col justify-center w-1/2 gap-4 tablet:w-full mobile:w-full">
              <h1 className="text-5xl tablet:text-3xl tablet:text-center mobile:text-2xl mobile:text-center p-3">
                Selamat Datang di{" "}
                <span className="text-orange-500 font-bold">
                  CV. Berkah Jaya
                </span>{" "}
              </h1>
              <p className="text-md tablet:text-md mobile:text-sm">
                Kami senang Anda mengunjungi situs kami. Di sini, Anda akan
                menemukan berbagai informasi dan layanan yang kami tawarkan
                dalam bidang konstruksi dan pemborongan bangunan. Bersama kami,
                impian Anda menjadi nyata.
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
        <div
          className="flex flex-col p-12 rounded-md tablet:p-28 mobile:p-10 justify-center gap-12"
          id="about"
        >
          <div className="flex flex-col justify-center gap-3">
            <div className="flex flex-row justify-center">
              <h1 className="text-center text-3xl font-bold">Tentang Kami</h1>
            </div>
            <div className="flex flex-row justify-center">
              <span className="block w-52 h-1 bg-orange-500 rounded-full"></span>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-center gap-12 tablet:flex-col-reverse mobile:flex-col-reverse tablet:gap-8 mobile:gap-4">
            <div className="flex flex-col justify-center w-1/2 gap-4 tablet:w-full mobile:w-full">
              <h1 className="text-5xl tablet:text-3xl tablet:text-center mobile:text-2xl mobile:text-center p-3">
                <span className="text-orange-500 font-bold">
                  CV. Berkah Jaya
                </span>
              </h1>
              <p className="text-md tablet:text-md mobile:text-sm">
                CV Berkah Jaya adalah perusahaan baru yang bergerak di bidang
                jasa konstruksi dan pemborongan bangunan. Meskipun kami masih
                baru di industri ini, kami memiliki tekad kuat untuk memberikan
                pelayanan terbaik kepada setiap klien kami. Dengan berlandaskan
                pada tiga prinsip utama yaitu amanah, profesional, dan
                terpercaya, kami siap menjadi mitra Anda dalam mewujudkan
                berbagai proyek konstruksi yang berkualitas tinggi.
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
        {/* Layanan kami */}
        <div
          className="flex flex-col p-12 rounded-md tablet:p-28 mobile:p-10 justify-center gap-12"
          id="service"
        >
          <div className="flex flex-col justify-center gap-3">
            <div className="flex flex-row justify-center">
              <h1 className="text-center text-3xl font-bold">Layanan kami</h1>
            </div>
            <div className="flex flex-row justify-center">
              <span className="block w-56 h-1 bg-orange-500 rounded-full"></span>
            </div>
          </div>
          <div className="flex flex-row mobile:flex-col tablet:flex-col justify-center gap-12 ">
            <div className="flex flex-col justify-center gap-12 tablet:gap-8 mobile:gap-4 ">
              <div className="flex bg-white p-5 rounded-md flex-col justify-center gap-4 tablet:w-full mobile:w-full text-center shadow-md">
                <i className="bi bi-house-gear-fill text-7xl text-orange-500 drop-shadow-[0px_0px_5px_#f97316]"></i>
                <h1 className="text-xl tablet:text-3xl tablet:text-center mobile:text-2xl mobile:text-center p-3">
                  <span className="text-orange-500 font-bold">
                    Layanan Konstruksi
                  </span>
                </h1>
                <p className="text-md tablet:text-md mobile:text-sm">
                  CV Berkah Jaya menyediakan layanan konstruksi yang
                  komprehensif untuk memenuhi berbagai kebutuhan proyek bangunan
                  Anda. Kami menawarkan solusi yang mencakup seluruh proses
                  pembangunan, dari perencanaan awal hingga penyelesaian akhir,
                  dengan fokus pada kualitas dan efisiensi.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-12 tablet:gap-8 mobile:gap-4 ">
              <div className="flex bg-white p-5 rounded-md flex-col justify-center gap-4 tablet:w-full mobile:w-full text-center shadow-md">
                <i className="bi bi-houses-fill text-7xl text-orange-500 drop-shadow-[0px_0px_5px_#f97316]"></i>
                <h1 className="text-xl tablet:text-3xl tablet:text-center mobile:text-2xl mobile:text-center p-3">
                  <span className="text-orange-500 font-bold">
                    Layanan Pemborongan
                  </span>
                </h1>
                <p className="text-md tablet:text-md mobile:text-sm">
                  Kami menawarkan layanan borongan yang fleksibel dan terjangkau
                  untuk berbagai jenis proyek, baik skala kecil maupun besar.
                  Dengan sistem borongan, Anda mendapatkan kemudahan dan
                  kejelasan dalam perencanaan biaya proyek.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-12 tablet:gap-8 mobile:gap-4">
              <div className="flex bg-white p-5 rounded-md flex-col justify-center gap-4 tablet:w-full mobile:w-full text-center shadow-md">
                <i className="bi bi-house-heart-fill text-7xl text-orange-500 drop-shadow-[0px_0px_5px_#f97316]"></i>
                <h1 className="text-xl tablet:text-3xl tablet:text-center mobile:text-2xl mobile:text-center p-3">
                  <span className="text-orange-500 font-bold">
                    Layanan Renovasi
                  </span>
                </h1>
                <p className="text-md tablet:text-md mobile:text-sm">
                  Layanan renovasi bangunan dari CV Berkah Jaya dirancang untuk
                  memperbaiki dan memperbarui bangunan Anda, memberikan tampilan
                  dan fungsi yang lebih baik. Baik untuk renovasi rumah tinggal,
                  kantor, maupun bangunan komersial, kami siap membantu Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Keunggulan kami */}
        <div
          className="flex flex-col p-12 rounded-md tablet:p-28 mobile:p-10 justify-center gap-12"
        >
          <div className="flex flex-col justify-center gap-3">
            <div className="flex flex-row justify-center">
              <h1 className="text-center text-3xl font-bold">
                Mengapa harus menggunakan jasa kami ?
              </h1>
            </div>
            <div className="flex flex-row justify-center">
              <span className="block w-[600px] h-1 bg-orange-500 rounded-full"></span>
            </div>
          </div>
          <div className="flex flex-row mobile:flex-col tablet:flex-col justify-center gap-12">
            <div className="flex flex-col justify-center gap-12 tablet:gap-8 mobile:gap-4">
              <div className="flex bg-white p-5 rounded-md flex-col justify-center gap-4 tablet:w-full mobile:w-full text-center shadow-md">
                <i className="bi bi-bookmark-star-fill text-7xl text-orange-500 drop-shadow-[0px_0px_5px_#f97316]"></i>
                <h1 className="text-xl tablet:text-3xl tablet:text-center mobile:text-2xl mobile:text-center p-3">
                  <span className="text-orange-500 font-bold">Amanah</span>
                </h1>
                <p className="text-md tablet:text-md mobile:text-sm">
                  Di CV Berkah Jaya, kami menempatkan nilai amanah sebagai
                  prioritas utama. Kami memahami bahwa kepercayaan adalah
                  fondasi dari setiap hubungan bisnis yang sukses.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-12 tablet:gap-8 mobile:gap-4 ">
              <div className="flex bg-white p-5 rounded-md flex-col justify-center gap-4 tablet:w-full mobile:w-full text-center shadow-md">
                <i className="bi bi-award-fill text-7xl text-orange-500 drop-shadow-[0px_0px_5px_#f97316]"></i>
                <h1 className="text-xl tablet:text-3xl tablet:text-center mobile:text-2xl mobile:text-center p-3">
                  <span className="text-orange-500 font-bold">Profesional</span>
                </h1>
                <p className="text-md tablet:text-md mobile:text-sm">
                  Profesionalisme adalah landasan utama dalam setiap pekerjaan
                  yang kami lakukan. Dengan tim yang berpengalaman dan
                  berkompeten
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-12 tablet:gap-8 mobile:gap-4">
              <div className="flex bg-white p-5 rounded-md flex-col justify-center gap-4 tablet:w-full mobile:w-full text-center shadow-md">
                <i className="bi bi-shield-fill-check text-7xl text-orange-500 drop-shadow-[0px_0px_5px_#f97316]"></i>
                <h1 className="text-xl tablet:text-3xl tablet:text-center mobile:text-2xl mobile:text-center p-3">
                  <span className="text-orange-500 font-bold">Amanah</span>
                </h1>
                <p className="text-md tablet:text-md mobile:text-sm">
                  Di CV Berkah Jaya, kami menempatkan nilai amanah sebagai
                  prioritas utama. Kami memahami bahwa kepercayaan adalah
                  fondasi dari setiap hubungan bisnis yang sukses.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Testimoni */}
        <div
          className="flex flex-col p-12 rounded-md tablet:p-28 mobile:p-10 justify-center gap-12"
          id="testimonial"
        >
          <div className="flex flex-col justify-center gap-3">
            <div className="flex flex-row justify-center">
              <h1 className="text-center text-3xl font-bold">Testimoni</h1>
            </div>
            <div className="flex flex-row justify-center">
              <span className="block w-36 h-1 bg-orange-500 rounded-full"></span>
            </div>
          </div>
          <div className="flex flex-row mobile:flex-col tablet:flex-col justify-center gap-12">
            <div className="flex flex-col justify-center gap-12 tablet:gap-8 mobile:gap-4">
              <img src={Icon} width={250} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default content;

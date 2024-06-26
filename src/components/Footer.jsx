import React from "react";
import Icon from "/berkah-jaya.png";

const footer = () => {
  return (
    <>
      <footer className="flex flex-col bg-white w-full shadow-[0px_0px_10px_gray]">
        <div className="flex flex-row justify-between p-12 gap-12 tablet:flex-col mobile:flex-col mobile:text-sm">
          <div className="flex flex-col gap-5 tablet:text-center mobile:text-center">
            <div className="flex flex-row mobile:justify-center tablet:justify-center">
              <div className="flex flex-col ">
                <img
                  src={Icon}
                  className="object-contain w-8 mr-5"
                  alt="CV Berkah Jaya"
                />
              </div>
              <div className="flex flex-col justify-center text-orange-500 font-bold text-3xl">
                Berkah Jaya
              </div>
            </div>
            <div className="flex flex-col w-[40vh] tablet:w-full mobile:w-full">
              <p className="">
                CV Berkah Jaya adalah perusahaan baru yang bergerak di bidang
                jasa konstruksi dan pemborongan bangunan. Meskipun kami masih
                baru di industri ini, kami memiliki tekad kuat untuk memberikan
                pelayanan terbaik kepada setiap klien kami. Dengan berlandaskan
                pada tiga prinsip utama yaitu amanah, profesional, dan
                terpercaya, kami siap menjadi mitra Anda dalam mewujudkan
                berbagai proyek konstruksi yang berkualitas tinggi.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-12 justify-center tablet:flex-col tablet:text-center mobile:flex-col mobile:text-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">Navigasi</h1>
              <ul className="flex flex-col gap-2">
                <a className="hover:underline" href="#home">Beranda</a>
                <a className="hover:underline" href="#about">Tentang Kami</a>
                <a className="hover:underline" href="#service">Layanan Kami</a>
                <a className="hover:underline" href="#contact">Kontak</a>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">Hubungi Kami</h1>
              <ul className="flex flex-col gap-2">
                <a className="hover:underline" href="https://wa.me/+6281572497182">
                <i className="bi bi-caret-right-fill animate-pulse mr-3"></i><i className="bi bi-whatsapp mr-3"></i>Whatsapp
                </a>
                <a className="hover:underline" href="https://instagram.com">
                <i className="bi bi-caret-right-fill animate-pulse mr-3"></i><i className="bi bi-instagram mr-3"></i>Instagram
                </a>
                <a className="hover:underline" href="mailto:cv.berkah.jaya.2024@gmail.com">
                <i className="bi bi-caret-right-fill animate-pulse mr-3"></i><i className="bi bi-envelope mr-3"></i>Email
                </a>
                <a className="hover:underline" href="tel:+6281572497182">
                <i className="bi bi-caret-right-fill animate-pulse mr-3"></i><i className="bi bi-telephone mr-3"></i>Telepon
                </a>
                <a className="hover:underline" href="">
                <i className="bi bi-caret-right-fill animate-pulse mr-3"></i><i className="bi bi-geo-alt mr-3"></i>Lokasi Saya
                </a>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">Operasional</h1>
              <ul className="flex flex-col gap-2">
                <p>
                  <i className="bi bi-clock mr-3"></i>Senin, 9:00 - 17:00
                </p>
                <p>
                  <i className="bi bi-clock mr-3"></i>Selasa, 9:00 - 17:00
                </p>
                <p>
                  <i className="bi bi-clock mr-3"></i>Rabu, 9:00 - 17:00
                </p>
                <p>
                  <i className="bi bi-clock mr-3"></i>Kamis, 9:00 - 17:00
                </p>
                <p>
                  <i className="bi bi-clock mr-3"></i>Juma't, 9:00 - 17:00
                </p>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center p-8 bg-orange-500">
            <h1 className="text-md">Copyright © 2024 | CV. Berkah Jaya Cianjur</h1>
        </div>
      </footer>
    </>
  );
};

export default footer;

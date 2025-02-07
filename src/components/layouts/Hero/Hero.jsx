import { useState } from "react";
import { Link } from "react-router-dom";
import Time from "../../fragments/Time/Time";

const slides = [
  {
    title: "Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualfikasi",
    description:
      "Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.",
    date: "22 Januari 2024",
    image: "./img/heroImage.png",
    link: "/detailsnews",
  },
  {
    title: "Piala Asia 2024: Jadwal Lengkap Timnas Indonesia di Fase Grup",
    description:
      "Simak jadwal lengkap Timnas Indonesia di fase grup Piala Asia 2024, termasuk laga melawan tim-tim kuat Asia.",
    date: "24 Januari 2024",
    image: "./img/heroImage.png",
    link: "/detailsnews",
  },
  {
    title: "Transfer Terbaru: Pemain Muda Indonesia Bergabung dengan Klub Eropa",
    description:
      "Seorang pemain muda berbakat Indonesia resmi bergabung dengan klub Eropa ternama untuk musim 2024/2025.",
    date: "25 Januari 2024",
    image: "./img/heroImage.png",
    link: "/detailsnews",
  },
  {
    title: "Update Liga 1: Persaingan Ketat di Papan Atas Klasemen",
    description:
      "Persaingan semakin sengit di papan atas klasemen Liga 1 Indonesia dengan beberapa tim saling kejar poin.",
    date: "26 Januari 2024",
    image: "./img/heroImage.png",
    link: "/detailsnews",
  },
  {
    title: "Analisis: Apa yang Membuat Timnas U-23 Tampil Konsisten?",
    description:
      "Sebuah analisis mendalam mengenai performa konsisten Timnas U-23 Indonesia di kancah internasional.",
    date: "27 Januari 2024",
    image: "./img/heroImage.png",
    link: "/detailsnews",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center p-7 lg:p-20 mx-auto relative top-10 transition-all duration-500 ease-in-out">
      <div className="container flex flex-col lg:flex-row justify-between gap-10">
        <article className="lg:w-2/5 flex flex-col gap-7">
          <h3 className="font-semibold">Headline</h3>
          <h2 className="font-bold lg:text-4xl">{slides[currentSlide].title}</h2>
          <p className="text-base font-normal">{slides[currentSlide].description}</p>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="rgba(130, 130, 130, 1)"
              className="bi bi-calendar-event"
              viewBox="0 0 16 16"
            >
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <Time name={slides[currentSlide].date} />
          </div>
          <Link
            to={slides[currentSlide].link}
            className="w-max text-blue-500 hover:text-blue-700 font-medium flex items-center gap-2"
          >
            <p>Baca Selengkapnya</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
              />
            </svg>
          </Link>
        </article>

        <img
          className="lg:w-1/2 rounded-3xl object-cover transition-transform duration-500 ease-in-out"
          src={slides[currentSlide].image}
          alt="heroImg"
        />
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center my-10">
        <button onClick={prevSlide} className="mr-5 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
        <p className="font-semibold">{currentSlide + 1}</p>
        <p className="mx-10 font-semibold">dari</p>
        <p className="font-semibold">{slides.length}</p>
        <button onClick={nextSlide} className="ml-5 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default Hero;

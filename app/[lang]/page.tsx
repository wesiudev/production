import Link from "next/link";
import Header from "../components/header";
import Hero from "../auth/hero/Hero";
import { Accents } from "../components/accents/accents";
import Capture_inspiration_with_Technology_of_Decocanva from "@/public/assets/images/home_page_images/Capture_inspiration_with_Technology_of_Decocanva.png";
import Connect_with_inspiring_people from "@/public/assets/images/home_page_images/Connect_with_inspiring_people.png";
import Create_stunning_visuals_from_your_ideas from "@/public/assets/images/home_page_images/Create_stunning_visuals_from_your_ideas.png";
import Explore_your_creativity_with_Decocanva from "@/public/assets/images/home_page_images/Explore_your_creativity_with_Decocanva.png";
import decocanva_main_image from "@/public/assets/images/home_page_images/decocanva_main_image.png";
import playful_characters from "@/public/assets/images/home_page_images/playful_characters.png";
import decocanva_use_case_art from "@/public/assets/images/home_page_images/decocanva_use_case_art.png";
import decocanva_use_case_workers from "@/public/assets/images/home_page_images/decocanva_use_case_workers.png";
import decocanva_use_case_design from "@/public/assets/images/home_page_images/decocanva_use_case_design.png";
import decocanva_use_case_educators from "@/public/assets/images/home_page_images/decocanva_use_case_educators.png";
import decocanva_use_case_event_planners from "@/public/assets/images/home_page_images/decocanva_use_case_event_planners.png";
import decocanva_use_case_everyone from "@/public/assets/images/home_page_images/decocanva_use_case_everyone.png";
import decocanva_use_case_home_design from "@/public/assets/images/home_page_images/decocanva_use_case_home_design.png";
import decocanva_use_case_influencers from "@/public/assets/images/home_page_images/decocanva_use_case_influencers.png";
import decocanva_use_case_musicans from "@/public/assets/images/home_page_images/decocanva_use_case_musicans.png";
import decocanva_use_case_students from "@/public/assets/images/home_page_images/decocanva_use_case_students.png";
import decocanva_use_case_entrepreneurs from "@/public/assets/images/home_page_images/decocanva_use_case_workers.png";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { FaArrowLeft, FaArrowRight, FaMagic } from "react-icons/fa";
import VerticalScroll from "../components/vertical_scroll";
export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  const sectionWithImages = [
    {
      src: Capture_inspiration_with_Technology_of_Decocanva,
      h1: dictionary.Homepage.capture_h1,
      h2: dictionary.Homepage.capture_h2,
      p: dictionary.Homepage.capture_p,
    },
    {
      src: Connect_with_inspiring_people,
      h1: dictionary.Homepage.connect_h1,
      h2: dictionary.Homepage.connect_h2,
      p: dictionary.Homepage.connect_p,
    },
    {
      src: Create_stunning_visuals_from_your_ideas,
      h1: dictionary.Homepage.create_h1,
      h2: dictionary.Homepage.create_h2,
      p: dictionary.Homepage.create_p,
    },
    {
      src: Explore_your_creativity_with_Decocanva,
      h1: dictionary.Homepage.explore_h1,
      h2: dictionary.Homepage.explore_h2,
      p: dictionary.Homepage.explore_p,
    },
  ];
  const sectionWithUseCases = [
    {
      h1: dictionary.Homepage.inspiration_drawing_h1,
      h2: dictionary.Homepage.inspiration_drawing_h2,
    },
    {
      h1: dictionary.Homepage.inspiration_painting_h1,
      h2: dictionary.Homepage.inspiration_painting_h2,
    },
    {
      h1: dictionary.Homepage.social_media_h1,
      h2: dictionary.Homepage.social_media_h2,
    },
    {
      h1: dictionary.Homepage.educational_h1,
      h2: dictionary.Homepage.educational_h2,
    },
    {
      h1: dictionary.Homepage.marketing_h1,
      h2: dictionary.Homepage.marketing_h2,
    },
    {
      h1: dictionary.Homepage.books_covers_h1,
      h2: dictionary.Homepage.books_covers_h2,
    },
    {
      h1: dictionary.Homepage.interior_design_h1,
      h2: dictionary.Homepage.interior_design_h2,
    },
    {
      h1: dictionary.Homepage.merchandise_h1,
      h2: dictionary.Homepage.merchandise_h2,
    },
    {
      h1: dictionary.Homepage.development_h1,
      h2: dictionary.Homepage.development_h2,
    },
  ];
  const sectionWithIndividuals = [
    {
      src: decocanva_use_case_art,
      h1: dictionary.Homepage.artists_h1,
      h2: dictionary.Homepage.artists_h2,
    },
    {
      src: decocanva_use_case_design,
      h1: dictionary.Homepage.designers_h1,
      h2: dictionary.Homepage.designers_h2,
    },
    {
      src: decocanva_use_case_educators,
      h1: dictionary.Homepage.educators_h1,
      h2: dictionary.Homepage.educators_h2,
    },
    {
      src: decocanva_use_case_students,
      h1: dictionary.Homepage.students_h1,
      h2: dictionary.Homepage.students_h2,
    },
    {
      src: decocanva_use_case_event_planners,
      h1: dictionary.Homepage.event_planners_h1,
      h2: dictionary.Homepage.event_planners_h2,
    },
    {
      src: decocanva_use_case_influencers,
      h1: dictionary.Homepage.influencers_h1,
      h2: dictionary.Homepage.influencers_h2,
    },
    {
      src: decocanva_use_case_musicans,
      h1: dictionary.Homepage.writers_musicans_h1,
      h2: dictionary.Homepage.writers_musicans_h2,
    },
    {
      src: decocanva_use_case_home_design,
      h1: dictionary.Homepage.home_decor_h1,
      h2: dictionary.Homepage.home_decor_h2,
    },
    {
      src: decocanva_use_case_entrepreneurs,
      h1: dictionary.Homepage.entrepreneurs_h1,
      h2: dictionary.Homepage.entrepreneurs_h2,
    },
    {
      src: decocanva_use_case_everyone,
      h1: dictionary.Homepage.everyone_h1,
      h2: dictionary.Homepage.everyone_h2,
    },
  ];
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-zinc-900 via-white-900 to-purple-900 ">
      <Hero />
      <main className="font-sans overflow-x-hidden relative flex items-center min-h-screen  py-2 px-3 lg:px-0">
        <Header />
        <Accents />
        <div className="justify-evenly h-[40vh] lg:mt-0 lg:h-max w-screen mx-0 sm:mx-auto flex flex-col sm:w-4/5 lg:w-3/4">
          <h1 className="z-30 ">
            <div className="text-[12vw] sm:text-[10vw] xl:text-9xl text-gray-50 font-bold text-center sm:text-left drop-shadow-md shadow-black">
              Deco<span className="text-purple-600">canva</span>
            </div>
            <div className="font-light mt-3 text-xl sm:text-2xl lg:text-3xl w-4/5 lg:w-3/4 text-gray-50 text-center sm:text-left z-30  mx-auto sm:mx-0">
              <span className="text-white drop-shadow-md shadow-black">
                {dictionary.Homepage.join}
              </span>
            </div>
          </h1>
          <div className="flex z-30 w-full space-x-3 justify-center items-center sm:w-max lg:mt-8 mx-auto sm:mx-0">
            <a
              className="py-3 px-5 w-max sm:w-auto bg-gray-500 hover:bg-gray-400 rounded-lg sm:text-xl text-gray-100 cursor-pointer"
              href="#about"
            >
              {dictionary.Homepage.read_more}
            </a>
            <Link
              href="/ai-generator-download"
              className="py-3 px-5 w-max sm:w-auto bg-green-500 hover:bg-green-400 rounded-lg sm:text-xl text-gray-100 cursor-pointer"
            >
              {dictionary.Homepage.download_app}
            </Link>
          </div>
        </div>
        <section
          className={`duration-[750ms] h-[300vh] w-full bg-gradient-to-b from-purple-800 to-transparent absolute left-0 top-[110vh] sm:top-[100vh] z-50`}
        >
          <div
            id="about"
            className="w-[90vw] sm:w-3/4 mx-auto text-xl sm:text-2xl lg:text-3xl flex flex-col mt-12 bg-white px-3 xl:px-12 pt-20 rounded-t-md relative text-zinc-700 drop-shadow-md shadow-black"
          >
            <span className="opacity-75 w-16 h-16 xl:w-20 xl:h-20 rounded-full absolute from-purple-600 to-purple-800 bg-gradient-to-br shadow-sm shadow-black left-16 top-16" />
            <span className="opacity-75 w-8 h-8 rounded-full absolute from-purple-600 to-purple-900 bg-gradient-to-tl shadow-sm shadow-black top-8 left-8" />
            <span className="opacity-75 w-8 h-8  absolute  rotate-45 from-purple-600 to-purple-900 bg-gradient-to-tl shadow-sm shadow-black top-8 right-8" />
            <h2 className="text-3xl lg:text-5xl text-zinc-700 drop-shadow-md shadow-black italic font-semibold mt-24 mb-6 text-center px-0 lx:px-12">
              {dictionary.Homepage.hero}
              {""}{" "}
              <span className="text-purple-600">
                {dictionary.Homepage.decocava}
              </span>
            </h2>
            <div className="grid grid-cols-1">
              {sectionWithImages.map((item: any, i: any) => (
                <div
                  key={i}
                  className={`flex flex-col xl:flex-row w-full justify-between rounded-lg my-6 ${
                    i % 2 !== 0 ? "xl:flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={` prose text-zinc-700 drop-shadow-md shadow-black h-full w-full flex flex-col  justify-center mx-auto font-sans text-center mb-12 xl:mb-0 ${
                      i % 2 !== 0 ? "xl:pl-6" : "xl:pr-6"
                    } `}
                  >
                    <h1 className="!text-2xl lg:!text-4xl text-zinc-700 drop-shadow-md shadow-black">
                      {item.h1}
                    </h1>
                    <h2 className="!text-lg lg:!text-2xl italic -mt-3 text-white bg-purple-400 text-center ">
                      {item.h2}
                    </h2>
                    <p className="text-zinc-700 drop-shadow-md shadow-black">
                      {item.p}
                    </p>
                  </div>
                  <div className="h-max">
                    <Image
                      src={item.src}
                      width={512}
                      height={512}
                      alt={item.h1 + " image by decocanva team"}
                      className="rounded-xl drop-shadow-md  shadow-black w-full aspect-square"
                    />
                  </div>
                </div>
              ))}
              <h1 className=" justify-center text-3xl mx-auto text-white drop-shadow-md shadow-black bg-purple-400 w-full text-center my-12 font-bold italic lg:text-5xl py-2 flex flex-row items-center">
                {dictionary.Homepage.unleash_h1}
                <FaMagic className="ml-4" />
              </h1>
              <h2 className="text-zinc-700 drop-shadow-md shadow-black mb-6 text-lg lg:text-2xl">
                {dictionary.Homepage.unleash_h2}
              </h2>
              <Image
                src={decocanva_main_image}
                width={1024}
                height={1024}
                alt="Unleash your creativity and transform your ideas into stunning
                visual masterpieces with AI Generator Decocanva"
                className="rounded-xl drop-shadow-md  shadow-black w-full h-max block lg:hidden"
              />
              <Image
                src={playful_characters}
                width={1024}
                height={1024}
                alt="Unleash your creativity and transform your ideas into stunning
                visual masterpieces with AI Generator Decocanva"
                className="rounded-xl drop-shadow-md shadow-black w-full h-max hidden lg:block"
              />
              <h1 className=" justify-center text-3xl mx-auto text-white drop-shadow-md shadow-black bg-purple-400 w-full text-center my-12 font-bold italic lg:text-5xl py-2 flex flex-row items-center">
                {dictionary.Homepage.easier_h1}
              </h1>
              <h2 className="text-zinc-700 drop-shadow-md shadow-black mb-6 text-lg lg:text-2xl">
                {dictionary.Homepage.easier_h2}
              </h2>
            </div>
            <div className="grid grid-cols-1 my-12">
              {sectionWithIndividuals.map((item: any, i: any) => (
                <div
                  key={i}
                  className={`flex flex-col xl:flex-row w-full justify-between rounded-lg my-6 ${
                    i % 2 !== 0 ? "xl:flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={` prose text-zinc-700 drop-shadow-md shadow-black h-full w-full flex flex-col  justify-center mx-auto font-sans mb-12 xl:mb-0 ${
                      i % 2 !== 0 ? "xl:pl-6 text-right" : "xl:pr-6 text-left"
                    } `}
                  >
                    <h1 className="!text-4xl lg:!text-6xl text-zinc-700 drop-shadow-md shadow-black">
                      {item.h1}
                    </h1>
                    <h2 className="!text-lg lg:!text-2xl italic -mt-3 text-zinc-700 drop-shadow-md shadow-black ">
                      {item.h2}
                    </h2>
                  </div>
                  <div className="h-max">
                    <Image
                      src={item.src}
                      width={512}
                      height={512}
                      alt={item.h1 + " image by decocanva team"}
                      className="rounded-xl drop-shadow-md  shadow-black w-full aspect-square"
                    />
                  </div>
                </div>
              ))}
            </div>
            <h1 className=" justify-center text-3xl mx-auto text-white drop-shadow-md shadow-black bg-purple-400 w-full text-center my-12 font-bold italic lg:text-5xl py-2 flex flex-row items-center">
              {dictionary.Homepage.capabilities_h1}
            </h1>
            <h2 className="!text-lg lg:!text-2xl italic -mt-3 text-zinc-700 drop-shadow-md shadow-black ">
              {dictionary.Homepage.capabilities_h2}
            </h2>
            <VerticalScroll sectionWithUseCases={sectionWithUseCases} />
            <div className="flex justify-center my-8">
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md font-semibold shadow-lg transition duration-300">
                Download Decocanva Now
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

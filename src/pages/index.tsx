import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { About } from "../components/About";
import { Buy } from "../components/Buy";
import { First } from "../components/First";
import { Tokenomics } from "../components/Tokenomics";
import { Roadmap } from "../components/Roadmap";
import { Faqs } from "../components/Faq";

const Home: NextPage = () => {
  const Detail = dynamic(() => import("../components/Detail"), {
    loading: () => <p>Loading...</p>,
  });
  return (
    <div className="flex flex-col items-center transition-all duration-300 min-h-full">
      <First />
      <About />
      <Buy />
      <Tokenomics />
      <Roadmap />
      <Faqs />
    </div>
  );
};

export default Home;
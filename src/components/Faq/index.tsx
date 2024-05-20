import { useState } from "react";
import { TbMinus, TbPlus } from "react-icons/tb";
import { FaqData } from "./faqData";
import { Slide } from "react-awesome-reveal";

interface OpenItemsState {
  [key: number]: boolean;
}

export const Faqs = () => {
  const [openItems, setOpenItems] = useState<OpenItemsState>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const updatedItems: OpenItemsState = {};

      // Toggle the selected item
      updatedItems[index] = !prev[index] || false;

      // Close all other items
      Object.keys(prev).forEach((key) => {
        if (parseInt(key) !== index) {
          updatedItems[parseInt(key)] = false;
        }
      });

      return updatedItems;
    });
  };

  return (
    <section
      className="w-full bg-[#BFE3FF]  min-h-screen items-center justify-center flex"
      id="faq"
    >
      <div className="w-full max-w-[1200px] flex p-1 relative flex-col animate__animated animate__fadeIn items-center gap-4">
        <div className="flex items-center justify-center gap-3 flex-col w-full">
          <h1 className="xl:text-[100px] text-[70px] outlined-bold uppercase">{`Faqs`}</h1>
        </div>
        <Slide>
          {FaqData.map((data, index) => (
            <div
              className="lg:w-[950px] w-[350px] md:w-[600px] p-4 border-2 border-black bg-[#CBEFFF] rounded-2xl shadow-md shadow-black flex flex-col justify-center gap-4 relative cursor-pointer"
              key={index}
              onClick={() => toggleItem(index)}
            >
              <h1 className="md:text-[30px] text-[15px] text-left outlined uppercase text-white">
                {data.title}
              </h1>
              <div className="bg-[#000000e3] text-white rounded-full w-5 h-5 md:w-8 md:h-8 flex items-center justify-center absolute md:right-6 right-2 md:top-6 top-2">
                {openItems[index] ? (
                  <TbMinus size={25} />
                ) : (
                  <TbPlus size={25} />
                )}
              </div>
              <div
                className={`w-full h-full  ${
                  openItems[index] ? "block" : "hidden"
                }`}
              >
                <p className="md:text-lg text-sm font-bold text-black">
                  {data.content}
                </p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};

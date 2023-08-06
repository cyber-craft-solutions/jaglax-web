import Header from "@/shared/Header";
import localFont from "next/font/local";
import Text from "@/shared/Text";
import Image from "next/image";

import concepts_main from "../../assets/images/concepts_main.jpg";
import concepts_1 from "../../assets/images/concepts_1.jpg";
import concepts_2 from "../../assets/images/concepts_2.jpg";
import concepts_3 from "../../assets/images/concepts_3.jpg";
import concepts_4 from "../../assets/images/concepts_4.jpg";
import concepts_5 from "../../assets/images/concepts_5.jpg";
import concepts_6 from "../../assets/images/concepts_6.jpg";
import concepts_7 from "../../assets/images/concepts_7.jpg";
import Footer from "@/shared/Footer";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});

export default function Concepts() {
  return (
    <div>
      <Header type="dark" />
      <div className="pt-20 pb-12 px-7 flex justify-center">
        <Text
          className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
        >
          Concepts
        </Text>
      </div>
      <div className="px-7 flex flex-col items-center">
        <Image src={concepts_main} alt="concepts_main" />
        <Text className="pt-10 text-center">
          Koala offers personalised hospitality services to travellers staying
          across Jaglax Homes’ iconic holiday homes. Our luxurious homestays are
          meticulously designed and fully equipped to offer a sanctuary of
          tranquillity, allowing you to escape the demands of everyday life and
          immerse yourself in a haven of comfort
        </Text>
        <Image src={concepts_1} alt="concepts_1" className="pt-10" />
        <Image src={concepts_2} alt="concepts_2" className="pt-[30px]" />
        <Image src={concepts_3} alt="concepts_3" className="pt-[30px]" />
        <Text className="pt-[30px]">
          Our professional hospitality team is committed to ensuring that your
          every need is met, with personalized services that exceed your
          expectations. Whether it is keeping your home clean, arranging a spa
          treatment, organizing an adventurous excursion, or simply providing
          you with delectable meals cooked by our talented chefs, we are here to
          curate a tailor-made experience that caters to your desires.
        </Text>
        <Image src={concepts_4} alt="concepts_3" className="pt-[30px]" />
        <Image src={concepts_5} alt="concepts_5" className="pt-[30px]" />
        <Text className="pt-[30px]">
          At Koala, we invite you to embrace the spirit of our namesake and live
          like a koala during your stay. Let us be your sanctuary of serenity,
          your oasis of calm, and your gateway to a supremely restful
          experience. Indulge in a truly unforgettable stay at our villas and
          apartments, where every moment is crafted to redefine your hospitality
          experience.
        </Text>
        <Image src={concepts_6} alt="concepts_3" className="pt-[30px]" />
        <Image src={concepts_7} alt="concepts_3" className="pt-[30px]" />
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
}

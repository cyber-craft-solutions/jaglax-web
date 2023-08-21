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
import { fetchConcepts } from "@/sanity/api/concepts.api";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});

const Concepts = async () => {
  const data = await fetchConcepts();
  return (
    <div>
      <Header type="dark" />
      <div className="pt-20 pb-12 px-7 flex justify-center">
        <Text
          className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
        >
          {data?.conceptTitle}
        </Text>
      </div>
      <div className="px-7 flex flex-col items-center gap-6">
        {data.conceptImages.map((img: any, i: any) => {
          return (
            <Image
              key={i}
              src={img.url}
              width={300}
              height={300}
              alt="oncepts_main"
              className="object-cover w-[300px] h-[300px]"
            />
          );
        })}
        <Text className=" text-center">{data?.conceptContent}</Text>
        {data.conceptImagesFirst.map((img: any, i: any) => {
          return (
            <Image
              key={i}
              src={img.url}
              width={300}
              height={300}
              alt="oncepts_main"
              className="object-cover w-[300px] h-[300px]"
            />
          );
        })}
        <Text className="text-center">{data?.conceptFirstParaText}</Text>
        {data?.conceptImagesSecond?.map((img: any, i: any) => {
          return (
            <Image
              key={i}
              src={img.url}
              width={300}
              height={300}
              alt="oncepts_main"
              className="object-cover w-[300px] h-[300px]"
            />
          );
        })}
        <Text className=" text-center">{data?.conceptSecondParaText}</Text>
        {data?.conceptImagesThird?.map((img: any, i: any) => {
          return (
            <Image
              key={i}
              src={img.url}
              width={300}
              height={300}
              alt="oncepts_main"
              className="object-cover w-[300px] h-[300px]"
            />
          );
        })}
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Concepts;

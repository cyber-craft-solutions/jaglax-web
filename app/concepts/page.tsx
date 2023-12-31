import Header from "@/shared/Header";
import localFont from "next/font/local";
import Text from "@/shared/Text";
import Image from "next/image";
import Footer from "@/shared/Footer";
import { fetchConcepts } from "@/sanity/api/concepts.api";
import { Nunito_Sans } from "next/font/google";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});
const nunito = Nunito_Sans({ subsets: ["latin"] });
const Concepts = async () => {
  const data = await fetchConcepts();
  return (
    <div>
      <Header type="dark" />
      <div className="pt-20 pb-12 px-3 flex justify-center">
        <Text
          className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
        >
          {data?.conceptTitle}
        </Text>
      </div>
      <div>
        <div className="px-3 flex flex-col items-center gap-6 w-full">
          {data.conceptImages.map((img: any, i: any) => {
            return (
              <Image
                key={i}
                src={img.url}
                width={300}
                height={300}
                alt="oncepts_main"
                className="object-cover w-full h-[300px] md:w-[1060px] md:h-[535px]"
              />
            );
          })}
          <Text
            className={`${nunito.className}  text-center text-lg  md:w-[75%]`}
          >
            {data?.conceptContent}
          </Text>
          <div className="flex md:flex-row  flex-col items-center gap-3 justify-center">
            <div>
              {data.conceptImages1.map((img: any, i: any) => {
                return (
                  <Image
                    key={i}
                    src={img.url}
                    width={300}
                    height={300}
                    alt="oncepts_main"
                    className="object-cover w-full h-[300px] md:w-[515px] md:h-[696px]"
                  />
                );
              })}
            </div>
            <div className="flex flex-col gap-3">
              {data.conceptImagesFirst.map((img: any, i: any) => {
                return (
                  <Image
                    key={i}
                    src={img.url}
                    width={300}
                    height={300}
                    alt="oncepts_main"
                    className="object-cover w-full h-[300px] md:w-[533px] md:h-[348px]"
                  />
                );
              })}
            </div>
          </div>
          <Text
            className={`${nunito.className}  text-center text-lg  md:w-[75%]`}
          >
            {data?.conceptFirstParaText}
          </Text>
          <div className="flex flex-col md:flex-row items-center gap-3 justify-center">
            {data?.conceptImagesSecond?.map((img: any, i: any) => {
              return (
                <Image
                  key={i}
                  src={img.url}
                  width={300}
                  height={300}
                  alt="oncepts_main"
                  className="object-cover w-full h-[300px] md:w-[520px] md:h-[520px]"
                />
              );
            })}
          </div>
          <Text
            className={`${nunito.className}  text-center text-lg  md:w-[75%]`}
          >
            {data?.conceptSecondParaText}
          </Text>
          <div className="flex flex-col md:flex-row items-center gap-3 justify-center">
            {data?.conceptImagesThird?.map((img: any, i: any) => {
              return (
                <Image
                  key={i}
                  src={img.url}
                  width={300}
                  height={300}
                  alt="oncepts_main"
                  className="object-cover w-full h-[300px] md:w-[520px] md:h-[300px]"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Concepts;

import { useState } from "react";
import Link from "next/link";
import Text from "@/shared/Text";
import { ChevronDown } from "@/assets/Icons";
import { Nunito_Sans } from "next/font/google";
const nunito = Nunito_Sans({ subsets: ["latin"] });
const Dropdown = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`${nunito.className} absolute shadow-md top-28 right-0 mx-7 bg-beige-100 max-w-[450px] z-50`}
    >
      <div className="py-4 px-2 flex flex-col gap-2 text-xs font-normal">
        <Link
          href="/"
          className="p-2 rounded-md hover:bg-beige-200 active:bg-beige-200"
        >
          <Text>Home</Text>
        </Link>
        <Link
          href="/concepts"
          className="p-2 rounded-lg hover:bg-beige-200 active:bg-beige-200"
        >
          <Text>Concept</Text>
        </Link>
        <div
          className="p-2 rounded-lg flex items-center gap-9 justify-between hover:bg-beige-200 active:bg-beige-200"
          onClick={() => setShow(!show)}
        >
          <Text>Rent a Jaglax Home</Text>
          <span className="rotate-180">
            <ChevronDown />
          </span>
        </div>
        {show ? (
          <>
            <Link
              href="/marsierra/villas"
              className="p-2 pl-8 rounded-lg hover:bg-beige-200 active:bg-beige-200"
            >
              <Text>Marsierra</Text>
            </Link>

            <Link
              href="/marselva"
              className="p-2 pl-8 rounded-lg hover:bg-beige-200 active:bg-beige-200"
            >
              <Text>Mar Selva</Text>
            </Link>
          </>
        ) : null}
        <Link
          href="/contact-us"
          className="p-2 rounded-lg hover:bg-beige-200 active:bg-beige-200"
        >
          <Text>Contact Us</Text>
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;

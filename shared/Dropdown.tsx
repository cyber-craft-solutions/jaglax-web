import { useState } from "react";
import Link from "next/link";
import Text from "@/shared/Text";
import { ChevronDown } from "@/assets/Icons";

const Dropdown = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="absolute shadow-md top-28 left-0 right-0 mx-7 bg-beige-100 max-w-[450px] ">
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
          <Text>Concepts</Text>
        </Link>
        <div
          className="p-2 rounded-lg flex items-center justify-between hover:bg-beige-200 active:bg-beige-200"
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
              <Text>Marselva</Text>
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

import Link from "next/link";
import Text from "@/shared/Text";

const Dropdown = () => {
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

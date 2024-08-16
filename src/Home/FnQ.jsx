import { Accordion, AccordionItem } from "@nextui-org/react";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function FnQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="w-full sm:w-4/5 md:w-3/5 mx-auto mt-10 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <Accordion defaultExpandedKeys={["theme"]}>
        <AccordionItem
          key="theme"
          aria-label="Theme"
          indicator={<HiOutlineSparkles />}
          title="Theme"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="anchor"
          aria-label="Anchor"
          indicator={<HiOutlineSparkles />}
          title="Anchor"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="sun"
          aria-label="Sun"
          indicator={<HiOutlineSparkles />}
          title="Sun"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

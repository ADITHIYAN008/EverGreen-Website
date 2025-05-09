import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FAQ_LIST } from "@/constant/data";

const FAQ = () => {
  return (
    <div className="text-secondary px-3 mb-25">
      <div className="px-2 mb-8">
        <h2 className="text-[27px] mt-10 font-semibold">
          Frequently asked questions
        </h2>
        <div className="flex">
          <p className="text-[10px] w-[400px] text-secondary/50 mt-3">
            Our experts guide you in making informed investment decisions based
            on market insights. We offer residential, commercial, and luxury
            properties tailored to different preferences and budgets.
          </p>
        </div>
      </div>
      <ul>
        {FAQ_LIST.map((item, index) => (
          <li
            className="border border-secondary/20 px-4 rounded-xl mb-3"
            key={index}
          >
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[11px] text-secondary/70">
                  {item.Content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;

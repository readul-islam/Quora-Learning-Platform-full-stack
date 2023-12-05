import React from "react";
import { isEmpty } from "lodash";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const CustomAccordion = ({ data }) => {
  return (
    <>
      {!isEmpty(data) ? (
        <Accordion
          className="bg-white"
          allowZeroExpanded={true}
          allowMultipleExpanded={true}
        >
          {data.map((course) => (
            <>
              <AccordionItem className="border">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </>
          ))}
        </Accordion>
      ) : (
        "Data Not Found"
      )}
    </>
  );
};

export default CustomAccordion;

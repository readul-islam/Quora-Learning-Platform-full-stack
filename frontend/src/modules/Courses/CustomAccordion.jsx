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
const CustomAccordion = ({ syllabus }) => {
  console.log(syllabus);
  return (
    <>
      {!isEmpty(syllabus) ? (
        <Accordion
          className="bg-white"
          allowZeroExpanded={true}
          allowMultipleExpanded={true}
        >
          {syllabus.map((course) => (
            <>
              <AccordionItem className="border">
                <AccordionItemHeading>
                  <AccordionItemButton>{course.topic}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{course.description}</p>
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

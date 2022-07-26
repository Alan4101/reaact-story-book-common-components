import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccordionNumbered } from "./AccordionNumbered";
export default {
  component: AccordionNumbered,
} as ComponentMeta<typeof AccordionNumbered>;
const AccordionTemplate: ComponentStory<typeof AccordionNumbered> = (args) => (
  <AccordionNumbered {...args}></AccordionNumbered>
);
export const Accordion = AccordionTemplate.bind({});
let expand = false;
Accordion.args = {
  title: "Accordion title",
  number: 1,
  isExpanded: expand,
  toggleAccordion: () => (expand = !expand),
};

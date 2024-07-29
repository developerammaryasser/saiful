import Section from "../Components/Section";
import AccordionItem from "../Components/AccordionItem";
import Accordion from "../Components/Accordion";
import Tabs from "../Components/Tabs";
import Cards from "../Components/Cards";
import Card from "../Components/Card";
import Tab from "../Components/Tab";
const Services = ({ servicesContent }) => {
  return (
    <>
      {/* Services */}
      <div>
        {/* Section 1 */}
        <Section
          headTitle="My Quality Service"
          text="Figma ipsum component variant main layer. Strikethrough underline project scrolling text vectore inspaect. Arrow hand vertical opacity link."
        >
          <div className="mt-24">
            <Accordion>
              {servicesContent.accordionItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  title={item.title}
                  text={item.text}
                  number={i + 1}
                  defaultOpen={i === 0}
                />
              ))}
            </Accordion>
          </div>
        </Section>
        <Section
          headTitle="My Quality Service"
          text="Figma ipsum component variant main layer. Strikethrough underline project scrolling text vectore inspaect. Arrow hand vertical opacity link."
          bgColor="primaryColor"
        >
          <div className="mt-14 hidden lg:block">
            <Tabs>
              {servicesContent.tabsItems.map((tabsItem, i) => (
                <Tab {...tabsItem} key={i} isOpen={i === 0} />
              ))}
            </Tabs>
          </div>
          <div className="mt-24">
            <Cards>
              {servicesContent.cards.map((item, i) => (
                <Card key={i} {...item} isOpen={i === 0} />
              ))}
            </Cards>
          </div>
        </Section>
      </div>
    </>
  );
};
export default Services;

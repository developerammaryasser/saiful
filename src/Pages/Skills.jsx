import SkillContent from "../Components/SkillContent";
import SkillsContents from "../Components/SkillsContents";
import Section from "../Components/Section";
import Tools from "../Components/Tools";
import Tool from "../Components/Tool";

const Skills = ({ skills }) => {
  return (
    <>
      <section className="py-32 bg-secondaryColor">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="">
              <h2 className="font-bold gradientText">My Experience</h2>
              <div className="mt-12">
                <SkillsContents>
                  {skills.skillsContentsExperience.map((item, i) => (
                    <SkillContent key={i} {...item} isOpen={i === 0} />
                  ))}
                </SkillsContents>
              </div>
            </div>
            <div className="">
              <h2 className="font-bold gradientText">My Eductaion</h2>
              <div className="mt-12">
                <SkillsContents>
                  {skills.skillsContentsEducation.map((item, i) => (
                    <SkillContent key={i} {...item} isOpen={i === 0} />
                  ))}
                </SkillsContents>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section
        headTitle="My Skills Tools"
        text="Figma ipsum component variant main layer. Strikethrough underline project scrolling text vectore inspaect. Arrow hand vertical opacity link."
        bgColor="primaryColor"
      >
        <div className="mt-24">
          <Tools>
            {skills.tools.map((tool, i) => (
              <Tool key={i} {...tool} />
            ))}
          </Tools>
        </div>
      </Section>
    </>
  );
};
export default Skills;

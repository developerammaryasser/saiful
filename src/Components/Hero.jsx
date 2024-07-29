import heroImg from "../Assets/Hero.png";
import Analys from "./Analys";
import ButtonOutline from "./ButtonOutline";

const Hero = ({ analysis = [], buttons = []}) => {
  return (
    <section className="py-16 h-fit">
      <div className="container flex flex-col items-stretch gap-16">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="flex flex-col gap-5">
            <span className="text-xl">I'am Iful</span>
            <h1 className="font-bold">
              <span className="gradientText">
                Web Developer + <br />
              </span>
              <span className="gradientText">UI/UX Designer</span>
            </h1>
            <p className="">
              Figma ipsum component variant main layer. Strikethrough <br />
              underline project scrolling text vectore inspaect. Arrow hand{" "}
              <br />
              vertical opacity link.
            </p>
            <div className="lg:flex flex-row hidden items-center gap-3 mt-6 ">
              {
                buttons.map((button,i) => (
                  <ButtonOutline key={i} to={button.to}>{button.text}</ButtonOutline>
                )) 
              }
            </div>
          </div>
          <div className="flex flex-col items-center p-6">
            <img src={heroImg} alt="hero-img" className="w-10/12"/>
          </div>
        </div>
        <div className="w-full flex flex-col gap-12 lg:flex-row items-stretch lg:items-center lg:justify-between px-16">
          {analysis.map((analys, i) => (
            <Analys key={i} number={analys.number} text={analys.text} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;

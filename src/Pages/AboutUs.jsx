import Button from "../Components/Button";
import AboutItem from "../Components/AboutItem";

const AboutUs = ({ aboutContent }) => {
  return (
    <section className="py-24 bg-secondaryColor">
      <div className="container flex flex-col lg:flex-row justify-between items-stretch gap-12">
        <div className="p-6 md:p-12 bg-primaryColor rounded-lg lg:w-[60%]">
          <form action="">
            <div className="flex flex-col items-stretch gap-12">
              <div>
                <h2 className="gradientText font-bold">Let's work together!</h2>
                <p>
                  Figma ipsum component variant main layer. Strikethrough
                  underline project scrolling text vector inspect.
                </p>
              </div>
              <div className="flex flex-col gap-6 md:gap-9 items-stretch">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="secondName"
                      id="secondName"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Addres"
                    />
                    <input
                      type="number"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-6">
                  <select name="services" id="services">
                    <option value="service">service</option>
                  </select>
                  <textarea
                    className="h-[13rem]"
                    name="essage"
                    id=""
                    placeholder="Message"
                  ></textarea>
                  <Button>Send Message</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-stretch gap-12 justify-center">
          {aboutContent.map((item, i) => (
            <AboutItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutUs;

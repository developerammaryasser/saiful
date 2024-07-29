import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../Components/Section";
import "swiper/css";
import Story from "../Components/Story";
const Stories = ({ stories = [] }) => {
  return (
    <Section
      headTitle="My Client's Stories"
      text={`Fimga ipsum component variant main layer. Strikethrough underline project scrolling text vector inspect.`}
      className={`!text-start`}
      textAlign={`!justify-start`}
      bgColor="tertiaryColor"
    >
      <div className="w-full flex justify-end mt-14">
        <div className="md:w-[600px] w-full">
          <Swiper spaceBetween={40} className="mySwiper">
            {stories.map((story, i) => (
              <SwiperSlide>
                <Story key={i} {...story} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};
export default Stories;

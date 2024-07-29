import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoDribbble,
  IoLogoLinkedin,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import Services from "./Services";
// Services images
import imgService1 from "../Assets/img-services-1.jpg";
import imgService2 from "../Assets/img-services-2.jpg";
import imgService3 from "../Assets/img-services-3.jpg";
import imgService4 from "../Assets/img-services-4.jpg";
// Tools images
import imgTool1 from "../Assets/img-tool-1.png";
import imgTool2 from "../Assets/img-tool-2.png";
import imgTool3 from "../Assets/img-tool-3.png";
import imgTool4 from "../Assets/img-tool-4.png";
import imgTool5 from "../Assets/img-tool-5.png";
import imgTool6 from "../Assets/img-tool-6.png";
// Stories images
import imgStory1 from "../Assets/img-story-1.jpg";
import imgStory2 from "../Assets/img-story-2.jpg";
// Blog images
import imgBlog1 from "../Assets/img-blog-1.png";
import imgBlog2 from "../Assets/img-blog-2.jpg";
import imgBlog3 from "../Assets/img-blog-3.jpg";

import Skills from "./Skills";
import Stories from "./Stories";
import Blog from "./Blog";
import AboutUs from "./AboutUs";
import Footer from "../Components/Footer";
const Home = () => {
  const navbarLinks = [
    {
      text: "Service",
      to: "#service",
    },
    {
      text: "Work",
      to: "/work",
    },
    {
      text: "Resume",
      to: "/resume",
    },
    {
      text: "Skills",
      to: "#skills",
    },
    {
      text: "Testimonial",
      to: "/Testimonial",
    },
    {
      text: "Contact",
      to: "#contact",
    },
  ];
  const heroContent = [
    [
      {
        text: "Download CV",
        to: "/",
      },
      {
        text: <IoLogoGithub size={30} />,
        to: "/",
      },
      {
        text: <IoLogoTwitter size={30} />,
        to: "/",
      },
      {
        text: <IoLogoDribbble size={30} />,
        to: "/",
      },
      {
        text: <IoLogoLinkedin size={30} />,
        to: "/",
      },
    ],
    [
      {
        number: "14",
        text: "Years Of Experience",
      },
      {
        number: "70+",
        text: "Project Completed",
      },
      {
        number: "2.5k",
        text: "Happy Client",
      },
    ],
  ];
  const servicesContent = {
    accordionItems: [
      {
        number: 1,
        title: "Front-end Developer",
        text: "Figma ipsum component variant main layer. Strikethrough underline project scrolling text vectore inspaect.",
      },
      {
        number: 2,
        title: "Back-End Developer",
        text: "Figma ipsum component variant main layer. Strikethrough underline project scrolling text vectore inspaect.",
      },
      {
        number: 3,
        title: "UI/UX Design",
        text: "Figma ipsum component variant main layer. Strikethrough underline project scrolling text vectore inspaect.",
      },
      {
        number: 4,
        title: "Graphic design",
        text: "Figma ipsum component variant main layer. Strikethrough underline project scrolling text vectore inspaect.",
      },
    ],
    tabsItems: [
      {
        text: "All",
        to: "/",
      },
      {
        text: "UI/UX",
        to: "/",
      },
      {
        text: "Branding",
        to: "/",
      },
      {
        text: "Apps",
        to: "/",
      },
    ],
    cards: [
      {
        image: imgService1,
        title: "Next Project",
        text: "Figma ipsum component variant main layer.",
      },
      {
        image: imgService2,
        title: "Next Project",
        text: "Figma ipsum component variant main layer.",
      },
      {
        image: imgService3,
        title: "Next Project",
        text: "Figma ipsum component variant main layer.",
      },
      {
        image: imgService4,
        title: "Next Project",
        text: "Figma ipsum component variant main layer.",
      },
    ],
  };
  const skills = {
    skillsContentsExperience: [
      {
        date: "2019-2020",
        title: "Front-end Developer",
        tag: "Microsoft",
      },
      {
        date: "2020-2021",
        title: "Data Scientist",
        tag: "IBM Science",
      },
      {
        date: "2021-2022",
        title: "Software Engineer",
        tag: "Dicoding",
      },
      {
        date: "2023-2024",
        title: "Cyber Security",
        tag: "hackthebox",
      },
    ],
    skillsContentsEducation: [
      {
        date: "2019-2020",
        title: "University of Oxford",
        tag: "Engineering science",
      },
      {
        date: "2020-2021",
        title: "Stanford University",
        tag: "Mathematics",
      },
      {
        date: "2021-2022",
        title: "Harvard University",
        tag: "Comuter science",
      },
      {
        date: "2023-2024",
        title: "University of Cambridge",
        tag: "History of Art",
      },
    ],
    tools: [
      {
        image: imgTool1,
        degree: "90",
        title: "HTML",
      },
      {
        image: imgTool2,
        degree: "80",
        title: "CSS",
      },
      {
        image: imgTool3,
        degree: "80",
        title: "JavaScript",
      },
      {
        image: imgTool4,
        degree: "70",
        title: "React",
      },
      {
        image: imgTool5,
        degree: "85",
        title: "Adobe Illustrator",
      },
      {
        image: imgTool6,
        degree: "89",
        title: "Figma",
      },
    ],
  };
  const stories = [
    {
      image: imgStory1,
      text: "Figma ipsum component variant main layer. Strikethrough underline project scrolling.",
      title: "Kiritod Darmoko",
      tag: "Software Enginering",
    },
    {
      image: imgStory2,
      text: "Figma ipsum component variant main layer. Strikethrough underline project scrolling.",
      title: "Uciha Saitama",
      tag: "Software Enginering",
    },
  ];
  const blogContent = [
    {
      image: imgBlog1,
      title: "Top Next Project",
    },
    {
      image: imgBlog2,
      title: "Best designer graphic",
    },
    {
      image: imgBlog3,
      title: "Best python framework",
    },
  ];
  const aboutContent = [
    {
      icon: <IoCallOutline size={30} />,
      tag: "Phone",
      text: "+201129957567",
    },
    {
      icon: <IoMailOutline size={30} />,
      tag: "Email",
      text: "ammaryasser.online@gmail.com",
    },
  ];
  return (
    <div className="text-textColor1 bg-primaryColor h-fit">
      <Navbar links={navbarLinks} />
      <Hero analysis={heroContent[1]} buttons={heroContent[0]} />
      <Services servicesContent={servicesContent} />
      <Skills skills={skills} />
      <Stories stories={stories} />
      <Blog blogContent={blogContent} />
      <AboutUs aboutContent={aboutContent} />
      <Footer footerLinks={navbarLinks} />
    </div>
  );
};
export default Home;

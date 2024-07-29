const AboutItem = ({ icon, tag, text }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="BgGradient rounded-full p-4">{icon}</div>
      <div className="text-center md:text-start">
        <h4 className="text-base">{tag}</h4>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};
export default AboutItem;

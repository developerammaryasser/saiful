const SkillContent = ({ date, title, tag, isOpen }) => {
  return (
    <div
      className={`p-4 flex flex-col items-stretch justify-start rounded-md cursor-pointer transition-all duration-300 hover:BgGradient ${
        isOpen ? "BgGradient" : ""
      }`}
    >
      <h4>{date}</h4>
      <h3>{title}</h3>
      <p className="text-base font-medium">{tag}</p>
    </div>
  );
};
export default SkillContent;

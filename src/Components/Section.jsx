const Section = ({
  headTitle = "",
  text = "",
  bgColor = "secondaryColor",
  textAlign,
  className,
  children,
}) => {
  return (
    <section className={`py-32 bg-${bgColor}`}>
      <div className="container flex flex-col items-stretch">
        <div
          className={`flex flex-col gap-5 items-stretch justify-center text-center ${className}`}
        >
          <h2 className="gradientText font-bold">{headTitle}</h2>
          <div className={`ml-1/2 flex justify-center ${textAlign}`}>
            <p className={`lg:w-[60%]`}>{text}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};
export default Section;

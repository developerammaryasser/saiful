const Story = ({ image, text, title, tag }) => {
  return (
    <div className="p-6 bg-primaryColor shadow-lg rounded-lg w-full flex flex-col items-stretch gap-6 text-center lg:text-start">
      <div className="overflow-hidden flex justify-end rounded-md">
        <img src={image} alt={title} className="object-cover rounded-bl-full size-[150px]"/>
      </div>
      <div>
        <p className="text-[20px] opacity-65">"{text}"</p>
      </div>
      <div>
        <h4>{title}</h4>
        <p className="text-base">{tag}</p>
      </div>
    </div>
  );
};
export default Story;

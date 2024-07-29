const Tool = ({ title = "", degree = "100", image }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="bg-[#140C1C] rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-3">
        <img src={image} alt={title} className="object-cover rounded-lg overflow-hidden" width={100}/>
        <span className="font-medium">{degree}%</span>
      </div>
      <p className="text-textColor2 font-medium">{title}</p>
    </div>
  );
};
export default Tool; 

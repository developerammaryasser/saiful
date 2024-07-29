const BlogCard = ({ image, title }) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="h-full">
        <img src={image} alt={title} className="h-full object-cover" />
      </div>
      <div className="absolute bottom-[5%] left-[5%] p-6 rounded-md bg-[#2A1454] w-[90%]">
        <h4 className="font-medium">{title}</h4>
      </div>
    </div>
  );
};
export default BlogCard;

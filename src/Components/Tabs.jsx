const Tabs = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <ul className="flex flex-row items-center gap-x-3 bg-secondaryColor rounded-full h-fit">
        {children}
      </ul>
    </div>
  );
};
export default Tabs;

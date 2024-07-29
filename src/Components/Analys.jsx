const Analys = ({number = "", text = ""}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center lg:w-[150px] gap-5">
        <span className="text-3xl font-bold">{number}</span>
        <p>{text}</p>
    </div>
  )
}
export default Analys
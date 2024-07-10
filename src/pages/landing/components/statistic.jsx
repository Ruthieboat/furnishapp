const Statistic = () => {
  return (
    <div className=" bg-[#D4EAF5] p-9 ">
      <span className="">
        <p className="flex justify-center text-sm text-slate-800 pt-10 pb-0">GREAT REVIEWS FOR OUR SERVICES</p>
        <h2 className="flex justify-center text-[#17353F] pb-10 font-semibold text-4xl">Technical Statistics</h2>
      </span>
      <div className="flex flex-row gap-8 justify-evenly p-10">
        <span className="flex flex-col gap-4"> 
          <h2 className="text-4xl">20</h2>
          <p className="text-xs">YEAR OF EXPERIENCE</p>
        </span>
        <span className="flex flex-col gap-4">
          <h2 className="text-4xl">10,200</h2>
          <p className="text-xs">SATISFIED CUSTOMERS</p>
        </span>
        <span className="flex flex-col gap-4">
          <h2 className="text-4xl">9,850</h2>
          <p className="text-xs">PROJECT COMPLETED</p>
        </span>
        <span className="flex flex-col gap-4">
          <h2 className="text-4xl">20</h2>
          <p className="text-xs">GET AWARDS</p>
        </span>
      </div>
    </div>
  )
};

export default Statistic

import { collectfive, collectfour, collectone, collectsix, collectthree, collecttwo } from "../../../assets";

const Collection = () => {
  return (
    <div >
      <p className="flex justify-center text-sm text-slate-800 font-thin pt-20 pb-0">OUR FINISHED PRODUCTS</p>
      <div className="flex justify-center text-4xl text-slate-800 font-bold pt-5 pb-5 ">
        <h2>Furniture Collection</h2>
      </div>
      <div className="grid grid-cols-3 gap-2 p-2 ">
        <img src={collectone} alt="collec" className="" />
        <img src={collecttwo} alt="collectn" />
        <img src={collectthree} alt="collectno" />
        <img src={collectfour} alt="wool" />
        <img src={collectfive} alt="her" />
        <img src={collectsix} alt="wow" />
      </div>
    </div>

  )
};

export default Collection
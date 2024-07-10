import { Calculator, GiftIcon, ShipWheelIcon } from "lucide-react";

const Production = () => {
    return (
      <div className="bg-[#F7F7F7]">
        <div>
        <p className="flex justify-center text-sm text-slate-800 font-thin pt-20 pb-0">PRODUCTION FLOWS</p>
      <div className="flex justify-center text-4xl text-slate-800 font-bold pt-5 pb-5 ">
        <h2>How It Works</h2>
      </div>
        </div>
        <div className="flex flex-row p-10 gap-[10px]">
          <span>
            <Calculator className="bg-white rounded-full"/>
            <h2>Get A Free Quote</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </span>
          <span>
            <ShipWheelIcon className="bg-[#81C2E2] rounded-full" />
            <h2>Get A Free Quote</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </span>
          <span>
            <GiftIcon className="bg-white rounded-full" />
            <h2>Get A Free Quote</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </span>
        </div>
      </div>
    )
  };
  
  export default Production
import { Quote, QuoteIcon } from "lucide-react";
import { tesone, testree, testwo } from "../../../assets";

const Testimonial = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <p className="flex justify-center text-sm text-slate-800 font-thin pt-20 pb-0">TESTIMONIALS</p>
      <div className="flex justify-center text-4xl text-slate-800 font-bold pt-5 pb-5 ">
        <h2>Happy Customers</h2>
      </div>

      <div className="flex flex-row justify-evenly pt-8 text-wrap">
        <span className="bg-white">
          <QuoteIcon className="bg-[#CA3D4A] rounded-full"/>
          <p>Far far away, behind the word <br />mountains, far from the countries <br />Vokalia and Consonantia, there <br /> live the blind texts.</p>
          <img src={testwo} alt="tesone" className="size-20 rounded-full "/>
          <p>Roger Scott <br />Marketing Manager</p>
        </span>
        <span className="bg-[#CA3D4A] rounded-1xl">
        <QuoteIcon className="bg-white rounded-full"/>
          <p>Far far away, behind the word <br />mountains, far from the countries <br />Vokalia and Consonantia, there <br /> live the blind texts.</p>
          <img src={testree} alt="tesone" className="size-20 rounded-full "/>
          <p>Roger Scott <br />Marketing Manager</p>
        </span>
        <span className="bg-white">
        <QuoteIcon className="bg-[#CA3D4A] rounded-full"/>
          <p>Far far away, behind the word <br />mountains, far from the countries <br />Vokalia and Consonantia, there <br /> live the blind texts.</p>
          <img src={tesone} alt="tesone" className="size-20 rounded-full "/>
          <p>Roger Scott <br />Marketing Manager</p>
        </span>
      </div>
    </div>
  )
};

export default Testimonial
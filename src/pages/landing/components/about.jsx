import { PlayIcon } from "lucide-react";
import { abImg } from "../../../assets";


const About = () => {
  return (

    <div className="flex relative ">
      <img src={abImg} alt="aboutpic" className="w-full h-full vh- " />

      <div className=" flex flex-col content-center justify-center top-0 left-0 p-10 gap-10 absolute">
        <div className="font-semibold text-[#F3BBB7] text-[20px]">ABOUT RUENO</div>
        <h2 className="font-bold text-white text-5xl">Quality Makes the <br />Belief for Customers</h2>
        <p className=" w-90 text-[21px] py-6px text-white ">Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove <br />right at the coast of the Semantics, a large language ocean. </p>
        <span>
          <button className="bg-[#F3BBB7] rounded-2xl animate-spin ">
            <PlayIcon className="text-black"/>
          </button>
          <p className="text-[#F3BBB7] font-bold ">Watch Video</p>
        </span>

      </div>

    </div>
  )
};

export default About;
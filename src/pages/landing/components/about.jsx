import { abImg } from "../../../assets";


const About = () => {
  return (

    <div className="flex flex-col">
      <div className="">
        <div className="background-cont "></div>

        <div>
          <img src={abImg} alt="aboutpic" />
        </div>
      </div>

      <div className="flex flex-row p-10">
        <span className="font-thin text-black text-sm">ABOUT FURNISH</span>
        <span className="font-bold text-black py-5 text-5xl">Quality Makes the Belief for <br />Customers</span>
      </div>

      <p className=" w-90 text-sm py-3px ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </p>
    </div>
  )
};

export default About;
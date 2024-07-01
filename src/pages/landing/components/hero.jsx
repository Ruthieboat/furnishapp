import { heroBg } from "../../../assets";

const Hero = () => {
  return (
    <div className="flex h-screen ">
      <div className="w-1/2 bg-[#a6a6a7] place-content-center">

        <div className="mx-auto w-fit flex flex-col items-start p-20  gap-9">
          <div className="flex flex-col text-5xl">
            <span className="font-thin text-white">Best Design of <br /></span>
            <span className="font-bold text-white">Furniture Collections</span>
          </div>

          <p className=" w-90 text-sm py-3px">Get the best and most affordable furniture for your spaces <br /> let's get your space talking for you </p>

          <button className="bg-white px-6 py-2 rounded-full drop-shadow-2xl font-bold text-[#533247 ">DISCOVER</button>

        </div>

      </div>
      <div className="w-1/2">
        <img src={heroBg} alt="Hero background" className="object-cover w-full h-full" />
      </div>
    </div>
  )
};

export default Hero
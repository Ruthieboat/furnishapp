import { FacebookIcon, HeartIcon, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className=" bg-[#D4EAF5]">

      <div className="flex flex-row gap-40 p-3">
        <span>
          <h2 className="text-2xl font-bold text-white">rueno</h2>
          <p>A small river named <br />Duden flows by their place <br /> and supplies it with <br />the necessary regelialia.</p>
          <div className="flex flex-row gap-2 rounded-md pb-4">
            <Twitter className="text-white bg-[#6DB7DD]" />
            <FacebookIcon className="text-white bg-[#6DB7DD]" />
            <Instagram className="text-white bg-[#6DB7DD]" />
          </div>
        </span>
        <span className="gap-3">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p>Amazing Deals</p>
          <p>Quality Furniture</p>
          <p>Modern Design</p>
          <p>Best Support</p>
        </span>
        <span>
          <p className="text-2xl font-semibold gap-3">Recent Posts</p>
        </span>
        <span>
          <p className="text-2xl font-semibold">Have a Questions?</p>
        </span>
      </div>

      <div className="flex flex-row justify-center p-12 bg-[#ABD6EB] ">
        <p className="text-[#808080]">Copyright ©2024 All rights reserved | This template is made with</p>
        <HeartIcon className="size-5 pt-2 text-[#808080] fill-[#808080] " />
        <p className="text-[#808080]">by</p>
        <p className="text-white font-bold ">rueno</p>
      </div>
    </div>
  )
};

export default Footer;
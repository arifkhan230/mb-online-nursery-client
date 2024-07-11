import React from "react";
import { navLinks } from "./NavLinks";

type TSidebarProps = {
  isSidebarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isSidebarOpen, setIsSideBarOpen }: TSidebarProps) => {
  return (
    <div
      className={`${
        isSidebarOpen ? " translate-x-0" : "-translate-x-[1060px]"
      } w-full h-full absolute z-30 top-0 left-0 flex md:hidden transition-transform ease-in-out duration-500  `}
    >
      <ul
        onClick={() => setIsSideBarOpen(false)}
        className="flex flex-col bg-white text-[#10002B] h-full px-4"
      >
        <img
          className="h-24"
          src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/plant-nursery-logo-template-lt8qc346cb8484.webp"
          alt=""
        />
        {navLinks}
      </ul>
      <div
        onClick={() => setIsSideBarOpen(false)}
        className="w-full bg-[#00000065] h-full"
      ></div>
    </div>
  );
};

export default Sidebar;

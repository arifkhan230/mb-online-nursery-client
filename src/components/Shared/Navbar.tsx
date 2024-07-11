import Container from "./Container";
import cartIcon from "../../assets/cartIcon.gif";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { navLinks } from "./utils/NavLinks";
import Sidebar from "./utils/Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="">
      <Container>
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center">
            <NavLink to="/">
              <img
                className="h-24 w-36 object-cover hidden md:flex"
                src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/plant-nursery-logo-template-lt8qc346cb8484.webp"
                alt=""
              />
            </NavLink>
            <div>
              <HiMenu
                onClick={() => setIsSideBarOpen(!isSidebarOpen)}
                className="md:hidden ml-2"
                size={32}
              />
            </div>
          </div>
          {/* sidebar for small device  */}
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />
          {/* navLinks for medium and big device*/}
          <div className="hidden md:flex">{navLinks}</div>
          {/* cart */}
          <div>
            <NavLink to="/cart">
              <img src={cartIcon} alt="cart" />
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

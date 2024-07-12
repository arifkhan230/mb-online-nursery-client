import { NavLink } from "react-router-dom";

const activeLinkStyles = "text-xl font-semibold text-green-600 mr-4";
const inActiveLinkStyles = "text-xl font-semibold text-gray-600 mr-4";

export const navLinks = (
  <>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? `${activeLinkStyles}`
          : `${inActiveLinkStyles}`
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/products"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? `${activeLinkStyles}`
          : `${inActiveLinkStyles}`
      }
    >
      Products
    </NavLink>
    <NavLink
      to="/manage-products"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? `${activeLinkStyles}`
          : `${inActiveLinkStyles}`
      }
    >
      Manage
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? `${activeLinkStyles}`
          : `${inActiveLinkStyles}`
      }
    >
      About
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? `${activeLinkStyles}`
          : `${inActiveLinkStyles}`
      }
    >
      Contact
    </NavLink>
  </>
);

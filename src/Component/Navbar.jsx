import NavLogo from "../assets/Restarant/logo-white.png";
import { FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar fixed z-10  bg-opacity-0 bg-[#191b1b] text-white ">
      <div className="navbar-start">
        {/* dropdown here which show for small device */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0B1517] text-white rounded-box w-52"
          >
            <li>
              <a className="hover:text-[#ca9c5e] hover:underline">Home</a>
            </li>

            <li>
              <a className="hover:text-[#ca9c5e] hover:underline">Our Menus</a>
            </li>

            <li>
              <a className="hover:text-[#ca9c5e] hover:underline">
                Reservation
              </a>
            </li>
            <li>
              <a className="hover:text-[#ca9c5e] hover:underline">
                Reservation
              </a>
            </li>

            <li>
              <a className="hover:text-[#ca9c5e] hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        <img className="w-[140px] ml-12" src={NavLogo} alt="" />
      </div>

    {/* This is for Navbar route which show only large device */}

      <div className="navbar-center hidden lg:flex px-48  ">
        <ul className="menu menu-horizontal px-12 text-xl  font-sans font-semibold">
          <li>
            <a className="hover:text-[#ca9c5e] hover:underline">Home</a>
          </li>
          <li tabIndex={0}>
            <summary className="hover:text-[#ca9c5e] hover:underline">
              About
            </summary>
          </li>
          <li>
            <a className="hover:text-[#ca9c5e] hover:underline">Our Menus</a>
          </li>
          <li>
            <a className="hover:text-[#ca9c5e] hover:underline">Reservation</a>
          </li>
          <li>
            <a className="hover:text-[#ca9c5e] hover:underline">Contact</a>
          </li>
        </ul>
      </div>

      <div className="lg:flex hidden justify-center items-center px-12 gap-3 ">
        <FaFacebook></FaFacebook>
        <FaInstagram></FaInstagram>
        <FaDiscord></FaDiscord>
      </div>
    </div>
  );
};

export default Navbar;

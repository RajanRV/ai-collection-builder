import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CaretLeft from "../../assets/icons/CaretLeft.svg";
import Logo from "../../assets/icons/Logo.svg";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.pathname === "/dashboard" || location.path === "/") {
      navigate("/dashboard");
      return;
    } else {
      navigate(-1);
    }
  };

  const handleGoDashboard = () => {
    navigate("/");
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-10 shadow-sm items-center border-b border-[#DEDEDE]">
      <div className="max-w-[1366px] w-[93%] mx-auto">
        <div className="flex justify-between">
          <div
            className="flex items-center gap-[4px] cursor-pointer"
            onClick={handleBack}
          >
            <img src={CaretLeft} alt="back" className="cursor-pointer" />
            <h1 className="text-primary text-[14px] sm:text-[16px] font-[500] py-[20px] font-avenir">
              {location.pathname === "/" ? "Dashboard" : "Previous"}
            </h1>
          </div>
          <div className="flex gap-[8px] sm:gap-[26px]">
            {location.pathname !== "/" && (
              <h1
                className="text-primary text-[14px] sm:text-[16px] font-[500] py-[20px] font-avenir cursor-pointer"
                onClick={handleGoDashboard}
              >
                Back to Dashboard
              </h1>
            )}
            <img
              src={Logo}
              alt="logo"
              className="h-[30px] sm:h-auto m-auto w-[30px] sm:w-auto cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

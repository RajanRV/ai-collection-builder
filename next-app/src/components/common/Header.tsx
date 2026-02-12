"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    if (pathname === "/" || pathname === "/dashboard") {
      router.push("/");
    } else {
      router.back();
    }
  };

  const handleGoDashboard = () => {
    router.push("/");
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-10 shadow-sm items-center border-b border-[#DEDEDE]">
      <div className="max-w-[1366px] w-[93%] mx-auto">
        <div className="flex justify-between">
          <div
            className="flex items-center gap-[4px] cursor-pointer"
            onClick={handleBack}
          >
            <img
              src="/icons/CaretLeft.svg"
              alt="back"
              className="cursor-pointer"
            />
            <h1 className="text-primary text-[14px] sm:text-[16px] font-[500] py-[20px] font-avenir">
              {pathname === "/" ? "Dashboard" : "Previous"}
            </h1>
          </div>
          <div className="flex gap-[8px] sm:gap-[26px]">
            {pathname !== "/" && (
              <button
                type="button"
                className="text-primary text-[14px] sm:text-[16px] font-[500] py-[20px] font-avenir cursor-pointer"
                onClick={handleGoDashboard}
              >
                Back to Dashboard
              </button>
            )}
            <img
              src="/icons/Logo.svg"
              alt="logo"
              className="h-[30px] sm:h-auto m-auto w-[30px] sm:w-auto cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;


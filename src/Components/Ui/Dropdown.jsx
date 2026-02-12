import { useState, useRef, useEffect } from "react";


function Dropdown({ options, value, onChange }) {
     const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    return(
    <div className="relative w-[190px]" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center rounded-md border border-lightGray bg-white py-[8px] px-[16px] gap-[8px] text-[14px] font-avenir font-regular text-darkGray"
      >
        {value}
        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5677 1.06719L7.31768 7.31719C7.25963 7.3753 7.1907 7.4214 7.11483 7.45285C7.03896 7.4843 6.95763 7.50049 6.87549 7.50049C6.79336 7.50049 6.71203 7.4843 6.63615 7.45285C6.56028 7.4214 6.49135 7.3753 6.4333 7.31719L0.183305 1.06719C0.0957976 0.979778 0.0361929 0.86837 0.0120364 0.747067C-0.0121201 0.625764 0.000257809 0.500021 0.0476031 0.385756C0.0949484 0.271492 0.175132 0.173844 0.278003 0.105175C0.380875 0.0365057 0.501807 -9.71422e-05 0.625492 1.93625e-07H13.1255C13.2492 -9.71422e-05 13.3701 0.0365057 13.473 0.105175C13.5759 0.173844 0.656 0.271492 13.7034 0.385756C13.7507 0.500021 13.7631 0.625764 13.7389 0.747067C13.7148 0.86837 13.6552 0.979778 13.5677 1.06719Z"
              fill="#303030"
            />
          </svg>
        </span>
      </button>

     
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-md bg-white shadow-md">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              className="px-4 py-2 text-[14px] text-darkGray hover:bg-indigo-50 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
    )
}
export default Dropdown;
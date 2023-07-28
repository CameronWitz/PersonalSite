"use client";

import { ReactNode } from "react";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUnity, FaLinkedin } from "react-icons/fa";

export default function NavBar() {
  const router = useRouter();
  const [shrinkBar, setShrinkBar] = useState(false);

  // scroll listener set up to shrink navbar when scrolled
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 50) {
        setShrinkBar(true);
      } else setShrinkBar(false);
    };

    const test = () => {
      setShrinkBar(!shrinkBar);
    };
    window.addEventListener("scroll", scrollListener);
    //TODO: remove test
    // window.addEventListener("click", test);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", scrollListener);
      // window.removeEventListener("click", test);
    };
  }, [shrinkBar]);

  return (
    <div
      id="backgroundContainer"
      className={`fixed top-0 left-0 z-50 ${
        shrinkBar ? "h-12" : "h-20"
      } w-screen flex  bg-purple-500 shadow-lg text-white transition-all duration-300 justify-between`}
    >
      <div
        id="rowContainer"
        className="w-screen flex flex-row  justify-between"
      >
        <div className="flex mx-4">
          <NavBarElement
            icon={<CgProfile size="30" />}
            tooltip="View Resume"
            callback={() => {
              router.push("/resume");
            }}
          />
          <NavBarElement
            icon={<FaUnity size="30" />}
            tooltip="Unity Projects"
            callback={() => {
              /**TODO: */
              router.push("/coming-soon");
            }}
          />
        </div>

        <div
          onClick={() => {
            router.push("/");
          }}
          className="flex group text-center pr-24 my-auto font-bold text-xl mx-4 cursor-pointer transition-all ease-linear duration-300 hover:scale-125"
        >
          <span className="">{"Cameron Witz's Website"} </span>
          <span className="ml-20 -mt-6 nav-bar-tooltip group-hover:scale-75">
            {"Back to Home"}
          </span>
        </div>

        <div className="flex mx-4 my-auto">
          <NavBarElement
            icon={<FaLinkedin size="30" />}
            tooltip="View Linkedin"
            callback={() => {
              window.open("https://www.linkedin.com/in/cameron-witz", "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
}

function NavBarElement({
  icon,
  tooltip,
  callback,
}: {
  icon: ReactNode;
  tooltip: string;
  callback: () => void;
}) {
  return (
    <div className="nav-bar-element group" onClick={callback}>
      {icon}
      <span className="nav-bar-tooltip group-hover:scale-100">{tooltip}</span>
    </div>
  );
}

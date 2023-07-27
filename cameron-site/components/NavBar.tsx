"use client";

import { ReactNode } from "react";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUnity } from "react-icons/fa";

export default function NavBar() {
  const router = useRouter();
  const [shrinkBar, setShrinkBar] = useState(false);

  // scroll listener set up to shrink navbar when scrolled
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setShrinkBar(true);
      } else setShrinkBar(false);
    };

    const test = () => {
      setShrinkBar(!shrinkBar);
    };
    window.addEventListener("scroll", scrollListener);
    //TODO: remove test
    window.addEventListener("click", test);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("click", test);
    };
  }, [shrinkBar]);

  return (
    <div
      id="backgroundContainer"
      className={`fixed top-0 left-0 ${
        shrinkBar ? "h-20" : "h-16"
      } w-screen flex  bg-purple-500 shadow-lg text-white transition-all duration-300 justify-between`}
    >
      <div
        id="rowContainer"
        className="w-screen flex flex-row  justify-between"
      >
        <div className="flex justify-start">
          <NavBarElement icon={<CgProfile size="30" />} tooltip="View Resume" />
          <NavBarElement
            icon={<FaUnity size="30" />}
            tooltip="Unity Projects"
          />
        </div>

        <div className="flex text-center my-auto font-bold text-xl">
          <span>{"Cameron Witz's Website"} </span>
        </div>

        <div className="flex mx-8 my-auto">
          <span> Placeholder for profile pic</span>
        </div>
      </div>
    </div>
  );
}

function NavBarElement({
  icon,
  tooltip,
}: {
  icon: ReactNode;
  tooltip: string;
}) {
  return (
    <div className="nav-bar-element group">
      {icon}
      <span className="nav-bar-tooltip group-hover:scale-100">{tooltip}</span>
    </div>
  );
}

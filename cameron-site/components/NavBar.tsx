"use client";

import { ReactNode } from "react";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUnity, FaLinkedin } from "react-icons/fa";

export default function NavBar() {
  const router = useRouter();
  const [shrinkBar, setShrinkBar] = useState(false);

  const [iconSize, setIconSize] = useState(30); // Initial icon size

  useEffect(() => {
    // Function to update the icon size based on viewport width
    const updateIconSize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth <= 640) {
        setIconSize(24);
      } else if (viewportWidth <= 480) {
        setIconSize(20);
      } else {
        setIconSize(30); // Default size for larger screens
      }
    };

    updateIconSize();

    // Add event listener to update icon size when the viewport is resized
    window.addEventListener("resize", updateIconSize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  // scroll listener set up to shrink navbar when scrolled
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setShrinkBar(true);
      } else setShrinkBar(false);
    };

    const test = () => {
      setShrinkBar(!shrinkBar);
    };
    window.addEventListener("scroll", scrollListener);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [shrinkBar]);

  return (
    <div
      id="backgroundContainer"
      className={`fixed top-0 left-0 z-50 ${
        shrinkBar ? "h-16" : "h-24"
      } w-screen flex bg-teal-800 shadow-2xl text-black transition-all ease-linear duration-300 border-solid`}
    >
      <div
        id="rowContainer"
        className=" flex flex-row   w-screen justify-between"
      >
        <div
          className="flex ml-1 md:ml-4 justify-start"
          style={{ width: "33%" }}
        >
          <NavBarElement
            icon={<CgProfile size={iconSize} />}
            tooltip="View Resume"
            callback={() => {
              router.push("/resume");
            }}
          />
          <NavBarElement
            icon={<FaUnity size={iconSize} />}
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
          className="flex justify-center group text-center text-xs  sm:text-lg md:text-xl  my-auto font-bold cursor-pointer transition-all ease-linear duration-300 hover:scale-125"
          style={{ width: "33%" }}
        >
          <span className="whitespace-nowrap text-white">
            {"Cameron Witz's Website"}{" "}
          </span>
          <span className=" -mt-6  nav-bar-tooltip group-hover:scale-75">
            {"Back to Home"}
          </span>
        </div>

        <div
          className="flex my-auto mr-4 sm:mr-8 justify-end"
          style={{ width: "33%" }}
        >
          <NavBarElement
            icon={<FaLinkedin size={iconSize} />}
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

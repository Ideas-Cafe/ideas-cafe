"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

import Button from "./ui/Button";
import Logo from "./ui/Logo";
import Link from "next/link";

const Navbar = () => {
  const [isVisible, setisVisible] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log("Jhii");
    let lastScrollY = window.scrollY;

    const controllNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setisVisible((preisVisible) => {
          if (preisVisible === true) {
            return false;
          }
          return preisVisible;
        });
      } else {
        setisVisible((preisVisible) => {
          if (preisVisible === false) {
            return true;
          }
          return preisVisible;
        });
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", controllNavbar);
    return () => {
      window.removeEventListener("scroll", controllNavbar);
    };
  }, []);

  useEffect(() => {
    console.log("Navbar Visibility Status:", isVisible);
  }, [isVisible]);

  const navItems = [
    { key: "01", label: "Home", href: "#Home" },
    { key: "02", label: "About", href: "#About" },
    { key: "03", label: "Events", href: "#Event" },
    { key: "04", label: "Community", href: "#Community" },
  ];

  const changPage = (page: string) => {
    router.push(page);
  };

  const baseLiStyle = "hover:cursor-pointer transition-all duration-200";
  const activeLiStyle = "underline decoration-2 underline-offset-4";

  const dependantStyle = isVisible
    ? "transition-all duration-200 translate-y-0"
    : "transition-all duration-200 translate-y-[-100px]";
  const defaultStyle =
    "flex fixed top-2.5 left-0 z-50 ml-10 w-full h-10 justify-center items-center gap-x-40 text-white" +
    " " +
    dependantStyle;

  return (
    <>
      <div className={`${defaultStyle} mix-blend-difference`}>
        <div className="">
          <Logo />
        </div>
        <div>
          <ul className="flex gap-x-6 text-white ">
            {navItems.map((item) => (
              <li
                key={item.key}
                className={`${baseLiStyle} ${
                  pathname === item.href ? activeLiStyle : ""
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button
            className="h-3 text-sm text-black"
            value="Join the Community"
            func={() => changPage("/join")}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

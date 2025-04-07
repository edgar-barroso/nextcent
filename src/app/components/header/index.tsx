"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-row justify-between items-center md:px-28 max-md:px-10 h-20 ">
      <Image
        className="w-36"
        alt="logo"
        width={200}
        height={200}
        src={"/logo.svg"}
      />
      <div className="flex flex-row gap-8 max-md:hidden overflow-hidden">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Service</Link>
        <Link href={"/"}>Features</Link>
        <Link href={"/"}>Product</Link>
        <Link href={"/"}>Testimonial</Link>
        <Link href={"/"}>FAQ</Link>
      </div>
      <div className="flex flex-row gap-2 max-md:hidden">
        <Link
          className="text-primary px-5 py-3 hover:bg-neutral-silver active:bg-colorTint-tint5 rounded-md"
          href={"/"}
        >
          Login
        </Link>
        <Link
          className="bg-primary rounded-md px-5 py-3 text-neutral-white active:bg-colorShade-shade2 "
          href={"/"}
        >
          Sign up
        </Link>
      </div>
      <button className="relative md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <IoMdMenu size={40} className="" />
        <div
          className={`absolute  top-20 right-0 bg-neutral-silver flex flex-col gap-5 overflow-hidden transition-all duration-300 rounded-md  border p-4 ${
            isOpen ? "" : "hidden"
          } 
          `}
        >
            <Link
              className="text-primary px-3 py-2 hover:bg-neutral-silver active:bg-colorTint-tint5 rounded-md"
              href={"/"}
            >
              Login
            </Link>
            <Link
              className="bg-primary rounded-md px-3 py-2 text-neutral-white active:bg-colorShade-shade2"
              href={"/"}
            >
              Sign up
            </Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Service</Link>
          <Link href={"/"}>Features</Link>
          <Link href={"/"}>Product</Link>
          <Link href={"/"}>Testimonial</Link>
          <Link href={"/"}>FAQ</Link>
          
        </div>
      </button>
    </header>
  );
};

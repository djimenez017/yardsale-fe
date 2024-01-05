import React from "react";
import Link from "next/link";
import { GoHome, GoQuestion } from "react-icons/go";
import { IoTrailSignOutline } from "react-icons/io5";
import { CgUserAdd } from "react-icons/cg";

export default function navigation() {
  return (
    <nav className="h-screen w-1/5 pl-5 text-purple flex flex-col bg-white ">
      <h1 className="text-2xl mt-5 mb-10">Yardsales</h1>
      <ul className="text-black">
        <li className="flex items-center p-1 mb-4 transition-colors duration-200 hover:text-purple hover:border-r-4 hover:border-purple">
          <GoHome className="mr-3 " />
          <Link href="/" className="">
            Home
          </Link>
        </li>
        <li className="flex items-center p-1 mb-4 transition-colors duration-200 hover:text-purple hover:border-r-4 hover:border-purple">
          <IoTrailSignOutline className="mr-3" />
          <Link href="/yardsales">Yardsales</Link>
        </li>
        <li className="flex items-center p-1 mb-4 transition-colors duration-200 hover:text-purple hover:border-r-4 hover:border-purple">
          <GoQuestion className="mr-3" />
          <Link href="/about">About</Link>
        </li>
        <li className="flex items-center p-1 mb-4 transition-colors duration-200 hover:text-purple hover:border-r-4 hover:border-purple">
          <CgUserAdd className="mr-3" />

          <Link href="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

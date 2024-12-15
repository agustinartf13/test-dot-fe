"use client";

import Link from "next/link";
import React from "react";
import { BiBasket, BiHeart } from "react-icons/bi";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="border-b sticky top-0 left-0 bg-white z-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 p-4">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href={"/"} className="font-bold shrink-0 text-xl">
            Exclusive
          </Link>

          {/* mobile auth*/}
          <div></div>
        </div>

        {/* menus */}
        <div className="flex items-center gap-14">
          <Link href={"/home"}>
            <div className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in">
              <span>Home</span>
            </div>
          </Link>
          <Link href={"/home"}>
            <div className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in">
              <span>About</span>
            </div>
          </Link>
          <Link href={"/home"}>
            <div className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in">
              <span>Contact</span>
            </div>
          </Link>
          <div>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* search bar */}
        <div className="flex items-center gap-5">
          <SearchBar />
          <SignedIn>
            <Link href={"/cart"}>
              <BiBasket className="w-6 h-6 text-gray-600" />
            </Link>
            <Link href={`/cart/${"dmas67as87udahsd"}`}>
              <BiHeart className="w-6 h-6 text-gray-600" />
            </Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;

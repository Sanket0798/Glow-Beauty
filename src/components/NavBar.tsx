import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@nextui-org/react";

const NavBar = ({ setShowCart }: any) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  function logouts(arg0: { logoutParams: { returnTo: string } }): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-white py-4 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <RxHamburgerMenu className="sm:hidden text-[26px]" />
        <Link href="/" className="text-4xl font-semibold hover:text-accent">
          Logo
        </Link>

        <ul className="gap-6 hidden sm:flex">
          <Link href="/" className="navLink">
            Home
          </Link>
          <Link href="/" className="navLink">
            Shop
          </Link>
          <Link href="/" className="navLink">
            Blog
          </Link>
          <Link href="/" className="navLink">
            Pages
          </Link>
          <Link href="/" className="navLink">
            Contact
          </Link>

          <button type="submit">Log In</button>
        </ul>

        <div className="flex gap-6 text-[26px]">
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShoppingCart />
            <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
              {cartCount}
            </div>
          </div>
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

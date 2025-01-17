import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {
  const [hamburger, setHamburger] = useState(true);
  return (
    <div className="text-center">
      <div>
        <div onClick={() => setHamburger(!hamburger)}>{hamburger ? <RxHamburgerMenu /> : ""}</div>
        <div className="relative flex justify-center items-center flex-col mt-[200px]">
          <div className="absolute">
            <img className="w-full" src="assets/empty.webp" alt="empty" />
          </div>
          <div className="mt-[350px]">
            <p className="font-medium text-[1.2rem]">
              Welcome to Chukwuemeka Abuba's Jotion
            </p>
          </div>
          <div className="flex items-center justify-center text-white bg-black mt-[10px] py-2 px-4 rounded-md gap-2 cursor-pointer">
            <div>
              <IoAddCircleOutline />
            </div>
            <div>Create a note</div>
          </div>
        </div>
      </div>
    </div>
  );
}

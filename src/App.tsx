import { useState } from "react";
import {
  MdArrowForward,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { Link } from "react-router-dom";

function App() {
  const [darkmode, setDarkmode] = useState(true);
  return (
    <main className="max-w-[3330px] p-10 w-full">
      <header className="flex justify-between items-center gap-[50rem]">
        <ul className="flex items-center justify-center gap-2">
          <li className="h-10 w-10">
            <img className="w-full" src="../public/logo.svg" alt="logo" />
          </li>
          <li className="text-lg font-bold">Jotion</li>
        </ul>
        <ul className="flex items-center justify-center gap-2">
          <div className="bg-black text-white py-[0.43rem] px-[0.7rem] rounded-md">
            <Link to="/">Log in with Github</Link>
          </div>
          <li
            className="cursor-pointer border-[1px] p-[0.6rem] rounded-lg"
            onClick={() => setDarkmode(!darkmode)}
          >
            {darkmode ? (
              <MdOutlineLightMode className="text-xl" />
            ) : (
              <MdOutlineDarkMode className="text-xl" />
            )}
          </li>
        </ul>
      </header>

      <section className="flex justify-center">
        <div className="w-full mt-16 ">
          <div className="flex justify-center items-center flex-col">
            <p className="w-full mb-3 text-5xl text-center max-w-[540px] font-bold">
              Your Ideas, Documents, & Plans, Unifield, Welcome to <span className="underline">Jotion</span>
            </p>
            <p className="text-2xl max-w-[500px] text-center">
              Jotion is the connected workspace where better, faster work
              happends
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/"
              className="cursor-pointer rounded-md flex gap-5 items-center text-center justify-center bg-black text-white mt-3 w-40 h-9"
            >
              <div>
                <div>Git Jotion free</div>
              </div>
              <div>
                <MdArrowForward />
              </div>
            </Link>
          </div>

          <section className="flex justify-center items-center relative mt-20">
            <div className="h-[30rem] w-[30rem]">
              <img
                className="w-full"
                src="../public/documents.webp"
                alt="center image"
              />
            </div>
            <div className="h-[30rem] w-[30rem]">
              <img
                className="w-full"
                src="../public/reading.webp"
                alt="center image"
              />
            </div>
          </section>
        </div>
      </section>

      <footer className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <div className="h-10 w-10">
            <img className="w-full" src="../public/logo.svg" alt="logo" />
          </div>
          <div className="text-lg font-bold">Jotion</div>
        </div>
        <div className="flex items-center gap-8 text-sm">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </footer>
    </main>
  );
}

export default App;

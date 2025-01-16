import { useState } from "react";
import {
  MdArrowForward,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [darkmode, setDarkmode] = useState(true);

  const navigate = useNavigate();

  return (
    <main
      className={`max-w-[3330px] p-10 w-full ${
        darkmode ? "bg-white" : "bg-black"
      }`}
    >
      <header className="flex justify-between items-center gap-[50rem]">
        <ul className="flex items-center justify-center gap-2">
          <li className="h-10 w-10">
            <img className="w-full" src="../assets/logo.svg" alt="logo" />
          </li>
          <li
            className={`text-lg font-bold ${
              darkmode ? "text-black" : "text-white"
            }`}
          >
            Jotion
          </li>
        </ul>
        <ul className="flex items-center justify-center gap-2">
          <div
            className={`text-white py-[0.43rem] px-[0.7rem] rounded-md ${
              darkmode ? "text-white bg-black" : "text-[#000] bg-white"
            }`}
          >
            <Link to="/">Log in with Github</Link>
          </div>
          <li
            className={`cursor-pointer border-[1px] p-[0.6rem] rounded-lg ${
              darkmode ? "text-black" : "text-white"
            }`}
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
          <div
            className={`flex justify-center items-center flex-col ${
              darkmode ? "text-black" : "text-white"
            }`}
          >
            <p className="w-full mb-3 text-[3.5rem] text-center max-w-[690px] font-bold leading-[52px]">
              Your Ideas, Documents, & Plans, Unifield, Welcome to{" "}
              <span className="underline">Jotion</span>
            </p>
            <p className="text-2xl max-w-[500px] font-semibold text-center">
              Jotion is the connected workspace where better, faster work
              happends
            </p>
          </div>

          <div className="flex justify-center">
            <div
              onClick={() => navigate("/dashboard")}
              className={`cursor-pointer rounded-md flex gap-5 items-center text-center justify-center mt-3 w-40 h-9 ${
                darkmode ? "text-white bg-black" : "text-black bg-white"
              }`}
            >
              <div>
                <div>Git Jotion free</div>
              </div>
              <div>
                <MdArrowForward />
              </div>
            </div>
          </div>

          <section className="flex justify-center items-center relative mt-20">
            <div className="h-[30rem] w-[30rem]">
              {darkmode ? (
                <img
                  className="w-full text-white"
                  src="../assets/documents.webp"
                  alt="center image"
                />
              ) : (
                <img
                  className="w-full text-white"
                  src="../assets/documents-dark.webp"
                  alt="center image dark"
                />
              )}
            </div>
            <div className="h-[30rem] w-[30rem]">
              {darkmode ? (
                <img
                  className="w-full"
                  src="../assets/reading.webp"
                  alt="center image"
                />
              ) : (
                <img
                  className="w-full"
                  src="../assets/reading-dark.webp"
                  alt="center image"
                />
              )}
            </div>
          </section>
        </div>
      </section>

      <footer className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <div className="h-10 w-10">
            <img className="w-full" src="../assets/logo.svg" alt="logo" />
          </div>
          <div
            className={`text-lg font-bold  ${
              darkmode ? "text-black" : "text-white"
            }`}
          >
            Jotion
          </div>
        </div>
        <div
          className={`flex items-center gap-8 text-sm ${
            darkmode ? "text-black" : "text-white"
          }`}
        >
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </footer>
    </main>
  );
}

export default App;

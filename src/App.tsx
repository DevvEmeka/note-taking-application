import { useState } from "react";
import "./App.css";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <main className="max-w-96 p-10 w-full m-0 mx-auto">
      <header>
        <div className="flex justify-between items-center">
          <ul className="flex">
            <li onClick={() => setDarkmode(true)}>
              {darkmode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
            </li>
            <li>Jotion</li>
          </ul>
          <ul className="flex">
            <li>Log in with Github</li>
            <li></li>
          </ul>
        </div>

        <div>
          <p>Your Ideas, Documents, & Plans, Unifield, Welcome to Jotion</p>
          <p>
            Jotion is the connected workspace where better, faster work happends
          </p>

          <div>
            <div>Git Jotion free</div>
            <div></div>
          </div>

          <div>
            <img src="" alt="" />
          </div>
        </div>
      </header>

      <footer>
        <div className="flex">
          <img src="" alt="" />
          <div>Jotion</div>
        </div>
        <div className="flex">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </footer>
    </main>
  );
}

export default App;

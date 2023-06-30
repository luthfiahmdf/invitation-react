import { useParams } from "react-router-dom";
import i from "./assets/head.png";
import m from "./assets/music/music.mp3";
import { useState, useEffect } from "react";
import Invite from "./pages/invite";
import Groom from "./pages/groom";

function App() {
  const { name } = useParams();
  const { loc } = useParams();
  const [inv, setInv] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById("music");
    if (inv) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [inv]);

  const handleInv = () => {
    setInv(true);
    setShow(true);
  };

  return (
    <div className="">
      {inv ? (
        ""
      ) : (
        <div className="image w-[100vw] relative">
          <img
            src={i}
            alt=""
            className={`h-screen w-full object-cover z-0 brightness-50 ${
              inv ? "" : ""
            }`}
          />
          <div className="text absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-2xl text-white">We Are Getting Married</h1>
            <h1 className="mt-5 font-dancing text-5xl text-white">
              Anisa & Deni
            </h1>
            <h1 className="text-white text-xl mt-5 font-light">
              Minggu, 9 Juli 2023
            </h1>
            {inv ? (
              <div className="dear mt-7 flex justify-center flex-col items-center">
                <h1 className="italic text-white text-xl">Dear</h1>
                <h1 className="text-2xl text-white">
                  {name !== null ? { name } : "test"}
                </h1>
                <h1 className="italic text-white text-xl">
                  {loc !== null ? { loc } : "test"}
                </h1>
              </div>
            ) : (
              <>
                <div className="dear mt-7 flex justify-center flex-col items-center">
                  <h1 className="italic text-white text-xl">Dear</h1>
                  <h1 className="text-2xl text-white">{name}</h1>
                  <h1 className="italic text-white text-xl">{loc}</h1>
                </div>
                <button
                  className="bg-white p-3 mt-5 rounded-lg"
                  onClick={handleInv}
                >
                  <h1>Open Invitation</h1>
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <audio id="music" src={m} />
      <div className={`${show ? "display-block" : "hidden"}`}>
        <Invite />
        <Groom />
        <Groom />
      </div>
    </div>
  );
}

export default App;

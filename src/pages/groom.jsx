import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import f from "../assets/flower.png";
import b from "../assets/nopal.png";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function Groom() {
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  //   const { inView } = useInView({
  //     triggerOnce: true,
  //     delay: 500, // Waktu penundaan dalam milidetik (ms)
  //   });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <div>
      <div className="slice flex flex-col justify-center items-center bg-white h-full">
        <img src={f} alt="" className="w-1/2 mt-5" />
        <h1 className="text-3xl text-slate-800 font-dancing">Bride & Groom</h1>
        <h1 className="italic p-4 text-slate-700 text-center">
          Assalamualaikum Warhmatullahi Wabarokatuh
        </h1>
        <h1 className="p-4 text-center text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          doloribus illum iure veniam amet quos beatae nam hic tempore laborum.
        </h1>

        <Section
          initial="hidden"
          animate={control}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{
            duration: 2,
            delay: 1,
          }}
        >
          <div className="bridegroom">
            <div className="bride flex justify-center items-center flex-col">
              <img
                src={b}
                alt="Bride"
                className="rounded-full w-[70%] border bottom-2"
              />
              <h1 className="font-dancing text-4xl mt-3 font-bold">Bride</h1>
              <h1 className="font-dancing font-bold  text-3xl">
                Anisa Nurul Auliah
              </h1>
              <h1>Anak Pertama dari Pasangan</h1>
              <h1>Agus & Lina</h1>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default Groom;

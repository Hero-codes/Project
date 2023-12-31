import bg from "../assets/Transients2.png"
import { useRef } from "react";
import { useInView } from "framer-motion";

const First = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            className="bg-black text-white py-16 bg-cover">
            <div className="mx-auto container py-5 px-2">

                <div className="flex gap-10 items-center flex-col md:flex-row w-10/12 mx-auto">
                    <div className="flex flex-col space-y-7 px-2">
                        <h1 className="max-w-sm text-4xl md:text-5xl">Game Designer and Developer Portfolio</h1>
                        <p className="max-w-md leading-7">Hello and welcome to my portfolio! Eager to learn, contribute, and make a positive impact on game development. Ready to immerse myself in the industry and grow creatively. . Take a look at my work and let's chat about collaborating on your next project.</p>
                    </div>

                    <div className="flex justify-end w-full md:w-[40%]">
                        <img src={bg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default First
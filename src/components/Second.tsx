import { useRef } from "react";
import { useInView } from "framer-motion";

const Second = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            className="text-white second-bg bg-cover px-2">
            <div className="mx-auto max-w-5xl py-16 px-2">
                <div className="flex flex-col gap-10">
                    <h1 className="text-5xl font-semibold text-center md:text-left">My Design Philosophy</h1>
                    <p className="text-lg font-semibold max-w-3xl text-center md:text-left">My design philosophy is centered around creating immersive experiences for players. From the concept phase to the final product, I always keep the player in mind and strive to create games that are both engaging and fun.</p>

                    <div className="flex gap-8 flex-col md:flex-row">
                        <div className="rounded-md flex flex-col justify-center gap-9 bg-[#283157] px-5 text-center py-6">
                            <h1 className="font-semibold">"Bring your ideas to life"</h1>
                            <p className="leading-7">My design process begins with getting a deep understanding of players' wants and needs. By designing with the player in mind.</p>
                        </div>

                        <div className="rounded-md flex flex-col justify-center gap-9 bg-[#283157] px-5 text-center py-6">
                            <h1 className="font-semibold">"Games are not just entertainment; they are portals to emotions, memories, and profound connections."</h1>
                            <p className="leading-7">I believe the best ideas come from iteration and constant refinement. By taking an iterative approach, I can ensure the final product is polished and meets the players' expectations.</p>
                        </div>

                        <div className="rounded-md flex flex-col justify-center gap-9 bg-[#283157] px-5 text-center py-6">
                            <h1 className="font-semibold">"Game design is a playground for innovation, where ideas take flight and become interactive realities."</h1>
                            <p className="leading-7">Small details have a significant impact on player engagement and the overall gaming experience. paying special attention to detail, ensuring the game is both visually stunning and enjoyable.</p>
                        </div>

                        <div className="rounded-md flex flex-col justify-center gap-9 bg-[#283157] px-5 text-center py-6">
                            <h1 className="font-semibold">“I help in making gaming ideas to life and showcase my work to a wider audience.”</h1>
                            <p className="leading-7">I believe the best games are created through team collaboration. By working with artists, programmers and other designers, I can bring a shared vision to life and create games that exceed expectations.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h1 className="font-semibold text-4xl">My Development Skills</h1>
                        <p className="text-lg leading-6">As a game developer, I have extensive experience working with different game engines,  programming languages and some software's as per need . Here are some of the tools I'm proficient in:</p>
                    </div>

                    <div className="flex gap-5 flex-col md:flex-row text-center justify-around">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-semibold text-xl mb-4">Game Engines:</h1>
                            <span>Blender</span>
                            <span>Unreal Engine</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <h1 className="font-semibold text-xl mb-4">Programming Languages:</h1>
                            <span>C#</span>
                            <span>HTML and CSS</span>
                            <span>Python</span>
                            <span>C++</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="font-semibold text-xl mb-4">Other Software's:</h1>
                            <span>Solidworks</span>
                            <span>Motion Graphics</span>
                            <span>Photoshop</span>
                            <span>Cloud Computing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second
import bg from "../assets/retro.jpg"

const Fourth = () => {
    return (
        <div className="text-white fourth-bg bg-black px-2">
            <div className="mx-auto container py-16">
                <div className="flex justify-around gap-3 flex-col md:flex-row items-center">

                    <div className="w-full md:w-2/6">
                        <img src={bg} alt="..." />
                    </div>

                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        <h1 className="font-bold text-4xl text-center">My Creative Process</h1>
                        <p className="text-lg text-center">Here's a breakdown of my creative process when designing and developing games:</p>

                        {/* DESKTOP */}


                        <div className="hidden md:block">
                            <ul className="steps gap-4 steps-horizontal">
                                <li className="step step-accent flex flex-col max-w-sm gap-3">
                                    <h1>Idea Generation</h1>
                                    <p>I brainstorm ideas by, taking inspiration from other games, current trends, and player feedback.</p>
                                </li>
                                <li className="step step-accent flex flex-col max-w-sm gap-3">
                                    <h1>Prototyping and Testing</h1>
                                    <p>I create a prototype of the object or scenario and refine the mechanics.</p>
                                </li>
                                <li className="step step-accent flex flex-col max-w-sm gap-3">
                                    <h1>Art and Designing</h1>
                                    <p>I composers and create stunning visuals effects and models that brings the game to life.</p>
                                </li>
                                <li className="step step-accent flex flex-col max-w-sm gap-4">
                                    <h1>Integration and QA</h1>
                                    <p>I integrate all the game elements and test the game rigorously for quality assurance to ensure a polished, error-free final product.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="md:hidden mt-5">
                    <ul className="flex flex-col gap-10">
                        <li className="flex flex-col space-y-4">
                            <h1 className="font-semibold text-lg"><span className="mr-5 bg-cyan-400 text-black p-2 font-semibold rounded-md">1</span>Idea Generation</h1>
                            <div>
                                <p>I brainstorm ideas by, taking inspiration from other games, current trends, and player feedback.</p>
                            </div>
                        </li>
                        <li className="flex flex-col space-y-4">
                            <h1 className="font-semibold text-lg"><span className="mr-5 bg-cyan-400 text-black p-2 font-semibold rounded-md">2</span>Prototyping and Testing</h1>
                            <div>
                                <p>I create a prototype of the object or scenario and refine the mechanics.</p>
                            </div>
                        </li>
                        <li className="flex flex-col space-y-4">
                            <h1 className="font-semibold text-lg"><span className="mr-5 bg-cyan-400 text-black p-2 font-semibold rounded-md">3</span>Art and Designing</h1>
                            <div>
                                <p> composers and create stunning visuals effects and models that brings the game to life.</p>
                            </div>
                        </li>
                        <li className="flex flex-col space-y-4">
                            <h1 className="font-semibold text-lg"><span className="mr-5 bg-cyan-400 text-black p-2 font-semibold rounded-md">4</span>Integration and QA</h1>
                            <div>
                                <p>I integrate all the game elements and test the game rigorously for quality assurance to ensure a polished, error-free final product.</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Fourth
const Third = () => {
    return (
        <div className='third-bg text-white bg-cover'>
            <div className='mx-auto container px-2'>
                <div className='flex flex-col space-y-7 items-center'>
                    <h1 className='font-semibold text-4xl'>Selected Projects and Case Studies</h1>
                    <p className='text-lg'>Here are some of the games I've designed and developed:</p>

                    <div className='flex flex-col space-y-10'>
                        <div className='flex flex-col md:flex-row gap-10 max-w-5xl mx-auto'>
                            <div className='flex flex-col items-center text-center space-y-5 w-full md:w-1/2'>
                                <img className='h-[320px] w-[500px]' src="https://images.unsplash.com/photo-1681887343865-af3918188a6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T2JqZWN0JTIwbW9kZWxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="..." />
                                <h1>Object Modeling</h1>
                                <p>Creating detailed representations of game elements for a cohesive and immersive experience, enhancing player engagement and enjoyment</p>
                            </div>

                            <div className='flex flex-col items-center text-center space-y-5 w-full md:w-1/2'>
                                <img className='h-[320px] w-[500px]' src="https://images.unsplash.com/photo-1681887343865-af3918188a6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T2JqZWN0JTIwbW9kZWxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="..." />
                                <h1>Concept Creating</h1>
                                <p>Concept creation in game designing is the birthplace of ideas, shaping the game's essence, mechanics, and art. It lays the groundwork for a captivating and cohesive gaming experience, providing direction for the development journey.</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-10 max-w-5xl mx-auto'>
                            <div className='flex flex-col w-full text-center md:w-1/2 items-center space-y-5'>
                                <img className='h-[320px] w-[500px]' src="https://images.unsplash.com/photo-1681887343865-af3918188a6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T2JqZWN0JTIwbW9kZWxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="..." />
                                <h1>Studio Photography</h1>
                                <p>Expert team collaboration under a unified vision, fostering innovation and delivering exceptional gaming experiences that resonate with players.</p>
                            </div>


                            <div className='flex flex-col items-center text-center w-full md:w-1/2 space-y-5'>
                                <img className='h-[320px] w-[500px]' src="https://images.unsplash.com/photo-1681887343865-af3918188a6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T2JqZWN0JTIwbW9kZWxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="..." />
                                <h1>Structure Modeling</h1>
                                <p>Blueprinting game elements for cohesion and efficiency. Defines interactions, levels, and systems, guiding development towards a polished and engaging experience.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third
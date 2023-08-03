import bg from "../assets/cave.jpg"

const Fifth = () => {
    return (
        <div
            className="text-white fifth-bg bg-cover px-2">
            <div className="mx-auto container py-16">
                <div className="flex justify-center gap-5 flex-col md:flex-row items-center">
                    <div className="flex flex-col gap-9 items-center md:items-start">
                        <h1 className="font-semibold text-5xl">Contact Me</h1>
                        <p className="text-lg w-full text-center md:text-start md:w-3/4">Ready to collaborate on your next project? Get in touch with me today:</p>
                        <ul className="flex list-disc md:ml-5 ml-0 flex-col space-y-2">
                            <li>Email: <a className="text-blue-300" href="mailto:himanshukharabe10@gmail.com"> himanshukharabe10@gmail.com</a></li>

                            <li>Phone: <a href="tel:+91 96579 53806" className="text-blue-300">+91 96579 53806</a></li>

                            <li>LinkedIn: <a className="text-blue-300" href="https://www.linkedin.com/in/himanshu-kharabe" target="_blank">linkedin.com/in/himanshu-kharabe</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-2/6 mt-5 md:mt-0">
                        <img src={bg} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fifth
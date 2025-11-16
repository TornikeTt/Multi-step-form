function Footer() {
    return (
        <footer
            className="
                        w-full h-full flex items-center justify-center bg-neutral-white 
                        md:col-start-2  
                    "
        >
            <div className="w-[90%] flex justify-between">
                <button className="text-neutral-grey-500 font-bold">
                    {true && <span>Go Back</span>}
                </button>
                <button className="bg-primary-blue-950 text-neutral-white h-10 w-[100px] rounded-sm">
                    Next Step
                </button>
            </div>
        </footer>
    );
}

export default Footer;

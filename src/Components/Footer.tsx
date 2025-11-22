function Footer() {
    return (
        <footer className="bg-neutral-white flex h-full w-full items-center justify-center md:col-start-2">
            <div className="flex w-full justify-between px-4 lg:px-20">
                <button className="text-neutral-grey-500 font-bold">
                    {false && <span>Go Back</span>}
                </button>
                <button className="bg-primary-blue-950 text-neutral-white h-10 w-[100px] rounded-sm">
                    Next Step
                </button>
            </div>
        </footer>
    );
}

export default Footer;

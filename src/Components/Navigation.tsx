function Navigation() {
    return (
        <div
            className="
                        w-full h-full bg-[url(./assets/images/bg-sidebar-mobile.svg)] bg-cover bg-center bg-no-repeat
                        md:bg-[url(./assets/images/bg-sidebar-desktop.svg)] md:row-span-2 

                        lg:rounded-lg lg:shadow-lg
                    "
        >
            <div
                className="
                            w-full h-full p-5 flex justify-center gap-4
                            md:flex-col md:justify-start 
                        "
            >
                <div className="md:flex md:items-center md:gap-4">
                    <button className="w-[35px] h-[35px] rounded-full border border-neutral-white text-neutral-white flex items-center justify-center">
                        1
                    </button>

                    <div className="leading-[19px] hidden md:block">
                        <small className="text-neutral-grey-500  font-medium">
                            STEP 1
                        </small>
                        <p className="text-neutral-white font-bold tracking-wide">
                            YOUR INFO
                        </p>
                    </div>
                </div>

                <div className="md:flex md:items-center md:gap-4">
                    <button className="w-[35px] h-[35px] rounded-full border border-neutral-white text-neutral-white flex items-center justify-center">
                        2
                    </button>

                    <div className="leading-[19px] hidden md:block">
                        <small className="text-neutral-grey-500  font-medium">
                            STEP 2
                        </small>
                        <p className="text-neutral-white font-bold tracking-wide">
                            SELECT PLAN
                        </p>
                    </div>
                </div>

                <div className="md:flex md:items-center md:gap-4">
                    <button className="w-[35px] h-[35px] rounded-full border border-neutral-white text-neutral-white flex items-center justify-center">
                        3
                    </button>

                    <div className="leading-[19px] hidden md:block">
                        <small className="text-neutral-grey-500  font-medium">
                            STEP 3
                        </small>
                        <p className="text-neutral-white font-bold tracking-wide">
                            ADD-ONS
                        </p>
                    </div>
                </div>

                <div className="md:flex md:items-center md:gap-4">
                    <button className="w-[35px] h-[35px] rounded-full border border-neutral-white text-neutral-white flex items-center justify-center">
                        4
                    </button>

                    <div className="leading-[19px] hidden md:block">
                        <small className="text-neutral-grey-500  font-medium">
                            STEP 4
                        </small>

                        <p className="text-neutral-white font-bold tracking-wide">
                            SUMMARY
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;

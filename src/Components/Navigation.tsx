import clsx from "clsx";

function Navigation({ currentStep }: { currentStep: number }) {
    const signupSteps = [
        { step: 1, text: "YOUR INFO" },
        { step: 2, text: "SELECT PLAN" },
        { step: 3, text: "ADD-ONS" },
        { step: 4, text: "SUMMARY" },
    ].map((each, index) => {
        const isCurrentStep = currentStep == index;
        return (
            <div className="md:flex md:items-center md:gap-4" key={index}>
                <button
                    className={clsx(
                        // base
                        "flex size-[35px] items-center justify-center rounded-full border",
                        // conditional
                        isCurrentStep
                            ? "bg-primary-blue-200 border-none font-bold text-black"
                            : "border-neutral-white text-neutral-white",
                    )}
                >
                    {each.step}
                </button>

                <div className="hidden leading-[19px] md:block">
                    <small className="text-neutral-grey-500 font-medium">
                        STEP {each.step}
                    </small>
                    <p className="text-neutral-white font-bold tracking-wide">
                        {each.text}
                    </p>
                </div>
            </div>
        );
    });

    return (
        <div
            className={clsx(
                //Base
                "h-full w-full bg-[url(./assets/images/bg-sidebar-mobile.svg)] bg-cover bg-center bg-no-repeat",
                //md
                "md:row-span-2 md:rounded-lg md:bg-[url(./assets/images/bg-sidebar-desktop.svg)] md:shadow-lg",
            )}
        >
            <div className="flex h-full w-full justify-center gap-5 p-5 md:flex-col md:justify-start">
                {signupSteps}
            </div>
        </div>
    );
}

export default Navigation;

import clsx from "clsx";
import Header from "./Header";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

type Props = {
    currentStep: number;
};

export function Main({ currentStep }: Props) {
    const steps = [<FirstStep />, <SecondStep />];

    return (
        <main className={clsx("relative flex items-center justify-center")}>
            <div
                className={clsx(
                    // base
                    "bg-neutral-white absolute -top-15 flex w-[90%] max-w-[480px] flex-col justify-between gap-10 rounded-lg p-4 shadow-lg",
                    // md
                    "md:top-0 md:w-full md:max-w-none md:rounded-none md:shadow-none",
                    //lg
                    "lg:px-20 lg:py-10",
                )}
            >
                <Header currentStep={currentStep} />

                <form>{steps[currentStep]}</form>
            </div>
        </main>
    );
}

export default Main;

import { useState } from "react";
import clsx from "clsx";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer";

function App() {
    const [currentStep, setCurrentStep] = useState<number>(0);

    return (
        <section
            className={clsx(
                // Base
                "bg-neutral-blue-100 font-ubuntu h-screen w-full overflow-auto",
                // md
                "md:flex md:items-center md:justify-center",
            )}
        >
            <div
                className={clsx(
                    // Base
                    "grid size-full min-h-[500px] grid-rows-[150px_1fr_80px]",
                    // md
                    "md:bg-neutral-white md:h-[500px] md:w-[750px] md:grid-cols-[250px_1fr] md:grid-rows-[1fr_80px] md:rounded-lg md:p-4",
                    // lg
                    "lg:h-[600px] lg:w-[900px]",
                )}
            >
                <Navigation />
                <Main currentStep={currentStep} />
                <Footer
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                />
            </div>
        </section>
    );
}

export default App;

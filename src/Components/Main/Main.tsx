import clsx from "clsx";
import { Header, Form } from "./FirstStep";

function Main() {
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
                <Header />
                <form>
                    <Form />
                </form>
            </div>
        </main>
    );
}

export default Main;

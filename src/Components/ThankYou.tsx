import { clsx } from "clsx";
import thenkYouicone from "../assets/images/icon-thank-you.svg";

function ThankYou() {
    return (
        <div
            className={clsx(
                // base
                "relative flex min-h-[480px] items-center justify-center",
                // md
                "md:min-h-0",
            )}
        >
            <div
                className={clsx(
                    // base
                    "h-85 w-[90%] max-w-[480px] p-5",
                    "bg-neutral-white absolute -top-15 flex flex-col items-center justify-center gap-3 rounded-lg text-center shadow-lg",
                    // md
                    "md:top-0 md:h-full md:w-full md:max-w-none md:rounded-none md:shadow-none",
                    // lg
                    "lg:p-22",
                )}
            >
                <img
                    src={thenkYouicone}
                    className="h-15 w-15"
                    alt="thenk you icone"
                />
                <h1 className="text-primary-blue-950 text-xl font-bold">
                    Thank You!
                </h1>
                <p className="text-neutral-grey-500">
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. if you ever need support, please
                    feel free to email us at support@loremgaming.com
                </p>
            </div>
        </div>
    );
}

export default ThankYou;

import Navigation from "./Components/Navigation";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

/*
    --color-primary-blue-950: hsl(213 96% 18%);
    --color-primary-purple-600: hsl(243 100% 62%);
    --color-primary-blue-300: hsl(228 100% 84%);
    --color-primary-blue-200: hsl(206 94% 87%);
    --color-primary-red-500: hsl(354 84% 57%);

    --color-neutral-grey-500: hsl(231 11% 63%);
    --color-neutral-purple-200: hsl(229 24% 87%);
    --color-neutral-blue-100: hsl(218 100% 97%);
    --color-neutral-blue-50: hsl(231 100% 99%);
    --color-neutral-white: hsl(0 100% 100%);
*/

function App() {
    return (
        <section
            className="
                w-full h-screen bg-neutral-blue-100 font-ubuntu

                lg:flex lg:items-center lg:justify-center 
            "
        >
            <div
                className="
                    w-full h-full grid grid-rows-[150px_1fr_80px]
                    md:grid-rows-[1fr_80px] md:grid-cols-[250px_1fr]

                    lg:w-[900px] lg:h-[500px] lg:rounded-lg overflow-clip 
                    lg:p-4 lg:bg-neutral-white
                "
            >
                <Navigation />
                <Main />
                <Footer />
            </div>
        </section>
    );
}

export default App;

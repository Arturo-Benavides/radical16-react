import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Hero() {

    return (
        <section id="home" className="relative border-b bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-10 sm:px-6 py-24 sm:py-32" data-aos="fade-up">
                <div className="max-w-3xl">
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-black dark:text-white">
                        Creative tech for modern culture.
                    </h1>
                    <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-200">
                        RADICAL16 crafts crisp interfaces and experimental experiences that move fast and look sharp.
                    </p>
                    {/* <div className="mt-8 flex flex-wrap gap-3">
                        <a href="#work" className="inline-flex items-center rounded-lg px-5 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 transition">See work</a>
                        <a href="#services" className="inline-flex items-center rounded-lg px-5 py-3 border dark:border-white hover:border-black  dark:hover:border-black transition dark: text-white">What we do</a>
                    </div> */}
                    <div className="mt-16 flex flex-col items-center gap-2">
                        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                            See work
                        </span>
                        <a href="#work" className="animate-bounce">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-neutral-800 dark:text-neutral-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>


                </div>
            </div>
        </section>
    );
}
import FreeTrial from "./FreeTrial";
import ai from "../../assets/ai.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div>
        <div className="relative isolate overflow-hidden pt-14">
          <img
            src={ai}
            alt=" ai"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-black bg-opacity-90"></div>
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Announcing ChatWithAI Content Generator full release{" "}
                <a href="#" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                ChatWithAI Content Generator
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                ChatWithAI is a content generator that uses AI to generate content
                for you. It is a tool that helps you generate content for your
                blog, website, or social media.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="free-plan"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Start 3 Day Free Trial
                </Link>
                <Link
                  to="free-plan"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FreeTrial />
    </>
  );
}

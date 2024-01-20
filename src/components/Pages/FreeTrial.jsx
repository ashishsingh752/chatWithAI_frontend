import { Link } from "react-router-dom";

export default function FreeTrial() {
  return (
    <div className="relative w-full isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-24 sm:px-6  sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Boost your productivity with chatWithAI Content Generator. Start
            using our app today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="free-plan"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
  );
}
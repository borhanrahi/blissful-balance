function CallTwoAct() {
    return (
        <div>
            <aside className="p-12 sm:p-16 sm:py-10 lg:p-24 lg:py-16 xl:py-20">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm font-medium">
          Create your amazing website today!
        </p>
        <p className="mt-2 text-3xl font-bold sm:text-4xl xl:text-slate-900">
          Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
        </p>
        <form className="mt-8 sm:flex">
          <div className="sm:flex-1">
            <label className="sr-only">
              <p>Email</p>
            </label>
            <input
              className="w-full p-3 border-2 border-gray-300 rounded-global  dark:text-white dark:border-gray-500"
              type="text"
            />
          </div>
          <button className="text-white px-8 py-2 flex items-center justify-between mt-4 font-medium rounded-global mx-auto bg-yellow-300 hover:bg-yellow-400 sm:w-auto sm:mt-0 sm:ml-4">
            <p className="text-black">Sign up</p>
            <span className="w-fit">
              <svg
                className="flex-shrink-0 w-4 h-4 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </aside>
        </div>
    );
}

export default CallTwoAct;
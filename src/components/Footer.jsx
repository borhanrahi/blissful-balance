function Footer() {
    return (
        <div>
             <div className="pb-4">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-7xl md:px-12 lg:max-w-screen-xl lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="/" className="inline-flex items-center">
              <p className="text-xl font-bold tracking-wide uppercase text-slate-900 ">
                Blissful Balance
              </p>
            </a>
            <div className="mt-2 lg:max-w-sm">
              <p>
                In particular, the garbled words of lorem ipsum bear an
                unmistakable resemblance to sections 1.10.32–33 of Cicero's
                work, with the most notable passage excerpted below
              </p>
              <p className="mt-4">
                However, the “how and when” still remain something of a mystery,
                with competing theories and timelines.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-slate-900 ">
              Links
            </p>
            <div className="flex">
              <a
                href="/refund-policy"
                className="transition-colors duration-300 text-primary hover:text-primary-800">
                Refund Policy
              </a>
            </div>
            <div className="flex">
              <a
                href="/privacy-policy"
                className="transition-colors duration-300 text-primary hover:text-primary-800">
                Privacy Policy
              </a>
            </div>
            <div className="flex">
              <a
                href="/terms-and-conditions"
                className="transition-colors duration-300 text-primary hover:text-primary-800">
                Terms and conditions
              </a>
            </div>
          </div>
          <div>
            <p className="font-bold text-slate-900 ">
              Follow Us on Twitter
            </p>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="https://twitter.com/"
                className="text-gray-500 transition-colors duration-300 hover:text-primary">
                <span className="w-fit">
                  <svg
                    className="h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    >
                    
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                  </svg>
                </span>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-primary"></a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-primary"></a>
            </div>
            <p className="mt-3 font-bold text-slate-900 ">
              Feedback
            </p>
            <p className="mt-0 2xl:text-gray-200">
              We are listening. Please reach use at support@blisfullmemory.com
              with your valuable feedback.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 border-t lg:flex-row">
          <p className="text-sm">© Copyright 2023.. All rights reserved.</p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <p>Made by Borhan</p>
          </ul>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Footer;
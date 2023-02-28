import { Disclosure } from "@headlessui/react";


function Faq() {
    return (
        <div>
            <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-14">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 text-center md:mx-auto md:mb-12 lg:max-w-2xl">
          <h2 className="max-w-lg mb-6 font-sans font-bold leading-none tracking-tight text-slate-900 text-2xl md:mx-auto lg:text-3xl">
            FAQ
          </h2>
          <p className="sm:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div>
          <Disclosure as="div" className="border-b dark:border-slate-700">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex text-lg font-medium py-4 flex-row text-left px-4 w-full items-center justify-between hover:bg-slate-100 ">
                  Can I return my pet rock if it doesn't live up to my
                  expectations?
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 mb-4 mt-2">
                  No, unfortunately we do not accept returns on pet rocks.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="border-b dark:border-slate-700">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between text-lg font-medium px-4 py-4 text-left w-full hover:bg-slate-100 ">
                  Do I need a license to operate a vacuum cleaner?
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-base mb-4 mt-2">
                  No, you do not need a license to operate a vacuum cleaner.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="border-b dark:border-slate-700">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between text-lg font-medium px-4 py-4 text-left w-full hover:bg-slate-100 ">
                  Can I return my umbrella if it doesn't keep me dry?
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-base mb-4 mt-2">
                  No, unfortunately we do not accept returns on umbrellas due to
                  their nature as weather-dependent items.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="border-b dark:border-slate-700">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between text-lg font-medium px-4 py-4 text-left w-full hover:bg-slate-100 ">
                  Can I try Use it for free?
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-base mb-4 mt-2">
                  Yes. You can try our prdouct for free for 10 days
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="border-b dark:border-slate-700">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between text-lg font-medium px-4 py-4 text-left w-full hover:bg-slate-100">
                  How can I reach for support?
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 text-base mb-4 mt-2">
                  It is recommended that you wear a helmet while riding a
                  unicycle, as with any other physical activity.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Faq;
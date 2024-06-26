import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
            <img
                src="https://static.vecteezy.com/system/resources/previews/008/623/899/non_2x/gym-logo-design-template-fitness-club-creative-symbols-vector.jpg"
                className="h-12" // Increase the value to make it bigger, e.g., h-20
                alt="Flowbite Logo"
                sizes="100px"
            />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" style={{fontWeight:'bold'}}>
                GYM
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6" style={{ color: '#9845AA' }}>
                    About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a className="hover:underline">gym</a>. All Rights
            Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;







import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

      
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-auto w-28"
            />

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-6 flex items-center gap-5 text-sm text-gray-600">
              <a
                href="#"
                className="transition hover:text-[#DB2777]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition hover:text-[#DB2777]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="transition hover:text-[#DB2777]"
              >
                LinkedIn
              </a>
            </div>
          </div>


        
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#0F172A]">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="#"
                  className="transition hover:text-[#DB2777]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#DB2777]"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#DB2777]"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>


        
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#0F172A]">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="#"
                  className="transition hover:text-[#DB2777]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#DB2777]"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#DB2777]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>


     
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#0F172A]">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="#"
                  className="transition hover:text-[#DB2777]"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-[#DB2777]"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>


        <div className="mt-16 flex flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="transition hover:text-[#DB2777]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-[#DB2777]"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
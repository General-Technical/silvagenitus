import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <header>
        <nav className="flex items-center flex-wrap">
          <button
            className="z-50 inline-flex p-3 hover:bg-green-600 rounded md:hidden text-primary ml-auto hover:text-hover outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? "" : "hidden"
            }   absolute top-0 h-screen md:h-auto w-full md:inline-flex md:flex-grow md:w-screen bg-secondary bg-opacity-70 md:bg-opacity-0 flex align-middle items-center `}
          >
            <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full flex flex-col md:h-36 mx-auto ">
              <Link href="/">
                <button onClick={handleClick}>
                  <a>
                    <h4>Home</h4>
                  </a>
                </button>
              </Link>
              <Link href="/about">
                <button onClick={handleClick}>
                  <a>
                    <h4>About</h4>
                  </a>
                </button>
              </Link>
              <Link href="/shop">
                <button onClick={handleClick}>
                  <a>
                    <h4>Shop</h4>
                  </a>
                </button>
              </Link>
              <Link href="/contact">
                <button onClick={handleClick}>
                  <a>
                    <h4>Contact</h4>
                  </a>
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

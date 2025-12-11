import { createSignal, For, Show } from "solid-js";

const Navbar = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  // Define links here to keep the JSX clean
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen());

  return (
    // Fixed position + Backdrop Blur for that "Glass" feel
    <nav class="fixed w-full z-50 top-0 start-0 border-b border-gray-200 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* --- Logo Area --- */}
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          {/* You can replace this circle with an SVG logo */}
          <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/50">
            M
          </div>
          <span class="self-center text-xl font-bold whitespace-nowrap text-gray-900 tracking-tight">
            ModernUI
          </span>
        </a>

        {/* --- Mobile Hamburger Button --- */}
        <button
          onClick={toggleMenu}
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
          aria-controls="navbar-default"
          aria-expanded={isOpen()}
        >
          <span class="sr-only">Open main menu</span>
          {/* CSS-only animated hamburger icon */}
          <div class="relative w-5 h-4">
            <span
              class={`absolute left-0 w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-in-out ${
                isOpen() ? "top-2 rotate-45" : "top-0"
              }`}
            ></span>
            <span
              class={`absolute left-0 w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-in-out ${
                isOpen() ? "opacity-0" : "top-2"
              }`}
            ></span>
            <span
              class={`absolute left-0 w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-in-out ${
                isOpen() ? "top-2 -rotate-45" : "top-4"
              }`}
            ></span>
          </div>
        </button>

        {/* --- Desktop Menu --- */}
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <For each={navLinks}>
              {(link) => (
                <li>
                  <a
                    href={link.href}
                    class="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 transition-colors duration-200 relative group"
                  >
                    {link.name}
                    {/* Animated underline effect */}
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>

      {/* --- Mobile Menu (Dropdown) --- */}
      <Show when={isOpen()}>
        <div class="md:hidden border-t border-gray-200 bg-white shadow-lg">
          <ul class="flex flex-col p-4 font-medium space-y-2">
            <For each={navLinks}>
              {(link) => (
                <li>
                  <a
                    href={link.href}
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {link.name}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Show>
    </nav>
  );
};

export default Navbar;

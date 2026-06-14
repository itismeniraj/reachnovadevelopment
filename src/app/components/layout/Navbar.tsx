"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import Container from "../ui/Container";
import { siteData } from "../../data/siteData";
import useNavbar from "../../hooks/useNavbar";

export default function Navbar() {
  const links = siteData?.nav?.links || [];

  const {
    open,
    active,
    openDropdown,

    toggleMenu,
    closeMenu,

    setActiveLink,

    showDropdown,
    hideDropdown,
  } = useNavbar();

  const handleScroll = (href: string) => {
    if (href === "/" || href === "#home") {
      window.history.pushState(null, "", "/");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setActiveLink("/");

      return;
    }

    const id = href
      .replace("/#", "")
      .replace("#", "");

    const el = document.getElementById(id);

    if (!el) return;

    window.history.pushState(
      null,
      "",
      `/#${id}`
    );

    const offsetTop =
      el.getBoundingClientRect().top +
      window.scrollY -
      80;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    setActiveLink(`#${id}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--navbar-bg)] backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            onClick={() => handleScroll("/")}
          >
            <Image
              src={siteData.logo.src}
              alt={siteData.logo.alt}
              width={48}
              height={48}
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((item) => {
              const isActive =
                active === item.href;

              return (
                <div
                  key={item.label}
                  className="relative flex items-center gap-2"
                  onMouseEnter={() =>
                    item.dropdown &&
                    showDropdown(item.label)
                  }
                  onMouseLeave={() =>
                    hideDropdown()
                  }
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();

                      handleScroll(item.href);

                      hideDropdown();
                    }}
                    className={`group relative text-sm font-medium transition ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--foreground)] hover:text-[var(--accent)]"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition duration-300 ${
                        openDropdown ===
                        item.label
                          ? "rotate-180 text-[var(--accent)]"
                          : "text-[var(--foreground)]"
                      }`}
                    />
                  )}

                  {item.dropdown && (
                    <div
                      className={`absolute left-0 top-9 z-50 w-56 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-3 shadow-xl transition-all duration-300 ${
                        openDropdown ===
                        item.label
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-2 opacity-0"
                      }`}
                    >
                      {item.dropdown.map(
                        (sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => {
                              e.preventDefault();

                              handleScroll(
                                sub.href
                              );

                              hideDropdown();
                            }}
                            className="block rounded-lg px-3 py-2 text-sm text-[var(--foreground-secondary)] transition hover:bg-[var(--accent)]/10 hover:text-[var(--foreground)]"
                          >
                            {sub.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <button className="flex items-center gap-2 rounded-xl bg-[var(--button-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--button-text)] transition hover:bg-[var(--button-hover)]">
              {siteData.nav.ctaLabel}

              <ArrowRight size={16} />
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={toggleMenu}
            className="rounded-md p-2 text-[var(--foreground)] lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}

      {/* <div
        className={`overflow-hidden border-t border-[var(--border)] bg-[var(--card-bg)] transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[500px] py-4 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <Container>
          <div className="flex flex-col gap-3">
            {links.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();

                      closeMenu();

                      handleScroll(item.href);
                    }}
                    className="block text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </Link>

                  {item.dropdown && (
                    <button
                      onClick={() =>
                        openDropdown ===
                        item.label
                          ? hideDropdown()
                          : showDropdown(
                              item.label
                            )
                      }
                    >
                      <ChevronDown
                        size={16}
                        className={`transition duration-300 ${
                          openDropdown ===
                          item.label
                            ? "rotate-180 text-[var(--accent)]"
                            : "text-[var(--foreground)]"
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.dropdown &&
                  openDropdown ===
                    item.label && (
                    <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-[var(--accent)]/30 pl-3">
                      {item.dropdown.map(
                        (sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => {
                              e.preventDefault();

                              closeMenu();

                              handleScroll(
                                sub.href
                              );

                              hideDropdown();
                            }}
                            className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--accent)]"
                          >
                            {sub.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
              </div>
            ))}

            <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--button-bg)] py-3 text-sm font-semibold text-[var(--button-text)] transition hover:bg-[var(--button-hover)]">
              {siteData.nav.ctaLabel}

              <ArrowRight size={16} />
            </button>
          </div>
        </Container>
      </div> */}

      {/* MOBILE MENU OVERLAY */}
<div
  className={`fixed inset-0 z-40 lg:hidden bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
    open ? "opacity-100" : "pointer-events-none opacity-0"
  }`}
  onClick={closeMenu}
>
  {/* TOP PANEL */}
  <div
    onClick={(e) => e.stopPropagation()}
    className={`w-full bg-[var(--card-bg)] border-b border-[var(--border)]
    shadow-[0_20px_50px_rgba(0,0,0,0.15)]
    transition-transform duration-300 ${
      open ? "translate-y-0" : "-translate-y-full"
    }`}
  >
    <Container>
      <div className="flex flex-col gap-4 py-6">

        {/* CLOSE ICON (inside menu) */}
        <div className="flex justify-end">
          <button
            onClick={closeMenu}
            className="rounded-lg p-2 text-[var(--foreground)] transition hover:bg-[var(--accent)]/10"
          >
            <X size={22} />
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col gap-3">

          {links.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    handleScroll(item.href);
                  }}
                  className="block py-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)]"
                >
                  {item.label}
                </Link>

                {item.dropdown && (
                  <button
                    onClick={() =>
                      openDropdown === item.label
                        ? hideDropdown()
                        : showDropdown(item.label)
                    }
                  >
                    <ChevronDown
                      size={16}
                      className={`transition duration-300 ${
                        openDropdown === item.label
                          ? "rotate-180 text-[var(--accent)]"
                          : "text-[var(--foreground)]"
                      }`}
                    />
                  </button>
                )}
              </div>

              {item.dropdown &&
                openDropdown === item.label && (
                  <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-[var(--accent)]/30 pl-3">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={(e) => {
                          e.preventDefault();
                          closeMenu();
                          handleScroll(sub.href);
                          hideDropdown();
                        }}
                        className="text-sm text-[var(--foreground-secondary)] hover:text-[var(--accent)]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}

          {/* CTA BUTTON */}
          <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--button-bg)] py-3 text-sm font-semibold text-[var(--button-text)] transition hover:bg-[var(--button-hover)]">
            {siteData.nav.ctaLabel}
            <ArrowRight size={16} />
          </button>

        </div>
      </div>
    </Container>
  </div>
</div>


    </header>
  );
}










// // "use client";

// import Link from "next/link";
// import Image from "next/image";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   ArrowRight,
// } from "lucide-react";

// import Container from "../ui/Container";
// import { siteData } from "../../data/siteData";
// import useNavbar from "../../hooks/useNavbar";

// export default function Navbar() {
//   const links = siteData?.nav?.links || [];

//   const {
//     open,
//     active,
//     openDropdown,

//     toggleMenu,
//     closeMenu,

//     setActiveLink,

//     showDropdown,
//     hideDropdown,
//   } = useNavbar();

//   const handleScroll = (href: string) => {
//     // HOME
//     if (href === "/" || href === "#home") {
//       window.history.pushState(null, "", "/");

//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//       setActiveLink("/");

//       return;
//     }

//     const id = href
//       .replace("/#", "")
//       .replace("#", "");

//     const el = document.getElementById(id);

//     if (!el) return;

//     window.history.pushState(
//       null,
//       "",
//       `/#${id}`
//     );

//     const offsetTop =
//       el.getBoundingClientRect().top +
//       window.scrollY -
//       80;

//     window.scrollTo({
//       top: offsetTop,
//       behavior: "smooth",
//     });

//     setActiveLink(`#${id}`);
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
//       <Container>
//         <div className="flex h-16 items-center justify-between">

//           {/* LOGO */}
//           <Link
//             href="/"
//             onClick={() => handleScroll("/")}
//           >
//             <Image
//               src={siteData.logo.src}
//               alt={siteData.logo.alt}
//               width={48}
//               height={48}
//               className="object-contain"
//             />
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden items-center gap-7 lg:flex">
//             {links.map((item) => {
//               const isActive =
//                 active === item.href;

//               return (
//                 <div
//                   key={item.label}
//                   className="relative flex items-center gap-2"
//                   onMouseEnter={() =>
//                     item.dropdown &&
//                     showDropdown(item.label)
//                   }
//                   onMouseLeave={() =>
//                     hideDropdown()
//                   }
//                 >
//                   {/* LINK */}
//                   <Link
//                     href={item.href}
//                     onClick={(e) => {
//                       e.preventDefault();

//                       handleScroll(item.href);

//                       hideDropdown();
//                     }}
//                     className={`group relative text-sm font-medium transition ${
//                       isActive
//                         ? "text-[#43B6CF]"
//                         : "text-[#1D3173] hover:text-[#43B6CF]"
//                     }`}
//                   >
//                     {item.label}

//                     {/* UNDERLINE */}
//                     <span
//                       className={`absolute -bottom-1 left-0 h-[2px] bg-[#43B6CF] transition-all duration-300 ${
//                         isActive
//                           ? "w-full"
//                           : "w-0 group-hover:w-full"
//                       }`}
//                     />
//                   </Link>

//                   {/* DROPDOWN ICON */}
//                   {item.dropdown && (
//                     <ChevronDown
//                       size={16}
//                       className={`transition duration-300 ${
//                         openDropdown ===
//                         item.label
//                           ? "rotate-180 text-[#43B6CF]"
//                           : "text-[#1D3173]"
//                       }`}
//                     />
//                   )}

//                   {/* DROPDOWN */}
//                   {item.dropdown && (
//                     <div
//                       className={`absolute left-0 top-9 z-50 w-56 rounded-xl border border-slate-100 bg-white p-3 shadow-xl transition-all duration-300 ${
//                         openDropdown ===
//                         item.label
//                           ? "visible translate-y-0 opacity-100"
//                           : "invisible -translate-y-2 opacity-0"
//                       }`}
//                     >
//                       {item.dropdown.map(
//                         (sub) => (
//                           <Link
//                             key={sub.label}
//                             href={sub.href}
//                             onClick={(e) => {
//                               e.preventDefault();

//                               handleScroll(
//                                 sub.href
//                               );

//                               hideDropdown();
//                             }}
//                             className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-[#43B6CF]/10 hover:text-[#1D3173]"
//                           >
//                             {sub.label}
//                           </Link>
//                         )
//                       )}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </nav>

//           {/* CTA */}
//           <div className="hidden lg:flex">
//             <button className="flex items-center gap-2 rounded-xl bg-[#1D3173] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#43B6CF]">
//               {siteData.nav.ctaLabel}

//               <ArrowRight size={16} />
//             </button>
//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             onClick={toggleMenu}
//             className="rounded-md p-2 text-[#1D3173] lg:hidden"
//           >
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>
//       </Container>

//       {/* MOBILE MENU */}
//       <div
//         className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
//           open
//             ? "max-h-[500px] py-4 opacity-100"
//             : "max-h-0 opacity-0"
//         }`}
//       >
//         <Container>
//           <div className="flex flex-col gap-3">
//             {links.map((item) => (
//               <div key={item.label}>
//                 {/* MOBILE TOP */}
//                 <div className="flex items-center justify-between">
//                   <Link
//                     href={item.href}
//                     onClick={(e) => {
//                       e.preventDefault();

//                       closeMenu();

//                       handleScroll(item.href);
//                     }}
//                     className="block text-sm font-medium text-[#1D3173] hover:text-[#43B6CF]"
//                   >
//                     {item.label}
//                   </Link>

//                   {/* MOBILE ICON */}
//                   {item.dropdown && (
//                     <button
//                       onClick={() =>
//                         openDropdown ===
//                         item.label
//                           ? hideDropdown()
//                           : showDropdown(
//                               item.label
//                             )
//                       }
//                     >
//                       <ChevronDown
//                         size={16}
//                         className={`transition duration-300 ${
//                           openDropdown ===
//                           item.label
//                             ? "rotate-180 text-[#43B6CF]"
//                             : "text-[#1D3173]"
//                         }`}
//                       />
//                     </button>
//                   )}
//                 </div>

//                 {/* MOBILE DROPDOWN */}
//                 {item.dropdown &&
//                   openDropdown ===
//                     item.label && (
//                     <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-[#43B6CF]/30 pl-3">
//                       {item.dropdown.map(
//                         (sub) => (
//                           <Link
//                             key={sub.label}
//                             href={sub.href}
//                             onClick={(e) => {
//                               e.preventDefault();

//                               closeMenu();

//                               handleScroll(
//                                 sub.href
//                               );

//                               hideDropdown();
//                             }}
//                             className="text-sm text-slate-500 hover:text-[#43B6CF]"
//                           >
//                             {sub.label}
//                           </Link>
//                         )
//                       )}
//                     </div>
//                   )}
//               </div>
//             ))}

//             {/* MOBILE CTA */}
//             <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#1D3173] py-3 text-sm font-semibold text-white transition hover:bg-[#43B6CF]">
//               {siteData.nav.ctaLabel}

//               <ArrowRight size={16} />
//             </button>
//           </div>
//         </Container>
//       </div>
//     </header>
//   );
// }






// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
// import { useState } from "react";

// import Container from "../ui/Container";
// import { siteData } from "../../data/siteData";

// type Props = {
//   open: boolean;
//   active: string;
//   toggleMenu: () => void;
//   closeMenu: () => void;
//   setActiveLink: (href: string) => void;
// };

// export default function Navbar({
//   open,
//   active,
//   toggleMenu,
//   closeMenu,
//   setActiveLink,
// }: Props) {
//   const links = siteData?.nav?.links || [];
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   const handleScroll = (href: string) => {
//     // HOME
//     if (href === "/" || href === "#home") {
//       window.history.pushState(null, "", "/");

//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//       setActiveLink("/");
//       return;
//     }

//     const id = href.replace("/#", "").replace("#", "");
//     const el = document.getElementById(id);

//     if (!el) return;

//     window.history.pushState(null, "", `/#${id}`);

//     const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;

//     window.scrollTo({
//       top: offsetTop,
//       behavior: "smooth",
//     });

//     setActiveLink(`#${id}`);
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
//       <Container>
//         <div className="flex h-16 items-center justify-between">

//           {/* LOGO */}
//           <Link href="/" onClick={() => handleScroll("/")}>
//             <Image
//               src={siteData.logo.src}
//               alt={siteData.logo.alt}
//               width={48}
//               height={48}
//             />
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden items-center gap-7 lg:flex">
//             {links.map((item) => {
//               const isActive = active === item.href;

//               return (
//                 <div key={item.label} className="relative flex items-center gap-2">

//                   <Link
//                     href={item.href}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleScroll(item.href);
//                     }}
//                     className="relative text-sm font-medium text-[#1D3173] hover:text-[#43B6CF]"
//                   >
//                     {item.label}

//                     <span
//                       className={`absolute -bottom-1 left-0 h-[2px] bg-[#43B6CF] transition-all duration-300 ${isActive ? "w-full" : "w-0"
//                         }`}
//                     />
//                   </Link>

//                   {item.dropdown && (
//                     <button
//                       onClick={() =>
//                         setOpenDropdown(
//                           openDropdown === item.label ? null : item.label
//                         )
//                       }
//                       className="text-[#1D3173] hover:text-[#43B6CF]"
//                     >
//                       <ChevronDown size={16} />
//                     </button>
//                   )}

//                   {item.dropdown && openDropdown === item.label && (
//                     <div className="absolute left-0 top-8 z-50 w-56 rounded-xl border border-slate-100 bg-white p-3 shadow-xl">
//                       {item.dropdown.map((sub) => (
//                         <Link
//                           key={sub.label}
//                           href={sub.href}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             setOpenDropdown(null);
//                             closeMenu();
//                             handleScroll(sub.href);
//                           }}
//                           className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-[#43B6CF]/10 hover:text-[#1D3173]"
//                         >
//                           {sub.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </nav>

//           {/* CTA */}
//           <div className="hidden lg:flex">
//             <button className="flex items-center gap-2 rounded-full bg-[#1D3173] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#43B6CF]">
//               {siteData.nav.ctaLabel}
//               <ArrowRight size={16} />
//             </button>
//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             onClick={toggleMenu}
//             className="rounded-md p-2 text-[#1D3173] lg:hidden"
//           >
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>
//       </Container>

//       {/* MOBILE MENU */}
//       <div
//         className={`lg:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ${open ? "max-h-[500px] py-4 opacity-100" : "max-h-0 opacity-0"
//           }`}
//       >
//         <Container>
//           <div className="flex flex-col gap-3">
//             {links.map((item) => (
//               <div key={item.label}>
//                 <Link
//                   href={item.href}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     closeMenu();
//                     handleScroll(item.href);
//                   }}
//                   className="block text-sm font-medium text-[#1D3173] hover:text-[#43B6CF]"
//                 >
//                   {item.label}
//                 </Link>

//                 {item.dropdown && (
//                   <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-[#43B6CF]/30 pl-3">
//                     {item.dropdown.map((sub) => (
//                       <Link
//                         key={sub.label}
//                         href={sub.href}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           closeMenu();
//                           handleScroll(sub.href);
//                         }}
//                         className="text-sm text-slate-500 hover:text-[#43B6CF]"
//                       >
//                         {sub.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}

//             <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#1D3173] py-3 text-sm font-semibold text-white hover:bg-[#43B6CF]">
//               {siteData.nav.ctaLabel}
//               <ArrowRight size={16} />
//             </button>
//           </div>
//         </Container>
//       </div>
//     </header>
//   );
// }





// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
// import { siteData } from "../../data/siteData";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("/");

//   const links = siteData?.nav?.links || [];

//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">

//       {/* SAME AS HERO CONTAINER */}
//       <div className="mx-auto flex h-16 items-center justify-between px-10 sm:px-16 lg:px-24 xl:px-32">

//         {/* LOGO */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src={siteData.logo.src}
//             alt={siteData.logo.alt}
//             width={48}
//             height={48}
//           />
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden items-center gap-7 lg:flex">

//           {links.map((item) => {
//             const isActive = active === item.href;

//             return (
//               <div key={item.label} className="relative flex items-center gap-1">

//                 <button
//                   onClick={() => setActive(item.href)}
//                   className="relative text-sm font-medium text-[#1D3173] transition hover:text-[#43B6CF]"
//                 >
//                   <Link href={item.href}>{item.label}</Link>

//                   <span
//                     className={`absolute -bottom-1 left-0 h-[2px] bg-[#43B6CF] transition-all duration-300 ${
//                       isActive ? "w-full" : "w-0"
//                     }`}
//                   />
//                 </button>

//                 {item.dropdown && (
//                   <div className="group relative">

//                     <ChevronDown
//                       size={16}
//                       className="cursor-pointer text-[#1D3173] transition hover:text-[#43B6CF]"
//                     />

//                     <div className="invisible absolute left-0 top-6 w-56 rounded-xl border border-slate-100 bg-white p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">

//                       {item.dropdown.map((sub) => (
//                         <Link
//                           key={sub.label}
//                           href={sub.href}
//                           className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-[#43B6CF]/10 hover:text-[#1D3173]"
//                         >
//                           {sub.label}
//                         </Link>
//                       ))}

//                     </div>
//                   </div>
//                 )}

//               </div>
//             );
//           })}
//         </nav>

//         {/* CTA */}
//         <div className="hidden lg:flex">
//           <button className="flex items-center gap-2 rounded-full bg-[#1D3173] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#43B6CF]">
//             {siteData.nav.ctaLabel}
//             <ArrowRight size={16} />
//           </button>
//         </div>

//         {/* MOBILE */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="rounded-md p-2 text-[#1D3173] lg:hidden"
//         >
//           {open ? <X /> : <Menu />}
//         </button>

//       </div>

//       {/* MOBILE MENU */}
//       <div className={`lg:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ${
//         open ? "max-h-[500px] py-4 opacity-100" : "max-h-0 opacity-0"
//       }`}>

//         <div className="flex flex-col gap-3 px-10 sm:px-16 lg:px-24 xl:px-32">

//           {links.map((item) => (
//             <div key={item.label}>

//               <Link
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className="block text-sm font-medium text-[#1D3173] hover:text-[#43B6CF]"
//               >
//                 {item.label}
//               </Link>

//               {item.dropdown && (
//                 <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-[#43B6CF]/30 pl-3">

//                   {item.dropdown.map((sub) => (
//                     <Link
//                       key={sub.label}
//                       href={sub.href}
//                       onClick={() => setOpen(false)}
//                       className="text-sm text-slate-500 hover:text-[#43B6CF]"
//                     >
//                       {sub.label}
//                     </Link>
//                   ))}

//                 </div>
//               )}

//             </div>
//           ))}

//           <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#1D3173] py-3 text-sm font-semibold text-white hover:bg-[#43B6CF]">
//             {siteData.nav.ctaLabel}
//             <ArrowRight size={16} />
//           </button>

//         </div>
//       </div>

//     </header>
//   );
// }



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
// import { siteData } from "../../data/siteData";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);  //mobile menu kholna banda garna
//   const [active, setActive] = useState("/");
//   const [dropdown, setDropdown] = useState(false);

//   const links = siteData?.nav?.links || [];

//   return (
//     <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

//         {/* LOGO */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src={siteData.logo.src}
//             alt={siteData.logo.alt}
//             width={50}
//             height={50}
//           />
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden items-center gap-8 lg:flex">

//           {links.map((item) => {
//             const isActive = active === item.href;

//             return (
//               <div key={item.label} className="relative">

//                 {/* MAIN LINK */}
//                 <button
//                   onClick={() => setActive(item.href)}
//                   className="relative text-sm font-medium text-slate-700 transition hover:text-cyan-600"
//                 >
//                   <Link href={item.href}>{item.label}</Link>

//                   {/* underline active */}
//                   <span
//                     className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-500 transition-all duration-300 ${
//                       isActive ? "w-full" : "w-0"
//                     }`}
//                   />
//                 </button>

//                 {/* DROPDOWN (example: only for Services) */}
//                 {item.dropdown && (
//                   <div className="group relative inline-block">

//                     <button
//                       onClick={() => setDropdown(!dropdown)}
//                       className="ml-1 inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-cyan-600"
//                     >
//                       <ChevronDown size={16} />
//                     </button>

//                     {/* dropdown box */}
//                     <div className="invisible absolute left-0 top-8 w-52 rounded-xl border border-slate-100 bg-white p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">

//                       {item.dropdown.map((sub) => (
//                         <Link
//                           key={sub.label}
//                           href={sub.href}
//                           className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-600"
//                         >
//                           {sub.label}
//                         </Link>
//                       ))}

//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </nav>

//         {/* CTA */}
//         <div className="hidden lg:flex">
//           <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:opacity-90">
//             {siteData.nav.ctaLabel}
//             <ArrowRight size={16} />
//           </button>
//         </div>

//         {/* MOBILE BUTTON */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="rounded-md p-2 lg:hidden"
//         >
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`lg:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ${
//           open ? "max-h-[500px] py-4 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="flex flex-col gap-3 px-6">

//           {links.map((item) => (
//             <div key={item.label}>
//               <Link
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className="block text-sm font-medium text-slate-700 hover:text-cyan-600"
//               >
//                 {item.label}
//               </Link>

//               {/* mobile dropdown */}
//               {item.dropdown && (
//                 <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-slate-200 pl-3">
//                   {item.dropdown.map((sub) => (
//                     <Link
//                       key={sub.label}
//                       href={sub.href}
//                       onClick={() => setOpen(false)}
//                       className="text-sm text-slate-500 hover:text-cyan-600"
//                     >
//                       {sub.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-cyan-600 py-3 text-sm font-semibold text-white">
//             {siteData.nav.ctaLabel}
//             <ArrowRight size={16} />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X, ArrowRight } from "lucide-react";
// import { siteData } from "../../data/siteData";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const handleClose = () => setOpen(false);

//   return (
//     <header
//       className="
//         sticky top-0 z-50 px-8 py-4
//         bg-white/90 backdrop-blur-md
//         border-b border-slate-200
//         shadow-sm
//       "
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src={siteData.logo.src}
//             alt={siteData.logo.alt}
//             width={55}
//             height={55}
//             className="hover:scale-105 transition"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex items-center gap-10">
//           {(siteData?.nav?.links ?? []).map((item) => (
//             <Link
//               key={item.label}
//               href={item.href}
//               prefetch={false}
//               className="
//                 relative
//                 text-slate-700
//                 font-medium
//                 transition
//                 hover:text-cyan-600

//                 after:content-['']
//                 after:absolute
//                 after:left-0
//                 after:-bottom-1
//                 after:w-0
//                 after:h-[2px]
//                 after:bg-cyan-600
//                 after:transition-all
//                 hover:after:w-full
//               "
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         {/* CTA Desktop */}
//         <button className="
//           hidden lg:flex items-center gap-2
//           bg-gradient-to-r from-cyan-500 to-cyan-600
//           text-white px-6 py-2.5
//           rounded-full
//           shadow-md
//           font-semibold
//           hover:shadow-xl
//           hover:-translate-y-0.5
//           active:scale-95
//           transition-all
//           duration-300
//         ">
//           {siteData.nav.ctaLabel}
//           <ArrowRight size={16} />
//         </button>

//         {/* Mobile Button */}
//         <button
//           className="
//             lg:hidden
//             p-2 rounded-md
//             hover:bg-slate-100
//             transition
//           "
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={26} /> : <Menu size={26} />}
//         </button>

//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`
//           lg:hidden bg-white border-t border-slate-200
//           overflow-hidden transition-all duration-300
//           ${open ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0"}
//         `}
//       >
//         <div className="px-6 space-y-3">

//           {(siteData?.nav?.links ?? []).map((item) => (
//             <Link
//               key={item.label}
//               href={item.href}
//               onClick={handleClose}
//               className="
//                 block
//                 py-3 px-3
//                 rounded-lg
//                 text-slate-700
//                 hover:bg-slate-100
//                 hover:text-cyan-600
//                 transition
//                 font-medium
//               "
//             >
//               {item.label}
//             </Link>
//           ))}

//           {/* Mobile CTA */}
//           <button className="
//             w-full mt-4
//             bg-gradient-to-r from-cyan-500 to-cyan-600
//             text-white
//             py-3
//             rounded-full
//             shadow-md
//             font-semibold
//             active:scale-95
//             transition
//           ">
//             <span className="flex items-center justify-center gap-2">
//               {siteData.nav.ctaLabel}
//               <ArrowRight size={16} />
//             </span>
//           </button>

//         </div>
//       </div>
//     </header>
//   );
// }


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X, ArrowRight } from "lucide-react";
// import { siteData } from "../../data/siteData";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header
//       className="
//         sticky top-0 z-50 px-8 py-4
//         bg-white/90 backdrop-blur-md
//         border-b border-slate-200
//         shadow-sm
//       "
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src={siteData.logo.src}
//             alt={siteData.logo.alt}
//             width={55}
//             height={55}
//             className="hover:scale-105 transition"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex items-center gap-10">
//           {siteData.nav.links.map((item) => (
//             <Link
//               key={item.label}
//               href={item.href}
//               className="
//                 relative
//                 text-slate-700
//                 font-medium
//                 transition
//                 hover:text-cyan-600

//                 after:content-['']
//                 after:absolute
//                 after:left-0
//                 after:-bottom-1
//                 after:w-0
//                 after:h-[2px]
//                 after:bg-cyan-600
//                 after:transition-all
//                 hover:after:w-full
//               "
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         {/* CTA Desktop */}
//         <button className="
//           hidden lg:flex items-center gap-2
//           bg-gradient-to-r from-cyan-500 to-cyan-600
//           text-white px-6 py-2.5
//           rounded-full
//           shadow-md
//           font-semibold
//           hover:shadow-xl
//           hover:-translate-y-0.5
//           active:scale-95
//           transition-all
//           duration-300
//         ">
//           {siteData.nav.ctaLabel}
//           <ArrowRight size={16} />
//         </button>

//         {/* Mobile Button */}
//         <button
//           className="
//             lg:hidden
//             p-2 rounded-md
//             hover:bg-slate-100
//             transition
//           "
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`
//           lg:hidden bg-white border-t border-slate-200
//           overflow-hidden transition-all duration-300
//           ${open ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0"}
//         `}
//       >
//         <div className="px-6 space-y-3">

//           {/* Links */}
//           {siteData.nav.links.map((item) => (
//             <Link
//               key={item.label}
//               href={item.href}
//               onClick={() => setOpen(false)}
//               className="
//                 block
//                 py-3 px-3
//                 rounded-lg
//                 text-slate-700
//                 hover:bg-slate-100
//                 hover:text-cyan-600
//                 transition
//                 font-medium
//               "
//             >
//               {item.label}
//             </Link>
//           ))}

//           {/* Mobile CTA */}
//           <button className="
//             w-full mt-4
//             bg-gradient-to-r from-cyan-500 to-cyan-600
//             text-white
//             py-3
//             rounded-full
//             shadow-md
//             font-semibold
//             active:scale-95
//             transition
//           ">
//             <span className="flex items-center justify-center gap-2">
//               {siteData.nav.ctaLabel}
//               <ArrowRight size={16} />
//             </span>
//           </button>

//         </div>
//       </div>
//     </header>
//   );
// }




// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import { siteData } from "../../data/siteData";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src={siteData.logo.src}
//             alt={siteData.logo.alt}
//             width={60}
//             height={60}
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex gap-8">
//           {siteData.nav.links.map((item) => (
//             <Link
//               key={item.label}
//               href={item.href}
//               className="text-slate-700 hover:text-cyan-600 font-medium"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         {/* CTA */}
//         <button className="hidden lg:block bg-cyan-600 text-white px-6 py-2 rounded-full">
//           {siteData.nav.ctaLabel}
//         </button>

//         {/* Mobile Button */}
//         <button className="lg:hidden" onClick={() => setOpen(!open)}>
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="lg:hidden bg-white border-t px-6 py-4 space-y-4">
//           {siteData.nav.links.map((item) => (
//             <Link
//               key={item.label}
//               href={item.href}
//               className="block py-2 text-slate-700"
//               onClick={() => setOpen(false)}
//             >
//               {item.label}
//             </Link>
//           ))}

//           <button className="w-full bg-cyan-600 text-white py-8 rounded-full">
//             {siteData.nav.ctaLabel}
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }
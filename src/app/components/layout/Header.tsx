"use client";

import TopBar from "./TopBar";
import Navbar from "./Navbar";
import useNavbar from "../../hooks/useNavbar";

export default function Header() {
  const navbar = useNavbar();

  return (
    <header className="sticky top-0 z-50 w-full">
      
      {/* TOP BAR */}
      <div className="border-b border-slate-200 bg-[#1D3173]">
        <TopBar />
      </div>

      {/* NAVBAR */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <Navbar
          // open={navbar.open}
          // active={navbar.active}
          // toggleMenu={navbar.toggleMenu}
          // closeMenu={navbar.closeMenu}
          // setActiveLink={navbar.setActiveLink}
        />
      </div>

    </header>
  );
}





// "use client";

// import TopBar from "./TopBar";
// import Navbar from "./Navbar";
// import useNavbar from "../../hooks/useNavbar";

// export default function Header() {
//   const navbar = useNavbar();

//   return (
//     <header>
//       <TopBar />

//       <Navbar
//         open={navbar.open}
//         active={navbar.active}
//         toggleMenu={navbar.toggleMenu}
//         closeMenu={navbar.closeMenu}
//         setActiveLink={navbar.setActiveLink}
//       />
//     </header>
//   );
// }
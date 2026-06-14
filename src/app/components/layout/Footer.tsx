// "use client";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";

import { siteData } from "../../data/siteData";
import { ThemeToggle } from "../ThemeToggle";

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  website: FaGlobe,
};

export default function Footer() {
  const { footer } = siteData;

  return (
   <footer className="footer relative overflow-hidden">
  {/* BACKGROUND */}
  <div className="pointer-events-none absolute inset-0">
    
    {/* Top Glow */}
    <div
      className="footer-glow absolute -top-28 -left-28 h-[22rem] w-[22rem] sm:h-[26rem] sm:w-[26rem] rounded-full blur-[100px] sm:blur-[120px]"
    />

    {/* Bottom Glow */}
    <div
      className="footer-glow absolute -bottom-32 -right-32 h-[24rem] w-[24rem] sm:h-[30rem] sm:w-[30rem] rounded-full blur-[120px] sm:blur-[140px]"
    />

    {/* WATERMARK */}
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden px-2 translate-y-8">
      <h1
        className="footer-watermark select-none font-extrabold uppercase text-[28vw] sm:text-[14vw] md:text-[12vw] lg:text-[11vw] tracking-[0.15em] [writing-mode:vertical-rl] rotate-180 sm:[writing-mode:horizontal-tb] sm:rotate-0 animate-pulse"
      >
        {footer.brand.name}
      </h1>
    </div>
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

      {/* BRAND */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide break-words">
          {footer.brand.name}
        </h2>

        <p className="footer-muted mt-4 max-w-sm text-sm leading-6 sm:leading-7">
          {footer.brand.description}
        </p>

        {/* SOCIALS */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {footer.brand.socials.map((social, i) => {
            const Icon =
              socialIcons[
                social.name as keyof typeof socialIcons
              ] || FaGlobe;

            return (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="footer-social flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>
      </div>

      {/* SERVICES */}
      <div>
        <h3 className="footer-heading mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[3px]">
          Services
        </h3>

        <ul className="footer-muted space-y-3 text-sm">
          {footer.services.map((item) => (
            <li key={item}>
              <span className="cursor-pointer transition hover:text-white">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* COMPANY */}
      <div>
        <h3 className="footer-heading mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[3px]">
          Company
        </h3>

        <ul className="footer-muted space-y-3 text-sm">
          {footer.company.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CONTACT */}
      <div>
        <h3 className="footer-heading mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[3px]">
          Contact
        </h3>

        <div className="footer-muted space-y-5 text-sm">

          {/* Address */}
          <div className="flex gap-3">
            <MapPin className="mt-1 h-4 w-4 shrink-0" />
            <p className="break-words leading-6">
              {footer.contact.address}
            </p>
          </div>

          {/* Phones */}
          <div className="flex gap-3">
            <Phone className="mt-1 h-4 w-4 shrink-0" />

            <div className="flex flex-col gap-1 break-all">
              {footer.contact.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="transition hover:text-white"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-3">
            <Mail className="mt-1 h-4 w-4 shrink-0" />

            <a
              href={`mailto:${footer.contact.email}`}
              className="break-all transition hover:text-white"
            >
              {footer.contact.email}
            </a>
          </div>
        </div>
      </div>

      <ThemeToggle />
    </div>

    {/* BOTTOM BAR */}
    <div className="footer-border mt-10 border-t pt-6 flex flex-col items-center justify-between gap-4 text-center text-xs footer-muted md:flex-row md:text-left">
      <p>{footer.bottom.copyright}</p>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
        {footer.bottom.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="transition hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
</footer>
  );
}




// // "use client";
// import Link from "next/link";
// import { MapPin, Phone, Mail } from "lucide-react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaGlobe,
// } from "react-icons/fa";

// import { siteData } from "../../data/siteData";
// import { ThemeToggle } from "../ThemeToggle";

// const socialIcons = {
//   facebook: FaFacebookF,
//   instagram: FaInstagram,
//   linkedin: FaLinkedinIn,
//   twitter: FaTwitter,
//   website: FaGlobe,
// };

// export default function Footer() {
//   const { footer } = siteData;

//   return (
//     <footer className="relative overflow-hidden bg-[#1D3173] text-white">
//       {/* BACKGROUND */}
//       <div className="pointer-events-none absolute inset-0">
//         {/* Top Glow */}
//         <div className="absolute -top-28 -left-28 h-[22rem] w-[22rem] sm:h-[26rem] sm:w-[26rem] rounded-full bg-white/10 blur-[100px] sm:blur-[120px]" />

//         {/* Bottom Glow */}
//         <div className="absolute -bottom-32 -right-32 h-[24rem] w-[24rem] sm:h-[30rem] sm:w-[30rem] rounded-full bg-white/10 blur-[120px] sm:blur-[140px]" />

//         {/* WATERMARK */}
//         <div className="absolute inset-0 flex items-center justify-center overflow-hidden px-2 translate-y-8">
//           <h1
//             className=" select-none font-extrabold uppercase text-white/5 text-[28vw] sm:text-[14vw] md:text-[12vw] lg:text-[11vw] tracking-[0.15em] [writing-mode:vertical-rl] rotate-180 sm:[writing-mode:horizontal-tb] sm:rotate-0 animate-pulse" >
//             {footer.brand.name}
//           </h1>
//         </div>
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
//         <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
//           {/* BRAND */}
//           <div>
//             <h2 className="text-xl sm:text-2xl font-bold tracking-wide break-words">
//               {footer.brand.name}
//             </h2>

//             <p className="mt-4 max-w-sm text-sm leading-6 sm:leading-7 text-white/70">
//               {footer.brand.description}
//             </p>

//             {/* SOCIALS */}
//             <div className="mt-6 flex flex-wrap items-center gap-3">
//               {footer.brand.socials.map((social, i) => {
//                 const Icon =
//                   socialIcons[
//                     social.name as keyof typeof socialIcons
//                   ] || FaGlobe;

//                 return (
//                   <a
//                     key={i}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={social.name}
//                     className=" flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1D3173] hover:shadow-lg">
//                     <Icon size={14} />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <h3 className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-white/80">
//               Services
//             </h3>

//             <ul className="space-y-3 text-sm text-white/70">
//               {footer.services.map((item) => (
//                 <li key={item}>
//                   <span className="cursor-pointer transition hover:text-white">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* COMPANY */}
//           <div>
//             <h3 className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-white/80">
//               Company
//             </h3>

//             <ul className="space-y-3 text-sm text-white/70">
//               {footer.company.map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     href={item.href}
//                     className="transition hover:text-white"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h3 className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-white/80">
//               Contact
//             </h3>

//             <div className="space-y-5 text-sm text-white/70">
//               {/* Address */}
//               <div className="flex gap-3">
//                 <MapPin className="mt-1 h-4 w-4 shrink-0 text-white/80" />

//                 <p className="break-words leading-6">
//                   {footer.contact.address}
//                 </p>
//               </div>

//               {/* Phones */}
//               <div className="flex gap-3">
//                 <Phone className="mt-1 h-4 w-4 shrink-0 text-white/80" />

//                 <div className="flex flex-col gap-1 break-all">
//                   {footer.contact.phones.map((phone) => (
//                     <a
//                       key={phone}
//                       href={`tel:${phone}`}
//                       className="transition hover:text-white"
//                     >
//                       {phone}
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex gap-3">
//                 <Mail className="mt-1 h-4 w-4 shrink-0 text-white/80" />

//                 <a
//                   href={`mailto:${footer.contact.email}`}
//                   className="break-all transition hover:text-white"
//                 >
//                   {footer.contact.email}
//                 </a>
//               </div>
//             </div>
            
//           </div>
//           <ThemeToggle />
//         </div>

//         {/* BOTTOM BAR */}
//         <div
//           className="mt-10 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-4 text-center text-xs text-white/60 md:flex-row md:text-left">
//           <p>{footer.bottom.copyright}</p>

//           <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
//             {footer.bottom.links.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="transition hover:text-white"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }








// // components/Footer.tsx
// import Link from "next/link";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Globe,
// //   Facebook,
// //   Instagram,
// //   Linkedin,
// } from "lucide-react";

// import { siteData } from "../../data/siteData";



// export default function Footer() {
//     const { footer } = siteData;

//   return (
//     <footer className="relative overflow-hidden text-white bg-[#1D3173]">
//       {/* BACKGROUND WATERMARK */}

//       <div className="pointer-events-none absolute inset-0">

//         {/* soft glow blobs */}
//         <div className="absolute -top-28 -left-28 h-[26rem] w-[26rem] rounded-full bg-white/10 blur-[120px]" />
//         <div className="absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-white/10 blur-[140px]" />

//         {/* refined watermark */}
       
//         <div className="absolute inset-0 flex items-center justify-center translate-y-8">

//           <h1 className="select-none text-[11vw] font-extrabold tracking-[0.25em] uppercase text-white/5 animate-pulse">
//             {footer.brand.name}
//           </h1>
          
//         </div>
       
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
//         <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
//           {/* BRAND */}
//           <div>
//             <h2 className="text-2xl font-bold tracking-wide">{footer.brand.name}</h2>

//             <p className="mt-4 text-sm leading-7 text-white/70 max-w-sm">
//               {footer.brand.description}
//             </p>

//             {/* SOCIALS */}
//             <div className="mt-6 flex items-center gap-3">
//                 {footer.brand.socials.map((social, i)=> (

               
//               <a
//                 key={i}
//                 href={social.href}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition"
//               >
//                 {/* <Facebook className="h-4 w-4" /> */}
//                 <Globe className="h-4 w-4" />
                
//               </a>
//                ))}

//             </div>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-[3px] text-white/80 mb-5">
//               Services
//             </h3>

//             <ul className="space-y-3 text-sm text-white/70">

//             {footer.services.map((item) =>(
//                 <li key={item}>
//                     <span className="hover:text-white transition cursor-pointer">
//                         {item}

//                     </span>
//                 </li>
//             ))}
              
                
              
//             </ul>
//           </div>

//           {/* COMPANY */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-[3px] text-white/80 mb-5">
//               Company
//             </h3>

//             <ul className="space-y-3 text-sm text-white/70">
//               {footer.company.map((item) =>(
//                 <li key={item.label}>
//                     <Link href={item.href} className= "hover:text-white transition">
//                     {item.label}
//                     </Link>
//                 </li>
//               ))}
                
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-[3px] text-white/80 mb-5">
//               Contact
//             </h3>

//             <div className="space-y-4 text-sm text-white/70">
//               <div className="flex gap-3">
//                 <MapPin className="h-4 w-4 mt-1 text-white/80" />
//                 <p>{footer.contact.address}</p>
//               </div>

//               <div className="flex gap-3">
//                 <Phone className="h-4 w-4 mt-1 text-white/80" />
//                 <div className="flex flex-col">

//                   {footer.contact.phones.map((phone)=>(
//                     <a key={phone}
//                     href={`tel:${phone}`}
//                     className= "hover:text-white ">
//                         {phone}
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <Mail className="h-4 w-4 mt-1 text-white/80" />
//                 <a
//                   href={`mailto:${footer.contact.email}`}
//                   className="hover:text-white"
//                 >
//                   {footer.contact.email}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM BAR */}
//         <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
//           <p>{footer.bottom.copyright}</p>

//           <div className="flex gap-6">
//             {footer.bottom.links.map((link)=>(
//                 <Link key={link.label} href={link.href} className="hover:text-white transition">
//                     {link.label}
//                 </Link>
//             ))}
            
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
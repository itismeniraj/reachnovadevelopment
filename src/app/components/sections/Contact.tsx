"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import Container from "../ui/Container";
import { siteData } from "../../data/siteData";
import FadeUp from "../animations/FadeUp";

export default function ContactSection() {
  const { contact } = siteData;

  return (
    <section
      id="contact"
      className="relative w-full"
      style={{
        background: "var(--contact-section-bg)",
      }}
    >
      {/* HERO */}

      <div className="relative h-[420px] w-full overflow-hidden">
        <img
          src="/images/student.jpg"
          alt="contact background"
          className="h-full w-full object-cover scale-105"
        />

        <div
          className="absolute inset-0"
          style={{
            background: "var(--contact-overlay)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <FadeUp>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{
                color: "var(--contact-hero-title)",
              }}
            >
              {contact.title}
            </h2>
          </FadeUp>

          <FadeUp>
            <p
              className="mt-4 max-w-2xl text-sm md:text-base"
              style={{
                color: "var(--contact-hero-subtitle)",
              }}
            >
              {contact.subtitle}
            </p>
          </FadeUp>
        </div>
      </div>

      {/* FLOATING CARD */}

      <Container>
        <div className="relative -mt-24 z-10">
          <div
            className="grid lg:grid-cols-2 rounded-t-xl rounded-b-none overflow-hidden"
            style={{
              background: "var(--contact-card-bg)",
              boxShadow: "var(--contact-card-shadow)",
            }}
          >
            {/* LEFT */}

            <div
              className="p-10"
              style={{
                background: "var(--contact-info-bg)",
              }}
            >
              <h3 className="contact-title text-2xl font-bold">
                {contact.formTitle}
              </h3>

              <p className="contact-text mt-3 text-sm leading-6">
                Let’s discuss your idea and build something impactful together.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex gap-4">
                  <MapPin className="contact-icon mt-1" />
                  <div>
                    <label className="contact-title font-semibold">
                      Address
                    </label>

                    <p className="contact-text text-sm">
                      {contact.info.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="contact-icon mt-1" />
                  <div>
                    <p className="contact-title font-semibold">
                      Phone
                    </p>

                    <p className="contact-text text-sm">
                      {contact.info.phones.join(" / ")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="contact-icon mt-1" />
                  <div>
                    <p className="contact-title font-semibold">
                      Email
                    </p>

                    <p className="contact-text text-sm">
                      {contact.info.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}

            <div
              className="p-10"
              style={{
                background: "var(--contact-card-bg)",
              }}
            >
              <h3 className="contact-title text-2xl font-bold mb-6">
                {contact.formTitle}
              </h3>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="contact-label text-sm font-medium">
                      Name
                    </label>

                    <input
                      type="text"
                      placeholder={contact.form.name}
                      className="contact-input mt-2 w-full rounded-xl px-4 py-3 text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="contact-label text-sm font-medium">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder={contact.form.email}
                      className="contact-input mt-2 w-full rounded-xl px-4 py-3 text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="contact-label text-sm font-medium">
                    Phone
                  </label>

                  <input
                    type="text"
                    placeholder={contact.form.phone}
                    className="contact-input mt-2 w-full rounded-xl px-4 py-3 text-sm outline-none transition"
                  />
                </div>

                <div>
                  <label className="contact-label text-sm font-medium">
                    Subject
                  </label>

                  <select className="contact-select mt-2 w-full rounded-xl px-4 py-3 text-sm outline-none transition">
                    <option>Select a subject</option>

                    {contact.form.subjectOptions.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="contact-label text-sm font-medium">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder={contact.form.message}
                    className="contact-textarea mt-2 w-full rounded-xl px-4 py-3 text-sm outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl py-3 font-semibold transition"
                  style={{
                    background: "var(--contact-button-bg)",
                    color: "var(--contact-button-text)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--contact-button-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "var(--contact-button-bg)";
                  }}
                >
                  {contact.form.button}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}














// "use client";

// import { MapPin, Phone, Mail } from "lucide-react";
// import Container from "../ui/Container";
// import { siteData } from "../../data/siteData";
// import FadeUp from "../animations/FadeUp";

// export default function ContactSection() {
//   const { contact } = siteData;

//   return (
//     <section id="contact" className="relative w-full bg-white">

//       {/* ================= HERO IMAGE ================= */}

//       <div className="relative h-[420px] w-full overflow-hidden">
//         <img
//           src="/images/student.jpg"
//           alt="contact background"
//           className="h-full w-full object-cover scale-105"
//         />


//         {/* overlay */}

//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

//         {/* text */}
        

//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
//           <FadeUp>
//           <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
//             {contact.title}
//           </h2>
//           </FadeUp>

//           <FadeUp>


//           <p className="mt-4 max-w-2xl text-white/80 text-sm md:text-base">
//             {contact.subtitle}
//           </p>

//           </FadeUp>
//         </div>
//       </div>

//       {/* ================= FLOATING CARD ================= */}

//       <Container>
//         <div className="relative -mt-24 z-10">

//           <div className="grid lg:grid-cols-2 rounded-t-xl rounded-b-none overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.08)] bg-white">

//             {/* ================= LEFT INFO ================= */}
//             <div className="bg-gradient-to-br from-[#43B6CF10] to-[#1D317310] p-10">

//               <h3 className="text-2xl font-bold text-[#1D3173]">
//                 {contact.formTitle}
//               </h3>

//               <p className="mt-3 text-sm text-slate-600 leading-6">
//                 Let’s discuss your idea and build something impactful together.
//               </p>

//               <div className="mt-10 space-y-7">

//                 {/* ADDRESS */}
//                 <div className="flex gap-4">
//                   <MapPin className="text-[#43B6CF] mt-1" />
//                   <div>
//                     <label className="font-semibold text-[#1D3173]">Address</label>
//                     <p className="text-sm text-slate-600">
//                       {contact.info.address}
//                     </p>
//                   </div>
//                 </div>

//                 {/* PHONE */}
//                 <div className="flex gap-4">
//                   <Phone className="text-[#43B6CF] mt-1" />
//                   <div>
//                     <p className="font-semibold text-[#1D3173]">Phone</p>
//                     <p className="text-sm text-slate-600">
//                       {contact.info.phones.join(" / ")}
//                     </p>
//                   </div>
//                 </div>

//                 {/* EMAIL */}
//                 <div className="flex gap-4">
//                   <Mail className="text-[#43B6CF] mt-1" />
//                   <div>
//                     <p className="font-semibold text-[#1D3173]">Email</p>
//                     <p className="text-sm text-slate-600">
//                       {contact.info.email}
//                     </p>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* ================= RIGHT FORM ================= */}
//             <div className="bg-white p-10">

//               <h3 className="text-2xl font-bold text-[#1D3173] mb-6">
//                 {contact.formTitle}
//               </h3>

//               <form className="space-y-5">

//                 {/* NAME + EMAIL */}
//                 <div className="grid md:grid-cols-2 gap-5">

//                   <div>
//                     <label className="text-sm font-medium text-slate-700">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder={contact.form.name}
//                       className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#43B6CF] focus:ring-2 focus:ring-[#43B6CF20]"
//                     />
//                   </div>

//                   <div>
//                     <label className="text-sm font-medium text-slate-700">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       placeholder={contact.form.email}
//                       className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#43B6CF] focus:ring-2 focus:ring-[#43B6CF20]"
//                     />
//                   </div>

//                 </div>

//                 {/* PHONE */}
//                 <div>
//                   <label className="text-sm font-medium text-slate-700">
//                     Phone
//                   </label>
//                   <input
//                     type="text"
//                     placeholder={contact.form.phone}
//                     className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#43B6CF] focus:ring-2 focus:ring-[#43B6CF20]"
//                   />
//                 </div>

//                 {/* SUBJECT */}
//                 <div>
//                   <label className="text-sm font-medium text-slate-700">
//                     Subject
//                   </label>

//                   <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#43B6CF] focus:ring-2 focus:ring-[#43B6CF20]">
//                     <option>Select a subject</option>
//                     {contact.form.subjectOptions.map((item, i) => (
//                       <option key={i}>{item}</option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* MESSAGE */}
//                 <div>
//                   <label className="text-sm font-medium text-slate-700">
//                     Message
//                   </label>

//                   <textarea
//                     placeholder={contact.form.message}
//                     rows={5}
//                     className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#43B6CF] focus:ring-2 focus:ring-[#43B6CF20]"
//                   />
//                 </div>

//                 {/* BUTTON */}
//                 <button
//                   type="submit"
//                   className="w-full rounded-xl bg-[#1D3173] py-3 text-white font-semibold transition hover:bg-[#43B6CF]"
//                 >
//                   {contact.form.button}
//                 </button>

//               </form>
//             </div>

//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
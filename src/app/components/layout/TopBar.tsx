import { siteData } from "../../data/siteData";
import { Phone, Mail, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#1D3173] text-white text-sm border-b border-white/10 hidden md:block">

      <div className="mx-auto max-w-7xl px-10 sm:px-16 lg:px-24 xl:px-32 flex items-center justify-between h-10">

        {/* LEFT */}
        <div className="flex items-center gap-8">

          <div className="flex items-center gap-2 group">
            <Phone size={15} className="text-cyan-400" />
            <span className="group-hover:text-cyan-400 transition">
              {siteData.topBar.phone}
            </span>
          </div>

          <div className="flex items-center gap-2 group">
            <Mail size={15} className="text-cyan-400" />
            <span className="group-hover:text-cyan-400 transition">
              {siteData.topBar.email}
            </span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 group">
          <MapPin size={15} className="text-cyan-400" />
          <span className="group-hover:text-cyan-400 transition">
            {siteData.topBar.address}
          </span>
        </div>

      </div>
    </div>
  );
}
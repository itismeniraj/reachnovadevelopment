"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,   //  every scroll  animate hune
        amount: 0.2,   //  20% visible trigger hunxa
      }}
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}



// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// interface FadeUpProps {
//   children: ReactNode;
//   delay?: number;
//   duration?: number;
//   className?: string;
// }

// export default function FadeUp({
//   children,
//   delay = 0,
//   duration = 0.9,
//   className = "",
// }: FadeUpProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay, duration }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }
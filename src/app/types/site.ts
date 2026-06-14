
export interface Logo {
  src: string;
  alt: string;
}

export interface TopBar {
  phone: string;
  email: string;
  address: string;
}

// Nav
export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export interface Nav {
  links: NavLink[];
  ctaLabel: string;
}

// HERO SLIDER 
export interface HeroSlide {
  image: string;

  heading: string;
  heading1: string;
  heading2: string;

  subtext: string;
}

export interface Hero {
  badge: string;
  features: string[];
  cta: {
    primary: string;
    secondary: string;
  };
  stats: {
    number: number;
    label: string;
  }[];

  slides: HeroSlide[];
}




// about types

export interface AboutCard {
  icon: "Target" | "Globe" | "ShieldCheck";
  title: string;
  description: string;
}

export interface About {
  badge: string;
  title: string;
  image: string;

  missionTitle: string;
  mission: string;

  visionTitle: string;
  vision: string;

  valuesTitle: string;
  values: string;

  highlightsTitle: string;
  highlights: string;

  descriptionTitle: string;
  description: string;

  cards: AboutCard[];
}

// export interface About {
//   badge: string;
//   title: string;
//   image: string;

//   missionTitle: string;
//   mission: string;

//   visionTitle: string;
//   vision: string;

//   valuesTitle: string;
//   values: string;

//   highlightsTitle: string;
//   highlights: string;

//   descriptionTitle: string;
//   description: string;
// }
// export interface About {
//   badge: string;
//   title: string;
//   image: string;
//   mission: string;
//   vision: string;
//   values: string;
//   description: string;
//   highlights: string;
// }

/* SERVICES */

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image:string;
  icon: string;
  color: string;
  features: string[];
}

export interface Services {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  
  items: ServiceItem[];
}
// export interface ServiceItem {
//   id: number;
//   title: string;
//   description: string;
//   icon: string;
//   color: string;
// }

// export interface Services {
//   badge: string;
//   title: string;
//   highlight: string;
//   description: string;
//   items: ServiceItem[];
// }



export interface ProjectsSection {
  badge: string;
  title: string;
  description: string;
}


export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  stack: string[];
   github?: string;
  demo?: string;
}



// Process
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Process {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  steps: ProcessStep[];
}

export interface Contact {
  title: string;
  subtitle: string;
  formTitle: string;



info: {
  address: string;
  phones: string[];
  email: string;

};

form : {
  name: string;
  email: string;
  phone: string;
  subjectOptions: string[];
  message: string;
  button: string;
};

}

// cta

export interface CTAStat {
  number: string;
  label: string;
  position: "top-left" | "top-right" | "bottom-left";
}

export interface CTA {
  badge: string;
  title: string;
  description: string;

  buttons: {
    primary: string;
    secondary: string;
  };

  image: string;
  stats: CTAStat[];

}


// footer

export interface FooterSocial {
   name:
    | "globe"
    | "facebook"
    | "instagram"
    | "linkedin"
    | "twitter";

  href: string;
}


export interface FooterLink {
  label: string;
  href: string;

}

export interface Footer {
  brand: {
    name: string;
    description: string;
    socials: FooterSocial[];

  };
  services: string[];
  company: FooterLink[];

  contact: {
    address: string;
    phones: string[];
    email: string;

  };

  bottom: {
    copyright: string;
    links: FooterLink[];
  },
}



// main
export interface SiteData {
  company: string;
  logo: Logo;
  topBar: TopBar;
  nav: Nav;
  hero: Hero;
  about: About;
  services: Services;
  projectsSection: ProjectsSection
  projects: Project[];
  process: Process;
  contact: Contact;
  cta: CTA;
  footer: Footer;
}





// export interface Logo {
//   src: string;
//   alt: string;
// }

// export interface TopBar {
//   phone: string;
//   email: string;
//   address: string;
// }

// export interface DropdownItem {
//   label: string;
//   href: string;
// }

// export interface NavLink {
//   label: string;
//   href: string;
//   dropdown?: DropdownItem[];
// }

// export interface Nav {
//   links: NavLink[];
//   ctaLabel: string;
// }

// export interface HeroCTA {
//   primary: string;
//   secondary: string;
// }

// export interface HeroStat {
//   number: number;
//   label: string;
// }

// export interface FloatingCard {
//   title: string;
//   subtitle: string;
//   icon: string;
//   badge?: string;
// }

// export interface FloatingExperience {
//   number: string;
//   label: string;
// }

// export interface HeroFloatingCards {
//   topLeft: FloatingCard;
//   bottomLeft: FloatingCard;
//   topRight: FloatingExperience;
//   bottomRight: FloatingCard;
// }

// export interface Hero {
//   badge: string;
//   heading: string;
//   heading1: string;
//   heading2: string;

//   subtext: string;
//   features: string[];
//   cta: HeroCTA;
//   image: string;
//   stats: HeroStat[];
//   floatingCards: HeroFloatingCards;
// }

// export interface SiteData {
//   company: string;
//   logo: Logo;
//   topBar: TopBar;
//   nav: Nav;
//   hero: Hero;
//   about: About;
//   services: Services;

// }

// export interface About {
//   badge: string;
//   title: string;
//   image: string;

//   mission: string;
//   vision: string;
//   values: string;

//   description: string;
//   highlights: string[];
// }


// // export interface Service {
// //   title: string;
// //   description: string;
// //   features: string[];
// // }

// export interface ServiceItem {
//   id: number;
//   title: string;
//   description: string;
//   icon: string;
//   color: string;
// }

// export interface Services {
//   badge: string;
//   title: string;
//   highlight: string;
//   description: string;
//   items: ServiceItem[];
// }
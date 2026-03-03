export type PriceFilter = "all" | "free" | "paid";

export type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  priceType: Exclude<PriceFilter, "all">;
  image: string;
  tags: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "brain-profile-certification-bpc-2-0-eu",
    title: "Brain Profile Certification BPC 2.0 EU",
    description:
      "Distill the value of emotional intelligence into every training. Get certified as a Brain Profiler (BPC) and equip yourself with four practical, powerful tools to develop insight and performance.",
    price: "$295.00",
    priceType: "paid",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Certification", "Professional", "Brain Profile"],
  },
  {
    id: "icf-cce-from-webinars",
    title: "ICF CCE from Webinars",
    description:
      'Document your attendance at a Six Seconds EQ webinar suitable for coach professional development and complete your reflective practice about how you\'ll use this content in your coaching.',
    price: "$25.00",
    priceType: "paid",
    image:
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Coaching", "Webinar", "ICF CCE"],
  },
  {
    id: "coach-certification-solutions-ccs",
    title: "Coach Certification Solutions (CCS)",
    description:
      "Hone your ICF and Six Seconds competencies to deliver powerful coaching services to your clients in the final stage of the Certified EQ Coach process.",
    price: "$495.00",
    priceType: "paid",
    image:
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Certification", "Coaching", "Professional"],
  },
  {
    id: "eq-coach-certification-eqcc",
    title: "EQ Coach Certification (EQCC)",
    description:
      "Submit your Certification Request Form and final recording to pass your final practicum at the PCC level and become a Certified EQ Coach.",
    price: "$795.00",
    priceType: "paid",
    image:
      "https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Certification", "Coaching"],
  },
  {
    id: "popup-festival-official-host-onboarding-eqpopup",
    title: "POP-UP Festival - Official Host Onboarding (EQPOPUP)",
    description:
      "Become an Official Host of the world’s largest EQ program celebrating UNICEF World Children’s Day. Discover POP-UP, learn key guidelines, and get qualified to host public-facing events.",
    price: "Free",
    priceType: "free",
    image:
      "https://images.pexels.com/photos/3931568/pexels-photo-3931568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["POP-UP Festival", "Children", "Community"],
  },
  {
    id: "eq-practitioner-certification-eqpc-arabic",
    title: "شهادة الممارس المعتمد (EQPC) - Arabic",
    description:
      "In-depth experiential training equipping professionals to practice EQ and effectively integrate Six Seconds' methods and model in their personal and professional work.",
    price: "$695.00",
    priceType: "paid",
    image:
      "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Arabic", "Certification", "Professional"],
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.id === slug) ?? null;
}

export function getProductHref(product: Product) {
    return "/courses/brain-profile-certification-bpc-2-0-EU";
}


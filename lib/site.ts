export const site = {
  name: "Fuel1st",
  legalName: "Global Aviation Fuel Solutions",
  tagline: "Global aviation fuel solutions, delivered.",
  description:
    "Fuel1st is a Florida-based provider of global aviation fuel and trip support services, delivering jet fuel and dispatch coverage to operators at more than 1,800 airports worldwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://fuel1st-site.vercel.app",
  founded: "2008",
  contact: {
    phone: "954.258.9150",
    phoneTel: "+19542589150",
    email: "dispatch@fuel1st.com",
    address: {
      street: "4401 West Tradewinds Avenue",
      city: "Lauderdale by the Sea",
      region: "FL",
      postal: "33308",
      country: "US",
      countryName: "United States",
    },
  },
  airportsCount: "1,800+",
  countriesCount: "190+",
  hoursCount: "24/7",
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
} as const;

export type Site = typeof site;

export const formattedAddress =
  `${site.contact.address.street}, ${site.contact.address.city}, ${site.contact.address.region} ${site.contact.address.postal}`;

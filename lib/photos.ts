// Photo registry. All images are self-hosted from public/images/.
// Sources are Pexels (CC0/free license — no attribution required, but tracked here for provenance).
// To add a photo: download to public/images/{name}.jpg, add an entry here, and reference via the key.

export type Photo = {
  src: string;
  alt: string;
  // Pexels photo ID. URL: https://www.pexels.com/photo/{id}/
  pexelsId: string;
};

export const photos = {
  heroCloudsJet: {
    src: "/images/hero-clouds-jet.jpg",
    alt: "Commercial jet flying high above a layer of fluffy cumulus clouds against a deep blue sky.",
    pexelsId: "33224079",
  },
  jetHeadOn: {
    src: "/images/jet-headon.jpg",
    alt: "Head-on view of a commercial passenger jet on the airport tarmac, landing lights on.",
    pexelsId: "358319",
  },
  rampDusk: {
    src: "/images/ramp-dusk.jpg",
    alt: "Airport apron at dusk with ground-handling vehicles and dramatic cloud-streaked sky.",
    pexelsId: "2026324",
  },
  skyJet: {
    src: "/images/sky-jet.jpg",
    alt: "Small distant airplane flying past towering bright cumulus clouds in a clear blue sky.",
    pexelsId: "33852887",
  },
  runwayAerial: {
    src: "/images/runway-aerial.jpg",
    alt: "High-angle aerial view of an airport runway with marked lanes stretching into the distance.",
    pexelsId: "36550089",
  },
  runwaySunrise: {
    src: "/images/runway-sunrise.jpg",
    alt: "Empty airport runway at sunrise with a clear sky and distant airport buildings on the horizon.",
    pexelsId: "7508565",
  },
  engineDetail: {
    src: "/images/engine-detail.jpg",
    alt: "Close-up of a commercial jet engine on the tarmac under a cloudy sky.",
    pexelsId: "912050",
  },
  engineTerminal: {
    src: "/images/engine-terminal.jpg",
    alt: "Detailed close-up of a commercial aircraft engine on the runway with the terminal in the background.",
    pexelsId: "11213147",
  },
  boardingSunset: {
    src: "/images/boarding-sunset.jpg",
    alt: "Passenger boarding stairs and a jet at the gate during a vivid orange sunset.",
    pexelsId: "723240",
  },
} as const satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

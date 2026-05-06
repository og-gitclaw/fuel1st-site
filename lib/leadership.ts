// {/* TODO: replace placeholder bios with real leadership profiles */}

export type Leader = {
  name: string;
  role: string;
  bio: string;
};

export const leadership: Leader[] = [
  {
    name: "Jane Doe",
    role: "Chief Executive Officer",
    bio: "Jane has more than two decades of experience in aviation fuel logistics, with prior roles spanning supplier procurement, FBO operations, and multinational dispatch. She joined Fuel1st to scale the company's downstream marketing footprint.",
  },
  {
    name: "John Roe",
    role: "Chief Operating Officer",
    bio: "John leads day-to-day dispatch and supplier coordination across the Fuel1st network. He has prior experience running 24/7 operations centers for international charter and cargo operators.",
  },
  {
    name: "Avery Smith",
    role: "Director of Supply",
    bio: "Avery oversees Fuel1st's relationships with refiners and primary distributors, with a focus on ensuring contract pricing and physical supply remain competitive across the global network.",
  },
  {
    name: "Morgan Park",
    role: "Director of Sustainability",
    bio: "Morgan leads Fuel1st's SAF program and carbon-offset partnerships, helping clients fold lower-carbon procurement into their sustainability reporting.",
  },
];

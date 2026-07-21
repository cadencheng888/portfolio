export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export type Experience = {
  role: string;
  org: string;
  date: string;
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer Intern",
    org: "Barobo · San Jose, CA",
    date: "Jun 2026 — Present",
    bullets: [
      "Stopped unauthorized video sharing by engineering single-use AWS CloudFront signed URLs with TTLs.",
      "Scaled to 10,000+ monthly video requests by tracking user metadata in AWS DynamoDB for authorization.",
      "Cut environment provisioning from 2 hours to 15 minutes by writing reusable Terraform and AWS CLI scripts.",
      "Decreased API response time by 40%, as measured by AWS CloudWatch, by troubleshooting and optimizing database queries.",
    ],
  },
  {
    role: "Software Developer → Incoming VP of Technology & Engineering Manager",
    org: "Computer Science Engineering Society (CSES) · UCSD",
    date: "Oct 2025 — Present",
    bullets: [
      "Onboarded 100 users across 10 UCSD labs by shipping the auth, role-selection, and profile-setup flows in Next.js.",
      "Secured API access for 4 user roles with an RBAC layer of 10 scoped permissions in TypeScript.",
      "Restricted 10 labs' data to verified @ucsd.edu users by integrating Google OAuth with NextAuth and JWT.",
      "Hardened auth reliability with 11 Jest unit tests and an indexed Mongoose user schema with email validation.",
    ],
  },
  {
    role: "Software Developer",
    org: "Triton Web Developers (TWD) · UCSD",
    date: "Mar 2026 — Present",
    bullets: [
      "Moved content editing to TinaCMS so 100+ club members could make 40+ updates without a developer.",
      "Modeled site content as 9 typed CMS collections: hero, about, FAQ, board, gallery, socials and more.",
      "Built a self-serve FAQ accordion and 3 CMS-driven benefit tiers in React with expand/collapse state.",
    ],
  },
];

export type Project = {
  name: string;
  badge: string;
  /** award badges get the filled accent style */
  award: boolean;
  date: string;
  description: string;
  tags: string[];
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "inVISION",
    badge: "★ BEST INTERACTIVE AI",
    award: true,
    date: "Apr 2026",
    description:
      "Real-time 3D model generator & interactive viewer. Converts 2D images into 3D geometry via TripoSR, renders through a custom NumPy pipeline (transforms, culling, lighting), and controls pinch-to-zoom + rotation with MediaPipe hand tracking. Won at ACM Diamond Hacks (500+ participants).",
    tags: ["Python", "OpenCV", "MediaPipe", "NumPy", "Pygame"],
    github: "https://github.com/MICH3LL3D/inVISION",
  },
  {
    name: "Silent Speech",
    badge: "★ #1 BEST OVERALL",
    award: true,
    date: "Jan 2026",
    description:
      "Real-time lip-reading AI built on a BiGRU that hits 85% accuracy on live webcam feeds. An OpenCV pipeline extracts facial landmarks with scale-invariant normalization; trained with stratified sampling, mixup, and noise-injection augmentation. #1 of 35+ teams at San D Hacks.",
    tags: ["PyTorch", "OpenCV", "TensorFlow", "Python"],
    github: "https://github.com/davdwan21/Silent-Speech",
  },
  {
    name: "remark.",
    badge: "BERKELEY AI HACKATHON",
    award: false,
    date: "Jun 2026",
    description:
      "Hands-free AI voice agent built in 24h (I owned audio + HUD). A 3-tier agentic router lands 95% of spoken intents across 10+ task types; a real-time React HUD streams captions and reasoning at 2.5s latency, gated by an on-device OpenCV face-check for privacy.",
    tags: ["React", "TypeScript", "Claude API", "Deepgram", "FastAPI"],
    github: "https://github.com/cadencheng888/remark.",
  },
  {
    name: "Spotify Song Recommender",
    badge: "ACM AT UCSD",
    award: false,
    date: "Jan — Apr 2026",
    description:
      "Collaborative-filtering recommender in PyTorch over 7.7M+ interactions spanning 930K+ users and 30K+ songs. Custom DataLoader with negative sampling for balanced batches; optimized with Adam + MSE and evaluated on Precision, Recall, and ROC-AUC.",
    tags: ["Pandas", "PyTorch", "NumPy", "Matplotlib"],
  },
  {
    name: "Stride Lab",
    badge: "COMPUTER VISION",
    award: false,
    date: "Jul 2026",
    description:
      "In-browser running-form analyzer. Upload a clip and get a skeleton overlay flagging problem joints, angle-specific gait metrics scored good / fair / needs-work, and coaching + strengthening exercises. Auto-detects front, back, side, or diagonal camera views using MediaPipe's 3D world landmarks. Everything runs client-side via WebAssembly, so your video never leaves the device.",
    tags: ["JavaScript", "MediaPipe", "WebAssembly", "Signal Processing"],
    github: "https://github.com/cadencheng888/stride-lab",
  },
  {
    name: "Garmin MCP Server",
    badge: "AI TOOLING",
    award: false,
    date: "Jul 2026",
    description:
      'Model Context Protocol server that connects Garmin watch data to Claude Desktop: ask "How did I sleep last night?" and Claude answers from real Garmin Connect data. Exposes six tools covering steps, sleep stages, heart rate, workouts, stress, and daily summaries, with one-time OAuth login so your password is never stored.',
    tags: ["Python", "MCP", "Claude", "Garmin Connect API"],
    github: "https://github.com/cadencheng888/garmin-mcp",
  },
  {
    name: "re:scorched",
    badge: "CLIMATE · SIMULATION",
    award: false,
    date: "May 2026",
    description:
      "Web-based prescribed-fire planning simulator over live satellite imagery. Models fire spread with the Rothermel equations on real NDVI, moisture, slope, and weather bands from Google Earth Engine, validates real burn-boss conditions before ignition, and recommends optimal controlled-burn zones with a U-Net suitability model, all rendered on a 3D globe.",
    tags: ["React", "TypeScript", "Three.js", "PyTorch", "Earth Engine"],
    github: "https://github.com/cadencheng888/re-scorched",
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C/C++", "C#", "HTML/CSS", "SQL"],
  },
  {
    group: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS", "PyTorch", "TensorFlow"],
  },
  {
    group: "Developer Tools",
    items: [
      "Git/GitHub",
      "AWS (CloudFront, DynamoDB, CLI)",
      "Terraform",
      "MongoDB Atlas",
      "npm",
      "Linux/Unix",
    ],
  },
  {
    group: "Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "Torchvision", "OpenCV", "MediaPipe", "Mongoose"],
  },
];

export const COURSEWORK = [
  "Data Structures",
  "Discrete Math",
  "Systems Programming",
  "Algorithms",
];

export const CONTACT_ROWS = [
  { label: "Email", value: "cfc005@ucsd.edu", href: "mailto:cfc005@ucsd.edu" },
  {
    label: "LinkedIn",
    value: "in/cadenfcheng ↗",
    href: "https://linkedin.com/in/cadenfcheng",
    external: true,
  },
  {
    label: "GitHub",
    value: "cadencheng888 ↗",
    href: "https://github.com/cadencheng888",
    external: true,
  },
  { label: "Phone", value: "408·592·6669", href: "tel:4085926669" },
];

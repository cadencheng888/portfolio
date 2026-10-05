export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export type ImageAsset = { src: string; alt: string };

export const HEADSHOT: ImageAsset | null = {
  src: "/images/headshot.jpg",
  alt: "Caden Cheng, portrait",
};

export type Experience = {
  role: string;
  org: string;
  date: string;
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer Intern",
    org: "Barobo · Davis, CA",
    date: "Jun 2026 — Aug 2026",
    bullets: [
      "Signed CloudFront video URLs with a configurable TTL (default 30 min); rejects ~175 expired links/month.",
      "Gated 10K monthly video requests by account with per-user session and ownership records in DynamoDB.",
      "Cut environment provisioning from 2h to 15m with 3 Terraform modules and automated AWS CLI scripts.",
      "Dropped p50 latency on the course-videos API 400→240ms by collapsing 4 N+1 SQL queries into joins.",
    ],
  },
  {
    role: "VP of Technology",
    org: "Computer Science Engineering Society (CSES) · UCSD",
    date: "Sep 2026 — Present",
    bullets: [
      "Supervise 3 engineers shipping production RAG features for an enterprise AI startup client on GCP.",
      "Designed the technical interview rubric and question set used to hire engineering managers and developers.",
    ],
  },
  {
    role: "Software Developer",
    org: "Computer Science Engineering Society (CSES) · UCSD",
    date: "Oct 2025 — Aug 2026",
    bullets: [
      "Built Google OAuth (NextAuth) + JWT sessions for a lab-inventory app used by 100 members in 10 labs.",
      "Enforced 4-role RBAC across 12 API routes with 10 scoped permissions; 15 Jest tests run on every PR.",
      "Rejected duplicate lab memberships with a unique compound index on (user, lab) in Mongoose.",
    ],
  },
  {
    role: "Software Developer",
    org: "Triton Web Developers (TWD) · UCSD",
    date: "Mar 2026 — Present",
    bullets: [
      "Integrated TinaCMS so officers edit content without a PR; 40+ member edits shipped with 0 dev commits.",
      "Modeled the homepage as 7 typed CMS sections, replacing hand-edited HTML that broke on every edit.",
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
      "Turns a phone photo into a 3D model you rotate with your hand. Uploads run YOLOv8 detect → crop → background removal before TripoSR mesh generation; a custom NumPy renderer cut peak memory 5x (34.7 → 6.7 MB on a 267k-face mesh), and 21 MediaPipe hand landmarks drive a smoothed rotation matrix at 23 ms/frame. Best Interactive AI at DiamondHacks.",
    tags: ["Python", "OpenCV", "MediaPipe", "NumPy", "Pygame"],
    github: "https://github.com/MICH3LL3D/inVISION",
  },
  {
    name: "Silent Speech",
    badge: "★ BEST HACK",
    award: true,
    date: "Jan 2026",
    description:
      "Real-time lip reading with a BiGRU over 90-frame clips of 88 mouth/jaw landmarks: 78% (39/50) live word accuracy. Recorded and labeled the 5-word dataset in 24h, normalized by mouth width for distance invariance; noise + frame-drop augmentation raised val accuracy 72→79%. Best Hack at SanD Hacks.",
    tags: ["PyTorch", "MediaPipe", "OpenCV", "Python"],
    github: "https://github.com/davdwan21/Silent-Speech",
  },
  {
    name: "remark.",
    badge: "BERKELEY AI HACKATHON",
    award: false,
    date: "Jun 2026",
    description:
      "Voice agent built in 24h that turns overheard plans into calendar events and spoken commands into actions. Claude gets 5 tools across 11 app categories, routed through 3 tiers (Agentverse → Calendar → Browserbase), at 3.2s median speech-to-event latency. An on-device OpenCV face gate keeps the mic off unless a face is in view.",
    tags: ["Python", "TypeScript", "React", "FastAPI", "Claude API", "Deepgram"],
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
    name: "cadence",
    badge: "COMPUTER VISION",
    award: false,
    date: "Jul 2026",
    description:
      "In-browser running-form analyzer. Upload a clip and get a skeleton overlay flagging problem joints, angle-specific gait metrics scored good / fair / needs-work, and coaching + strengthening exercises. Auto-detects front, back, side, or diagonal camera views using MediaPipe's 3D world landmarks. Everything runs client-side via WebAssembly, so your video never leaves the device.",
    tags: ["JavaScript", "MediaPipe", "WebAssembly", "Signal Processing"],
    github: "https://github.com/cadencheng888/cadence",
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
    items: ["Python", "JavaScript", "TypeScript", "C/C++", "C#", "HTML/CSS", "SQL"],
  },
  {
    group: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "PyTorch",
      "TensorFlow",
      "LLMs/GenAI",
      "NLP",
      "RAG",
    ],
  },
  {
    group: "Developer Tools",
    items: [
      "Git/GitHub",
      "Docker",
      "CI/CD",
      "AWS (CloudFront, DynamoDB, CLI)",
      "Terraform",
      "Cursor",
      "Gemini",
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
  "Systems Programming",
  "Algorithms",
  "Operating Systems",
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

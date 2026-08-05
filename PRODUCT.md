# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Internship recruiters and screening engineers, evaluating Caden in under ~60 seconds to decide whether to move him forward for software engineering internships (target: summer 2027). They typically arrive from a resume link, LinkedIn, or an application form, often mid-pipeline with many candidates in the queue.

## Product Purpose

Personal portfolio for Caden Cheng, CS + Mathematics student at UC San Diego ('28, Data Science minor). Exists to convert a recruiter's quick scan into an email conversation or interview. Success = recruiter contact about an internship.

## Positioning

"Math that ships": applied math and CS turned into running systems — real-time computer-vision pipelines, recommendation models, full-stack products. Not a pure-theory student, not a generic full-stack generalist. (The infrastructure/latency framing used in the /v2 copy is a supporting flavor, not the headline claim.)

## Operating Context

- Single-page Next.js site at `/` using the mono/cream design (nav → hero+headshot → about → education → experiences → projects → contact). The Skills section was deliberately removed. The previous blue editorial design lives in git history (components under `components/` are currently unused).
- Dev server runs at localhost:3001; contact form on `/` posts via FormSubmit to email.
- Recruiters may cross-reference the resume PDF (`/uploads/resume.pdf`) — site claims and resume claims must stay in sync (this has drifted before, e.g. award names).

## Capabilities and Constraints

- Next.js 16.2.10 App Router (breaking changes vs older Next — check `node_modules/next/dist/docs/` before using APIs; e.g. `priority` on `next/image` is deprecated). Tailwind CSS v4, CSS-first config in `app/globals.css`.
- Content is data-driven from `lib/data.ts` (EXPERIENCE, PROJECTS, SKILLS, COURSEWORK, HEADSHOT).
- Primary CTA is email (cfc005@ucsd.edu). Phone number (408-592-6669) is public by explicit choice.
- Project cover images planned for all 7 projects (files not yet exported); `components/CoverMedia.tsx` renders a designed placeholder until each file lands.

## Brand Commitments

- Name: Caden Cheng (the /v2 design styles it lowercase "caden cheng"; lowercase voice is a v2 design choice, not a global commitment).
- All content must be true and verifiable — real projects, real metrics, real awards only.

## Evidence on Hand

- 7 real projects with GitHub links (`lib/data.ts`): inVISION (Best Interactive AI, ACM Diamond Hacks, 500+ participants), Silent Speech (#1 Best Overall, San D Hacks), remark., Spotify Song Recommender, Stride Lab, Garmin MCP Server, re:scorched.
- Experience: Barobo SWE intern (AWS CloudFront/DynamoDB/Terraform, quantified results), CSES software developer → incoming VP of Technology, Triton Web Developers.
- Stats used on `/`: 1× hackathon podium, 37+ users onboarded, 2.9M+ interactions modeled, 741+ miles run.
- Assets: processed headshot `public/images/headshot.jpg` (880×1100, 4:5); raw shots in `~/Downloads/Caden Cheng Headshots/`; UCSD seal `public/ucsd-seal.svg`; resume `public/uploads/resume.pdf` (updated Aug 2026).
- No testimonials, press, or case studies — do not fabricate any.

## Product Principles

1. Win the 60-second scan: a recruiter should grasp school, positioning, strongest proof, and how to reach Caden without digging.
2. Every claim carries its evidence — a number, an award, or a repo link. Nothing invented, and site copy never drifts from the resume.
3. "Math that ships" is the throughline: lead with things that run (demos, FPS, accuracy, latency), backed by the math behind them.
4. Email is the conversion. Contact must never be more than one click away.

"""Regenerate app/opengraph-image.jpg (the link-preview card).

Usage:  pip install Pillow && python3 scripts/make-og-image.py

Re-run after changing the headshot, name, or tagline. The fonts in
scripts/fonts/ are the same JetBrains Mono / Geist subsets the site loads
via next/font, converted from woff2 to ttf so Pillow can read them.
"""
from PIL import Image, ImageDraw, ImageFont
import sys

import os
HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
GEIST = os.path.join(HERE, "fonts", "Geist-Bold.ttf")
MONO  = os.path.join(HERE, "fonts", "JetBrainsMono-Regular.ttf")

W, H = 1200, 630
CREAM="#FBFAF8"; INK="#1A1917"; GRAY="#6B7280"; MID="#4B5563"; BORDER="#E7E3DB"

img = Image.new("RGB", (W, H), CREAM)
d = ImageDraw.Draw(img)

# ---- right column: headshot, full bleed, exact 4:5 -> 504x630 (no crop) ----
PHOTO_W = 504
shot = Image.open(f"{REPO}/public/images/headshot.jpg").convert("RGB")
shot = shot.resize((PHOTO_W, H), Image.LANCZOS)
img.paste(shot, (W - PHOTO_W, 0))
# hairline separator matching site border
d.line([(W - PHOTO_W, 0), (W - PHOTO_W, H)], fill=BORDER, width=2)

# ---- left: ruled text block (mirrors site's border-l-4 RuledEntry) ----
f_name = ImageFont.truetype(GEIST, 66)
f_role = ImageFont.truetype(MONO, 25)
f_meta = ImageFont.truetype(MONO, 20)

RULE_X = 84
TEXT_X = RULE_X + 22

lines = []
lines.append(("caden cheng", f_name, INK, 0))
lines.append(("software engineer", f_role, MID, 26))
lines.append(("cs + mathematics · uc san diego '28", f_meta, GRAY, 30))
lines.append(("cadenfcheng.com", f_meta, INK, 10))

# measure total height
total = 0
heights = []
for txt, font, _, gap in lines:
    bb = d.textbbox((0, 0), txt, font=font)
    h = bb[3] - bb[1]
    heights.append((bb, h))
    total += gap + h

y = (H - total) // 2
top_y = y
positions = []
for (txt, font, color, gap), (bb, h) in zip(lines, heights):
    y += gap
    positions.append((txt, font, color, y, bb))
    y += h
bottom_y = y

# vertical rule spanning the block
d.rectangle([RULE_X, top_y - 6, RULE_X + 4, bottom_y + 6], fill=GRAY)

for txt, font, color, yy, bb in positions:
    d.text((TEXT_X, yy - bb[1]), txt, font=font, fill=color)

out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(REPO, "app", "opengraph-image.jpg")
img.save(out, "JPEG", quality=92, optimize=True, progressive=True, subsampling=0)
print("wrote", out, img.size)

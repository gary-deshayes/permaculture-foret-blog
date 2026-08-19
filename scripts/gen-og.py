"""Génère public/og-default.jpg — 1200x630, thème forêt."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math, os

W, H = 1200, 630
img = Image.new("RGB", (W, H), "#faf6ec")
d = ImageDraw.Draw(img)

# Halos organiques
def blob(cx, cy, r, color, alpha):
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    for i in range(1, 12):
        t = i / 12
        ld.ellipse([cx - r * t, cy - r * t * 0.72, cx + r * t, cy + r * t * 0.72],
                   fill=color + (int(alpha * (1 - t)),))
    layer = layer.filter(ImageFilter.GaussianBlur(40))
    img.paste(layer, (0, 0), layer)

blob(180, -60, 520, (123, 160, 91), 70)
blob(1080, 120, 460, (227, 165, 60), 55)
blob(600, 700, 560, (79, 122, 61), 60)

def font(name, size):
    for p in [f"/usr/share/fonts/truetype/dejavu/{name}", f"/opt/data/.fonts/{name}"]:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

f_title = font("DejaVuSerif-Bold.ttf", 76)
f_sub = font("DejaVuSans.ttf", 30)
f_small = font("DejaVuSans-Bold.ttf", 26)

# Feuille décorative (gauche)
d.ellipse([60, 400, 320, 660], fill="#55803f")
d.ellipse([70, 410, 310, 650], fill="#7fa35e")
d.ellipse([120, 455, 250, 600], fill="#faf6ec")
d.line([190, 425, 190, 640], fill="#e3a53c", width=14)
d.line([190, 470, 150, 420], fill="#e3a53c", width=10)
d.line([190, 520, 230, 470], fill="#e3a53c", width=10)

# Cernes (droite)
cx, cy = 985, 315
for i, (r, w) in enumerate([(215, 2), (170, 2), (125, 2)]):
    d.ellipse([cx - r, cy - r, cx + r, cy + r], outline="#4f7a3d", width=w)
d.ellipse([cx - 82, cy - 82, cx + 82, cy + 82], outline="#c97b2d", width=4)
d.ellipse([cx - 55, cy - 55, cx + 55, cy + 55], fill="#2c5c33")
d.text((cx, cy), "🌱", font=f_small, anchor="mm")

# Texte
d.text((80, 140), "Permaculture", font=f_title, fill="#1f4d2e")
d.text((80, 240), "Forêt", font=f_title, fill="#d99a3d")
d.text((80, 380), "Guides pratiques & comparatifs honnêtes", font=f_sub, fill="#4f7a3d")
d.text((80, 440), "cultiver un jardin forêt, sans labour", font=f_sub, fill="#5d6b54")
d.text((80, 540), "permaculture-foret.fr", font=f_small, fill="#1f4d2e")

img.save("/opt/data/permaculture-foret-blog/public/og-default.jpg", quality=90)
print("OK", os.path.getsize("/opt/data/permaculture-foret-blog/public/og-default.jpg"), "bytes")

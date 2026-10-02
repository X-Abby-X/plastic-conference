#!/usr/bin/env python3
"""Builds the web-sized gallery images in src/assets/gallery/ from the raw photos.

The raw photos (src/assets/Photo Dump/, ~2 GB) are gitignored; only this script's
output is committed, and that output is what src/Gallery.jsx imports. Re-run it
after changing PHOTOS below:

    python3 scripts/build-gallery.py

Needs Pillow (`pip install pillow`) and, for the .HEIC phone photos, macOS `sips`.

Each photo is written twice — `<slug>.webp` for the lightbox and
`<slug>-thumb.webp` for the grid — and its dimensions go into sizes.json so the
page can reserve the right space before the image loads.
"""

import json
import math
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / 'src' / 'assets' / 'Photo Dump'
OUT = ROOT / 'src' / 'assets' / 'gallery'
DIGI = 'Microplastics Conf on digi'
INSTAGRAM = 'Instagram post'

FULL_EDGE = 1800
THUMB_EDGE = 800

# (raw file, output slug, lift). `lift` brightens the photo: most of the camera
# shots were taken in a dim lecture hall and come out underexposed. The
# Instagram set was already edited before posting, so it is left as-is.
PHOTOS = [
    # Highlights — the 13 photos from the iGEM Toronto recap post, in post order.
    # https://www.instagram.com/p/Dd7ykeMlRht/
    *[(f'{INSTAGRAM}/ig_{n:02d}.jpg', f'highlight-{n:02d}', False) for n in range(1, 14)],

    # More from the day.
    ('IMG_1925.HEIC', 'talk-ecological-impacts', False),
    ('IMG_3071.JPG', 'audience', True),
    ('IMG_3090.JPG', 'igem-team-presenting', True),
    ('IMG_3107.JPG', 'at-the-podium', True),
    ('IMG_3118.JPG', 'student-panel', True),
    ('IMG_2182.HEIC', 'trash-team-group', False),
    ('IMG_3177.JPG', 'panellist-speaking', True),
    ('IMG_3221.JPG', 'panellists', True),
    ('IMG_3164.JPG', 'panel-moderator', True),
    ('IMG_3263.JPG', 'audience-question', True),
    ('IMG_2226.HEIC', 'speaker-gifts', False),
    (f'{DIGI}/DSC08985.JPG', 'poster-session-atrium', False),
    (f'{DIGI}/DSC08996.JPG', 'poster-session-browsing', False),
    (f'{DIGI}/DSC09005.JPG', 'poster-session-discussion', False),
    (f'{DIGI}/DSC09007.JPG', 'poster-presenter', False),
    (f'{DIGI}/DSC08995.JPG', 'poster-session-attendees', False),
    (f'{DIGI}/DSC08991.JPG', 'sticker-table', False),
    ('IMG_3293.JPG', 'crowd', True),
    ('IMG_3318.JPG', 'organisers', True),
    ('IMG_2246.HEIC', 'everyone', False),
]

# Mean luminance (0–1) a lifted photo is pulled toward. The gamma is clamped so a
# frame that is mostly blackboard is not washed out chasing the target.
LIFT_TARGET = 0.32
LIFT_MIN_GAMMA = 0.6


def load(path):
    if path.suffix.lower() == '.heic':
        with tempfile.TemporaryDirectory() as tmp:
            converted = Path(tmp) / 'converted.jpg'
            subprocess.run(
                ['sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '95',
                 str(path), '--out', str(converted)],
                check=True, capture_output=True,
            )
            image = Image.open(converted)
            image.load()
    else:
        image = Image.open(path)
    return ImageOps.exif_transpose(image).convert('RGB')


def lift(image):
    sample = image.convert('L').resize((64, 64))
    mean = sum(sample.tobytes()) / (64 * 64 * 255)
    if mean <= 0 or mean >= LIFT_TARGET:
        return image
    gamma = max(LIFT_MIN_GAMMA, math.log(LIFT_TARGET) / math.log(mean))
    table = [round(255 * (value / 255) ** gamma) for value in range(256)]
    return image.point(table * 3)


def save(image, edge, path, quality):
    resized = image.copy()
    resized.thumbnail((edge, edge), Image.LANCZOS)
    resized.save(path, 'WEBP', quality=quality, method=6)
    return resized.size


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for stale in OUT.glob('*.webp'):
        stale.unlink()

    sizes = {}
    for source, slug, should_lift in PHOTOS:
        image = load(RAW / source)
        if should_lift:
            image = lift(image)
        sizes[slug] = save(image, FULL_EDGE, OUT / f'{slug}.webp', 80)
        save(image, THUMB_EDGE, OUT / f'{slug}-thumb.webp', 74)
        print(f'{slug}: {sizes[slug][0]}x{sizes[slug][1]}')

    (OUT / 'sizes.json').write_text(json.dumps(sizes, indent=2) + '\n')


if __name__ == '__main__':
    main()

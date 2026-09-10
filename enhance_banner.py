import os
from PIL import Image, ImageFilter, ImageEnhance

input_path = "public/anubha-banner.png"
output_path = "public/anubha-banner.png"
enhanced_2x_path = "public/anubha-banner-2x.png"

img = Image.open(input_path).convert("RGBA")
w, h = img.size
print(f"Original size: {w}x{h}")

# Upscale 2x with high-quality Lanczos resampling
new_w, new_h = w * 2, h * 2
upscaled = img.resize((new_w, new_h), Image.Resampling.LANCZOS)

# Convert RGB for filter operations
rgb = upscaled.convert("RGB")

# Apply UnsharpMask for crisp edges (eyes, hair, laptop, background)
sharp = rgb.filter(ImageFilter.UnsharpMask(radius=1.8, percent=150, threshold=2))

# Enhance detail sharpness
sharpness_enhancer = ImageEnhance.Sharpness(sharp)
sharp = sharpness_enhancer.enhance(1.3)

# Enhance micro-contrast for punchy clarity
contrast_enhancer = ImageEnhance.Contrast(sharp)
sharp = contrast_enhancer.enhance(1.05)

# Enhance color vibrancy subtly
color_enhancer = ImageEnhance.Color(sharp)
sharp = color_enhancer.enhance(1.04)

# Save high-res 2048x684 banner
sharp.save(output_path, "PNG", optimize=True)
sharp.save("public/anubha-banner.jpg", "JPEG", quality=98, subsampling=0)
print(f"Enhanced and saved to {output_path} at {new_w}x{new_h} resolution.")

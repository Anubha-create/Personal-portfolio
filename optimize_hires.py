from PIL import Image, ImageFilter, ImageEnhance

input_path = "public/anubha-hires-original.png"
output_path = "public/anubha-banner.png"

img = Image.open(input_path).convert("RGB")
print(f"Loaded original: {img.size}")

# Apply subtle UnsharpMask to bring out eye, hair, and laptop edge sharpness
sharp = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=130, threshold=2))

# Enhance sharpness by 15%
sharp = ImageEnhance.Sharpness(sharp).enhance(1.18)

# Enhance micro-contrast by 3%
sharp = ImageEnhance.Contrast(sharp).enhance(1.03)

# Save as optimized, ultra-sharp PNG and WebP/JPG
sharp.save(output_path, "PNG", optimize=True)
sharp.save("public/anubha-banner.webp", "WEBP", quality=98)
sharp.save("public/hero-desk-portrait.jpg", "JPEG", quality=98, subsampling=0)

print("Saved ultra-sharp 2170x725 banner successfully.")

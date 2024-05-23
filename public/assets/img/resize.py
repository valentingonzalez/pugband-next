from PIL import Image
import os

def optimize_image(input_path, output_path, quality=85):
    with Image.open(input_path) as img:
        # Save the optimized JPG
        img.save(output_path, "JPEG", quality=quality)

        # Convert and save to WebP format
        webp_output_path = os.path.splitext(output_path)[0] + ".webp"
        img.save(webp_output_path, "webp", quality=quality)

def process_directory(input_dir, output_dir, quality=85):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(".jpg") or filename.lower().endswith(".jpeg"):
            input_path = os.path.join(input_dir, filename)
            output_path = os.path.join(output_dir, filename)
            optimize_image(input_path, output_path, quality)

if __name__ == "__main__":
    input_directory = "./hq"
    output_directory = "./"
    quality = 60

    process_directory(input_directory, output_directory, quality)

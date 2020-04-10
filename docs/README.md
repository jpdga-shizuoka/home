

# Create a ico with multiple image size
    convert icon-630x630.png  -bordercolor white -border 0 \
          \( -clone 0 -resize 32x32 \) \
          \( -clone 0 -resize 128x128 \) \
          \( -clone 0 -resize 152x152 \) \
          \( -clone 0 -resize 167x167 \) \
          \( -clone 0 -resize 180x180 \) \
          \( -clone 0 -resize 192x192 \) \
          \( -clone 0 -resize 196x196 \) \
          -delete 0 -alpha off -colors 256 favicon.ico

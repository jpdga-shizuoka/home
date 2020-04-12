

# Create a favicon with multiple image size
```
convert -background transparent \
icon-630x630.round.png \
-define icon:auto-resize=32,128,152,167,180,192,196 \
favicon.ico
```

for i in *.png; do
    [ -f "$i" ] || break
    pngcrush -ow $i
done

# https://stackoverflow.com/questions/19153122/image-compression-tools-via-command-line

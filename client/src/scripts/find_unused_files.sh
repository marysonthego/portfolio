#!/bin/bash

# Find all unique file extensions in public/media and save the list to ./medialist.txt
for file in ../../public/media/*.*; do printf "%s
" "${file##*.}";
done | sort -u >./mediaTypes.txt

# list only file names found in files
cd ..
egrep -riho --exclude=*.txt "[[:alnum:]_-]+\.js|[[:alnum:]_-]+\.png|[[:alnum:]_-]+\.jpg|[[:alnum:]_-]+\.gif|[[:alnum:]_-]+\.avif" * | sort -u >./scripts/usedFiles.txt

# lists <file-found-in><line-number><filename>
egrep -rino --exclude=*.txt "[[:alnum:]_-]+\.js|[[:alnum:]_-]+\.png|[[:alnum:]_-]+\.jpg|[[:alnum:]_-]+\.gif|[[:alnum:]_-]+\.avif" * >./scripts/usedList.txt

# list imports
egrep -rih --exclude=*.txt "^import" | sort -u >./scripts/usedImports.txt
# egrep -rih --exclude=*.txt "from " | egrep -ih "[[:alnum:]_-]+\""

# egrep -ri "^import" | egrep -i "\"|\'"

# egrep -ri "^import" | egrep -ri "+\.?\/?[\w+\.?\/?\w]+.+;?$"
# egrep -ri "^import" *

# ([\w.-]+)[.]\w+/gm

# Exit with an explicit exit status.
exit 0

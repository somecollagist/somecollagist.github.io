#!/bin/bash

# Note: requires a full installation of `texlive` and `texlive-lang`

RT=$(realpath $(dirname $0))

cd $RT
for f in $(ls *.tex); do
  pdflatex $f -halt-on-error > /dev/null
  PDF=$(echo $f | sed 's/\.tex/\.pdf/')
  mv $PDF ../../../../public/$PDF
done

shopt -s extglob
rm $(ls !(.gitignore|mkresume.sh|*.tex) | xargs)
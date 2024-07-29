@echo off

REM Adiciona todas as mudanças ao índice
git add .

REM Faz o commit das mudanças
git commit -m "new changes"

REM Empurra as mudanças para a branch main
git push

REM Muda para a branch gh-pages
git checkout gh-pages

REM Remove todos os arquivos da branch gh-pages
git checkout main -- .

REM Gera os arquivos de build
npm run build

REM Adiciona os arquivos gerados ao índice
git add dist

REM Faz o commit dos arquivos gerados
git commit -m "new build"

REM Empurra os arquivos gerados para a branch gh-pages
git push

REM Muda para a branch main
git checkout main

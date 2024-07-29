@echo off

REM Adiciona todas as mudanças ao índice
git add .

REM Faz o commit das mudanças
git commit -m "new changes"

REM Empurra as mudanças para a branch main
git push

REM Gera os arquivos de build
npm run build

REM Empurra o diretório dist para a branch gh-pages
git subtree push --prefix dist origin gh-pages

REM Limpa o diretório dist
rmdir /s /q dist

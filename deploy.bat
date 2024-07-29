@echo off

REM Adiciona todas as mudanças ao índice
git add .

REM Faz o commit das mudanças
git commit -m "new changes"

REM Empurra as mudanças para a branch main
git push

npm run build 

git subtree push --prefix dist https://github.com/NathanMarques2001/projetos.git gh-pages


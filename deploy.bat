@echo off

REM Adiciona todas as mudanças ao índice
git add .

REM Faz o commit das mudanças
git commit -m "new changes"

REM Empurra as mudanças para a branch main
git push

git subtree add --prefix dist origin gh-pages

git subtree commit --prefix dist origin gh-pages

REM Muda para a branch gh-pages
git subtree push --prefix dist origin gh-pages

REM Muda para a branch main
git checkout main

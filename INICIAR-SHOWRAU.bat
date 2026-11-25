@echo off
echo ============================================
echo   SHOWRAU 2026 - Servidor de Som
echo   SESI SALTO
echo ============================================
echo.
echo Abrindo o navegador em http://localhost:3000
echo.
echo NAO FECHE ESTA JANELA enquanto estiver usando o site!
echo Pressione Ctrl+C para parar o servidor.
echo.
cd /d "%~dp0site"
start http://localhost:3000
npx serve -l 3000 -s .

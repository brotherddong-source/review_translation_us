@echo off
cd /d "%~dp0"
echo.
echo  ==============================
echo   특허 번역 검토기 (로컬)
echo   http://localhost:8000/main.html
echo  ==============================
echo.
start "" "http://localhost:8000/index.html"
python -m http.server 8000
pause

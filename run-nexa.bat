@echo off
title Nexa Dev Server
echo =======================================================
echo           STARTING NEXA DEVELOPMENT SERVERS
echo =======================================================
echo.

:: 1. Jalankan PHP Artisan Serve
echo [1/3] Menjalankan Laravel Server...
start "Laravel Server" /min php artisan serve

:: 2. Jalankan Vite Development Server
echo [2/3] Menjalankan Vite Asset Server...
start "Vite Dev" /min npm run dev

:: 3. Tunggu 3 detik agar server siap
echo [3/3] Menyiapkan browser dalam 3 detik...
ping 127.0.0.1 -n 4 >nul

:: 4. Buka Browser
echo Membuka http://127.0.0.1:8000...
start "" "http://127.0.0.1:8000"

exit

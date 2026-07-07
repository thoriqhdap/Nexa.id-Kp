<?php

// Set environment variables for Vercel serverless compatibility programmatically
if (isset($_ENV['VERCEL']) || isset($_SERVER['VERCEL']) || isset($_ENV['NOW_PORT'])) {
    $_ENV['APP_CONFIG_CACHE'] = '/tmp/config.php';
    $_ENV['APP_EVENTS_CACHE'] = '/tmp/events.php';
    $_ENV['APP_PACKAGES_CACHE'] = '/tmp/packages.php';
    $_ENV['APP_ROUTES_CACHE'] = '/tmp/routes.php';
    $_ENV['APP_SERVICES_CACHE'] = '/tmp/services.php';
    $_ENV['VIEW_COMPILED_PATH'] = '/tmp/views';
    $_ENV['CACHE_DRIVER'] = 'array';
    $_ENV['SESSION_DRIVER'] = 'cookie';
    $_ENV['LOG_CHANNEL'] = 'stderr';
}

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Load autoloader Composer
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel
$app = require_once __DIR__.'/../bootstrap/app.php';

// Konfigurasi dinamis folder storage untuk serverless Vercel (karena read-only)
if (isset($_ENV['VERCEL']) || isset($_ENV['NOW_PORT'])) {
    $storagePath = '/tmp/storage';
    $storageDirs = [
        $storagePath . '/bootstrap/cache',
        $storagePath . '/framework/sessions',
        $storagePath . '/framework/views',
        $storagePath . '/framework/cache',
        '/tmp/public/build',
    ];
    foreach ($storageDirs as $dir) {
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }
    }
    $app->useStoragePath($storagePath);

    // Salin manifest.json dari resources ke /tmp/public/build/manifest.json agar bisa dibaca Laravel
    $bundledManifest = __DIR__ . '/../resources/manifest.json';
    $targetManifest = '/tmp/public/build/manifest.json';
    if (file_exists($bundledManifest)) {
        copy($bundledManifest, $targetManifest);
    }

    // Paksa Laravel menggunakan /tmp/public sebagai public path di serverless
    $app->usePublicPath('/tmp/public');
}

// Jalankan Kernel HTTP Laravel
$kernel = $app->make(Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);

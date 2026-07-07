<?php

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
    ];
    foreach ($storageDirs as $dir) {
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }
    }
    $app->useStoragePath($storagePath);
}

// Jalankan Kernel HTTP Laravel
$kernel = $app->make(Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);

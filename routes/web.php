<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/nexa-apps', function () {
    return Inertia::render('NexaApps');
})->name('nexa-apps');

Route::get('/nexatel', function () {
    return Inertia::render('Nexatel');
})->name('nexatel');

Route::get('/nexa-data', function () {
    return Inertia::render('NexaData');
})->name('nexa-data');

Route::get('/nexa-digital', function () {
    return Inertia::render('NexaDigital');
})->name('nexa-digital');

Route::get('/nexa-solutions', function () {
    return Inertia::render('NexaSolutions');
})->name('nexa-solutions');

Route::get('/solution/corporate', function () {
    return Inertia::render('SolutionCorporate');
})->name('solution.corporate');

Route::get('/solution/education', function () {
    return Inertia::render('SolutionEducation');
})->name('solution.education');

Route::get('/solution/government', function () {
    return Inertia::render('SolutionGovernment');
})->name('solution.government');

Route::get('/solution/hospitality', function () {
    return Inertia::render('SolutionHospitality');
})->name('solution.hospitality');

Route::get('/solution/manufacture', function () {
    return Inertia::render('SolutionManufacture');
})->name('solution.manufacture');

Route::get('/areas', function () {
    return Inertia::render('Areas');
})->name('areas');

Route::get('/subscription', function () {
    return Inertia::render('Subscription');
})->name('subscription');

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy-policy');

Route::get('/berita-artikel', function () {
    return Inertia::render('BeritaArtikel');
})->name('berita-artikel');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

Route::post('/contact-send', function (Request $request) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'company' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'phone' => 'required|string|max:50',
        'address' => 'required|string',
        'message' => 'required|string',
    ]);

    $toEmail = env('CONTACT_MAIL_RECEIVER', 'nexaemailkp@gmail.com');

    Mail::raw("Pesan baru dari Kontak Nexa:\n\n" .
        "Nama: {$validated['name']}\n" .
        "Perusahaan: {$validated['company']}\n" .
        "Email: {$validated['email']}\n" .
        "No. Telp: {$validated['phone']}\n" .
        "Alamat: {$validated['address']}\n\n" .
        "Pesan:\n{$validated['message']}", function ($message) use ($validated, $toEmail) {
            $message->to($toEmail)
                    ->subject('Kontak Baru dari Website: ' . $validated['name']);
    });

    return response()->json(['message' => 'Success']);
});

Route::post('/subscription-send', function (Request $request) {
    $validated = $request->validate([
        'package' => 'required|string|max:255',
        'name' => 'required|string|max:255',
        'phone' => 'required|string|max:50',
        'email' => 'required|email|max:255',
        'address' => 'required|string',
        'city' => 'required|string|max:255',
    ]);

    $toEmail = env('CONTACT_MAIL_RECEIVER', 'nexaemailkp@gmail.com');

    Mail::raw("Pendaftaran Langganan Baru:\n\n" .
        "Paket Layanan: {$validated['package']}\n" .
        "Nama Lengkap: {$validated['name']}\n" .
        "No. Telepon: {$validated['phone']}\n" .
        "Email: {$validated['email']}\n" .
        "Kota Domisili: {$validated['city']}\n" .
        "Alamat Lengkap: {$validated['address']}", function ($message) use ($validated, $toEmail) {
            $message->to($toEmail)
                    ->subject('Registrasi Langganan Baru: ' . $validated['name']);
    });

    return response()->json(['message' => 'Success']);
});

require __DIR__.'/auth.php';

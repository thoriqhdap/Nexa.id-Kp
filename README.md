# Nexa.id - Web Portal Kerja Praktek

Website Portal Nexa.id merupakan aplikasi web modern yang dibangun untuk menyajikan profil layanan, solusi industri, artikel berita, dan form langganan Nexa. Project ini dikembangkan menggunakan stack Laravel (sebagai backend) dan React + Inertia.js (sebagai frontend).

---

## 🚀 Fitur Utama

- **Layanan Lengkap Nexa:** Informasi terperinci mengenai layanan Nexa (Nexatel, Nexa Data, Nexa Apps, Nexa Digital, Nexa Solutions).
- **Solusi Industri Custom:** Halaman interaktif industri (Corporate, Education, Government, Hospitality, Manufacture) dengan layout *full background* resolusi tinggi.
- **Berita & Artikel (Newsroom):** Halaman filter artikel dinamis, pencarian real-time, widget tag populer, dan tata letak *glassmorphism card* yang elegan.
- **Formulir Kontak Terintegrasi:** Menghubungkan pengunjung langsung ke tim Nexa melalui mailer lokal dengan API `/contact-send`.
- **Registrasi Langganan:** Formulir pemesanan paket terintegrasi langsung dengan pengiriman email otomatis ke admin (`nexaemailkp@gmail.com`).
- **Dukungan Multi-Bahasa (ID/EN):** Mengintegrasikan Google Translate Client-side API secara seamless tanpa popup bawaan Google yang mengganggu.
- **Floating Button WhatsApp:** Tombol obrolan langsung berwarna hijau WhatsApp asli yang terhubung ke Customer Care Nexa (`+628112971000`).

---

## 🛠️ Stack Teknologi

- **Backend:** [Laravel 10](https://laravel.com) (PHP)
- **Frontend:** [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- **Routing & State:** [Inertia.js](https://inertiajs.com) (SPA tanpa reload)
- **Styling:** CSS & TailwindCSS
- **Build Tool:** [Vite](https://vitejs.dev)
- **Komunikasi Data:** Axios API Calls

---

## 💻 Panduan Instalasi Lokal

### Prasyarat
Pastikan Anda sudah menginstal:
* PHP >= 8.1
* Composer
* Node.js & NPM
* Web Server (seperti Apache / Nginx) atau SQLite / MySQL jika diperlukan.

### Langkah-Langkah

1. **Clone Repositori:**
   ```bash
   git clone https://github.com/thoriqhdap/Nexa.id-Kp.git
   cd Nexa.id-Kp
   ```

2. **Instal Dependensi PHP (Composer):**
   ```bash
   composer install
   ```

3. **Instal Dependensi JavaScript (NPM):**
   ```bash
   npm install
   ```

4. **Salin File Environment:**
   ```bash
   cp .env.example .env
   ```

5. **Generate Application Key:**
   ```bash
   php artisan key:generate
   ```

6. **Konfigurasi Mailer (Untuk Pengujian Form lokal):**
   Pada file `.env`, atur driver mailer ke mode log agar email tersimpan di log Laravel lokal (`storage/logs/laravel.log`):
   ```env
   MAIL_MAILER=log
   CONTACT_MAIL_RECEIVER=nexaemailkp@gmail.com
   ```

7. **Jalankan Development Server:**
   Buka dua terminal dan jalankan:
   * **Terminal 1 (Laravel backend):**
     ```bash
     php artisan serve
     ```
   * **Terminal 2 (Frontend compilation):**
     ```bash
     npm run dev
     ```

8. **Build Aset Produksi:**
   ```bash
   npm run build
   ```

---

## 📁 Struktur Folder Utama

- `resources/js/Pages/` : Berisi halaman-halaman utama React (Solution, Services, Subscription, BeritaArtikel, dll).
- `resources/js/Components/` : Komponen re-usable (Navbar, Footer, FloatingButtons, dll).
- `routes/web.php` : Definisi rute Laravel dan integrasi pengiriman email form.
- `public/images/` : Aset-aset gambar resolusi tinggi (HD) website.

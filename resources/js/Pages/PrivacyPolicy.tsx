import React from 'react'
import { Head } from '@inertiajs/react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import { Shield, Lock, Eye, FileText, RefreshCw } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <>
      <Head title="Kebijakan Privasi - PT Internet Mulia Untuk Negeri" />

      <main className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-orange-500 selection:text-white">
        {/* Sticky Header */}
        <Navbar />

        {/* Hero Header */}
        <section className="pt-32 pb-16 bg-[#0B1E3D] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-navy/60 to-orange-500/10" />
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <span className="text-orange-500 font-extrabold text-sm uppercase tracking-wider block">Privacy</span>
            <h1 className="text-4xl md:text-5xl font-black font-heading leading-tight">
              Kebijakan Privasi
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Terima kasih telah mengunjungi Website Nexa. Komitmen kami adalah melindungi dan menghormati privasi informasi pribadi Anda.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 space-y-10 leading-relaxed text-gray-700">
            
            {/* Intro */}
            <div className="space-y-4">
              <p>
                Terima kasih telah mengunjungi Website Nexa. Dengan mengakses dan menggunakan situs web ini, Anda dianggap telah menerima untuk terikat secara hukum dengan Ketentuan Penggunaan ini. Kami berkomitmen untuk melindungi dan menghormati privasi pengguna ("Anda") saat mengakses <a href="https://nexa.net.id/" className="text-orange-500 font-bold hover:underline">https://nexa.net.id/</a> ("Layanan Kami").
              </p>
              <p>
                Kebijakan Privasi ini memuat bagaimana Kami menggunakan informasi pribadi yang Kami kumpulkan dan/atau Anda berikan ("Informasi Pribadi"). Mohon membaca Kebijakan Privasi Kami dengan seksama sehingga Anda dapat memahami pendekatan dan cara Kami dalam menggunakan informasi tersebut.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 1. Informasi Pribadi Yang Dapat Kami Kumpulkan */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-navy flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full block" />
                Informasi Pribadi Yang Dapat Kami Kumpulkan
              </h2>
              <div className="space-y-3 pl-3">
                <p>
                  <strong>Informasi yang Anda berikan.</strong> Anda dapat memberikan informasi melalui formulir pada Layanan Kami maupun dengan berkorespondensi melalui telepon, surat elektronik, dan sebagainya. Informasi ini meliputi informasi yang Anda berikan ketika menghubungi Kami, berlangganan Layanan Kami, mencari produk, serta ketika Anda melaporkan masalah dengan Layanan Kami. Informasi yang Anda berikan dapat meliputi nama, alamat, alamat surat elektronik, nomor telepon, deskripsi pribadi dan data lainnya.
                </p>
                <p>
                  <strong>Informasi yang Kami kumpulkan.</strong> Untuk setiap kunjungan Anda ke Layanan Kami, maka Kami dapat mengumpulkan informasi yang telah Anda berikan berupa alamat, serta nomor telepon yang digunakan untuk menghubungi Anda.
                </p>
                <p>
                  <strong>Informasi yang Kami terima dari sumber lain.</strong> Kami dapat menerima informasi jika Anda menggunakan situs lain yang Kami operasikan atau layanan lain yang Kami sediakan. Kami juga bekerja sama dengan pihak ketiga (termasuk, namun tidak terbatas pada misalnya, mitra bisnis, sub-kontraktor dalam pelayanan teknis, jasa pembayaran) dan dapat menerima informasi dari mereka. Kami akan mengambil langkah-langkah dalam batas kewajaran untuk melakukan verifikasi terhadap informasi yang Kami dapatkan dari sumber lain sesuai dengan peraturan yang berlaku.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 2. Penggunaan Informasi Pribadi */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-navy flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full block" />
                Penggunaan Informasi Pribadi
              </h2>
              <p className="pl-3">
                Kami dapat menggunakan informasi pribadi yang dikumpulkan melalui situs Layanan kami untuk menghubungi Anda berkaitan dengan produk dan jasa yang ditawarkan oleh Kami dan sebaliknya untuk meningkatkan pengalaman Anda terhadap Kami. Informasi pribadi tidak akan dijual atau dialihkan dengan cara-cara yang melanggar peraturan perundang-undangan yang berlaku, kecuali bahwa Kami akan mengungkapkan informasi yang Kami kumpulkan kepada pihak pemerintah atau pihak yang berwenang lainnya jika dibutuhkan oleh hukum dan peraturan perundang-undangan yang berlaku.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 3. Pengungkapan Informasi Pribadi */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-navy flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full block" />
                Pengungkapan Informasi Pribadi
              </h2>
              <div className="pl-3 space-y-3">
                <p>
                  Kami dapat membagi atau menyingkap Data Pribadi dengan anggota kelompok usaha Kami, yang melingkupi cabang dan anak perusahaan, serta perusahaan induk utama dan anak perusahaannya. Kami dapat membagi Data Pribadi dengan pihak ketiga, termasuk:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base">
                  <li>Mitra bisnis dalam penyelenggaraan kontrak yang Kami laksanakan dengan mereka atau Anda.</li>
                  <li>Penyedia analisis dan mesin pencari yang membantu Kami untuk memperbaiki dan mengoptimasi Layanan Kami.</li>
                  <li>Kami dapat mengungkap informasi kepada pihak ketiga.</li>
                </ol>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 4. Penyimpanan Informasi Pribadi */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-navy flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full block" />
                Penyimpanan Informasi Pribadi
              </h2>
              <div className="pl-3 space-y-3">
                <p>
                  Seluruh informasi Pribadi yang Anda berikan kepada Kami disimpan di server yang aman. Dengan menyerahkan Informasi Pribadi Anda pada Layanan Kami, Anda menyetujui pengalihan, penyimpanan, serta pengolahan yang terjadi pada Layanan Kami. Kami akan mengambil langkah-langkah dalam batas kewajaran yang diperlukan untuk memastikan bahwa Informasi Pribadi tersebut diperlakukan dengan aman dan sesuai dengan Kebijakan Privasi serta peraturan yang berlaku.
                </p>
                <p>
                  Penyimpanan Informasi Pribadi milik Anda akan disimpan selama menggunakan layanan kami dan digunakan hanya terbatas untuk keperluan yang dibutuhkan.
                </p>
                <p className="text-sm text-gray-500 italic bg-gray-50 p-4 rounded-xl border border-gray-100">
                  Mohon untuk dapat diperhatikan bahwa transmisi informasi melalui internet tidak sepenuhnya aman. Meskipun demikian, Kami akan berusaha sebaik mungkin untuk melindungi Informasi Pribadi tersebut. Kami tidak bisa menjamin keamanan data yang dikirimkan ke Layanan Kami, risiko dari setiap transmisi menjadi tanggung jawab Anda. Begitu Kami menerima Informasi Pribadi Anda, Kami akan menggunakan prosedur yang ketat dan fitur keamanan untuk mencegah akses yang tidak diizinkan.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 5. Penghapusan Informasi Pribadi */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-navy flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full block" />
                Penghapusan Informasi Pribadi
              </h2>
              <p className="pl-3">
                Pengguna memiliki hak untuk mengajukan permohonan pengakhiran, penghapusan, penarikan data tentang informasi pribadi, Kami akan melakukan penghapusan nama, alamat, alamat surat elektronik, nomor telepon, deskripsi pribadi dan data lainnya dalam waktu 2 (dua) tahun.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 6. Hak Anda */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-navy flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full block" />
                Hak Anda
              </h2>
              <p className="pl-3">
                Anda dapat meminta kepada Kami untuk mengakses dan/atau mengoreksi Informasi Pribadi Anda yang berada dalam kepemilikan dan penguasaan Kami, dengan menghubungi Kami diperincian yang disediakan dibawah ini.
              </p>
              <p className="pl-3 text-sm text-gray-500">
                Layanan Kami dapat, dari waktu ke waktu, memuat link menuju dan dari situs-situs milik jaringan Mitra, dan afiliasi lainnya. Jika Anda mengikuti link ke salah satu situs tersebut, mohon perhatikan bahwa situs-situs tersebut memiliki Kebijakan Privasi mereka sendiri dan bahwa Kami tidak bertanggung jawab atau memiliki kewajiban apa pun atas kebijakan-kebijakan tersebut. Mohon periksa kebijakan-kebijakan tersebut sebelum Anda menyerahkan informasi apapun ke situs-situs tersebut.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 7. Kebijakan Cookies */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-navy flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full block" />
                Kebijakan Cookies
              </h2>
              <div className="pl-3 space-y-3">
                <p>
                  Ketika Anda menggunakan Layanan Kami, Kami dapat menempatkan sejumlah cookies pada browser Anda. Cookies mengandung informasi yang dipindahkan ke disk keras komputer Anda.
                </p>
                <p>
                  Cookies dapat digunakan untuk tujuan berikut: (1) mengaktifkan fungsi tertentu, (2) memberikan analisis, (3) menyimpan preferensi Anda; dan (4) memungkinkan pengiriman iklan dan pengiklanan berdasarkan perilaku. Beberapa cookies ini hanya akan digunakan jika Anda menggunakan fitur tertentu, atau memilih preferensi tertentu, sementara sebagian Cookies lain akan selalu digunakan.
                </p>
                <p className="text-sm text-gray-500">
                  Mohon perhatikan bahwa pihak ketiga (termasuk, misalnya, penyedia jasa eksternal seperti jasa analisis lalu lintas web) juga dapat menggunakan Cookies ini, di mana Kami tidak memiliki kendali. Cookies ini cenderung membuat Layanan Kami dan iklan yang ditampilkan di dalamnya lebih relevan dengan minat Anda, serta meningkatkan kinerja Layanan Kami.
                </p>
                <p>
                  Anda dapat menghapus Cookies dengan cara melakukan fungsi clear data pada web browser Anda yang memungkinkan Anda untuk menolak pengaturan seluruh atau sebagian Cookies. Akan tetapi, Anda mungkin tidak dapat mengakses seluruh atau sebagian Layanan Kami.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 8. Pengakuan Dan Persetujuan */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-navy flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full block" />
                Pengakuan Dan Persetujuan
              </h2>
              <p className="pl-3">
                Dengan mengakses halaman kami berarti Anda mengakui bahwa Anda telah membaca dan memahami Kebijakan Privasi ini dan menyetujui segala ketentuannya. Secara khusus, Anda setuju dan memberikan persetujuan kepada Kami untuk mengumpulkan, menggunakan, membagikan, mengungkapkan, menyimpan, mentransfer, atau mengolah Informasi Pribadi Anda sesuai dengan Kebijakan Privasi ini.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 9. Keamanan Data Pribadi Anda Dan Afiliasi */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-navy flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full block" />
                Keamanan Data Pribadi Anda Dan Afiliasi
              </h2>
              <p className="pl-3">
                Kerahasiaan Data Pribadi merupakan prioritas bagi Kami dan Afiliasi Kami. Kami akan senantiasa mengambil tindakan hukum yang layak, tindakan organisasi dan teknis yang layak untuk memastikan bahwa Data Pribadi Anda aman dan terlindungi. Setiap pemrosesan Data Pribadi Anda hanya akan dilakukan sesuai dengan Kebijakan Privasi ini dan ketentuan perundang-undangan yang berlaku.
              </p>
              <p className="pl-3 text-sm text-gray-500 italic bg-gray-50 p-4 rounded-xl border border-gray-100">
                Mohon untuk dapat diperhatikan bahwa transmisi informasi melalui internet tidak sepenuhnya aman. Meskipun demikian, Kami akan berusaha sebaik mungkin untuk melindungi Data Pribadi tersebut. Kami tidak bisa menjamin keamanan data yang dikirimkan ke Layanan Kami; risiko dari setiap transmisi menjadi tanggung jawab Anda. Begitu Kami menerima Data Pribadi Anda, Kami akan menggunakan prosedur yang ketat dan fitur keamanan untuk mencegah akses yang tidak diizinkan.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 10. Perubahan Dalam Kebijakan Privasi Kami */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-navy flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full block" />
                Perubahan Dalam Kebijakan Privasi Kami
              </h2>
              <p className="pl-3">
                PT. Internet Mulia Untuk Negeri berhak, atas kebijakannya sendiri, untuk mengubah, memodifikasi, menambah atau menghapus Kebijakan Privasi ini, kapan saja. Mohon kunjungi kembali halaman ini dari waktu ke waktu untuk melihat adanya perubahan. Jika Anda tetap mengakses layanan PT. Internet Mulia Untuk Negeri berarti Anda menerima dan menyetujui perubahan tersebut.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 11. Cara Menghubungi Kami */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-heading text-navy flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full block" />
                Cara Menghubungi Kami
              </h2>
              <p className="pl-3">
                Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini atau Anda ingin mendapatkan akses dan/atau melakukan koreksi terhadap Informasi Pribadi Anda, silahkan dapat menghubungi Kami melalui:
              </p>
              <div className="pl-3 flex flex-wrap gap-4 pt-2">
                <a href="mailto:support@nexa.net.id" className="px-5 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 transition-all">
                  ✉ support@nexa.net.id
                </a>
                <a href="mailto:app.smg@nexa.net.id" className="px-5 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 transition-all">
                  ✉ app.smg@nexa.net.id
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}

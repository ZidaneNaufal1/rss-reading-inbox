# Ruang Baca RSS

Inbox browser lokal untuk menggabungkan entri RSS/Atom dari file XML yang dipilih. Judul, tautan HTTP(S), status dibaca dan arsip disimpan dalam localStorage. Judul ditampilkan sebagai teks, bukan HTML.

## Mulai

Buka `index.html` di browser modern, lalu pilih file feed XML. Contoh sintetis tersedia di `examples/sample.xml`. Untuk tes logika gunakan Node 20+ dan `npm test`. Ekspor JSON membantu membuat cadangan; impor mengganti seluruh inbox setelah validasi dan konfirmasi.

## Batas versi awal

Tidak mengambil feed dari internet secara otomatis; unduh file XML sendiri. Karena tidak ada fetch, timeout jaringan belum berlaku. Hanya subset RSS/Atom; tautan relatif dan detail artikel tidak diproses. Maksimal 2 MB per file, 1.000 entri per feed, 2.000 entri pada inbox. Data dapat hilang saat data browser dihapus. Pengujian interaktif impor XML, aksesibilitas, dan kompatibilitas browser perlu diperluas. Dibuat dengan bantuan OpenAI Codex.

**English:** Local RSS/Atom XML file inbox with deduplication, read/archive flags and JSON backup. It does not fetch remote feeds.

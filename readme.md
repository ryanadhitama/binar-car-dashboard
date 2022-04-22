# Car Management Dashboard

## 🚀 How to run 

Berikut cara menjalankan project ini

1. Pertama, clone project ini.
2. Kedua, pastikan folder project sudah aktif pada terminal atau command line.
3. Ketiga, pastikan sequelize cli sudah terinstall secara global. Untuk instalasi sequelize, jalankan perintah `npm install -g sequelize-cli`.
4. Keempat, jalankan perintah `npm install` untuk menginstall semua package.
5. Kelima, duplicate file .env.example dengan nama .env dengan menjalankan perintah `cp .env.example .env`.
6. Selanjutnya, edit database konfigurasi `.env` baik itu nama database, user, dan password.
7. Kemudian, jalankan perintah `npm run init-db` untuk melakukan migrasi dan seeder table pada database.
8. Setelah itu, jalankan perintah `npm run dev` untuk menjalankan project ini pada browser.
9. Terakhir, buka link yang muncul pada terminal di browser Anda.
10. Happy Coding 😍

## 📡 Endpoints 

| Route         | Method   | Penggunaan                              |
| ------------- | -------- | --------------------------------------- |
| /             | `GET`    | Menampilkan halaman list car            |
| /car          | `GET`    | Menampilkan halaman list car            |
| /car/create   | `GET`    | Menampilkan form untuk membuat car baru |
| /car/:id/edit | `GET`    | Menampilkan form untuk mengedit car     |
| /api/sizes    | `GET`    | Memberikan semua data size              |
| /api/cars     | `GET`    | Memberikan semua data car               |
| /api/cars     | `POST`   | Memberikan data car baru                |
| /api/cars/:id | `GET`    | Memberikan data car berdasarkan ID      |
| /api/cars/:id | `PUT`    | Mengedit data car berdasarkan ID        |
| /api/cars/:id | `DELETE` | Menghapus data car berdasarkan ID       |
| /api/upload   | `POST`   | Mengupload gambar car                   |

## 📜 Directory Structure 
```
.
├── config
│   └── config.js
├── controllers
│   ├── api
│   │   ├── car.controller.js
│   │   ├── size.controller.js
│   │   └── upload.controller.js
│   └── car.controller.js
├── migrations
│   ├── 20220420121242-create-cars.js
│   └── 20220420121626-create-sizes.js
├── models
│   ├── cars.js
│   ├── index.js
│   └── sizes.js
├── public
│   ├── css
│   ├── img
│   ├── js
│   └── uploads
├── seeders
│   ├── 20220420121946-size-seeder.js
│   └── 20220420122003-cars-seeder.js
├── views
│   ├── layouts
│   │   └── dashboard.ejs
│   ├── pages
│   │   └── car
│   │       ├── form.ejs
│   │       └── index.ejs
│   └── partials
│       ├── head.ejs
│       ├── navbar.ejs
│       └── sidebar.ejs
├── .env
├── .env.example
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── readme.md
```
## 💾 ERD 

![Entity Relationship Diagram](public/img/erd.png)

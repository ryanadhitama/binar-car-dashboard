# Car Management Dashboard

## How to run

Berikut cara menjalankan project ini

1. Clone project ini.
2. Pastikan folder project sudah aktif pada terminal atau command line.
3. Duplicate file .env.example dengan nama .env dengan menjalankan perintah `cp .env.example .env`.
4. Pastikan sequelize cli sudah terinstall. Untuk instalasi sequelize, jalankan perintah `npm install -g sequelize-cli` pada terminal atau command line.
5. Jalankan `npm install` untuk menginstall package project ini pada terminal atau command line.

## Endpoints

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

## Directory Structure
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
## ERD

![Entity Relationship Diagram](public/img/erd.png)

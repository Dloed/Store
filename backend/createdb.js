const Database = require('better-sqlite3');
const path = require('path');
const dbPath = path.join(__dirname, '..', 'database', 'shop.db');

// Открываем базу данных
const db = new Database(dbPath, { verbose: console.log });

// Создаем таблицы
db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT NOT NULL,
    kind TEXT NOT NULL
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  )
`).run();

console.log('Таблицы успешно созданы');

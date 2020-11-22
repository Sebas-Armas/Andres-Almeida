CREATE TABLE IF NOT EXISTS marca(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT);
INSERT or IGNORE INTO marca VALUES (1, 'Ferrari');
INSERT or IGNORE INTO marca VALUES (2, 'Mazda');
INSERT or IGNORE INTO marca VALUES (3, 'Chevrolet');
INSERT or IGNORE INTO marca VALUES (4, 'Kia');
 
CREATE TABLE IF NOT EXISTS modelo (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, color TEXT, costo Decimal(18,2), anio INTEGER,  marcaId INTEGER);
INSERT or IGNORE INTO modelo (id, name, color, costo, anio, marcaId) VALUES (1, 'F12berlinetta', 'Rojo', 230000, 2012, 1);
INSERT or IGNORE INTO modelo (id, name, color, costo, anio, marcaId) VALUES (2, 'Superamerica', 'Rojo', 300000 , 2015, 1);
INSERT or IGNORE INTO modelo (id, name, color, costo, anio, marcaId) VALUES (3, 'CX-3', 'Azul', 23000 , 2015 , 2);
INSERT or IGNORE INTO modelo (id, name, color, costo, anio, marcaId) VALUES (4, 'B-2500', 'Negro', 10000 , 1999 , 2);
INSERT or IGNORE INTO modelo (id, name, color, costo, anio, marcaId) VALUES (5, 'Sail', 'Plomo', 15000, 2019, 3);
INSERT or IGNORE INTO modelo (id, name, color, costo, anio, marcaId) VALUES (6, 'Sportage','Rojo', 30000, 2020, 4);
----
-- phpLiteAdmin database dump (http://www.phpliteadmin.org/)
-- phpLiteAdmin version: 1.9.7.1
-- Exported: 8:20pm on July 11, 2022 (UTC)
-- database file: /var/www/html/dhumanidades/admin/DH/storage/data/cockpitdb.sqlite
----
BEGIN TRANSACTION;

----
-- Table structure for cockpit
----
CREATE TABLE `cockpit` ( id INTEGER PRIMARY KEY AUTOINCREMENT, document TEXT );

----
-- Data dump for cockpit, a total of 1 rows
----
INSERT INTO "cockpit" ("id","document") VALUES ('1','{"key":"api_keys","val":{"master":"be9b7e40959a6ff7a425128b47e550","special":[{"token":"9b49284e1a35ab05008aa2e89c6f3c","rules":"*","info":""}]},"_id":"147577ed376464af690003b1"}');

----
-- Table structure for singletons
----
CREATE TABLE `singletons` ( id INTEGER PRIMARY KEY AUTOINCREMENT, document TEXT );

----
-- Data dump for singletons, a total of 2 rows
----
INSERT INTO "singletons" ("id","document") VALUES ('2','{"key":"Calificadores","val":{"Valor":[{"label":"Excelente","value":"excelente"},{"label":"Bueno","value":"bueno"},{"label":"Suficiente","value":"suficiente"},{"label":"No satisfactorio","value":"no satisfactorio"}],"FODA":["Delimitación epistemológica del problema","Delimitación conceptual","Relaciones conceptuales","Aplicaciones conceptuales con lo empírico","Escritura, organización y formato del texto","Relación de las partes del texto","Uso de fuentes y documentos","Delimitación metodológica de la investigación","Construcción de método de análisis","Construcción de categorías de observación y análisis","Desarrollo del análisis","Disposición a contribuir al campo social","Influencia en la trayectoria del doctorado","Aporte social cognitivo, epistemológico o tecnológico"],"_mby":"f00a3d7a653330a9bd00026e","_by":"f00a3d7a653330a9bd00026e"},"_id":"26646e0736363589fc000258"}');
INSERT INTO "singletons" ("id","document") VALUES ('3','{"key":"CoordinadorU","val":{"user":{"_id":"868015f2303730af740001dd","link":"coordinador","display":"n\/a"},"_mby":"f00a3d7a653330a9bd00026e","_by":"f00a3d7a653330a9bd00026e"},"_id":"86b9ae96653136259a00011f"}');
COMMIT;

Привіт. Друга задачка, необовязкова, але буде плюсом, подивись до модуля zlib
//import { createGzip } from "zlib";
цей пакет містить готовий трансформ стрім що зіпує
Задача: за допомогою стрімів прочитати файл, заархівувати, записати архівний файл. 
І в зворотню сторону, розархівувати з архіва. Стріми потрібно об'єднати у один канал за допомогою методу .pipe()
хоча тут скоріше буде require "zlib", 
але постарайся зробити на es6 модулях(для цього потрібно буде створити проект з package.json, або файл програми має бути модулем, з розширенням .mjs)
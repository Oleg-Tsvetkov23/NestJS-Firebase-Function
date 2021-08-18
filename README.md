Домашнее задание к занятию «3.2 Cloud Functions, Hosting»

https://europe-west1-tsvetkov-project.cloudfunctions.net/api - URL с функциями Firebase.

Данные сохраняются в Firebase FireStore.

Каждый экземпляр книги имеет следующую структуру данных:

{
  id: "string",   -- код книги, внутреннее поле.
  title: "string",
  description: "string",
  authors: "string",
  favorite: "string",
  fileCover: "string"
}

Реализованы методы:

1. GET {{URL}}/api/book- список всех книг. Входных параметров нет.
2. GET {{URL}}/api/book/:id - данные книги по ее id.
3. POST {{URL}}/api/book - добавление книги в библиотеку. Входные параметры описаны выше, кроме поля id.
4. PUT {{URL}}/api/book/:id - редактирование данных книги по ее id. Входные параметры описаны выше, кроме поля id.
5. DELETE {{URL}}/api/book/:id - удаление книги по id.

Если поле «description» нет или оно пустое, функция добавляет поле «description» со значением: «Скоро здесь будет описание…»
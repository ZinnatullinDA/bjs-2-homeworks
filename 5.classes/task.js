// Задача 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }
  fix() {
    this.state = this.state * 1.5;
  }
  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// задача 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find((item) => item[type] === value) || null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex((item) => item.name === bookName);
    if (index === -1) {
      return null;
    }
    return this.books.splice(index, 1)[0];
  }
}

const library = new Library("Районная библиотека");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(
  new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138)
);
library.addBook(new Magazine("Мурзилка", 1924, 60));


library.addBook(
  new NovelBook("Джеймс Джойс", "Улисс", 1919, 730)
);

const oldBook = library.findBookBy("releaseDate", 1919);
console.log(`Нашли книгу 1919 г.: ${oldBook ? oldBook.name : "ничего не нашли"}`);

console.log("Книг в фонде ДО выдачи:", library.books.length); // 5
const issued = library.giveBookByName("Улисс");
console.log("Книг в фонде ПОСЛЕ выдачи:", library.books.length); // 4
console.log("Выдана книга:", issued.name);

issued.state = 40;        
console.log("Состояние после повреждения:", issued.state);

issued.fix();               
console.log("Состояние после ремонта:", issued.state);

console.log("Пытаемся вернуть книгу…");
library.addBook(issued);

const backInLibrary = library.findBookBy("name", "Улисс");
console.log(
  backInLibrary
    ? `Книга успешно вернулась, текущее состояние: ${backInLibrary.state}`
    : "Книга не была принята — слишком плохое состояние."
);


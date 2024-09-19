// 1.  Управление пользователями и администраторами
// Условие:
// Создайте класс User, который имеет следующие свойства:
// name — имя пользователя.
// email — email пользователя.
// role — роль пользователя (по умолчанию user).

// Добавьте методы:
// login(), который выводит сообщение "Пользователь [name] вошел в систему".
// logout(), который выводит сообщение "Пользователь [name] вышел из системы".

// Создайте класс Admin, который наследует User и добавляет следующие методы:
// deleteUser(user), который выводит сообщение "Пользователь [name] был удален администратором [admin_name]".
// Создайте несколько объектов классов User и Admin.

// Ожидаемый результат:
// Объект класса User может логиниться и выходить из системы.
// Объект класса Admin может удалять пользователей и выполнять те же действия, что и обычный пользователь.

class User {
    constructor(name, email, role){
        this.name = name;
        this.email = email;
        this.role = role;
    }

    login(){
        console.log(`Пользователь ${this.name} вошел в систему.`);
        return this;
    }

    logout(){
        console.log(`Пользователь ${this.name} вышел из системы.`);
        return this;
    }
}

class Admin extends User {
    constructor(name, email, role){
        super(name, email, role);
    }

    deleteUser(user){
        console.log(`Пользователь ${user.name} был удален администратором ${this.name}.`);
    }

}

// let kaplan = new User('Kaplan', 'kaplant@mail.com', 'user');
// let admin = new Admin('Json Statham', 'hhh', 'admin');

// kaplan.login()
// kaplan.logout();
// admin.deleteUser(kaplan);
// console.log(kaplan);


// 2. Кассовый аппарат
// Условие:
// Создайте класс Product, который будет представлять товар с характеристиками:
// name — название товара.
// price — цена товара.

// Создайте класс ShoppingCart, который будет представлять корзину покупок. Этот класс должен иметь следующие методы:
// addProduct(product, quantity) — добавляет товар в корзину.
// removeProduct(product) — удаляет товар из корзины.
// getTotalPrice() — возвращает общую стоимость всех товаров в корзине.
// checkout() — выводит список всех товаров и общую сумму к оплате, затем очищает корзину.

// Создайте несколько объектов класса Product, добавьте их в корзину и рассчитайте итоговую сумму покупок.

// Ожидаемый результат:
// Можно добавлять и удалять товары из корзины.
// Корзина корректно рассчитывает общую стоимость товаров.
// Метод checkout() выводит итоговый список покупок и очищает корзину.


class Product{
    constructor(name, price)
    {
        this.name = name
        this.price = price
    }
}

    
class ShoppingCart{
    constructor(){
        this.products = [];
    }


    addProduct(product){
        this.products.push(product)
    }

    removeProduct(product){
        let index = this.products.indexOf(product)
        this.products.splice(index, 1)
    }

    getTotalPrice(){
        let sum = 0
        for (let i = 0; i < this.products.length; i++) {
            sum += this.products[i].price;
        }
        return sum;
    }

    checkout(){
        console.log("Продукты:")
        for (let i = 0; i < this.products.length; i++) {
            console.log("-- " + this.products[i].name)            
        }
        console.log("Сумма: " + this.getTotalPrice())
        this.products = []
    }
}
    

// let pr1 = new Product('product1', 1);
// let pr2 = new Product('product2', 2);
// let pr3 = new Product('product3', 3);
// let cart = new ShoppingCart();
// cart.addProduct(pr1);
// cart.addProduct(pr2);
// cart.addProduct(pr3);
// cart.checkout();
// console.log("Корзина: " + cart.products);


// 3. Библиотека
// Условие:
// Создайте класс Book, который будет представлять книгу с такими свойствами:
// title — название книги.
// author — автор книги.
// pages — количество страниц.

// Создайте класс Library, который управляет коллекцией книг. Этот класс должен иметь следующие методы:
// addBook(book) — добавляет книгу в библиотеку.
// findBooksByAuthor(author) — возвращает все книги данного автора.
// listAllBooks() — выводит список всех книг в библиотеке.

// Создайте класс LibraryUser, который может:
// Брать книгу на время (borrowBook(book)).
// Возвращать книгу в библиотеку (returnBook(book)).
// Каждый пользователь может одновременно иметь не более 3 книг. Если он пытается взять больше — программа должна выдавать ошибку.

// Ожидаемый результат:
// Пользователь может брать книги из библиотеки и возвращать их.
// Можно искать книги по автору и выводить список всех доступных книг.
// Ограничение на количество взятых книг работает корректно.

class Book{
    constructor(title, author, pages){
        this.title = title
        this.author = author
        this.pages = pages
    }
}

class Library{
    constructor(){
        this.books = []
    }

    addBook(book){
        this.books.push(book)
    }

    getBook(book)
    {
        let index = this.books.indexOf(book)
        if(index == -1) return null
        
        book = this.books[index]
        this.books.splice(index, 1)
        
        return book
    }

    findBooksByAuthor(author)
    {
        return this.books.filter(b => b.author == author)
    }

    listAllBooks(){
        console.log("Все книги:")
        this.books.map(b => console.log("-- " + b.title))
    }
}

class LibraryUser{
    max_book_count = 3

    constructor(name, library){
        this.name = name
        this.library = library
        this.books = []
    }

    borrowBook(book){
        console.log("0000 " + this.max_book_count)
        if(this.books.length >= this.max_book_count)
            throw new Error(`Пользователь ${this.name} больше не может брать книги.`)

        let library_book = this.library.getBook(book)
        if(library_book == null)
            throw new Error(`Пользователь ${this.name} не смог взять книгу. В библиотеке нет необходимой книги.`)
        console.log(`Пользователь ${this.name} взял книгу ${library_book.title}.`)
        this.books.push(library_book)
    }

    returnBook(book){
        let bookIndex = this.books.indexOf(book)
        if(bookIndex == -1)
            throw new Error(`Пользователь ${this.name} не брал книгу "${book.title}".`)
        this.books.splice(bookIndex, 1)
        this.library.addBook(book)
        console.log(`Пользователь ${this.name} вернул книгу ${book.title}.`)
    }
}

// let book1 = new Book("book1", "authorA", 300)
// let book2 = new Book("book2", "authorA", 22)
// let book3 = new Book("book3", "authorB", 133)
// let book4 = new Book("book4", "authorC", 444)
// let library = new Library()
// library.addBook(book1)
// library.addBook(book2)
// library.addBook(book3)
// library.addBook(book4)
// let user = new LibraryUser("Kaplan", library)
// library.listAllBooks()
// bookByAuthor = library.findBooksByAuthor("authorA")
// console.log("Книги автора authorA:")
// for (let i = 0; i < bookByAuthor.length; i++)
//     console.log("-- " + bookByAuthor[i].title);

// user.borrowBook(book1)
// user.borrowBook(book2)
// user.borrowBook(book3)
// user.returnBook(book3)

// user.borrowBook(book3)
// user.borrowBook(book4) // ERROR


// 4. Задача: Система онлайн-заказов
// Условие:
// Создайте классы для системы онлайн-заказов:
// Customer — представляет покупателя с именем и email.
// Order — представляет заказ и содержит:
// Список товаров (объекты класса Product).
// Сумму заказа.
// Покупателя, оформившего заказ (объект класса Customer).

// Создайте класс Product, который имеет свойства:
// name — название товара.
// price — цена товара.

// Класс Order должен иметь методы:
// addProduct(product, quantity) — добавляет товар в заказ.
// calculateTotal() — рассчитывает итоговую сумму заказа.
// printOrder() — выводит информацию о заказе: покупатель, товары, общая стоимость.
// Создайте несколько покупателей, товары, оформите несколько заказов и выведите информацию о каждом заказе.

class Customer{
    constructor(name, email)
    {
        this.name = name
        this.email = email
    }
}

class Order{
    constructor(custromer)
    {
        this.custromer = custromer
        this.products = [] // container Prodcut and quantity
    }

    addProduct(product, quantity){
        this.products.push({"product" : product, "quantity" : quantity})
        return this
    }

    calculateTotal(){
        let sum = 0
        for (let i = 0; i < this.products.length; i++)
            sum += this.products[i].product.price * this.products[i].quantity

        return sum
    }

    printOrder(){
        console.log("Информация о заказе")
        console.log("Покупатель: " + this.custromer.name)
        console.log("Товары:")
        for (let i = 0; i < this.products.length; i++) {
            console.log("-- " + this.products[i].product.name)
        }
        console.log("Сумма: " + this.calculateTotal())
    }
}


product1 = new Product("product1", 1)
product2 = new Product("Product2", 2)
product3 = new Product("Product3", 3)
product4 = new Product("Product4", 4)
product5 = new Product("Product5", 5)

customer1 = new Customer("customer1", "customer1@mail.ru")
customer2 = new Customer("customer2", "customer2@mail.ru")

order1 = new Order(customer1)
order1.addProduct(product1, 1).addProduct(product2, 2).addProduct(product3, 3)
console.log("Order1")
order1.printOrder()

order2 = new Order(customer2)
order2.addProduct(product4, 4).addProduct(product5, 5)
console.log("Order2")
order2.printOrder()


// 5. Иерархия домашних животных
// Условие:
// Создайте абстрактный класс Pet, который будет представлять домашнее животное с методами:
// eat() — выводит сообщение "Животное ест".
// makeSound() — метод, который должен быть переопределен в классах-наследниках.
// Создайте классы Dog и Cat, которые наследуют Pet.

// Переопределите метод makeSound() для каждого класса:
// Для Dog — выводит "Собака лает".
// Для Cat — выводит "Кошка мяукает".
// Добавьте метод sleep() для каждого питомца, который выводит сообщение о том, что питомец спит.

// Создайте объекты для каждого класса и вызовите методы eat(), makeSound() и sleep().

// Ожидаемый результат:
// Объекты классов Dog и Cat корректно переопределяют метод makeSound().
// Методы eat() и sleep() работают для каждого питомца.

class Pet{
    constructor(){
        if(this.constructor == Pet) {
            throw new Error("Class is of abstract type and can't be instantiated");
        };
    }

    eat(){
        console.log(`Животное ${this.constructor.name} ест`)
    }

    makeSound(){
        throw new Error('Method \'makeSound()\' must be implemented.');
    }

    sleep()
    {
        console.log(`Питомец ${this.constructor.name} спит`)
    }
}

class Dog extends Pet{
    makeSound(){
        console.log("Собака лает")
    }
}

class Cat extends Pet{
    makeSound(){
        console.log("Кошка мяукает")
    }
}

// let cat = new Cat()
// let dog = new Dog()

// cat.eat()
// dog.eat()
// cat.makeSound()
// dog.makeSound()
// cat.sleep()
// dog.sleep()

// pet = new Pet() // ERROR

// 6. Математические выражения
// Условие:
// Создайте класс Expression, представляющий математическое выражение с двумя числами и операцией (например, сложение или умножение). Этот класс должен содержать методы:
// evaluate() — возвращает результат выражения.
// toString() — возвращает строковое представление выражения, например, "3 + 5 = 8".

// Создайте подклассы для различных математических операций:
// Addition для сложения.
// Subtraction для вычитания.
// Multiplication для умножения.
// Division для деления (с проверкой деления на ноль).
// Создайте несколько объектов выражений и выведите результаты их вычислений.

// Ожидаемый результат:
// Каждый объект правильно вычисляет математическое выражение.
// Метод toString() корректно выводит информацию в формате "a op b = result".


class Expression{
    constructor(a, b){
        if(this.constructor == Expression) {
            throw new Error("Class is of abstract type and can't be instantiated");
        };
        
        this.a = a
        this.b = b
    }

    evaluate(){
        throw new Error('Method \'evaluate()\' must be implemented.');
    }

    toString(){
        throw new Error('Method \'toString()\' must be implemented.');
    }
}

class Addition extends Expression{
    evaluate(){
        return this.a + this.b
    }

    toString(){
        return `${this.a} + ${this.b} = ${this.evaluate()}`
    }
}

class Subtraction extends Expression{
    evaluate(){
        return this.a - this.b
    }

    toString(){
        return `${this.a} - ${this.b} = ${this.evaluate()}`
    }
}

class Multiplication extends Expression{
    evaluate(){
        return this.a * this.b
    }

    toString(){
        return `${this.a} * ${this.b} = ${this.evaluate()}`
    }
}

class Division extends Expression{
    evaluate(){
        if(this.b == 0)
            throw new Error("b не должен быть равен нулю")
        return this.a / this.b
    }

    toString(){
        return `${this.a} / ${this.b} = ${this.evaluate()}`
    }
}


// add = new Addition(1, 2)
// console.log(add.toString())
// sub = new Subtraction(1, 2)
// console.log(sub.toString())
// mul = new Multiplication(5, 2)
// console.log(mul.toString())
// div = new Division(4, 2)
// console.log(div.toString())
// div = new Division(4, 0)
// console.log(div.toString()) //Error
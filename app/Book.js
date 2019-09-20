class Book {
  constructor(title, author, quantity) {
    this.title = title;
    this.author = author;
    this.quantity = quantity;
  }
  addStock(num) {
    return num < 0 ? this.quantity : this.quantity += num;
  }
  removeStock(n){
    if(n < 0){
      return this.quantity;
    }
    let subtr = this.quantity -= n;
    return subtr < 0 ? this.quantity = 0 : subtr;
  }
 }
 
 

module.exports = Book;

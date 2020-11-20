let autoIncrement = 0;

class Category {
  constructor(id, title, color) {
    if (id !== null) {
      this.id = id;
    } else {
      this.id = ++autoIncrement;
    }
    this.title = title;
    this.color = color;
  }
}

export default Category;

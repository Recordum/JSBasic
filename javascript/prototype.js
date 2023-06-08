function Person(name) {
    this.name = name;
  }
  
  let foo = new Person('Lee');
  
  console.dir(Person); // prototype 프로퍼티가 있다.
  console.dir(foo);    // prototype 프로퍼티가 없다.
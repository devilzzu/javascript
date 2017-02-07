class Car {
  constructor({title}){
    this.title = title;
  }
  drive() {
    // return 'vroom';
    console.log('vroom');
  }
}

const car = new Car({title:'Hyundai'});
car;
car.drive();

class Hyundai extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  autoDrive() {
    // return 'wait 5years';
    console.log('wait 5years');
  }
}

const hyun = new Hyundai({title:'New H', color:'red'});
hyun;
hyun.drive();
hyun.autoDrive();
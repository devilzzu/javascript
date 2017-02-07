/*
Game Classes

You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 

Initialize the Monster's health to 100.
The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster

Subclassing Monsters

Now that you have a monster created, create a subclass of the Monster called Snake.  

The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
The instance of Snake that is passed in should have their health deducated by 10*/

// Monster Game
class Monster {
  constructor(options){
      this.name = options.name;
      // health는 100으로 초기화 되어있다.
      this.health = 100;
  }
}

// Monster 게임의 subclass Snake 
class Snake extends Monster {
  // bite 메소드는 Snake class의 인스턴스를 매개변수로 받아 
  // health값을 -10 한다. 
  bite(snake) {
      return snake.health -= 10;
  }
}

let snake = new Snake({name: 'snakeya'});
snake;
// snake가 snake를 bite한다. 
snake.bite(snake); // 90
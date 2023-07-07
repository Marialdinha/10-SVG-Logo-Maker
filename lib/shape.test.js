const {Circle, Square, Triangle} = require("./shape");
let color;

// Circle
describe('Circle', () => {
    it('renders correctly', () => {
        const Shape = new Circle();
        color = "blue"
        Shape.setColor(color);
        expect(Shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />`);
      });
  });

// Square
describe('Square', () => {
    it('renders correctly', () => {
        const Shape = new Square();
        color = "blue"
        Shape.setColor(color);
        expect(Shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}" />`);
      });
  });

  // Triangle
describe('Triangle', () => {
    it('renders correctly', () => {
        const Shape = new Triangle();
        color = "blue"
        Shape.setColor(color);
        expect(Shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150, 0"  fill="${color}" />`);
      });
  });
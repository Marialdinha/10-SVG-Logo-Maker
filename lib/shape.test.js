const {Circle, Square, Triangle} = require("./lib/shape");
let color;

// Circle
describe('Circle', () => {
    test('renders correctly', () => {
        const Shape = new Circle();
        color =('blue')
        Shape.setColor(color);
        expect(Shape.render()).toEqual(`<circle cx="50" cy="50" r="40" fill=${color} />`);
      });
  });
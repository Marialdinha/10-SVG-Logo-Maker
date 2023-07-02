
// Parent Class named Shape
class Shape{
setColor(color){
    this.color=color
}   
}

// Child Class named Circle
class Circle extends Shape{
    render(){
        return `<circle cx="50" cy="50" r="40" fill=${this.color} />`;
    }
}

// Child Class named Triangle
class Triangle extends Shape{
    render(){
        return `<polygon points="200,10 250,190 160,210" style="fill:${this.color} />`;
    }
}

// Child Class named Square
class Square extends Shape{
    render(){
        return `<rect width="100" height="100" style="fill:${this.color}" />`;
    }
}

// Exporting classes
module.exports = {Circle, Triangle,Square};
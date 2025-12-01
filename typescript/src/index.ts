import { Renderer } from "./renderer.js"
import { Shape, rectangle } from "./shapes/rectangle.js";
import { square } from "./shapes/square.js"
import { circle } from "./shapes/circle.js"

const rec: Shape = rectangle(2, 3)
const squ: Shape = square(3)
const cir: Shape = circle(3)

const renderer = new Renderer()
renderer.draw()

renderer.setShape(squ)
renderer.draw()

renderer.setShape(cir)
renderer.draw()


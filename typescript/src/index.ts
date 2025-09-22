import { newRenderer } from "./renderer.js"
import { Shape, rectangle } from "./shapes/rectangle.js";

const rec: Shape = rectangle(2, 3)
const renderer = newRenderer(rec)
renderer.draw();
import { Shape } from "./shapes/shape.js";

function newRenderer(shape: Shape) {
    return {
        draw() {
            const area: number = shape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }
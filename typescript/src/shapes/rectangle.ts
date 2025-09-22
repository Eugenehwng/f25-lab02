import { Shape } from "./shape.js";

function rectangle(width: number, height: number): Shape {
    return {
        computeArea: function (): number {
            return width * height
        }
    }
}

export { Shape, rectangle }

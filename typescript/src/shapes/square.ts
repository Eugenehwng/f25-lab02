import { Shape } from "./shape.js";

function square(sideLen: number): Shape {
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { Shape, square }
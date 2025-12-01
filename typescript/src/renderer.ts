import { Shape } from "./shapes/shape.js";

export class Renderer {
    private shape: Shape | null;

    constructor(shape?: Shape) {
        this.shape = shape ?? null; 
    }

    setShape(shape: Shape): void{
        this.shape = shape;
    } 

    draw(): void{
        if (this.shape === null) {
            console.log("no shape set");
            return;
        }
        const area: number = this.shape.computeArea();
        console.log("shape drawn \n", "Its area is " + area);
    }
}
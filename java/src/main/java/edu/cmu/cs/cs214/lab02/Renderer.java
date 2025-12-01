package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Shape;

public class Renderer {
    private Shape shape;
    
    Renderer() {
        this.shape = null;
    }

    Renderer(Shape shape) {
        this.shape = shape;
    }

    public void setShape(Shape shape) {
        this.shape = shape;
    }

    void draw() {
        if (this.shape == null) {
            System.out.println("No shape set");
            return;
        }
        
        double area = shape.getArea();

        // assume implementation

        System.out.println("Shape printed\n" + "Its area is " + area);
    }
}

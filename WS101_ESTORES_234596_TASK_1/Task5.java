class Rectangle {
    double length;
    double width;

    double calculateArea() {
        return length * width;
    }
}

public class Task5 {

    public static void main(String[] args) {
        Rectangle v1 = new Rectangle();
        v1.length = 5;
        v1.width = 3;

        System.out.println("Area of Rectangle 1: " + v1.calculateArea());

        Rectangle v2 = new Rectangle();
        v2.length = 10;
        v2.width = 4;

        System.out.println("Area of Rectangle 2: " + v2.calculateArea());

    }
}
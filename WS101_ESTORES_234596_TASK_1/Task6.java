import java.util.ArrayList;
import java.util.Scanner;

class Product {
    String name;
    double price;

    Product(String name, double price) {
        this.name = name;
        this.price = price;
    }
}

public class Task6 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // list of products
        ArrayList<Product> products = new ArrayList<>();
        products.add(new Product("Keyboard", 50.00));
        products.add(new Product("Mouse", 30.10));
        products.add(new Product("Monitor", 65.00));
        products.add(new Product("Headset", 25.50));
        products.add(new Product("Webcam", 70.00));

        System.out.print("Enter a price: ");
        double userPrice = input.nextDouble();

        long count = products.stream()
                .filter(p -> p.price > userPrice)
                .count();

        System.out.println("Products more expensive than your price: " + count);
    }
}
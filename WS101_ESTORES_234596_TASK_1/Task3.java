import java.util.Scanner;

public class Task3 {

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int[] numbers = new int[5];
        int sum = 0;
         System.out.println("Enter 5 numbers: ");
         for (int i = 0; i<5;i++){
            numbers[i]= sc.nextInt();
         } 
         for (int num : numbers){
            sum+=num;
         }
         double average = (double)sum/numbers.length;

         System.out.println("Sum =" + sum);
         System.out.println("Average = " + average);

         sc.close();
    }
}

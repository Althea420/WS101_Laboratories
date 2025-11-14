import java.util.Scanner;

public class Task4 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a word: ");
        String s = sc.nextLine();

        String reversed = new StringBuilder(s).reverse().toString();

        if (s.equalsIgnoreCase(reversed)){
            System.out.println(s + " is a palindrome.");
        }else{
            System.out.println(s + " is a palindrome.");
        }
        
        sc.close();
        }
    }

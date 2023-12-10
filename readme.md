public class Solution {

    
    public static void main(String[] args){
        

       Scanner input = new Scanner(System.in);
        int N;
        N = input.nextInt();


        if( 1 <= N && N <= 100){
            if (N%2!=0  || N%2==0 && (6>=N && N<=20)) {
           System.out.println("Weird");
           }else if(N%2 == 0 && N>20){
               System.out.println("Not Weird");
    }else if(N%2 == 0 && (2>=N && N<=5)){
                   System.out.println("Not Weird");
                   }else{
                       System.out.println("Enter a valid number");
                   }
               
        }
       
                   
        
        
    }
}
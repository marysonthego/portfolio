// import java.util.*;
// import java.lang.*;
// import java.io.*;
// import java.math.*;
// public class Main {

//     public static void main (String[] args) throws java.lang.Exception {
//         Scanner kb = new Scanner(System.in);
//         int test_cases = kb.nextInt();
//         for(int cs = 1; cs <= test_cases; cs++){
//             int n = kb.nextInt();
//              int a[] = new int[n];
//             for(int i = 0; i < n; i++){
//                 a[i] = kb.nextInt();
//             }
//             findZigZagSequence(a, n);
//         }
//    }

//     public static void findZigZagSequence(int [] a, int n){
//         Arrays.sort(a);
//         //    0  1  2  3  4  5  6
//         //a = 1, 2, 3, 4, 5, 6, 7     n=7
//         //             7        4
//         //             4        4
//         //             7        4
//         //             7  5  6  4

//         int mid = (n - 1)/2;          //mid = (7-1)/2 = 3
//         //
//         int temp = a[mid];            //temp = a[3] = 4

//         a[mid] = a[n - 1];            //a[3] = a[7-1] = 7

//         a[n - 1] = temp;              //a[6] = temp = 4

//         int st = mid;                 //st = 3

//         int ed = n - 1;               //ed = 6

//         while(st <= ed){

//             temp = a[st];             //temp = a[3] = 7
//                                       //temp = a[4] = 5

//             a[st] = a[ed];            //a[3] = a[6] = 4
//                                       //a[4] = a[5] = 6

//             a[st] = temp;             //a[3] = temp = 7
//                                       //a[4] = temp = 5

//             a[ed] = temp;             //a[6] = temp = 7
//                                       //a[5] = temp = 5

//             st = st + 1;              //st = 4
//                                       //st = 5

//             ed = ed - 1;              //ed = 5
//                                       //ed = 4
//         }
//         for(int i = 0; i < n; i++){
//             if(i > 0) System.out.print(" ");
//             System.out.print(a[i]);
//         }
//         System.out.println();
//     }
// }

//working
public static void findZigZagSequence(int [] a, int n){
  Arrays.sort(a);
  int mid = (n - 1)/2;
  int temp = a[mid];
  a[mid] = a[n - 1];
  a[n - 1] = temp;

  int st = mid + 1;
  int ed = n - 2;
  while(st <= ed){
      temp = a[st];
      a[st] = a[ed];
      a[ed] = temp;
      st = st + 1;
      ed = ed - 1;
  }
  for(int i = 0; i < n; i++){
      if(i > 0) System.out.print(" ");
      System.out.print(a[i]);
  }
  System.out.println();
}
}


/*  public static void findZigZagSequence(int [] a, int n){
        Arrays.sort(a);
        int mid = (n + 1)/2;
        int temp = a[mid];
        a[mid] = a[n - 1];
        a[n - 1] = temp;

        int st = mid + 1;
        int ed = n - 1;
        while(st <= ed){
            temp = a[st];
            a[st] = a[ed];
            a[ed] = temp;
            st = st + 1;
            ed = ed + 1;
        }
        for(int i = 0; i < n; i++){
            if(i > 0) System.out.print(" ");
            System.out.print(a[i]);
        }
        System.out.println();
    }
}*/




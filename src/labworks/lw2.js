export let lw2 = {
  numer: "2",
  theme: "Масиви в мові програмування Java.",
  aim: "Ознайомлення з масивами та використання основних методів їх обробки в мові програмування Java. Здобуття навичок у використанні масивів в мові програмування Java.",
  task: "Створити клас, який складається з виконавчого методу, що виконує дію з матрицею(ями) (п.2) із зазначеним типом елементів (п.3) та дію із результуючою матрицею С (п.4). Вивести на екран результати першої та другої дій.",
  imgsrc: "",
  labcode:
`
import java.util.Scanner;
import java.util.Random;
/** Lab2
 *  Karpeka Dmytrii
 * 
 *  variant == 9212
 *  C5  = 2 -- C = A + B
 *  C7  = 0 -- double
 *  C11 = 5 -- Обчислити суму найбільших елементів
 *             в рядках матриці з непарними номерами
 *             та найменших елементів в рядках матриці з парними номерами
 */

public class App {
    public static void main(String[] args) throws Exception {
        final Scanner sc = new Scanner(System.in);

        System.out.println("Input number of rows in matrixes:");
        int rows = sc.nextInt();
        System.out.println("Input number of columns in matrixes:");
        int columns = sc.nextInt();

        double[][] A = new double[rows][columns];
        double[][] B = new double[rows][columns];
        double[][] C = new double[rows][columns];

        // gap of random generation of doubles
        int min = 0;
        int max = 100;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                // Random generation of matrixes A and B
                Random rand = new Random();
                A[i][j] = min + (max - min) * rand.nextDouble();
                B[i][j] = min + (max - min) * rand.nextDouble();

                // Sum of matrixes
                C[i][j] = A[i][j] + B[i][j];
            } 
        }

        double sumMaxes = 0;
        double sumMins = 0;
        double element;

        for (int i = 0; i < rows; i++) {
            // Alternative alorithm
            // element = C[i][0];
            // for (int j = 1; j < columns; j++) {
            //     if (i % 2 == 0) {
            //         if (C[i][j] < element) {
            //             element = C[i][j];
            //         } 
            //     } else {
            //         if (C[i][j] > element) {
            //             element = C[i][j];
            //         }
            //     }
            // }
            // if (i % 2 == 0) {
            //     sumMins += element;
            // } else {
            //     sumMaxes += element;
            // }

            
            element = C[i][0];
            if (i % 2 == 0) {
                for (int j = 1; j < columns; j++) {
                    if (C[i][j] < element) {
                        element = C[i][j];
                    }
                }
                sumMins += element;
            } else {
                for (int j = 1; j < columns; j++) {
                    if (C[i][j] > element) {
                        element = C[i][j];
                    }
                }
                sumMaxes += element;
            }
        }
 
        printMatrix("C", C);
        System.out.println("Сума найменших в парних: " + sumMins);
        System.out.println("Сума найбільших в непарних: " + sumMaxes);
    }

    public static void printMatrix(String matrixName, double[][] matrix) {
        System.out.println(matrixName + ":");
        for (int i = 0; i < matrix.length; i++) {
            System.out.print("[ ");
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.print("]\\n");
        }
    }
}
`,
  commentary: `
В лабораторній роботі було використано рандомізовану генерацію значень для матриці розмірність якої задає користувач.
Серед таких рандомізованих значень найбільша увага приділялась найменшим елементам в кожному парному рядку та найбільшим елементам в непарних рядках, адже
на них зав'язувалось основне завдання лабораторної.
`,
  conclusions: `
Було проведено роботу із багатовимірними масивами (матрицями), завдання вимагало алгоритмічности мислення для розв'язку поставленої задачі.  
`
}
(this["webpackJsonpjava-book"]=this["webpackJsonpjava-book"]||[]).push([[0],{17:function(n,e,t){"use strict";t.r(e);var i=t(1),s=t.n(i),a=t(10),c=t.n(a),r=(t(8),t(9),t(11)),o=t(2),l=t(3),m=t(4),j=t(6),u=t(5),b=t(0),d=function(n){Object(j.a)(t,n);var e=Object(u.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{children:["\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u0430 \u0440\u043e\u0431\u043e\u0442\u0430 \u2116",this.props.numer]}),Object(b.jsxs)("h4",{children:[Object(b.jsx)("b",{children:"\u0422\u0435\u043c\u0430"}),": ",this.props.theme]}),Object(b.jsxs)("h4",{children:[Object(b.jsx)("b",{children:"\u041c\u0435\u0442\u0430"}),": ",this.props.aim]}),Object(b.jsxs)("h4",{children:[Object(b.jsx)("b",{children:"\u0417\u0430\u0432\u0434\u0430\u043d\u043d\u044f"}),": ",this.props.task]}),this.props.imgsrc?Object(b.jsx)("img",{src:this.props.imgsrc,alt:"Function in laboratory"}):Object(b.jsx)("p",{children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c \u0443 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u0456 \u043d\u0435 \u0431\u0443\u043b\u043e"}),Object(b.jsx)("h4",{children:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f:"}),Object(b.jsx)("div",{className:"code-div",children:Object(b.jsx)("pre",{className:"code-block",children:this.props.labcode})}),Object(b.jsx)("h4",{children:"\u041f\u043e\u044f\u0441\u043d\u0435\u043d\u043d\u044f:"}),Object(b.jsx)("p",{children:this.props.commentary}),Object(b.jsx)("h4",{children:"\u0412\u0438\u0441\u043d\u043e\u0432\u043a\u0438:"}),Object(b.jsx)("p",{children:this.props.conclusions})]})}}]),t}(s.a.Component),h=d,p={numer:"1",theme:"\u041e\u0441\u043d\u043e\u0432\u043d\u0456 \u0442\u0438\u043f\u0438 \u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0438 \u043c\u043e\u0432\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f Java",aim:"\u041e\u0437\u043d\u0430\u0439\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0437 \u043e\u0441\u043d\u043e\u0432\u043d\u0438\u043c\u0438 \u0442\u0438\u043f\u0430\u043c\u0438 \u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430\u043c\u0438 \u0432 Java. \u0417\u0434\u043e\u0431\u0443\u0442\u0442\u044f \u043d\u0430\u0432\u0438\u0447\u043e\u043a \u0443 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u0456 \u0442\u0438\u043f\u0456\u0432 \u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0456\u0432 \u0432 Java.",task:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043a\u043b\u0430\u0441, \u044f\u043a\u0438\u0439 \u0441\u043a\u043b\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0437 \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0447\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0443, \u0449\u043e \u0432\u0438\u043a\u043e\u043d\u0443\u0454 \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0444\u0443\u043d\u043a\u0446\u0456\u0457",imgsrc:"https://asdjonok.github.io/OOP-SITE/pages/1/formula.png",labcode:'\npublic class App {\n    public static void main(String[] args) {\n        int variant = 9212;\n\n        /**\n         * c2 = 0 -- o1 = +\n         * c3 = 2 -- c = 2\n         * c5 = 2 -- o2 = %\n         * c7 = 0 -- type of i and j = byte\n         */\n        \n         // type of data "byte" can be number from -128 to 127 (inclusive)\n        byte a = 1;\n        byte b = 1;\n    \n        byte n = 1;\n        byte m = 2;\n\n        int c = 2;\n\n        float result = 0;\n\n        if (n < a || m < b || (a <= -2 && n >= -2) || (b <= 0 && m >= 0)) {\n            System.out.println("There is a problem in input data!");\n        } else {\n            for (byte i = a; i <= n; i++) {\n                for (byte j = b; j <= m; j++) {\n                    result += (float)(i % j) / (i + c);\n                }\n            }\n            System.out.println(result);\n        }\n    }\n}',commentary:"\n\u0412 \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u0456\u0439 \u0440\u043e\u0431\u043e\u0442\u0456 \u0431\u0443\u043b\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043e bytes \u044f\u043a \u043e\u0441\u043d\u043e\u0432\u043d\u0438\u0439 \u0442\u0438\u043f \u0434\u0430\u043d\u0438\u0445. \u0417\u0430\u0434\u0430\u0442\u0438 \u0437\u043c\u0456\u043d\u043d\u0443 \u0456\u0437 \u0446\u0438\u043c \u0442\u0438\u043f\u043e\u043c \u043c\u043e\u0436\u043d\u0430 \u0447\u0438\u0441\u043b\u043e\u043c \u0432 \u0440\u0430\u0439\u043e\u043d\u0456 [-128, 127]. \n\u0422\u0430\u043a\u0438\u0439 \u043c\u0430\u043b\u0438\u0439 \u0434\u0456\u0430\u043f\u0430\u0437\u043e\u043d \u043c\u043e\u0436\u0435 \u0441\u0442\u0430\u0442\u0438 \u0432 \u043f\u0440\u0438\u0433\u043e\u0434\u0456 \u043f\u0440\u0438 \u0440\u043e\u0431\u043e\u0442\u0456 \u0456\u0437 \u0440\u043e\u0431\u043e\u0442\u043e\u044e \u0443 \u0432\u0435\u043b\u0438\u043a\u0438\u0445 \u043c\u0430\u0441\u0438\u0432\u0430\u0445, \u0434\u0435 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u043f\u0430\u043c'\u044f\u0442\u0456 \u0434\u0456\u0439\u0441\u043d\u043e \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0435.\n\u041e\u043a\u0440\u0456\u043c \u0446\u044c\u043e\u0433\u043e, \u0437\u043c\u0456\u043d\u043d\u0430 \u0437 \u0446\u0438\u043c \u0442\u0438\u043f\u043e\u043c \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u0430 \u0437\u0430\u043c\u0456\u0441\u0442\u044c int \u0443 \u0432\u0438\u043f\u0430\u0434\u043a\u0430\u0445, \u0434\u0435 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u044e\u0442\u044c \u043a\u0440\u0430\u0449\u0435 \u0437\u0440\u043e\u0437\u0443\u043c\u0456\u0442\u0438 \u043a\u043e\u0434.\n\u042f\u043a\u0449\u043e \u043c\u0438 \u0437\u043d\u0430\u0454\u043c\u043e \u043f\u0440\u043e \u0444\u0430\u043a\u0442 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043e\u0433\u043e \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u043e\u0433\u043e \u0434\u0456\u0430\u043f\u0430\u0437\u043e\u043d\u0443, \u0442\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0432 \u043a\u043e\u0434\u0456 \u0446\u044c\u043e\u0433\u043e \u0442\u0438\u043f\u0443 \u043c\u043e\u0436\u0435 \u0441\u043b\u0443\u0436\u0438\u0442\u0438 \u043f\u0435\u0432\u043d\u043e\u044e \u0444\u043e\u0440\u043c\u043e\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0443\u0432\u0430\u043d\u043d\u044f\n\u043f\u0440\u043e \u0437\u043c\u0456\u043d\u043d\u0443.",conclusions:"\n\u0422\u0430\u043a\u0438\u043c \u0447\u0438\u043d\u043e\u043c \u0431\u0443\u043b\u0430 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0430 \u0440\u043e\u0431\u043e\u0442\u0430 \u0456\u0437 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f\u043c \u0442\u0438\u043f\u0443 byte, \u0434\u043e\u0441\u043b\u0456\u0434\u0436\u0435\u043d\u0435 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f \u0446\u044c\u043e\u0433\u043e \u0442\u0438\u043f\u0443.\n\u0417\u0433\u0430\u0434\u0430\u043d\u043e \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0446\u0438\u043a\u043b\u0456\u0432 \u0443 \u043c\u043e\u0432\u0456 Java, \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0442\u0438\u043f\u0456\u0432 \u0442\u0430 \u0439\u043e\u0433\u043e \u0440\u043e\u043b\u044c \u0443 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0437\u0430\u0434\u0430\u0447\u0456."},x={numer:"2",theme:"\u041c\u0430\u0441\u0438\u0432\u0438 \u0432 \u043c\u043e\u0432\u0456 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f Java.",aim:"\u041e\u0437\u043d\u0430\u0439\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0437 \u043c\u0430\u0441\u0438\u0432\u0430\u043c\u0438 \u0442\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u0456\u0432 \u0457\u0445 \u043e\u0431\u0440\u043e\u0431\u043a\u0438 \u0432 \u043c\u043e\u0432\u0456 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f Java. \u0417\u0434\u043e\u0431\u0443\u0442\u0442\u044f \u043d\u0430\u0432\u0438\u0447\u043e\u043a \u0443 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u0456 \u043c\u0430\u0441\u0438\u0432\u0456\u0432 \u0432 \u043c\u043e\u0432\u0456 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f Java.",task:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043a\u043b\u0430\u0441, \u044f\u043a\u0438\u0439 \u0441\u043a\u043b\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0437 \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0447\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0443, \u0449\u043e \u0432\u0438\u043a\u043e\u043d\u0443\u0454 \u0434\u0456\u044e \u0437 \u043c\u0430\u0442\u0440\u0438\u0446\u0435\u044e(\u044f\u043c\u0438) (\u043f.2) \u0456\u0437 \u0437\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u043c \u0442\u0438\u043f\u043e\u043c \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 (\u043f.3) \u0442\u0430 \u0434\u0456\u044e \u0456\u0437 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0443\u044e\u0447\u043e\u044e \u043c\u0430\u0442\u0440\u0438\u0446\u0435\u044e \u0421 (\u043f.4). \u0412\u0438\u0432\u0435\u0441\u0442\u0438 \u043d\u0430 \u0435\u043a\u0440\u0430\u043d \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u043f\u0435\u0440\u0448\u043e\u0457 \u0442\u0430 \u0434\u0440\u0443\u0433\u043e\u0457 \u0434\u0456\u0439.",imgsrc:"",labcode:'\nimport java.util.Scanner;\nimport java.util.Random;\n/** Lab2\n *  Karpeka Dmytrii\n * \n *  variant == 9212\n *  C5  = 2 -- C = A + B\n *  C7  = 0 -- double\n *  C11 = 5 -- \u041e\u0431\u0447\u0438\u0441\u043b\u0438\u0442\u0438 \u0441\u0443\u043c\u0443 \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448\u0438\u0445 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432\n *             \u0432 \u0440\u044f\u0434\u043a\u0430\u0445 \u043c\u0430\u0442\u0440\u0438\u0446\u0456 \u0437 \u043d\u0435\u043f\u0430\u0440\u043d\u0438\u043c\u0438 \u043d\u043e\u043c\u0435\u0440\u0430\u043c\u0438\n *             \u0442\u0430 \u043d\u0430\u0439\u043c\u0435\u043d\u0448\u0438\u0445 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 \u0432 \u0440\u044f\u0434\u043a\u0430\u0445 \u043c\u0430\u0442\u0440\u0438\u0446\u0456 \u0437 \u043f\u0430\u0440\u043d\u0438\u043c\u0438 \u043d\u043e\u043c\u0435\u0440\u0430\u043c\u0438\n */\n\npublic class App {\n    public static void main(String[] args) throws Exception {\n        final Scanner sc = new Scanner(System.in);\n\n        System.out.println("Input number of rows in matrixes:");\n        int rows = sc.nextInt();\n        System.out.println("Input number of columns in matrixes:");\n        int columns = sc.nextInt();\n\n        double[][] A = new double[rows][columns];\n        double[][] B = new double[rows][columns];\n        double[][] C = new double[rows][columns];\n\n        // gap of random generation of doubles\n        int min = 0;\n        int max = 100;\n\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < columns; j++) {\n                // Random generation of matrixes A and B\n                Random rand = new Random();\n                A[i][j] = min + (max - min) * rand.nextDouble();\n                B[i][j] = min + (max - min) * rand.nextDouble();\n\n                // Sum of matrixes\n                C[i][j] = A[i][j] + B[i][j];\n            } \n        }\n\n        double sumMaxes = 0;\n        double sumMins = 0;\n        double element;\n\n        for (int i = 0; i < rows; i++) {\n            // Alternative alorithm\n            // element = C[i][0];\n            // for (int j = 1; j < columns; j++) {\n            //     if (i % 2 == 0) {\n            //         if (C[i][j] < element) {\n            //             element = C[i][j];\n            //         } \n            //     } else {\n            //         if (C[i][j] > element) {\n            //             element = C[i][j];\n            //         }\n            //     }\n            // }\n            // if (i % 2 == 0) {\n            //     sumMins += element;\n            // } else {\n            //     sumMaxes += element;\n            // }\n\n            \n            element = C[i][0];\n            if (i % 2 == 0) {\n                for (int j = 1; j < columns; j++) {\n                    if (C[i][j] < element) {\n                        element = C[i][j];\n                    }\n                }\n                sumMins += element;\n            } else {\n                for (int j = 1; j < columns; j++) {\n                    if (C[i][j] > element) {\n                        element = C[i][j];\n                    }\n                }\n                sumMaxes += element;\n            }\n        }\n \n        printMatrix("C", C);\n        System.out.println("\u0421\u0443\u043c\u0430 \u043d\u0430\u0439\u043c\u0435\u043d\u0448\u0438\u0445 \u0432 \u043f\u0430\u0440\u043d\u0438\u0445: " + sumMins);\n        System.out.println("\u0421\u0443\u043c\u0430 \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448\u0438\u0445 \u0432 \u043d\u0435\u043f\u0430\u0440\u043d\u0438\u0445: " + sumMaxes);\n    }\n\n    public static void printMatrix(String matrixName, double[][] matrix) {\n        System.out.println(matrixName + ":");\n        for (int i = 0; i < matrix.length; i++) {\n            System.out.print("[ ");\n            for (int j = 0; j < matrix[i].length; j++) {\n                System.out.print(matrix[i][j] + " ");\n            }\n            System.out.print("]\\n");\n        }\n    }\n}\n',commentary:"\n\u0412 \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u0456\u0439 \u0440\u043e\u0431\u043e\u0442\u0456 \u0431\u0443\u043b\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043e \u0440\u0430\u043d\u0434\u043e\u043c\u0456\u0437\u043e\u0432\u0430\u043d\u0443 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0456\u044e \u0437\u043d\u0430\u0447\u0435\u043d\u044c \u0434\u043b\u044f \u043c\u0430\u0442\u0440\u0438\u0446\u0456 \u0440\u043e\u0437\u043c\u0456\u0440\u043d\u0456\u0441\u0442\u044c \u044f\u043a\u043e\u0457 \u0437\u0430\u0434\u0430\u0454 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447.\n\u0421\u0435\u0440\u0435\u0434 \u0442\u0430\u043a\u0438\u0445 \u0440\u0430\u043d\u0434\u043e\u043c\u0456\u0437\u043e\u0432\u0430\u043d\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u044c \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448\u0430 \u0443\u0432\u0430\u0433\u0430 \u043f\u0440\u0438\u0434\u0456\u043b\u044f\u043b\u0430\u0441\u044c \u043d\u0430\u0439\u043c\u0435\u043d\u0448\u0438\u043c \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c \u0432 \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u043f\u0430\u0440\u043d\u043e\u043c\u0443 \u0440\u044f\u0434\u043a\u0443 \u0442\u0430 \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448\u0438\u043c \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c \u0432 \u043d\u0435\u043f\u0430\u0440\u043d\u0438\u0445 \u0440\u044f\u0434\u043a\u0430\u0445, \u0430\u0434\u0436\u0435\n\u043d\u0430 \u043d\u0438\u0445 \u0437\u0430\u0432'\u044f\u0437\u0443\u0432\u0430\u043b\u043e\u0441\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u0435 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u043e\u0457.\n",conclusions:"\n\u0411\u0443\u043b\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043e \u0440\u043e\u0431\u043e\u0442\u0443 \u0456\u0437 \u0431\u0430\u0433\u0430\u0442\u043e\u0432\u0438\u043c\u0456\u0440\u043d\u0438\u043c\u0438 \u043c\u0430\u0441\u0438\u0432\u0430\u043c\u0438 (\u043c\u0430\u0442\u0440\u0438\u0446\u044f\u043c\u0438), \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f \u0432\u0438\u043c\u0430\u0433\u0430\u043b\u043e \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0456\u0447\u043d\u043e\u0441\u0442\u0438 \u043c\u0438\u0441\u043b\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0440\u043e\u0437\u0432'\u044f\u0437\u043a\u0443 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e\u0457 \u0437\u0430\u0434\u0430\u0447\u0456.  \n"},O=function(n){Object(j.a)(t,n);var e=Object(u.a)(t);function t(n){var i;return Object(l.a)(this,t),(i=e.call(this,n)).state={currentPage:"b-0-page",numer:"0",theme:"",aim:"",task:"",imgsrc:"",labcode:"",commentary:"",conclusions:""},i}return Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(n,e){return!(this.state.currentPage===e.currentPage)}},{key:"handleClick",value:function(n){!function(){if(document.getElementsByClassName("isActive")[0]){var n=document.getElementsByClassName("isActive")[0];n.className=n.className.slice(0,-" isActive".length)}}();var e=n.target.className.slice(0,"b-n-page".length);switch(n.target.className+=" isActive",e){case"b-0-page":this.setState({currentPage:e,numer:"0",theme:"",aim:"",task:"",imgsrc:"",labcode:"",commentary:"",conclusions:""});break;case"b-1-page":this.setState(Object(o.a)(Object(o.a)({},{currentPage:e}),p));break;case"b-2-page":this.setState(Object(o.a)(Object(o.a)({},{currentPage:e}),x))}}},{key:"render",value:function(){var n=this;return Object(b.jsxs)("div",{className:"main-container",children:[Object(b.jsx)("div",{className:"side-menu",children:Object(b.jsx)("ul",{className:"list",children:Object(r.a)(Array(3).keys()).map((function(e){return 0===e?Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:"b-".concat(e,"-page able isActive"),onClick:function(e){return n.handleClick(e)},children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"})}):Object(b.jsx)("li",{children:Object(b.jsxs)("button",{className:"b-".concat(e,"-page able"),onClick:function(e){return n.handleClick(e)},children:["\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u0430 \u0440\u043e\u0431\u043e\u0442\u0430 \u2116",e]})})}))})}),Object(b.jsx)("div",{id:"main-content",children:"b-0-page"===this.state.currentPage?Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"\u041e\u0433\u043b\u044f\u0434"}),Object(b.jsx)("p",{children:'\u041c\u0435\u0442\u0430 \u0434\u0430\u043d\u043e\u0457 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u043f\u043e\u043b\u044f\u0433\u0430\u0454 \u0432 \u0445\u043e\u0441\u0442\u0438\u043d\u0433\u0443 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u0456\u0432 \u043a\u043e\u0434\u0443 \u0456\u0437 \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u0438\u0445 \u0440\u043e\u0431\u0456\u0442 \u0437 \u043a\u0443\u0440\u0441\u0443 "\u041e\u0441\u043d\u043e\u0432\u0438 \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0456 Java"'}),Object(b.jsx)("p",{children:"\u041c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0456 HTML5, CSS, JS (\u0437\u043e\u043a\u0440\u0435\u043c\u0430 \u0456 ReactJS) \u0431\u0443\u0434\u0443\u0442\u044c \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u0456 \u0434\u043b\u044f \u0430\u043a\u0443\u0440\u0430\u0442\u043d\u0456\u0448\u043e\u0433\u043e \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u0432\u0456\u0442\u043d\u043e\u0441\u0442\u0456 \u0456 \u0434\u043b\u044f \u0437\u0440\u0443\u0447\u043d\u0456\u0448\u043e\u0457 \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0456\u0457 \u043f\u0440\u0438 \u0437\u0430\u0445\u0438\u0441\u0442\u0456 \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043d\u043e\u0457 \u0440\u043e\u0431\u043e\u0442\u0438"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"\u0412\u0430\u0436\u043b\u0438\u0432\u0438\u043c \u0431\u0443\u0434\u0435 \u0437\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u0438 \u0442\u0435, \u0449\u043e \u0446\u0435 \u043c\u043e\u044f \u043f\u0435\u0440\u0448\u0430 \u043e\u0434\u043d\u043e\u0441\u0442\u043e\u0440\u0456\u043d\u043a\u043e\u0432\u0430 \u0432\u0435\u0431-\u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430 \u0456\u0437 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u043d\u043d\u044f\u043c ReactJS, \u043f\u0440\u043e\u0442\u0435 \u0457\u0457 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u043e-\u043d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0438\u0439 \u043f\u043e\u0442\u0435\u043d\u0446\u0456\u0430\u043b \u0434\u043b\u044f \u043c\u0435\u043d\u0435 \u043d\u0435 \u0437\u043c\u0456\u043d\u044e\u0454\u0442\u044c\u0441\u044f."}),Object(b.jsx)("p",{children:'(\u041a\u0440\u0438\u0442\u0438\u043a\u0443 \u0437 \u043f\u0440\u0438\u0432\u043e\u0434\u0443 \u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0446\u0456\u0457, \u0434\u0438\u0437\u0430\u0439\u043d\u0456\u0432 \u0442\u0430 \u0432\u0438\u0433\u043b\u044f\u0434\u0443 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u043f\u0440\u0438\u0439\u043c\u0430\u0442\u0438\u043c\u0443 \u0442\u0456\u043b\u044c\u043a\u0438 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043a\u0443\u0440\u0441\u0443 "\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0457 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044c\u043a\u0438\u0445 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0456\u0432 (Front-end)" ))0)'})]}):Object(b.jsx)(h,{numer:this.state.numer,theme:this.state.theme,aim:this.state.aim,task:this.state.task,imgsrc:this.state.imgsrc,labcode:this.state.labcode,commentary:this.state.commentary,conclusions:this.state.conclusions})})]})}}]),t}(s.a.Component);c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))},8:function(n,e,t){},9:function(n,e,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.8372ff38.chunk.js.map
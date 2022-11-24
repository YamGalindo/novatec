import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class Metodos {

    public static int leerScanner(String texto){
        Scanner scanner = new Scanner(System.in);
        System.out.println(texto);
        int result = scanner.nextInt();
        return result;
    }

    public static void calcularCalificaiones(double notaA, double notaB, double notaC){

        double result = notaA + notaB + notaC;

        System.out.println("calificacion final: "  + (double)Math.round(result * 100d) / 100d);

    }

    public static void calcularSalarioSemanal(double salarioHora, double horasTrabajadas){

        double result = salarioHora * horasTrabajadas;
        System.out.println("Salario semanal: " +result);

    }

    public static void calcularDinero(double dineroErnesto){

        double dineroJuan = dineroErnesto/2;
        double dineroLucas = (dineroJuan + dineroErnesto)/2;

        double result = dineroErnesto + dineroJuan + dineroLucas;
        System.out.println("dinero total de las 3 personas: " +result);

    }

    public static void calcularSalarioVendedor(String nombre, double carrosVendidos, double valorTotalCarros){

        double salarioBase =  1000;
        double comisionPorCarro =  150;
        double porcentajeComision = 0.05;

        double result = salarioBase + (comisionPorCarro * carrosVendidos) + (valorTotalCarros * porcentajeComision);
        System.out.println("Salario total de " + nombre + ": " + result);

    }

    public static void calcularCalificacionFinal(double notaParticipacion, double notaPrimerExamen, double notaSegundoExamen, double notaExamenFinal){

        double porcentajeParticipacion = notaParticipacion * 0.10;
        double porcentajeNotaPrimerExamen = notaPrimerExamen * 0.25;
        double porcentajeNotaSegundoExamen = notaSegundoExamen * 0.25;
        double porcentajeNotaExamenFinal = notaExamenFinal * 0.40;

        double result = porcentajeParticipacion + porcentajeNotaPrimerExamen + porcentajeNotaSegundoExamen + porcentajeNotaExamenFinal;
        System.out.println("Nota final: " + (double)Math.round(result * 100d) / 100d);

    }

    public static void multiploDeDies(int numero){
        int base = 10;

        if(numero % base == 0){
            System.out.println("El numero " + numero + " es multiplo de 10");
        }else {
            System.out.println("El numero " + numero + " no es multiplo de 10");
        }

    }

    public static void mayorQue(int numero1, int numero2){

        if(numero1 > numero2){
            System.out.println("El numero " + numero1 + " es mayor");
        } else if(numero1 < numero2) {
            System.out.println("El numero " + numero2 + " es mayor" );
        } else {
            System.out.println("Los numero son iguales");
        }

    }

    public static void esMayus(){

        Scanner scanner = new Scanner(System.in);
        System.out.println("ingrese caracter: ");
        String letra = scanner.nextLine();

        if(letra.equals(letra.toUpperCase())){
            System.out.println("Es mayuscula");
        } else {
            System.out.println("No es mayuscula ");
        }

    }

    public static void valorCompra(double valorNeto){

        double result = 0;

        if(valorNeto > 300){
            result = valorNeto - (valorNeto * 0.20);
            System.out.println((double)Math.round(result * 100d) / 100d);
        } else {
            System.out.println(valorNeto);
        }

    }


    public static boolean esPar(int numero){

        if(numero % 2 == 0){
            return true;
        }else {
            return false;
        }

    }

    public static void sonPar(int numero1, int numero2){

        if(esPar(numero1) && esPar(numero2)){
            System.out.println("Los dos numeros son pares");
        } else if(!esPar(numero1) && !esPar(numero2)){
            System.out.println("los dos numeros son impares");
        } else {
            System.out.println("un numero es par y el otro es impar");
        }

    }

    public static void ordenarDescendiente(int numero1, int numero2, int numero3){

        ArrayList<Integer> array = new ArrayList<Integer>();

        array.add(numero1);
        array.add(numero2);
        array.add(numero3);

        Comparator<Integer> comparador = Collections.reverseOrder();
        Collections.sort(array, comparador);

        System.out.println(array);

    }

    public static void calcularCifras(){

        int result = 0;

//        Scanner scanner = new Scanner(System.in);
//        System.out.println("ingrese numero entre 0 y 99999: ");
        int numero = leerScanner("Ingrese numero entre 0 y 99999: ");

        if(numero < 0  || numero > 99999) {
            System.out.println("Numero fuera de los parametros");
            return;
        }else {
            while (numero != 0) {
                numero = numero / 10;
                result++;
            }
        }

        System.out.println("El numero tiene: " + result + " cifras");

    }

    public static void validarFecha(){

        int dia = leerScanner("Ingrese dia: ");
        int mes = leerScanner("Ingrese mes: ");
        int anno = leerScanner("Ingrese anno: ");

        if(dia < 31 && mes < 13 && anno < 2022) {
            System.out.println("Fecha valida");
        }else{
            System.out.println("Fecha invalida");
        }

    }

    public static void notaToString(){

        int nota = leerScanner("Ingrese nota: ");

        if(nota >= 0 && nota <= 2 ){
            System.out.println("Insuficiente");
        }else if (nota > 2 && nota <= 4) {
            System.out.println("Suficiente");
        }else if(nota > 4 && nota <= 6){
            System.out.println("Bien");
        }else if(nota > 6 && nota <= 8){
            System.out.println("Notable");
        }else if(nota > 8 && nota <= 10){
            System.out.println("Sobresaliente");
        }else {
            System.out.println("Nota invalida");
        }
    }

    public static int consignar(int saldo){

        int adicion = leerScanner("Cantidad a consignar: ");

        int result = saldo + adicion;
        return result;

    }

    public static int retirar(int saldo){

        int retiro = leerScanner("Cantidad a retirar: ");

        int result = saldo - retiro;
        return result;
    }
    public static void cajero(){

        Boolean tmp = true;
        int saldo = 1000;

        do {

            Scanner scanner = new Scanner(System.in);
            System.out.println("Cajero Automatico");
            System.out.println("Saldo: " + saldo);

            System.out.println("agregar dinero a la cuenta ingrese 1,");
            System.out.println("Retirar dinero de la cuenta ingrese 2,");
            System.out.println("Salir 3: ");

            int opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    saldo = consignar(saldo);
                    break;
                case 2:
                    saldo = retirar(saldo);
                    break;
                case 3:
                    tmp = false;
            }

        }while(tmp);

    }

    public static void convertirKilos(){

        Boolean tmp = true;

        int peso = leerScanner("Ingrese peso en kilos: ");

        do {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Convertir a miligramos ingrese 1,");
            System.out.println("convertir a gramo ingrese 2,");
            System.out.println("convertir a tonelada 3, ");
            System.out.println("salir ingrese 4: ");

            int opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    double pesoMiligramos = peso * 1000000;
                    System.out.println(pesoMiligramos + "mg");
                    break;
                case 2:
                    double pesoGramos = peso * 1000;
                    System.out.println(pesoGramos + "g");
                    break;
                case 3:
                    double pesoToneladas = (double)peso / 1000;
                    System.out.println(pesoToneladas + "t");
                    break;
                case 4:
                    tmp = false;
            }

        }while(tmp);
    }

    public static void cuadrado(){

        Boolean tmp = true;

        do {

            int numero = leerScanner("Ingrese numero: ");

            if(numero < 0 ){
                tmp = false;
            }else {
                int cuadrado = numero * numero;
                System.out.println(cuadrado);
            }

        }while(tmp);

    }

    public static void esCero(){

        Boolean tmp = true;

        do {

            int numero = leerScanner("Ingrese numero: ");

            if(numero == 0 ){
                tmp = false;
            }else if(numero > 0){
                System.out.println("Positivo");
            }else {
                System.out.println("Negativo");
            }

        }while(tmp);

    }

    public static void parImpar(){

        Boolean tmp = true;

        do {

            int numero = leerScanner("ingrese numero: ");

            if(numero == 0 ){
                tmp = false;
            }else if(numero % 2 == 0){
                System.out.println("Par");
            }else {
                System.out.println("impar");
            }

        }while(tmp);

    }

    public static void adivinarNumero(){

        Boolean tmp = true;
        int random = (int)(Math.random()*100+1);
        System.out.println(random);

        do{
            int numero = leerScanner("Ingrese numero: ");
            if(numero == random){
                System.out.println("Adivinaste!!! numero: " + numero);
                tmp = false;
            }else {
                System.out.println("Vuelve a intentar: ");
            }

        }while(tmp);

    }

    public static void sumarHasta(){

        Boolean tmp = true;
        int total = 0;
        ArrayList<Integer> array = new ArrayList<>();

        do{
            int numero = leerScanner("Ingrese numero: ");
            if(numero == 0){
               for (Integer num : array) {
                    total += num;
               }
                System.out.println("Total suma = " + total);
                tmp = false;
            }else {
                array.add(numero);
            }

        }while(tmp);

    }


    public static void media(){

        Boolean tmp = true;
        int total = 0;
        int numeros = 0;
        ArrayList<Integer> array = new ArrayList<>();

        do{
            int numero = leerScanner("Ingrese numero: ");
            if(numero == 0){
                for (Integer num : array) {
                    total += num;
                    numeros++;
                }
                System.out.println("El promedio es  = " + total/numeros);
                tmp = false;
            }else {
                array.add(numero);
            }

        }while(tmp);
    }


    public static void sieteEnSiete(){

        for(int i = 0; i <= 100; i+= 7){
            System.out.println(i);
        }

    }

    public static void productoImpares(){

        int j = 1;

        for (int i = 0; i <= 20; i++ ){
            if(i % 2 != 0){
                j *= i;
                System.out.println(j);
            }

        }
    }


}

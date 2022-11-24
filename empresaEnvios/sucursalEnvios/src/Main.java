public class Main {
    public static void main(String[] args) {
            Sucursal sucursal1 = new Sucursal("NovatecEnvios" , "cll xd", "bogota");
            sucursal1.calcularPrecioEnvio(10, "123",1, "alta");
            sucursal1.calcularPrecioEnvio(10, "123",2, "express");
            sucursal1.calcularPrecioEnvio(10, "123",3, "");
    }
}
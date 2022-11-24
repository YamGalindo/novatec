public class Sucursal{
    private String nombre;
    private String dirreccion;
    private String ciudad;

    public Sucursal(String nombre, String dirreccion, String ciudad) {
        this.nombre = nombre;
        this.dirreccion = dirreccion;
        this.ciudad = ciudad;
    }

    public void calcularPrecioEnvio(int peso, String dni, int numeroRegistro, String prioridad){

       int precioEnvio = 0;
       Paquete envio = new Paquete(peso, dni, numeroRegistro, prioridad);

       if(envio.getPrioridad().equals("alta")){
           precioEnvio = (envio.getPeso()*10) + 10;
       }else if(envio.getPrioridad().equals("express")){
           precioEnvio = (envio.getPeso()*10) + 20 ;
       }else {
           precioEnvio = envio.getPeso()*10;
       }

        System.out.println("El paquede con numero de referencia: " + envio.getNumeroReferencia()
                + " del usuario con numero de documento: " + envio.getDni()
                + " tiene un precio de envio de: " + precioEnvio);

    }
}

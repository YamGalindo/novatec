public class Paquete {

    private int peso;
    private String dni;
    private int numeroReferencia;

    private String prioridad;

    public Paquete(int peso, String dni, int numeroReferencia, String prioridad ) {
        this.peso = peso;
        this.dni = dni;
        this.numeroReferencia = numeroReferencia;
        this.prioridad = prioridad;

    }

    public int getPeso() {
        return peso;
    }

    public String getDni() {
        return dni;
    }

    public int getNumeroReferencia() {
        return numeroReferencia;
    }

    public String getPrioridad() {
        return prioridad;
    }
}

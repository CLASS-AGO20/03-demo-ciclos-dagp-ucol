export default class App {

    sumarParesFor() {
        let resultado,i;
        resultado=0;
    for (i = 1; i <= 20; i++) {
       if ((i % 2)==0) {
        resultado = resultado + i;   
       }
        
    }
    return resultado;
}



} // No Borrar - No Borrar


let app = new App();
console.log(app.sumarParesFor())
console.log(app.contarImparesFor(1,20))
console.log(app.sumarParesWhile())
console.log(app.contarImparesWhile())
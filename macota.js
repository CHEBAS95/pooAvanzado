
class Mascota {
  //propiedades privadas con # 
  #dueños
  #temperamento 
  #valor 

  constructor(nombre, especie, dueños, valor ){
    this.nombre = nombre,
    this.especie = especie,
    this.#dueños= dueños, 
    this.#valor= valor !== undefined ? valor : 5000
  }

  getDueños(){
    console.log(`la cantidad de dueños de ${this.nombre} fueron ${this.#dueños}`);  
  }
  #getValue(){
    console.log(this.#valor)
  }

  getValue(){
    console.log('obteniendo valor ...');
    this.#getValue()
    
  }
  setValue(valor){
      this.#valor = valor 
  }
}

class MascotaPerruna extends Mascota{
  constructor(nombre, especie, dueños, valor, pulgas){
    super(nombre, especie, dueños, valor)
    this.especie = especie =  especie.length === 0 ? "perrito" : especie
    this.pulgas = pulgas;
  }

  getDueños(){
    super.getDueños();
    console.log(`sufre de pulgas : ${this.pulgas}`);
    
  }
}
const manchones = new Mascota('manchas', 'gato', 2)
console.log(manchones);
manchones.getDueños()
manchones.getValue()
manchones.setValue(256)
manchones.getValue()

const tobyy = new MascotaPerruna("tobii", "", 3, 89000, "no")
tobyy.getDueños();
console.log(tobyy);
tobyy.getValue()

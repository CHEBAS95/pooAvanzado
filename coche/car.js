
//1* validaciion de datos por objetos (para la practica)
const TypeFuel = {
  GAS: 0,
  GASOLINA: 1,
  ELECTRICIDAD: 3,
  DIESEL: 4,
};
//1* validacion por array dentro de la clase (para la practica )
// const ALLOWED_PROPULSIONS = ["GAS", "GASOLINA", "ELECTRICIDAD", "DIESEL"];

class Car {
  #name;
  #model;
  #color;
  #propulsion;

  constructor(name, color, model, propulsion, engine) {
    
    if (!Object.keys(TypeFuel).includes(propulsion)) {
      throw new Error(
        `Propulsión no válida. Las opciones son: ${Object.keys(TypeFuel)}.Coche no creado`
      );
    }
    // if(propulsion !== engineType.getTypeFuel() ){
    //   throw new Error(`El motor usa ${engine.getTypeFuel()} pero el auto esta configurado para ${propulsion}`)
    // }

    this.#name = name;
    this.#color = color;
    this.#model = model;
    this.#propulsion = propulsion;
    this.engine = engine
  }

  getName() {
    return this.#name;
  }
  getColor() {
    return this.#color;
  }
  getModel() {
    return this.#model;
  }
  getPropulsion() {
    return this.#propulsion;
  }
  getEngine(){
    return this.engine
  }

  getDataCar() {

   return {
    nombre: this.getName(),
    color: this.getColor(),
    model: this.getColor(),
    propulsion: this.getPropulsion(),
    engine: this.getEngine()
  }
  }
  showDataCar(){
    const data = this.getDataCar();

    console.log("===Datos del coche===");
    console.log(`nombre: ${data.nombre}`);
    console.log(`color: ${data.color}`);
    console.log(`mode: l${data.model}`);
    console.log(`propulsion: ${data.propulsion}`);
    console.log(`tipo de motor ${data.engine}`);
    
  }
}

//autos
try {
  const ford = new Car("Ford Mustang", "blue", 2020, "GASOLINA","GAS");
  ford.showDataCar()

  // // Esto lanzará un error
  // const tesla = new Car("Tesla Model S", "red", 2023, "nuclear");
  // tesla.getDataCar()
} catch (error) {
  console.error("error al crear vehiculo : "+error.message);
}

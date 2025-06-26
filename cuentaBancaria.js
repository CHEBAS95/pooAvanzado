const prompt = require("prompt-sync")();

class BankAccount {
  #numberAccount;
  #balance;

  constructor(number) {
    if (new.target === BankAccount) {
      throw new Error(
        "No puedes crear directamente una instancia de BankAccount"
      );
    }
    this.#numberAccount = `500-${number}`;
    this.#balance = 0;
  }

  // Método privado para mostrar el número de cuenta (solo para uso interno)
  #showNumberAccount() {
    console.log(`Número de cuenta: ${this.#numberAccount}`);
  }

  // Getter para el número de cuenta
  getNumberAccount() {
    console.log("Imprimiendo número de cuenta...");
    this.#showNumberAccount();
    return this.#numberAccount;
  }

  // Getter para el balance. Imprime y retorna el valor.
  getBalance() {
    console.log("Imprimiendo saldo...");
    console.log(`Saldo actual: $${this.#balance}`);
    
    return this.#balance;
  }

  // Método protegido para actualizar el balance (se utiliza en depósitos y retiros)
  _updateBalance(amount) {
    this.#balance += amount;
  }

  // Método de retiro: se resta el monto si hay fondos suficientes
  withdraw(amount) {
    if (isNaN(amount) || amount <= 0) {
      console.log("Monto de retiro inválido.");
      return;
    }
    if (amount > this.#balance) {
      console.log("Fondos insuficientes para retirar ese monto.");
    } else {
      this._updateBalance(-amount);
      console.log(`Retiraste $${amount}. Nuevo saldo: $${this.#balance}`);
    }
  }

  // Método para depósito
  deposit(amount) {
    if (isNaN(amount) || amount <= 0) {
      console.log("Monto de depósito inválido.");
      return;
    }
    this._updateBalance(amount);
    console.log(`Depositaste $${amount}. Nuevo saldo: $${this.#balance}`);
  }
}

//---- TIPOS DE CUENTAS ----------------------
class SaveAccount extends BankAccount {
  constructor(numberAccount) {
    super(numberAccount);
    this.numberAccount = numberAccount; // Este atributo público es opcional, solo para referencia
  }

  // Redefinición del getter para número de cuenta, con confirmación de operación
  getNumberAccount() {
    console.log("¿Deseas traer el número de cuenta?");
    let response = this.sureOperation();
    if (response === "si") {
      return super.getNumberAccount();
    } else {
      console.log("No se mostrará el número de cuenta.");
      return null;
    }
  }

  // Método para realizar retiro con confirmación y validación de monto
  withdrawMoney() {
    console.log("¿Deseas retirar dinero?");
    let response = this.sureOperation();
    if (response === "si") {
      console.log("¡Recuerda retirar solo el dinero disponible!");
      let input = prompt("Ingresa el monto a retirar: ");
      let amount = parseFloat(input);
      if (isNaN(amount)) {
        console.log("Solo se permiten valores numéricos. Cancelando retiro.");
      } else {
        super.withdraw(amount);
      }
    } else {
      console.log("Operación de retiro cancelada.");
    }
  }

  // Método para realizar depósito con confirmación y validación de monto
  depositMoney() {
    console.log("¿Deseas ingresar dinero?");
    let response = this.sureOperation();
    if (response === "si") {
      let input = prompt("Ingresa el monto a depositar: $");
      let amount = parseFloat(input);
      if (isNaN(amount)) {
        console.log(
          "Solo se permiten valores numéricos. Cancelando operación."
        );
      } else {
        super.deposit(amount);
      }
    } else {
      console.log("Operación de depósito cancelada.");
    }
  }

  // Método de validación: solicita al usuario "si" o "no"
  sureOperation() {
    let response;
    do {
      response = prompt("Ingresa 'si' o 'no' y presiona enter: ").toLowerCase();
    } while (response !== "si" && response !== "no");
    return response;
  }
}

//--------- INTERFAZ DE USUARIO (FRONT-END CONSOLE) ---------------
function main() {
  console.log("Bienvenido al sistema de cuentas bancarias");
  let accountNumber = prompt("Ingresa el número de cuenta: ");
  const cuenta = new SaveAccount(accountNumber);

  let exit = false;
  while (!exit) {
    console.log("\n------ Menú de Operaciones ------");
    console.log("1. Mostrar número de cuenta");
    console.log("2. Consultar saldo");
    console.log("3. Realizar depósito");
    console.log("4. Realizar retiro");
    console.log("5. Salir");

    let option = prompt("Selecciona una opción (1-5): ");

    switch (option) {
      case "1":
        cuenta.getNumberAccount();
        break;
      case "2":
        cuenta.getBalance();
        break;
      case "3":
        cuenta.depositMoney();
        break;
      case "4":
        cuenta.withdrawMoney();
        break;
      case "5":
        console.log("Saliendo del sistema. ¡Hasta pronto!");
        exit = true;
        break;
      default:
        console.log("Opción no válida. Intenta de nuevo.");
    }
  }
}

main();

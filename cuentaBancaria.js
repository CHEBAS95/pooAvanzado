const prompt = require("prompt-sync")();
class bankAccount {
  #numberAccount;
  #balance;
  #break;


  constructor(number) {
    if (new.target === bankAccount) {
      throw new Error("no puedes crear directamente aca la cuenta");
    }

    this.#numberAccount = `500-${number}`;
    this.#balance = 0;
    this.break = "-------------";
  }
  //privates
  #showNumberAcount() {
    console.log(this.#numberAccount);
  }
  #showBalance() {
    console.log(this.#balance);
  }
  #withdrawMoney() {
    console.log("retirando dinero ");
  }
  //getter
  GetwithdrawMoney() {
    this.#withdrawMoney();
  }
  getNumberAccount() {
    console.log("imprimiendo...");
    this.#showNumberAcount();
    return this.#numberAccount;
  }
  getBalance() {
    console.log("imprimiendo saldo...");
    
    return this.#showBalance();
  }
  //setter
  setBalanceDeposito(deposit){
    this.#balance += deposit
  }
}
//----TIPOS CUENTAS ----------------------
class saveAccount extends bankAccount {
  
  constructor(numberAccount) {
    super(numberAccount);
    this.numberAccount = numberAccount;
  }
  //getter
  getNumberAccount() {
    console.log("¿Traer número de cuenta?");
    let response = this.sureGetNameString();
    if (response === "si") {
      return super.getNumberAccount();
    } else {
      console.log("No se traerá el número de cuenta.");
    }
  }

  GetwithdrawMoney() {
    super.GetwithdrawMoney();
  }
  //setters
  setBalanceDeposit(){
    let deposit = 0 ;
    console.log("desea ingresar dinero ?");
    let response = this.sureGetNameString()
    if(response === "si"){
      console.log("ingrese la cantidad ");
      deposit = +prompt("ingrese el dinero : $ ");
      if (typeof(deposit) !== "number"){
        console.log("pailas papi solo money");
        console.log(this.break);
        console.log("cancelando operacion ......");
      }else{
        this.setBalanceDeposito(deposit)
        return deposit
      }
    }
    
  }
  //confirm
  sureGetNameString() {
    let response;
    do {
      response = prompt("ingresa 'si' o 'no' y presione enter: ").toLowerCase();
    } while (response != "si" && response != "no");
    return response;
  }
}

//---------CUENTAS BANCARIAS---------------

const cuentaMiguel = new saveAccount(156156);

// cuentaMiguel.GetwithdrawMoney()
// cuentaMiguel.getNumberAccount()
cuentaMiguel.getBalance();
cuentaMiguel.setBalanceDeposit();
cuentaMiguel.getBalance();


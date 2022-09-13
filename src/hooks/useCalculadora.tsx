import { useState, useRef } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
  const [numero, setnumero] = useState('0');
  const [numeroAntierior, setnumeroAntierior] = useState('0');

  const ultimaOperacion = useRef<Operadores>();
  
  const limpiar = () => {
    setnumero('0');
    setnumeroAntierior('0');
  } 

  const del = () => {
    let number:string = numero;
    if(numero.length > 1){
        if (numero.length == 2 && numero.includes('-')) {
            number = '0';
        }else{
            number = number.substring(0, number.length - 1);
        }
    }    
    setnumero(number);
  };
  const armarNumero = ( numerotexto:string ) => {
    //no aceptar doble punto
    if(numero.includes('.') && numerotexto === '.') return;
    if(numero.startsWith('0') || numero.startsWith('-0')){
        // punto decimal
        if(numerotexto === '.'){
            setnumero(numero + numerotexto)
            //evaluar si es otro cero y hay punto
        }else if(numerotexto === '0' && numero.includes('.')){
            setnumero( numero + numerotexto );
            //si es diferente de 0 y no tiene punto
        }else if( numerotexto !== '0' && !numero.includes('.')){
            setnumero( numerotexto );
            // Evitar 000000.0000
        }else if(numerotexto === '0' && !numero.includes('.')){
            setnumero(numero); 
        }else{
            setnumero( numero + numerotexto );
        }
    }else{
        setnumero( numero + numerotexto );
    }
  } 

  const positivoNegativo = () => {
    if(numero.includes('-')){
        setnumero( numero.replace('-', ''));
    }else{
        setnumero('-' + numero)
    }
  }

  const cambiarNumberPorAnterior = () => {
    if (numero.endsWith('.')) {
        setnumeroAntierior(numero.slice(0, -1));   
    }else{
        setnumeroAntierior(numero);  
    }
    setnumero('0');
  }

  const btnSumar = () => {
    cambiarNumberPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  }
  const btnRestar = () => {
    cambiarNumberPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  }
  const btnMultiplicar = () => {
    cambiarNumberPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  }
  const btnDividir = () => {
    cambiarNumberPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  }

  const calcular = () => {

    const num1 = Number( numero );
    const num2 = Number( numeroAntierior );

    switch ( ultimaOperacion.current ) {
        case Operadores.sumar:
            setnumero(`${num1 + num2}`);    
            break;
        case Operadores.restar:
            setnumero(`${num2 - num1}`);    
            break;
        case Operadores.multiplicar:
            setnumero(`${num1 * num2}`);    
            break;
        case Operadores.dividir:
            setnumero(`${num2 / num1}`); 
            break;
    }
    setnumeroAntierior('0');

  }

  return {
    numero,
    numeroAntierior,
    limpiar,
    del,
    armarNumero,
    positivoNegativo,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    calcular
  }

}

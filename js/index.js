//CREACION DE UN SISTEMA DE ALUMNOS, DONDE PODRAN INGRESAR SUS NOTAS Y REVISAR SUS PROMEDIOS
// ASI COMO TAMBIEN PODRAN REVISAR SI POR MEDIO DE SU PROMEDIO ESTAN CAPACITADOS PARA LAS CARRERAS DE:
//ABOGACIA, MEDICINA,INGENIERIA,PSICOLOGIA//

let seguir=0;
let notaUno=0;
let notaDos=0;
let notaTres=0;

//FUNCION DE ABOGACIA//
function Abogacia(promedio){
    if (promedio>=7 && promedio<=10){
        console.log("Si aplica para Abogacia");
    }
    else{
        console.log("Su promedio es muy bajo para Abogacia")
    }
}

//FUNCION DE MEDICINA//
function Medicina(promedio){
    if (promedio>=9 && promedio<=10){
        console.log("Si aplica para Medicina");
    }
    else{
        console.log("Su promedio es muy bajo para Medicina")
    }
}

//FUNCION DE INGENIERIA//
function Ingenieria(promedio){
    if (promedio>=7 && promedio<=10){
        console.log("Si aplica para Ingenieria");
    }
    else{
        console.log("Su promedio es muy bajo para Ingenieria")
    }
}

//FUNCION DE PSICOLOGIA//
function Psicologia(promedio){
    if (promedio>=5 && promedio<=10){
        console.log("Si aplica para Psicologia");
    }
    else{
        console.log("Su promedio es muy bajo para Psicologia")
    }
}

//SISTEMA WAR//
console.log("Bienvenidos al sistema WAR para alumnos");
let nombre_alumno=prompt("Ingrese el nombre del alumno: ");
while (seguir!="no"){ 
    //INGRESO DE LAS NOTAS//
    notaUno=prompt("Ingrese la primera nota: (Del 1 al 10) ");
    notaUno=parseInt(notaUno);
    if(notaUno<=10){
        notaDos=prompt ("Ingrese la segunda nota: (Del 1 al 10) ");
        notaDos=parseInt(notaDos);
        if (notaDos<=10){
            notaTres=prompt("Ingrese la tercera nota: (Del 1 al 10) ");
            notaTres=parseInt(notaTres);
            if (notaTres<=10){
                suma=notaUno+notaDos+notaTres;
                //PROMEDIO//
                promedio=suma/3;
                //IMPRESIONES//
                let carrera=prompt("A cual carrera desea aplicar? 1) Abogacia. 2) Medicina. 3) Ingenieria. 4) Psicologia.")
                console.log(nombre_alumno,"Su primera nota es:",notaUno);
                console.log("Su segunda nota es:",notaDos);
                console.log("Su tercera nota es:",notaTres);
                console.log ("El promedio de notas es:",promedio);
                //LLAMADO DE FUNCIONES//
                if(carrera=="1"){
                    Abogacia(promedio);
                    break;
                }
                else if(carrera=="2"){
                    Medicina(promedio);
                    break;
                }
                else if(carrera=="3"){
                    Ingenieria(promedio);
                    break;
                }
                else if(carrera=="4"){
                    Psicologia(promedio);
                    break;
                }
                else{
                    console.log("Dato incorrecto");
                }
            }
            else{
                console.log("Dato incorrecto");
            }
        }
        else{
            console.log("Dato incorrecto");
        }
    }
    else{
        console.log("Dato incorrecto");
    }
    seguir=prompt("Tuviste un error, desea seguir el procedimiento, si o no? ");
}






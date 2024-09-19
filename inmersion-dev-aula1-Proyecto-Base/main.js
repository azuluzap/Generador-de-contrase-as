let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');


const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){

    let numeroDigitado = parseInt(cantidad.value);
    
    if(numeroDigitado < 6){
        alert("la cantidad de caracteres tiene que ser mayor que 6");
    }

    let password = '';
    for(let i = 0; i < numeroDigitado; i++){
        
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];

        password+=caracterAleatorio;
    }
    contrasena.value = password;
    console.log(password);
    //console.log(password.includes('b'));
    let categoriaContrasena = 0;
    let tieneMayuscula = 0;
    let tieneMinuscula = 0;
    let tieneNumero = 0;
    let tieneEspecial = 0;

    for(let j = 0; j < cadenaCaracteres.length; j++){
        
        if(password.includes(cadenaCaracteres[j]) && j < 26){
            console.log("mayusculaaaaa");
            tieneMayuscula = 1;
        }

        if(password.includes(cadenaCaracteres[j]) && j > 26 && j < 52){
            console.log('minus');
            tieneMinuscula = 1; 
        }
                
        if(password.includes(cadenaCaracteres[j]) && j > 51 && j < 62){
            console.log("Numero");
            tieneNumero = 1; 
        }
                    
        if(password.includes(cadenaCaracteres[j]) && j > 61 && j < 72){
            console.log('especial');
            tieneEspecial= 1; 
        }
                     
    }
    categoriaContrasena = tieneMayuscula + tieneMinuscula + tieneNumero + tieneEspecial;
    if(categoriaContrasena == 4){
        console.log('Contraseña super fuerte');
    }
    else{
        console.log('Contraseña super debil');
    }

}

function limpiar(){
    cantidad.value = "";
    contrasena.value = "";
}



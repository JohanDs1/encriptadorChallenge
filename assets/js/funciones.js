const text = document.querySelector(".text-area");
const text2 = document.querySelector(".caja");
const btnEncrip = document.querySelector(".encriptar");
const btnDesencrip = document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");
const clearAll = document.querySelector(".clearAll")
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/




clearAll.addEventListener("click",()=>{
    text.value = "";
})


btnEncrip.addEventListener("click",(evento)=>{
    evento.preventDefault();
    encriptarText();
});
btnDesencrip.addEventListener("click",()=>{
    desencriptarText();
});

const encriptarText = ()=>{
    const texto = text.value;
    const reemplazos  = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",  
        u: "ufat"
    }
    const textoEncrip = Array.from(texto).map(caracter => reemplazos[caracter] || caracter).join('');
    text2.value = textoEncrip;
    text.value = '';
}




    
    const desencriptarText = () => {
        const texto = text.value;
    
        let textoDesencrip = texto.replace(/ai/g, 'a')
                                  .replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    
        console.log(textoDesencrip);
        text2.value = textoDesencrip;
        text.value = '';
    };

    btnCopiar.addEventListener("click",()=>{
        const texto = text2.value;
        navigator.clipboard.writeText(texto).then(() => {
            alert("Texto copiado al portapapeles: " + texto);
        }).catch(error => {
            alert("Error al copiar al portapapeles: " + error);
        });
    })
    


    //Redimensionar textareas
      function updateTextareaAttributes(textareaId, mobileConfig, desktopConfig) {
        const textarea = document.getElementById(textareaId);
        if (window.innerWidth < 640) { // Pantallas pequeñas (móviles)
          textarea.setAttribute('cols', mobileConfig.cols);
          textarea.setAttribute('rows', mobileConfig.rows);
        } else { // Pantallas medianas y grandes (computadoras)
          textarea.setAttribute('cols', desktopConfig.cols);
          textarea.setAttribute('rows', desktopConfig.rows);
        }
      }
    
      function setupResponsiveTextareas(textareas) {
        textareas.forEach(textarea => {
          updateTextareaAttributes(textarea.id, textarea.mobileConfig, textarea.desktopConfig);
        });
    
        window.addEventListener('resize', () => {
          textareas.forEach(textarea => {
            updateTextareaAttributes(textarea.id, textarea.mobileConfig, textarea.desktopConfig);
          });
        });
      }
    


      // Configuración para cada textarea
      const textareasConfig = [
        {
          id: 'textarea1',
          mobileConfig: { cols: 36, rows: 10 },
          desktopConfig: { cols: 63, rows: 17 }
        },
        {
          id: 'textarea2',
          mobileConfig: { cols: 35, rows: 4 },
          desktopConfig: { cols: 27, rows: 17 }
        }
      ];
    
      // Ejecutar la función de configuración
      setupResponsiveTextareas(textareasConfig);
    
      //Quitar letras de abajo

      













 
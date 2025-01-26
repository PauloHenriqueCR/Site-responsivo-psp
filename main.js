let botao = document.querySelector(".bi");
let menuLateral = document.querySelector(".menu-lateral")
let itemMenu = document.querySelectorAll(".item-menu")

/* botoes slide */
let imgSlider = document.querySelectorAll(".slide-box");
let btnNav = document.querySelectorAll(".btn-nav");
let btnAnterior = document.querySelector("#anterior");
let btnProx = document.querySelector("#proximo");

// text-slider
let textJogos = document.querySelectorAll(".text-jogos");


let contador = 0;
let imgAtiva = imgSlider.length

/*botoes slider */
btnProx.addEventListener("click",function(){

    if(contador >= imgAtiva){
        contador = 0;
    }

   textJogos.forEach((valor,indice,array)=>{
     array[indice].classList.remove("select")
   })

   imgSlider.forEach((valor,indice,array)=>{
        array[indice].classList.remove("select")
   }) 

   btnNav.forEach((valor,indice,array) =>{
    array[indice].classList.remove("ativo");}
)
   imgSlider[contador].classList.add("select");
   btnNav[contador].classList.add("ativo")
   textJogos[contador].classList.add("select")

   contador++
   

})

btnAnterior.addEventListener("click",function(){

    if(contador <= 0 ){
        contador = imgAtiva;
    }

    contador--

    textJogos.forEach((valor,indice,array)=>{
        array[indice].classList.remove("select")
      })

   imgSlider.forEach((valor,indice,array)=>{
        array[indice].classList.remove("select")
   }) 
   btnNav.forEach((valor,indice,array) =>{
    array[indice].classList.remove("ativo");
})

   imgSlider[contador].classList.add("select");
   btnNav[contador].classList.add("ativo")
   textJogos[contador].classList.add("select")
  
})

btnNav.forEach((valor,indice,array)=>{

    array[indice].addEventListener("click",function(){

        textJogos.forEach((valor,indice,array)=>{
            array[indice].classList.remove("select")
          })
    
        
        btnNav.forEach((valor,indice,array) =>{
            array[indice].classList.remove("ativo");
        })

        imgSlider.forEach((valor,indice,array) =>{
            array[indice].classList.remove("select");
        })
         imgSlider[indice].classList.add("select")
         btnNav[indice].classList.add("ativo");
         textJogos[indice].classList.add("select")
    
    })
    
    
})


//botoes menu

function selectLink(){
itemMenu.forEach(element => {
    element.classList.remove("ativo");
})

this.classList.add("ativo");
 
};


itemMenu.forEach((item) =>{
 item.addEventListener("click",selectLink);
}

)
botao.addEventListener("click", function(e){
    
    if(menuLateral.style.width === "60px"){
   
        menuLateral.style.width = "300px";
    
   }else{
        menuLateral.style.width = "60px";
  
   }
}


)
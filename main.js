
import { data } from "./js/data.js";

  
// let obj = {};
// document.addEventListener("DOMContentLoaded",()=> {
//     numerito_arriba()
//     openAndCloseCart();
//     pintada_final_cartas()
// }) 


// // ABRIR Y CERRAR EL CARRO

// function openAndCloseCart() {
//   let sidebarCart = document.querySelector(".sidebar_carton")
    
//     let car = document.querySelector(".carrito")

//     car.addEventListener("click", ()=>{
//       sidebarCart.classList.toggle("show_sidebar_carton")
//     })
// }



//pintar numero--------------------------------

// function numerito_arriba() {
//   document.addEventListener("click", (event) => {
//   if(event.target.classList.contains("button")){
//      let idUser = event.target.parentElement.dataset.iduser

//      let currentMerch = "";
//      for (let i = 0; i < items.length; i++) {
//           if (items[i].id === parseInt(idUser)) {
//               currentMerch = items[i]
//           }
//      }
//      if (obj[currentMerch.id]) {
//       if (obj[currentMerch.id].amount === obj[currentMerch.id].stock ) {
//         alert("Se agotó el  stock")
//       }
//         obj[currentMerch.id].amount++;
//      } else {
//         obj[currentMerch.id] = currentMerch;
//         obj[currentMerch.id].amount = 1;
//      }
     
//      amountCart()
//   }
// });
// }





//AUMENTAR EL VALOR DE LAS COSAS EN EL CARRO

// function amountCart() {
//   let amountValue = document.querySelector("#amount")
//   amountValue.textContent = Object.entries(obj).length
// }







//CREAR TARJETAS Y ESTILO

// let verga = list_items = [
//   {
//     id: 10,
//     name: 'Hoodies',
//     price: 14.00,
//     image: 'https://academlo-store.netlify.app/assets/img/featured1.png',
//     category: 'hoodies',
//     stock: 10,
//     ids: 100
//   },
//   {
//     id: 20,
//     name: 'Shirts',
//     price: 24.00,
//     image: 'https://academlo-store.netlify.app/assets/img/featured2.png',
//     category: 'shirts',
//     stock: 15,
//     ids: 200

//   },
//   {
//     id: 30,
//     name: 'Sweatshirts',
//     price: 24.00,
//     stock: 20,
//     image: 'https://academlo-store.netlify.app/assets/img/featured3.png',
//   }
// ]


//pintar cartas-------------------

// let coleccion = [];


// let imprimirProductosEnCarro = document.getElementById("contenor_carrito_imprimir")

// function aumentar_cosas_en_carro(){
//   let html = "";

//   list_items.forEach(({id, name, price, stock, image}) => {
//     html += `<div class="productos_carrito id="${id}">
//     <img src="${image}" alt="${name}">
//     <div class="main_content_carrito">
//         <h4 class="titulo_carrito_producto">${name}</h4>
//         <p class="merch_stock_carrito">Stock: ${stock} <span class="value_carrito">${price}</span> </p>
//         <p class="total_a_pagar"> Subtotal:</p>
//         <div class="aumentar_disminuir">
//             <div class="menos_carrito">
//               <svg class= "minus_car" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 11.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
//             </div>
//             <p class="aumentar_cantidad_producto_carrito">${price} units</p>
//             <div class="mas_carrito">
//               <svg class="plus_bar" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg>
//             </div>
//         </div>
//     </div>
//     <div class="trash_dad">
//         <svg class="trash_can" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm-14-2.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5h-14v16.5zm5-18.5h4v-1h-4v1z"/></svg>
//     </div>
//   </div>
//   </div>`
//   });
  
//   for (let i = 0; i < coleccion.length; i++) {
    // let final_amount = coleccion[i].stock * coleccion[i].price
    
    
//   }
//   imprimirProductosEnCarro.innerHTML = html;
 
// }





//AUMENTAR EL CONTENIDO DE LAS COSAS EN EL CARRO CUANDO SE DE EL CLICK

// function pintada_final_cartas() {
  
// let agregar_coleccion_al_carro = document.querySelector(".merch_bar")
// agregar_coleccion_al_carro.addEventListener("click", (e) =>{
//   if(e.target.classList.contains("button")){
//     const id = parseInt(e.target.dataset.id)
//     for (let i = 0; i < list_items.length; i++) {
//       if(list_items[i].id === id){
//         coleccion.push(list_items[i])
//       }
//     }
//   }
//   aumentar_cosas_en_carro();
// });

// }



// delete part-------------------



// let vergaFunction = document.querySelector(".sidebar_carton")
//   vergaFunction.addEventListener("click",(e) =>{
//     if(e.target.classList.contains("trash_can")){
//       let p = e.target.parentElement.id;
//       for (let i = 0; i < list_items.length; i++) {
//         if(list_items[i].id === p){
//           delete obj[p]
//         }
//       }
//   }
// });


// const niIdea = contenor_class.addEventListener(("click"))


const contentMerch = document.querySelector(".merch_bar");
const sidebarCart = document.querySelector(".sidebar_carton")
    
const car = document.querySelector(".carrito")
const contenor_class = document.querySelector(".contenor_carrito_imprimir_class")
const shoppingTotal  = document.querySelector(".shoppingTotal")

const btnBuy = document.querySelector("#btnBuy");

// const sumaRestaBorrar = document.querySelector(".contenor_carrito_imprimir_class")
// const sumaRestaBorrar = document.addEventListener("click")




//MOSTRAR EN EL CARRITO ID

const shoppingObj = {}
contentMerch.addEventListener("click", (event) => {
  if (event.target.classList.contains("puto_suma_boton")) {
      const id = parseInt(event.target.parentElement.id);
      const [currentProduct] = data.filter((n)=> n.id === id)
      if(shoppingObj[id]){
        if (shoppingObj[id].stock > shoppingObj[id].amount ) {
          shoppingObj[id].amount++
        }else{
          alert("Ya no tenemos más")
        }
      }else{
        shoppingObj[id] = currentProduct
        shoppingObj[id].amount = 1
      }



      printTotalAmountInCar()
      printShoppingCart()
      priceTotal()
      
}})




//suma resta quitar

contenor_class.addEventListener(("click"), (event) => {

  //resta
  if (event.target.classList.contains("minus_car")) {
      const id = parseInt(event.target.parentElement.parentElement.id)
      if (shoppingObj[id].amount === 0) {
        let respuestaUser = confirm("¿Seguro que quieres eliminar este producto?")
        if (respuestaUser) {
          delete shoppingObj[id]
        }
      }else{
        shoppingObj[id].amount--
      }
  }
  //suma
  if (event.target.classList.contains("plus_bar")) {
    const id = parseInt(event.target.parentElement.parentElement.id)
    if (shoppingObj[id].stock > shoppingObj[id].amount ) {
      shoppingObj[id].amount++
    }else{
      alert("Ya no tenemos más")
    }
  }

 //elimina
  if (event.target.classList.contains("trash_can")) {
    const id = parseInt(event.target.parentElement.parentElement.id)
    delete shoppingObj[id]
  }

  printTotalAmountInCar()
  printShoppingCart()
  priceTotal()
} )




//numerito arriba car
function printTotalAmountInCar() {
  const amount_Merch= document.querySelector(".amountMerch")
      amount_Merch.textContent = Object.values(shoppingObj).length;
      
}



//shoppingTotal


function priceTotal(){
  const shoppingArray = Object.values(shoppingObj) 

      let suma = 0
      shoppingArray.forEach((x) => {
        suma += x.amount * x.price
      })

      shoppingTotal.textContent = suma;
}


//PINTAR DENTRO DEL CARRITO

function printShoppingCart(){
  const shoppingArray = Object.values(shoppingObj)
      let html ="";
      shoppingArray.forEach(({ id, name, price, stock, urlImages, amount })=>{
          html +=
          `<div class="productos_carrito">
                <div class="shopping__img">
                  <img src="${urlImages}" alt="${name}">
                </div>
              <div class="main_content_carrito">
                    <h4 class="titulo_carrito_producto">${name}</h4>
                    <p class="total_a_pagar"> Subtotal: ${price}</p>
                    <p class="merch_stock_carrito">Stock: ${stock} <span class="value_carrito">${price}</span> </p>
                    
                <div class="aumentar_disminuir" id="${id}">
                      <div class="menos_carrito">
                            <svg class= "minus_car" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 11.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
                      </div>
                          <p class="aumentar_cantidad_producto_carrito">${amount} units</p>
                      <div class="mas_carrito">
                            <svg class="plus_bar" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg>
                      
                      </div>
                      <div class="trash_dad">
                        <svg class="trash_can" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm-14-2.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5h-14v16.5zm5-18.5h4v-1h-4v1z"/></svg>
                      </div>
                </div>
                
              </div>
            </div>`
      })


      contenor_class.innerHTML = html
    }

  
  
  
    
    



// PINTAR CARTAS EN EL BODY


function printMerch(array) {
  let html = "";

  array.forEach(({ id, name, price, stock, urlImages }) => {
      html += 
      `<div class="merch"> 
          <div class="image">
              <img class= "shirt_image" src="${urlImages}" alt="">
          </div>
          <img src="" alt="">
          <div class="text_merch">
              <div class="price">
                  <p><span>$${price}</span> <span class="span1" id="stock">Stock: ${stock}</span></p>
              </div>
              <div class="merch_type">
                  <p>${name}</p>
              </div>
          </div>
          <div class="button" id="${id}">
            <svg class= "puto_suma_boton" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
          </div>
       
      </div>`
  });

  contentMerch.innerHTML = html;
}

printMerch(data);








//CARRITO ABRIR Y CERRAR EL CARRO

function openAndCloseCart() {

    car.addEventListener("click", ()=>{
      sidebarCart.classList.toggle("show_sidebar_carton")
    })
}
openAndCloseCart()






btnBuy.addEventListener("click", () => {
  const res = confirm("Desea encargar esta comida?");

  if (res) {
      const shopping = Object.entries(shoppingObj);

      const newArray = [];

      data.forEach((element) => {
          for (let i = 0; i < shopping.length; i++) {
              if (element.id == shopping[i][0]) {
                  newArray.push({
                      ...element,
                      stock: element.stock - shopping[i][1].amount,
                  });
                  return;
              } else {
                  newArray.push(element);
                  return;
              }
          }
      });

      console.log(newArray);

      shoppingTotal.textContent = 0;
      infoQuatityProducts.textContent = 0;

      // printFood(res);
  }
});

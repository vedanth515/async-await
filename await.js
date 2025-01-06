

// async function a() {
//     let ticketbooked = new Promise((resolve,reject)=>{
//         if(1){
//             setTimeout(()=>{
//                 alert("ticket booked")
//             })
//         }else{
//             setTimeout(()=>{
//                 alert("ticket not booked")
//             })
//         }
//     })
// }
// a()



// async function a(){
//     let ticketBook=await fetch("https://fakestoreapi.com/products");
//     let ticketBook2=await fetch("https://fakestoreapi.com/products");
//     let finalData= await ticketBook.json()
//     let finalData2= await ticketBook2.json()
//     let dd="allmyData"   
//     console.log(finalData);
//     console.log(finalData2);
//     console.log(dd); 
// }

// a()




// // Stage 1: Product Ordered
// const productOrdered = new Promise((resolve, reject) => {
//     const orderSuccess = true; // Set to false to simulate failure in ordering
//     setTimeout(() => {
//       if (orderSuccess) {
//         resolve("Product ordered successfully!");
//       } else {
//         reject("Failed to order the product.");
//       }
//     }, 1000); // Simulating a delay for placing an order
//   });

//   // Stage 2: Product Shipped
//   const productShipped = new Promise((resolve, reject) => {
//     const shippingSuccess = true; // Set to false to simulate shipping failure
//     setTimeout(() => {
//       if (shippingSuccess) {
//         resolve("Product has been shipped!");
//       } else {
//         reject("Failed to ship the product.");
//       }
//     }, 2000); // Simulating a delay for shipping
//   });

//   // Stage 3: Product Delivered
//   const productDelivered = new Promise((resolve, reject) => {
//     const deliverySuccess = false; // Set to false to simulate delivery failure
//     setTimeout(() => {
//       if (deliverySuccess) {
//         resolve("Product delivered successfully!");
//       } else {
//         reject("Failed to deliver the product.");
//       }
//     }, 3000); // Simulating a delay for delivery
//   });

//   // Chain the promises together
//   productOrdered
//     .then((result) => {
//       console.log(result); // Product ordered
//       return productShipped; // Proceed to shipping
//     })
//     .then((result) => {
//       console.log(result); // Product shipped
//       return productDelivered; // Proceed to delivery
//     })
//     .then((result) => {
//       console.log(result); // Product delivered
//     })
//     .catch((error) => {
//       console.error("Error:", error); // Handle any errors in the chain
//     });




async function vedanth(){
    let data=await fetch('https://fakestoreapi.com/products')
    let newdata=await data.json()
    console.log(newdata);
    

    let container=document.createElement("div")
    container.style.display="flex"
    container.style.flexWrap="wrap"
    container.style.width="400px"
    container.style.height="400px"

    newdata.forEach(z => {
    console.log(z)
    let cards=document.createElement("div")
    cards.innerHTML=`       <img src="${z.image}" width=300px/ height=300px>
                            <h2>${z.title}</h2> <p>${z.price}</p> 
                            <p>${z.category}</p>
    `
    container.appendChild(cards)
    document.body.append(container)
});
};

vedanth()



// function abc(){
//     console.log(x);
    
// }
// abc()
// var x=400;
// var x=200;
// abc()


// function foo(a,b,c){
//     arguments[0]=10;
//     console.log(a,arguments[0]);
    
// }
// foo(1,2,3)

// let a=10;
// if(true){
//     let a=20;
// }
// console.log(a);










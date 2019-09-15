var httpRequest = new XMLHttpRequest();

httpRequest.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product",true);
httpRequest.send();


var resp;
var clothingSection = document.getElementById("clothing");
httpRequest.onreadystatechange = function(){
  if(this.readyState === 4){
    if(this.status ===200){
      // console.log("Call was successful");
      // console.log("Response =>",JSON.parse(this.responseText));
      resp = JSON.parse(this.responseText);
      console.log(resp);
      for(var i=0;i<resp.length;i++){
        clothingSection.appendChild(clothing(resp[i],resp[i].preview,resp[i].name,resp[i].brand,resp[i].price));
      }
    }else{
      console.log("Call failed");
    }
  }
}

// clothing function
/*
<div>
  <a href="/index.html">
    <img src="../images/models/lalu.jpeg" alt="">
    <span class="card-details">
      <p class="description">
          Color Block Men Round Neck Red, White, Dark Blue T-Shirt  
      </p>
      <p class="brand">
        Wearza 
      </p>
      <p class="rup">₹289</p>
    </span>
  </a>
</div>
*/
function clothing(obj,image_src,product_name,product_brand,price){
  var div = document.createElement("div");
  var detail = document.createTextNode(obj);
  var link = document.createElement("a");
  link.target ="_blank"
  link.href="../code/ProductDetailPage.html?"+obj
  link.className="link"

  var img = document.createElement("img");
  img.src = image_src;
  
  var span = document.createElement("span");
  span.className ="card-details"

  var descP = document.createElement("p");
  descP.className = "description";
  var descTextP = document.createTextNode(product_name);
  descP.appendChild(descTextP)
  
  var brandP = document.createElement("p");
  brandP.className= "brand"
  var brandTextP = document.createTextNode(product_brand);
  brandP.appendChild(brandTextP);
  
  var priceP = document.createElement("p");
  priceP.className="rup"
  var priceTextP = document.createTextNode("₹"+price);
  priceP.appendChild(priceTextP);
  span.appendChild(descP);
  span.appendChild(brandP);
  span.appendChild(priceP);
  
  link.appendChild(img);
  link.appendChild(span)
  div.appendChild(link);
  div.appendChild(detial)
  return div;
}
// console.log(clothingSection);


let bagItems;
onLoad();

function onLoad(){    
    bagItems=JSON.parse(localStorage.getItem('bagItems')) || [];

    displayItemsOnHomePage();
    displayBagIcon();
}
function addToBag(itemId){

    let itemExists=bagItems.includes(itemId);
    if(itemExists){
        alert('Item already in bag');
        return;
    }   
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    console.log(bagItems);
    displayBagIcon();

}

function displayBagIcon(){
    let bagItemsCountElement=document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemsCountElement.style.visibility='visible';
    }else{
        bagItemsCountElement.style.visibility='hidden';
    }

    bagItemsCountElement.innerText=bagItems.length;
}

function displayItemsOnHomePage(){
        let itemsContainer=document.querySelector('.items-container');
        if(!itemsContainer){
            return;
        }   
    let innerHTML='';
    items.forEach((item)=>{
        innerHTML+=`<div class="item-container">
                        <img class="item-image"  src=${item.image} alt="Item img">
                        <div class="rating">
                            ${item.rating.stars} &#11088 | ${item.rating.count}
                        </div>
                        <div class="company-name">${item.company}</div>
                        <div class="item-name">${item.item_name}</div>
                        <div class="price">
                            <span class="current-price">Rs ${item.current_price}  </span>
                            <span class="original-price">Rs ${item.original_price}</span>
                            <span class="discount">(${item.discount_percentage}% OFF)</span>
                        </div>
                        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
                </div>`;
    });
    itemsContainer.innerHTML=innerHTML;
}
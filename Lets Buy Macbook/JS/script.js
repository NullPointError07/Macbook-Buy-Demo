function getProductCost(upgrade, perUpgradeCost){
    const specsInputId = document.getElementById(upgrade);
    const specsUpgrade = specsInputId.innerText;
    const specsUpgradeCost = perUpgradeCost;
    specsInputId.innerText = specsUpgradeCost;
    totalCost();
}
function totalCost(){
    const basePrice = parseInt(document.getElementById('base-price').innerText);
    const extraMemoryCost = parseInt(document.getElementById('upgraded-memory-cost').innerText);
    const extraStorageCost = parseInt(document.getElementById('upgraded-storage-cost').innerText);
    const deliveryChargeCost = parseInt(document.getElementById('delivery-charge-cost').innerText);
    const totalPrice = basePrice + extraMemoryCost + extraStorageCost + deliveryChargeCost;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('discount-total-price').innerText = totalPrice;
    return totalPrice;
}

function getDiscountedPrice(){
    const totalPriceValue = parseInt(document.getElementById('total-price').innerText);
    const promoCodeId = document.getElementById('coupon-code');
    let promoCodeValue = promoCodeId.value;
    if(promoCodeValue.toLowerCase() == "stevekaku"){
        let discountPrice = totalPriceValue - (totalPriceValue*0.20);
        const discountPriceId = document.getElementById('discount-total-price');
        discountPriceId.innerText = discountPrice;
        document.getElementById('promo-message').innerHTML = '<i class="fas fa-check-circle"></i> Promo Code Applied'
        document.getElementById('promo-message').classList.add('text-success');
        document.getElementById('promo-message').classList.remove('text-danger');
        document.getElementById('promo-btn').setAttribute('disabled', true);
        promoCodeId.value= '';
    } 
    else{
        document.getElementById('promo-message').innerHTML = '<i class="fas fa-times-circle"></i> Invalid Promo Code!'
        document.getElementById('promo-message').classList.add('text-danger');
        promoCodeId.value= '';
    }
}

// for memory 
document.getElementById('memory-8gb-btn').addEventListener('click', function(){
    getProductCost('upgraded-memory-cost', 0);
})
document.getElementById('memory-16gb-btn').addEventListener('click', function(){
    getProductCost('upgraded-memory-cost', 180);
})


// for SSD
document.getElementById('ssd-256gb-btn').addEventListener('click', function(){
    getProductCost('upgraded-storage-cost', 0);
})
document.getElementById('ssd-512gb-btn').addEventListener('click', function(){
    getProductCost('upgraded-storage-cost', 100);
})
document.getElementById('ssd-1tb-btn').addEventListener('click', function(){
    getProductCost('upgraded-storage-cost', 180);
})


// for Delivery
document.getElementById('free-delivery-btn').addEventListener('click', function(){
    getProductCost('delivery-charge-cost', 0);
})
document.getElementById('charge-delivery-btn').addEventListener('click', function(){
    getProductCost('delivery-charge-cost', 20);
})

// for discount
document.getElementById('promo-btn').addEventListener('click', function(){  
    getDiscountedPrice()
})
function myOrder(crust,size,number,toppings){
    this.pizzaCrust=crust;
    this.pizzaSize=size;
    this.Number=number;
    this.Toppings=toppings;
}
myOrder.prototype.fullOrder= function(){
    return "You've  ordered "+this.Number+" "+this.pizzaSize+" "+this.pizzaCrust + " with " + this.Toppings;
}

$(document).ready(function(){
    $("#submit").click(function(event){
        event.preventDefault();
        var pizzaCrust =$("select#don1").val();
        var pizzaSize = $("select#don2").val();
        var Numbers = $("input#mac1").val();
        var Toppings = $("select#quatro").val();
        if((pizzaCrust==='Detroit')&&(pizzaSize==='large')){
            newPrice=750;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Detroit')&&(pizzaSize==='medium')){
            newPrice=900;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Detroit')&&(pizzaSize==='small')){
            newPrice=1000;
             var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='New York-Style Pizza')&&(pizzaSize==='large')){
            newPrice=500;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='New York-Style Pizza')&&(pizzaSize==='medium')){
            newPrice=1000;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='New York-Style Pizza')&&(pizzaSize==='small')){
            newPrice=1500;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='St. Louis Pizza')&&(pizzaSize==='large')){
            newPrice=450;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='St. Louis Pizza')&&(pizzaSize==='medium')){
            newPrice=900;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='St. Louis Pizza')&&(pizzaSize==='small')){
            newPrice=1350;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Stuffed')&&(pizzaSize==='large')){
            newPrice=700;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Stuffed')&&(pizzaSize==='medium')){
            newPrice=1400;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Stuffed')&&(pizzaSize==='small')){
            newPrice=2100;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Deep Dish Pizza')&&(pizzaSize==='large')){
            newPrice=800;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Deep Dish Pizza')&&(pizzaSize==='Medium')){
            newPrice=1600;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Deep Dish Pizza')&&(pizzaSize==='small')){
            newPrice=2400;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Sicilian Pizza')&&(pizzaSize==='large')){
            newPrice=600;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Sicilian Pizza')&&(pizzaSize==='Medium')){
            newPrice=1200;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Sicilian Pizza')&&(pizzaSize==='small')){
            newPrice=1800;
            var newTotal= newPrice*Numbers;
        }else{
            alert("Input not found!! please try again.")
        }

        var fullPizza = new myOrder (pizzaCrust,pizzaSize,Numbers,Toppings);

        $("div#cinco").append("<p>" + fullPizza.fullOrder() + "</p>");
        $("div#cinco").append("<p>"+"You will pay " + newTotal + "</p>");
        
    });
    $("#view").click(function(){
        if($('#delivery1:checked').val()){
            var place =prompt('please enter your location for pizza delivery')
            if(place!==null){
                alert(' Delivery fee is 150 ,your pizza will be delivered to' +'  ' +  place + '.' + ' Thank you.')
            }else{
                alert('please input a valid location ')
            }
            
        }  
    });
        
});
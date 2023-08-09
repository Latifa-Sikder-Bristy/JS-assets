/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200.
    first 100 ticket will be 100tk/per 
    second the rest of 99tk/per
3. if you purchase more than 200 tickets
    first 100 ----> 100tk/per
    100 - 200 ----> 90tk/per
    200++ ----> 70tk/per
*/

function ticketPrice(ticketQty){
    const first100rate = 100;
    const second100rate = 90;
    const restTicketRate = 70;

    if(ticketQty <= 100){
        const price = ticketQty * first100rate;
        return price;
    }else if(ticketQty <= 200){
        //1 to 100
        const first100price = 100 * first100rate;
        //101 to rest
        const restTicketQty = ticketQty - 100;
        const restTicketPrice = restTicketQty * second100rate; 
        const price = first100price + restTicketPrice;
        return price;
    }else if(ticketQty > 200){
        /* //1 to 100
        const first100price = 100 * first100rate;
        //101 to 200
        const second100Qty = ticketQty - 100;
        const second100price = second100Qty * second100rate;
        //201 to rest     
        const restTicketQty = second100Qty - 100;
        const restTicketPrice = restTicketQty * restTicketRate;   
        const price = first100price + second100price + restTicketPrice; */

        const first100price = 100 * first100rate;
        const second100price = 100 * second100rate;
        const restTicketQty = ticketQty - 200;

        const restTicketPrice = restTicketQty * restTicketRate;
        const price = first100price + second100price + restTicketPrice;

        return price;
    }
}

const totalPrice = ticketPrice(200);
console.log(totalPrice);
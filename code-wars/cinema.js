function movie(card, ticket, perc) {
    let n = card
	for(let i = 1;;i++){
        n += ticket*Math.pow(perc,i)
        if(n<ticket*i) {
            console.log(i)
            break
        }
    }
}

function newPrice(perc, newPerc) {
	return perc * newPerc;
}

// movie(500, 15, 0.9);
movie(100, 10, 0.95);

// system b < system a
// 500 + n

// System A : buy a ticket (15 dollars) every time
// System B : buy a card (500 dollars) and every time
//     buy a ticket the price of which is 0.90 times the price he paid for the previous one.
// System A : 15 * 3 = 45
// System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)

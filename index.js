/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);
*/


function writeCards(names, eventName) {

    const messages = []
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }



    return messages;

}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));








function countDown(countDownStart) {
    while (countDownStart >= 0) {
        console.log(countDownStart --)
    }
    
}



countDown(13)
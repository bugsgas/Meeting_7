// 540 Hari

const days = 540
const calculateTiming = d => {
    let months = 0, years = 0, days = 0, weeks = 0;
    while(d) {
        if(d>= 365){
            years++;
            d -= 365;
        }else if(d>= 30){
            months++;
            d -= 30;
        }else if(d>= 7){
            weeks++;
            d-= 7;
        }else{
            days++;
            d--;
        }
    };
    return {
        years, months, weeks, days
    };
};

console.log(calculateTiming(days));

// Show Yesterday, Today, Tommorow Date
const today = new Date();

const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

console.log('Yesterday: ', yesterday.toDateString());

console.log('Today: ', today.toDateString());

console.log('Tomorrow: ', tomorrow.toDateString());
// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateClock(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    // Maintain 2 digit format
    hours = hours < 10 ? "0"+hours : hours;
    minutes = minutes < 10 ? "0"+minutes : minutes;
    seconds = seconds < 10 ? "0"+seconds : seconds;

    // AM PM 12 hr format
    
    // const ampm = hours >= 12 ? "PM" : "AM";
    // hours = hours % 12 || 12;

    const time24 = `${hours}:${minutes}:${seconds}`;
    // const time12 = `${hours}:${minutes}:${seconds} ${ampm}`;

    console.log(time24);
    // console.log(time12);
}

setInterval(updateClock, 1000);
updateClock();

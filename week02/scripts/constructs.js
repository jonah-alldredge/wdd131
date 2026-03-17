const days = 6;
const limit = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const options = { weekday: "long" };
// const options = { weekday: "short" }; This will give it an abbreviated format like: Mon, Tues, Wed, etc
let todayString = new Intl.DateTimeFormat("en-us", options).format(today); // if you were to get rid of the options variable it would print out 3/12/26 and not give you a specific day

// FOR LOOP
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < limit) {
        console.log(studentReport[i]);
    }
}

// WHILE LOOP
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < limit) {
        console.log(studentReport[i]);
    }
    i++;
}

// FOR EACH LOOP
studentReport.forEach(function (item) {
    if (item < limit) {
        console.log(studentReport[i]);
    }
    
});

// FOR...IN LOOP
for (let i in studentReport) {
    if (studentReport[i] < limit) {
        console.log(studentReport[i])
    }
}

daysOfWeek.forEach(function (days) {
    console.log(days);
});
    
// These do the same output, one is used with "" and the other with ``
document.getElementById("today").innerHTML = "Today is: " + todayString;
document.getElementById("today").innerHTML = `Today is <strong>${todayString}</strong>`;

for (let i = 1; i <= days; i++){
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + i);
    let futureDay = new Intl.DateTimeFormat("en-us", options).format(nextDay);
    const item = document.createElement("li");
    item.textContent = futureDay;
    // console.log(item);
    document.querySelector("ul").append(item);
}


// Psuedo-classes start with one :
// They describe a special state of an existing element
    //modify how existing elements behave or appear in different states

// Psuedo-Elements start with 2 ::
// They style or create parts of an element that doesn't exist in HTML directly
    // Can add or style specific parts of an element's content
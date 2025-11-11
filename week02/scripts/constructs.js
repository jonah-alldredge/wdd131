const days = 6;
const limit = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

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

// Psuedo-classes start with one :
// They describe a special state of an existing element
    //modify how existing elements behave or appear in different states

// Psuedo-Elements start with 2 ::
// They style or create parts of an element that doesn't exist in HTML directly
    // Can add or style specific parts of an element's content
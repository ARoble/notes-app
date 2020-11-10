 //const { parse } = require("yargs");

// const book ={
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const fs = require('fs');
// // data buffer come out as number 
// const dataBuffer = fs.readFileSync('./1-json.json')
// // so need to change the numbers to a string 
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)
// data.name = 'roble';
// data.age= '21'
// const final = JSON.stringify(data); 
// //console.log(JSON.stringify(data)); 
// fs.writeFileSync('./1-json.json', final);


// const event = {
//     eventName: 'Birthday Party',
//     guests: ['Mohamed','Ali','Jama'],
//     printGuestList(){
//         console.log(this.eventName )

//         this.guests.forEach((guest)=>{
//             console.log(guest + 'is coming to the '+ this.eventName)
//         })
//     }
// }

// event.printGuestList();

const tasks = {
    tasks: [{
        text: 'Grocery Shopping',
        completed: true
    },{
        text:'Clean yard',
        completed: false
    },{
        text:'File course',
        completed: false
    }],
    getTasksToDo(){
   return this.tasks.filter((task)=> task.completed === false)
    }
}


console.log(tasks.getTasksToDo())


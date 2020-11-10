const fs = require('fs');
const chalk = require('chalk');


//ADD Notes
const addNote = (title,body)=>{
    const notes = loadNotes();

    const duplicateNotes = notes.find((note)=>note.title === title)

    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New notes added!')
    }else{
        console.log('Note title taken!')
    }
}
//SAVE Notes
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}
//LOAD Notes
const loadNotes = ()=>{
try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
}catch(e){
    return[];
}
}

//REMOVE Notes
const removeNote = (title)=>{
    const notes = loadNotes();

    const notesToKeep = notes.filter((note)=>note.title !== title)
        
        if(notes.length > notesToKeep.length){
            console.log(chalk.bgGreen.bold('Note removed!'))
        }else{
            console.log(chalk.bgRed.bold('No note found!'))
        }
        saveNotes(notesToKeep); 
}


const listNotes = () =>{
const notes = loadNotes();
console.log(chalk.bgBlue.bold('Your Notes'))
notes.forEach(note => {
    console.log(note.title)
});
}

const readNote = (title) =>{
    const notes = loadNotes();
 
    const findNote = notes.find((note )=>note.title === title);

    if(findNote){
        console.log(chalk.bgGreen(findNote.title) + ' ' + findNote.body)
    }else{
        console.log(chalk.bgRed('Not Found'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote : readNote
};


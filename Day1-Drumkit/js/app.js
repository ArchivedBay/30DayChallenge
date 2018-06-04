const notes = [65,83,68,70,71,72,74,75,76]; //representing a,s,d,f,g charCodes, can add to these and it will update automatically.
const descriptions = ['clap', 'hihat', 'kick', 'open hat', 'boom', 'ride', 'snare', 'tom', 'tink'];

function loadKeys(){
    let f = document.createDocumentFragment(); //for performance reasons we can use a doc frag.
    notes.forEach((charKey,index)=>{ //for each note we want to create a 'key' div and associate that note with the new div.
        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');

        div.id = `${index}`; //this line is what associates the key w/ a div.
        div.classList.add('drumKey');
        h1.classList.add('letter');
        p.classList.add('description');

        h1.textContent = `${String.fromCharCode(charKey)}`; // put the letter here
        p.textContent = `${descriptions[index]}`; // and the description here

        div.appendChild(h1);
        div.appendChild(p);
        f.appendChild(div);
    });
    document.getElementById('target').appendChild(f); //finally, append our fragment to the DOM.
}

function attachListener(){
    let b = document.getElementsByTagName('body')[0];
    b.addEventListener('keydown', function(e){updateUi(e.which)}); //pass the current key's charCode into updateUi()
    b.addEventListener('keyup', function(e){updateUi(e.which)});
}

function updateUi(key){
    if( notes[notes.indexOf(key)] === undefined){ return } //do nothing if the key was not found in the array

    let loc = document.getElementById(`${notes.indexOf(key)}`); // grab the div that represents our key
    loc.classList.toggle('drumKeyPressed'); //toggle the "pressed" state via CSS.
}


loadKeys(); //load our keys
attachListener(); //start listening for key presses.

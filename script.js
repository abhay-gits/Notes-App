const addBtn = document.querySelector('#addBtn')
const main = document.querySelector('#main');

/* Save Function */
function saveNote() {
    const notes = document.querySelectorAll('.note textarea')
    const data = [];
    notes.forEach((note) => {
        data.push(note.value)
    })
    if(data.length === 0){
        localStorage.removeItem('notes')
    }
    else{
    localStorage.setItem('notes', JSON.stringify(data))
    }
}

/* Self Running Function */
(
    function () {
        const lnotes = JSON.parse(localStorage.getItem('notes'))
        if(lnotes == null){
            addNote();
        }
        else{
            lnotes.forEach((lnote) => {
                addNote(lnote);
            })  
        }
        
    })()

addBtn.addEventListener('click', () => {
    addNote();
})
function addNote(text = '') {
    const area = document.createElement('div')
    area.classList.add('note')
    area.innerHTML = `
    <div class="tool">
                <i id="saveBtn" class="fas fa-save"></i>
                <i id="dltBtn" class="fas fa-trash"></i>
            </div>
            <textarea>${text}</textarea>
    `
    /* Delete Button */
    area.querySelector('#dltBtn').addEventListener('click',()=>{
        area.remove();
        saveNote();
    })

    /* Save Button */
    area.querySelector('#saveBtn').addEventListener('click',()=>{
        saveNote();
    })

    /* Auto Save */
    area.querySelector('textarea').addEventListener('input',()=>{
        saveNote();
    })
    main.appendChild(area);
}


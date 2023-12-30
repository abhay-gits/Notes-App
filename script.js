const addBtn = document.querySelector('#addBtn');
const main = document.querySelector('#main');

addBtn.addEventListener('click', addNote);

function addNote() {
    const note = document.createElement("div");
    note.classList.add('note');
    note.innerHTML = `
 
            <div class="tool">
                <i id="saveBtn" class="fas fa-save"></i>
                <i id="dltBtn" class="fas fa-trash"></i>
            </div>
            <textarea></textarea>`
/* Save Note */
    note.querySelector("#saveBtn").addEventListener('click',()=>{
        localStorage.setItem('key',note)
       console.log( localStorage.getItem('key'))
    })
/* Delete Note */
    note.querySelector("#dltBtn").addEventListener('click',
    function (){
        note.remove()
    }
    )

    main.appendChild(note)


}


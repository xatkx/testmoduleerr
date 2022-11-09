import * as UI from './interfaz.js';



    UI.form.addEventListener('submit', formHandler);




function formHandler(e)
{
    e.preventDefault();

    const artista = e.target.querySelector('#artista');
    const cancion = e.target.querySelector('#cancion');

    // valid inputs

    if( artista.value == '' || cancion.value == '')
    {
    }
}
console.log(UI)



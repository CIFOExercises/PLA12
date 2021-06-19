import { ajaxRequest } from "./ajax.js";

export function addCenter() {
    let centerName = document.querySelector('#centerName').value

    if (!centerName) { 
        alert('No hay ningun centro escrito')
        return
    }

    let data = {
        nombre: centerName.trim()
    }

    ajaxRequest('https://alcyon-it.com/PQTM/pqtm_alta_colegios.php', 'POST', data, 'text')
    .then(res => {
        if(res.substr(3) !== "00") throw res
        alert(res.substring(3))

        //refreshCentersTable()
    })
    .catch(error => alert(error))
}
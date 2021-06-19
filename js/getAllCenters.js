import { ajaxRequest } from "./ajax.js";

export async function getAllCenters() {
    await ajaxRequest('https://alcyon-it.com/PQTM/pqtm_consulta_colegios.php', 'GET', '', 'json')
    .then(res => {
        console.log(res)
        return res
    })
    .catch(error => alert(error))
}
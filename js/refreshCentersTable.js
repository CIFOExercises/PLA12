import { getAllCenters } from "./getAllCenters.js";

export async function refreshCentersTable() {
    let centros = await getAllCenters()
    console.log(centros)
    appendTable(centros)
}

function appendTable(centros) {
    console.log(centros)
    document.querySelector(".centersTable").innerHTML = "";
    for (const item of centros) {
        document.querySelector(".centersTable").innerHTML += `
            <tr class="centersTable-item">
                <td>${item.idcolegio}</td>
                <td>
                    <input type="text" value="${item.nombre}">
                </td>
                <td>
                    <button class="modifyCenter">Modificar</button>
                </td>
                <td>
                    <button class="deleteCenter">X</button>
                </td>
            </tr>
            `;
    }

    document.querySelectorAll(".centersTable-item .modifyCenter").forEach((item) => {
        item.onclick = modifyCenter
    });

    document.querySelectorAll(".centersTable-item .deleteCenter").forEach((item) => {
        item.onclick = deleteCenter
    });

}

function modifyCenter() {
    console.log(this)
};

function deleteCenter() {
    console.log(this)
}
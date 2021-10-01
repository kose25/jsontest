const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const contentid = urlParams.get('contentid')

console.log(contentid);

const container = document.querySelector("div.container");

const requestURL = '../json/normatividad2.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const lista = request.response;
    const xd = lista['results'];
    //console.log(xd);
    const foundItem = xd.find(fruta => fruta.id === contentid);
    //console.log(foundItem);
    //console.log(xd);
    //populateHeader(entradas);
    getNormatividad(foundItem);
}

function getNormatividad(obj) {

    //creacion de elementos
    const row1 = document.createElement('div');
    const col12 = document.createElement('div');
    const labels = document.createElement('span');
    const dates = document.createElement('p');
    const title = document.createElement('h1');
    const exp = document.createElement('h4');

    //agrega clase a los elementos
    row1.className = "row";
    col12.className = "col-12";
    labels.className = "badge bg-primaty";
    dates.className = "mb-2";
    title.className = "mb-2";

    //agrega el texto a los elementos
    dates.textContent = "Modificación: " + obj['modifiedDate'] + " - Creación: " + obj['creationDate'];
    title.textContent = obj['name'];
    exp.textContent = "FECHA DE EXPEDICION: " + obj['startingDate'];

    //recorre las categorias
    for (let index = 0; index < obj['labels'].length; index++) {
        const badge = document.createElement('span');
        badge.className = "badge bg-primary"
        badge.textContent = obj['labels'][index]['name'];
        //console.log(obj['labels'][index]);
        col12.appendChild(badge);
    }
    

    col12.appendChild(dates);
    col12.appendChild(title);
    col12.appendChild(exp);
    //col12.textContent = obj['body'];
    row1.appendChild(col12);
    container.appendChild(row1);
    exp.insertAdjacentHTML('afterend', obj['body']);
    console.log(col12);

    //verifica si tiene archivos
    if (obj['files']) {
        //crea los elementos
        const row2 = document.createElement('div');
        const col8 = document.createElement('div');
        const h2 = document.createElement('h2');
        const innerrow = document.createElement('div');

        h2.textContent = "Archivos para descargar";
        //const cols = document.createElement('div');
        //const links = document.createElement('div');

        //agrega las clases a los elementos
        row2.className = "row justify-content-md-center";
        col8.className = "col-md-6";
        //cols.className = "col-md-6";

        //apendiza elementos
        col8.appendChild(h2);
        

        //recorre los archivos
        for (let index = 0; index < obj['files'].length; index++) {
            //crea los elementos
            const cols = document.createElement('div');
            const links = document.createElement('a');
            const icon = document.createElement('i');

            //agrega clases a los elementos
            cols.className = "col-md-6";
            icon.className = "fas fa-file-pdf";

            //agrega el contenido y los atributos de los elementos
            links.setAttribute('href', obj['files'][index]['filePath']);
            icon.textContent = obj['files'][index]['name'];
            //links.textContent = obj['files'][index]['name'];

            //const test = document.querySelector("div.row");
            //apendiza los elementos
            links.appendChild(icon);
            cols.appendChild(links);
            innerrow.appendChild(cols);
            //console.log(innerrow);
            //col8.appendChild(test);

        }

        //apendiza elementos
        //col8.appendChild(h2);
        col8.appendChild(innerrow);
        row2.appendChild(col8);
        container.appendChild(row2);


    }


}
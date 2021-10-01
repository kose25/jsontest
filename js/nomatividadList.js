const requestURL = '../json/normatividad list.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
const section = document.querySelector("div.container");

request.onload = function () {
    const lista = request.response;
    //populateHeader(entradas);
    showList(lista);
}

function showList(jsonObj) {
    const result = jsonObj['results'];
    console.log(result.length);
    for (var i = 0; i < result.length; i++) {
        const row = document.createElement('div');
        const col3 = document.createElement('div');
        const img = document.createElement('img');
        const col9 = document.createElement('div');
        const h5 = document.createElement('h5');
        const h4 = document.createElement('h4');
        const title = document.createElement('a');
        const desc = document.createElement('p');
        const dates = document.createElement('p');
        const hr = document.createElement('hr');

        row.className = "row my-4";
        col3.className = "col-3";
        img.className = "img-fluid mx-auto d-block";
        img.setAttribute('src', '../img/i-pdf.png');
        col9.className = "col-9";
        h5.className = "text-muted";
        dates.className = "text-muted";
        title.setAttribute('href','/norma/?contentid='+result[i]['contentID']);

        const labels=result[i]['labels'];
        if(labels.length>0){
            for(var j = 0; j < labels.length; j++){
                h5.textContent+=" "+ labels[j];
            }
        }
        

        title.textContent = result[i]['name'];
        desc.textContent = result[i]['metaDescription'];
        dates.textContent = "Publicacion " + result[i]['modifiedDate'] + "| Expedicion " + result[i]['modifiedDate'];

        col3.appendChild(img);
        row.appendChild(col3);
        col9.appendChild(h5);
        h4.appendChild(title);
        col9.appendChild(h4);
        col9.appendChild(desc);
        col9.appendChild(dates);
        row.appendChild(col9);
        row.appendChild(hr);
        section.appendChild(row);


    }

}
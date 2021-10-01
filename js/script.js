const requestURL = 'json/data.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
const section = document.querySelector("div.row");

request.onload = function () {
    const entradas = request.response;
    //populateHeader(entradas);
    showHeroes(entradas);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    const result = jsonObj['results'];

    for (var i = 0; i < 50; i++) {
        const col = document.createElement('div');
        const card = document.createElement('div.card');
        const cardTitle = document.createElement('div');
        //cardTitle.textContent=result[i]['name'];
        const cardBody= document.createElement('div');
        const cardSubtitle = document.createElement('div');
        const cardText = document.createElement('p');
        const button = document.createElement('a');
        button.setAttribute('class','btn btn-primary');
        button.setAttribute('href','/content/?contentid='+result[i]['contentID']);
        button.textContent="Ver mas"
        //const category = document.createElement('a').className('card-link').textContent(result[i]['metaDescription']);

        col.setAttribute('class','col-md-6 mb-2');
        card.setAttribute('class','card');
        cardTitle.setAttribute('class','card-title');
        cardTitle.textContent=result[i]['name'];
        cardBody.setAttribute('class', 'card-body');
        cardSubtitle.setAttribute('class','card-subtitle card-subtitle mb-2 text-muted');
        cardSubtitle.textContent=result[i]['modifiedDate'];
        cardText.setAttribute('class','card-text');
        cardText.textContent=result[i]['metaDescription'];


        /* const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = result[i].name;
        myPara1.textContent = 'Secret identity: ' + result[i].secretIdentity;
        myPara2.textContent = 'Age: ' + result[i].age;
        myPara3.textContent = 'Superpowers:';

         const superPowers = result[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        } */

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardSubtitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(button);
        card.appendChild(cardBody);
        col.appendChild(card);
        section.appendChild(col);

/* 
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle); */
    }
}
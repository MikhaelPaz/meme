function repostas() {

    let body = document.querySelector('body');
    let meuh1 = document.createElement('h2');
    let meuh11 = document.createElement('h2');
    let meuh12 = document.createElement('h2');
    let meuh13= document.createElement('h2');
    let meuh14 = document.createElement('h2');
    let meuh15 = document.createElement('h2');
    let meuh16 = document.createElement('h2');
    let meuh17 = document.createElement('h2');
    let meuh18 = document.createElement('h2');
    let meuh19 = document.createElement('h2');
    let meuh10 = document.createElement('h2');
    let meuh111 = document.createElement('h4');
    let meuh112 = document.createElement('h4');
    let meuh113 = document.createElement('h4');
    let meuh114 = document.createElement('h4');
    let meuh115 = document.createElement('h4');
    let meuh116 = document.createElement('h4');
    
    const titulo = document.createTextNode(`As respostas eram: `)
    const res1 = document.createTextNode( `1: Delicia: 5 pontos`)
    const res2 = document.createTextNode( `2: Forninho: 5 pontos`)
    const res3 = document.createTextNode( `3: Alegria: 5 pontos`)
    const res4 = document.createTextNode( `4: Jessica: 5 pontos`)
    const res5 = document.createTextNode( `5: Vento/ar: 10 pontos`)
    const res6 = document.createTextNode( `6: Placa/placa de 100k/placa do youtube: 10 pontos`)
    const res7 = document.createTextNode( `7: Irineu Irineu voce nao sabe nem eu: 10 pontos`)
    const res8 = document.createTextNode( `8: Pai de famlia: 10 pontos`)
    const res9 = document.createTextNode( `9: Taubate: 10 pontos`)
    const res10 = document.createTextNode(` 10: Onca: 10 pontos `);

    const pon = document.createTextNode (`Pontuacao:`)
    const pon1 = document.createTextNode (`0-5 pontos Ta precizando ver mais memes heim`)
    const pon2 = document.createTextNode(`6-20 pontos Ta bom`)
    const pon3 = document.createTextNode(`21-40 pontos Legal`)
    const pon4 = document.createTextNode(`41-60 pontos Caramba`)
    const pon5 = document.createTextNode(`61-80 pontos Tu eh um mito, MITO!!!`)

    meuh111.appendChild(pon);
    meuh112.appendChild(pon1);
    meuh113.appendChild(pon2);
    meuh114.appendChild(pon3);
    meuh115.appendChild(pon4);
    meuh116.appendChild(pon5);

    meuh1.appendChild(titulo);
    meuh11.appendChild(res1);
    meuh12.appendChild(res2);
    meuh13.appendChild(res3);
    meuh14.appendChild(res4);
    meuh15.appendChild(res5);
    meuh16.appendChild(res6);
    meuh17.appendChild(res7);
    meuh18.appendChild(res8);
    meuh19.appendChild(res9);
    meuh10.appendChild(res10);
    body.appendChild(meuh1);
    body.appendChild(meuh11);
    body.appendChild(meuh12);
    body.appendChild(meuh13);
    body.appendChild(meuh14);
    body.appendChild(meuh15);
    body.appendChild(meuh16);
    body.appendChild(meuh17);
    body.appendChild(meuh18);
    body.appendChild(meuh19);
    body.appendChild(meuh10);
    
    body.appendChild(meuh111);
    body.appendChild(meuh112);
    body.appendChild(meuh113);
    body.appendChild(meuh114);
    body.appendChild(meuh115);
    body.appendChild(meuh116);


}

let botao1 = document.querySelector("#botao")
botao1.onclick = repostas;
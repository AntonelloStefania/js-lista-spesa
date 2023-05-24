let goty = [
    'elden ring',
    'it takes two',
    'the last of us II',
    'sekiro',
    'god of war',
    'the legend of zelda'
]

let lista_goty = document.querySelector('.lista-goty');

let i = 0
while(i < goty.length){
   let game = goty[i]
   i++;
   lista_goty.innerHTML +=`<li>${game}</li>`;
}
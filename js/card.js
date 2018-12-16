var images=[
    "../images/targarien.jpg",
    "../images/stark.jpg",
    "../images/baratheon.jpg",
    "../images/Lannister.jpg",
    "../images/tyrell.jpg",
    "../images/arryn.jpg",
    "../images/greyjoy.jpg",
    "../images/martell.jpg",
    "../images/clegane.jpg",
    "../images/hodor.jpg",
    ]
var sigils=[
    "../images/targarien_sigil.png",
    "../images/stark_sigil.png",
    "../images/Hornwood_sigil.png",
    "../images/lannister_sigil.png",
    "../images/tyrell_sigil.png",
    "../images/arryn_sigil.png",
    "../images/greyjoy_sigil.png",
    "../images/martell_sigil.png",
    "../images/clegane_sigil.png",
    "../images/hodor_sigil.png",
    
]
var urls =[
"https://anapioficeandfire.com/api/characters/867",// "name":"Rhaegar Targaryen"  
"https://anapioficeandfire.com/api/characters/557",// ["Arya Stark"] 
"https://anapioficeandfire.com/api/characters/901",// "name":"Robert I Baratheon" 
"https://anapioficeandfire.com/api/characters/613",// "name":"Lancel Lannister" 
"https://anapioficeandfire.com/api/characters/16",// "name":"Margaery Tyrell 
"https://anapioficeandfire.com/api/characters/688",// "name":"Lysa Arryn 
"https://anapioficeandfire.com/api/characters/150",// "name":"Asha Greyjoy
"https://anapioficeandfire.com/api/characters/326",// "name":"Doran Martell
"https://anapioficeandfire.com/api/characters/955",// "name":"Sandor Clegane"
"https://anapioficeandfire.com/api/characters/2",// "name":"Walder", ["Hodor"]	
	]
	
var container = document.getElementById("container");
var i;
var cardNumb = 10;
var promises = urls.map(url => fetch(url).then(function(response) {
    return response.json();
  }));
Promise.all(promises).then(character => {
    
    
    for (i = 0; i < cardNumb; i++) {
    
        container.innerHTML += "<button class='btnSelect'  type='button'onclick=addPlayerToLocalStorage('"+sigils[i]+"')><div class='card' data-attribute="+(i+1)+"><div class='card--info'><p class='card--info__name'> "+character[i].name+" </p><div class='card--sigil'><img id='sigil' src="+sigils[i]+" alt='character sigil'></div><p class='card--info__gender'>"+character[i].gender+"</p><p class='card--info__age'></p><p class='card--info__title'>Titles: "+character[i].titles+"</p><p class='card--info__alias'>Aliases: "+character[i].aliases+"<p class='card--info__playedBy'>played by: "+character[i].playedBy+"</p></button></div>";
    }
   
});


var count =0;

function addPlayerToLocalStorage(URL){
    
    if (count === 0){
        localStorage.setItem('Player1', URL,);
        count++
    }else if (count === 1){
        localStorage.setItem('Player2', URL);
        self.location = "board.html";
    }
}










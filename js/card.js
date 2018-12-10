var images=[
    "../images/targarien.jpg",
    "../images/stark.jpg",
    "../images/baratheon.jpg",
    "../images/lannister.jpg",
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
    
        container.innerHTML += "<div class='card' data-attribute="+(i+1)+"><div class='card--img'><img src="+images[i]+" alt='character picture'></div><div class='card--info'><p class='card--info__name'> "+character[i].name+" </p><p class='card--info__gender'>"+character[i].gender+"</p><p class='card--info__age'></p><p class='card--info__title'>Titles: "+character[i].titles+"</p><p class='card--info__alias'>Aliases:"+character[i].aliases+"<p class='card--info__born'>Born:"+character[i].born+"<p class='card--info__died'>Died:"+character[i].died+"<p class='card--info__playedBy'>played by "+character[i].playedBy+"</p><div class='card--sigil'><img id='sigil' src="+sigils[i]+" alt='character sigil'></div><button type='button'onclick=addPlayerToLocalStorage('"+urls[i]+"')>Select</button></div>"
        
        /*container.innerHTML += "<div class='card' data-attribute="+(i+1)+"><div class='card--header'><h1 class='card--header__text'>This is a test Card for Noroff, it is number "+(i+1)+"</h1></div><div class='card--name'><p>By "+names[i]+"</div><div class='card--timer'>"+date+"</div><button class='card--button'>View on site</button></div></div>"*/;
    }
    console.log(character[2]);
    // do something with results.
   
});

function addPlayerToLocalStorage(URL){
    count = 0;
    if(count < 2){
        count++
        if(count === 1 ){
            localStorage.setItem('Player1', URL);
            console.log(URL);
        }
        else{
            localStorage.setItem('Player2', URL);
            // create a redirect to the boardgame page here
        }
    }
}











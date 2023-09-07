const mapFolder = './maps';
const maps = {
    "cosmodrome":{
        image:'cosmodrome.png',
        name:"Cosmodrome"
    },
    "dreaming_city":{
        image:'dreaming_city.png',
        name:"Dreaming City"
    },
    "edz":{
        image:'edz.png',
        name:"EDZ"
    },
    "europa":{
        image:'europa.png',
        name:"Europa"
    },
    "moon":{
        image:'moon.png',
        name:"Moon"
    },
    "neomuna":{
        image:'neomuna.png',
        name:"Neomuna"
    },
    "nessus":{
        image:'nessus.png',
        name:"Nessus"
    },
    "throne_world":{
        image:'throne_world.png',
        name:"Throne World"
    },
    "tower":{
        image:'tower.png',
        name:"Tower"
    },
};

//Load a map
function loadMap(map){
    //replace the image
    $("#d2-map").attr("src",mapFolder+'/'+maps[map].image);

    //Change name on nav bar menu
    $('#map-name').text(maps[map].name);
    
    //Loading points of interest
}

//////
////// INIT
//////

// Binding nav menu to map loading 
$(".item-map-menu").click(function(){
    const map = $(this).data('map');
    console.log('Map selected: '+map);

    loadMap(map);
});

// Load the first map
loadMap('cosmodrome');
 

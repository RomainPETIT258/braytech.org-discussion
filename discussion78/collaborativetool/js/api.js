const apiPathFile = '../api-key.json';

const apiRootpath = "https://www.bungie.net/Platform";
const manifestUrl = apiRootpath + "/Destiny2/Manifest/";
const contentUrl = apiRootpath + "/Content/GetContentType/0/";
const getCurrentBungieNetUserUrl = apiRootpath + "/User/GetCurrentBungieNetUser/";
/*
ie https://bungie-net.github.io/

Destiny.Definitions.DestinyDestinationDefinition
Destiny.Definitions.DestinyActivityGraphListEntryDefinition
Destiny.Definitions.Director.DestinyActivityGraphDefinition

*/
console.log('api start');

//Parse api key
fetch(apiPathFile)
    .then((response) => response.json())
    .then(function(json){

        //Manifest
        //this.executeRequest(manifestUrl, json.apikey);

        //Maps
        //this.executeRequest(contentUrl, json.apiKey);

        console.log('api ends');
});

function executeRequest(url, ak){

    //Init Request + parameters
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    
    //Set Api key
    xhr.setRequestHeader("X-API-Key", ak);

    //Set state + handle function
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var data = this.responseText;
            console.log(data);
        }
    };
        
    //Send request
    xhr.send();
}
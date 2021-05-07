/**
 * This is an app designed to communite with Api-NBA to retrieve the previous 
 * and next 10 games.
 * 
 * Author:  Cody Claxton
 * 
 * Version: 1.0
 * 
 * 
 * Todo:  Change filterResults method to a better name... something to get team
 */

// import React from 'react';
//Imports are faster because they are asynchronous meaning
//they dont have to wait for previous import to finish
// import ReactDOM from 'react-dom';
var unirest = require("unirest");
var request = unirest("GET","https://api-nba-v1.p.rapidapi.com/teams/confName/west");
var request2 = unirest("GET","https://api-nba-v1.p.rapidapi.com/teams/confName/east");

var nbaTeams = [];
request.headers({
    "x-rapidapi-key": "",
	"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	"useQueryString": true
});

request2.headers({
    "x-rapidapi-key": "",
	"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
	"useQueryString": true
});

/**
 * The expected format is one property and that property has an array of teams
 * @param {data} -  json data returned from request 
 */
function filterResults(data){
    var obj = JSON.parse(data);  
    obj = obj['api'];
    teams_obj = obj['teams']

      for(let i = 0, len=teams_obj.length;i<len;i++){
          //Check if nbaFranchise = 1 if so add it to array
          if(teams_obj[i]['nbaFranchise'] === '1'){
              nbaTeams.push(teams_obj[i]['fullName']);
            //console.log(teams_obj[i]['fullName']);
          }
      }     

      console.log('*********getting ready to print************');
      for(const teamName of nbaTeams){
          console.log(teamName);
      }
    };



request.end(function(results){
    if(results.error)thrownewError(results.error);
    let required_data = results['raw_body'];

    filterResults(required_data);
  
})

request2.end(function(results){
    if(results.error)thrownewError(results.error);
    let required_data = results['raw_body'];

    filterResults(required_data);
  
})

// function Basketball(){
//     <div className='teams'>
//         const nbaTeams = {

//         };

//     </div>
// }

function parseTeamPerformanceData(payload,teams,startYear,endYear,field){
  var cols=[];
  cols.push(new col('string','year'));
  for(var team in teams){
    var currentTeam = teams[team];
    cols.push(new col('number',currentTeam.name));
  }
  var fetchedTeams = payload.data;
  var year = startYear;
  var allrows = []; 
  var c = [];
  c.push(new v(startYear));
  for(var team in fetchedTeams){
    var currentTeam = fetchedTeams[team];
    if(year != currentTeam.yearId){
      allrows.push(new rows(c));
      c = [];
      c.push(new v(currentTeam.yearId));
      year = currentTeam.yearId;
    }
    c.push(new v(currentTeam[field]));
  }
  allrows.push(new rows(c));
  var finalData = new graphData(cols,allrows);
  return finalData;
}

function parseSalaryData(payload){
  var cols=[];
  cols.push(new col('string','playerid'));
  cols.push(new col('number','salary'));
  
  var playerSalaries = payload.data;
  var allrows = [];
  for(var salary in playerSalaries){
    var currentSalary = playerSalaries[salary];
    var c = [];
    c.push(new v(currentSalary.playerid));
    c.push(new v(currentSalary.salary));
    allrows.push(new rows(c));
  }
  var finalData = new graphData(cols,allrows);
  console.log(finalData);
  return finalData;
}

function parseTeamOrientationData(payload,selectedTeams,field1,field2,label1,label2){
  var finalData = [];
  var cols = ['Team',label1,label2];
  finalData.push(cols);
  var teams = payload.data;
  for(var team in teams){
    var currentTeam = teams[team];
    finalData.push([currentTeam.teamId,currentTeam[field1],currentTeam[field2]]);
  }
  return finalData;
}
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
  console.log(finalData);
  return finalData;
}
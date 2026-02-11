import { AllFixtures } from "../type";

export default function getFixturesSample(): AllFixtures[] {
  let fixturesSample = `[
        {
            "name": "EPL",
            "fixtures":
                [{
fixture: {
id: 1379220
referee: "T. Harrington"
timezone: "UTC"
date: "2026-02-12T20:00:00+00:00"
timestamp: 1770926400
periods: {
first: null
second: null
}
venue: {
id: 10503
name: "Brentford Community Stadium"
city: "London"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 39
name: "Premier League"
country: "England"
logo: "https://media.api-sports.io/football/leagues/39.png"
flag: "https://media.api-sports.io/flags/gb-eng.svg"
season: 2025
round: "Regular Season - 26"
standings: true
}
teams: {
home: {
id: 55
name: "Brentford"
logo: "https://media.api-sports.io/football/teams/55.png"
winner: null
}
away: {
id: 42
name: "Arsenal"
logo: "https://media.api-sports.io/football/teams/42.png"
winner: null
}
}
goals: {
home: null
away: null
}
score: {
halftime: {
home: null
away: null
}
fulltime: {
home: null
away: null
}
extratime: {
home: null
away: null
}
penalty: {
home: null
away: null
}
}
},
                {
                    "fixture":{"id":1035552,"referee":null,"timezone":"UTC","date":"2026-02-11T15:00:00+00:00","timestamp":1716130800,"periods":{"first":1659726000,"second":1659729600},"venue":{"id":555,"name":"Etihad Stadium","city":"Manchester"},"status":{"long":"Match Finished","short":"FT","elapsed":90}},
                    "league":{"id":39,"name":"Premier League","country":"England","logo":"https:/media.api-sports.io/football/leagues/39.png","flag":"https:/media.api-sports.io/flags/gb.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":50,"name":"Manchester City","logo":"https:/media.api-sports.io/football/teams/50.png","winner":false},"away":{"id":48,"name":"West Ham","logo":"https://media.api-sports.io/football/teams/48.png","winner":false}},
                    "goals":{"home":2,"away":2},
                    "score":{"halftime":{"home":1,"away":2},"fulltime":{"home":2,"away":2},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}
                },
                {
                    "fixture":{"id":1035553,"referee":null,"timezone":"UTC","date":"2026-02-11T15:00:00+00:00","timestamp":1716130800,"periods":{"first":1659726000,"second":1659729600},"venue":{"id":555,"name":"Etihad Stadium","city":"Manchester"},"status":{"long":"Match Finished","short":"FT","elapsed":90}},
                    "league":{"id":39,"name":"Premier League","country":"England","logo":"https:/media.api-sports.io/football/leagues/39.png","flag":"https:/media.api-sports.io/flags/gb.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":50,"name":"Manchester City","logo":"https:/media.api-sports.io/football/teams/50.png","winner":false},"away":{"id":48,"name":"West Ham","logo":"https://media.api-sports.io/football/teams/48.png","winner":true}},
                    "goals":{"home":3,"away":3},
                    "score":{"halftime":{"home":1,"away":2},"fulltime":{"home":3,"away":3},"extratime":{"home":0,"away":0},"penalty":{"home":4,"away":5}}
                },
                {
                    "fixture":{"id":1035560,"referee":null,"timezone":"UTC","date":"2026-02-11T15:00:00+00:00","timestamp":1716130800,"periods":{"first":1659726000,"second":1659729600},"venue":{"id":555,"name":"London Stadium","city":"Manchester"},"status":{"long":"Match Finished","short":"FT","elapsed":90}},
                    "league":{"id":39,"name":"Premier League","country":"England","logo":"https:/media.api-sports.io/football/leagues/39.png","flag":"https:/media.api-sports.io/flags/gb.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":48,"name":"West Ham","logo":"https://media.api-sports.io/football/teams/48.png","winner":true},"away":{"id":50,"name":"Manchester City","logo":"https:/media.api-sports.io/football/teams/50.png","winner":false}},
                    "goals":{"home":3,"away":2},
                    "score":{"halftime":{"home":1,"away":2},"fulltime":{"home":3,"away":2},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}
                },
                {
                    "fixture":{"id":1035561,"referee":null,"timezone":"UTC","date":"2026-02-11T15:00:00+00:00","timestamp":1716130800,"periods":{"first":1659726000,"second":1659729600},"venue":{"id":555,"name":"London Stadium","city":"Manchester"},"status":{"long":"Match Finished","short":"FT","elapsed":90}},
                    "league":{"id":39,"name":"Premier League","country":"England","logo":"https:/media.api-sports.io/football/leagues/39.png","flag":"https:/media.api-sports.io/flags/gb.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":48,"name":"West Ham","logo":"https://media.api-sports.io/football/teams/48.png","winner":false},"away":{"id":50,"name":"Manchester City","logo":"https:/media.api-sports.io/football/teams/50.png","winner":true}},
                    "goals":{"home":0,"away":1},
                    "score":{"halftime":{"home":0,"away":1},"fulltime":{"home":0,"away":1},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}
                },
                {
                    "fixture":{"id":1035552,"referee":null,"timezone":"UTC","date":"2026-02-11T15:00:00+00:00","timestamp":1716130800,"periods":{"first":1659726000,"second":1659729600},"venue":{"id":555,"name":"Etihad Stadium","city":"Manchester"},"status":{"long":"Match Finished","short":"FT","elapsed":90}},
                    "league":{"id":39,"name":"Premier League","country":"England","logo":"https:/media.api-sports.io/football/leagues/39.png","flag":"https:/media.api-sports.io/flags/gb.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":50,"name":"Manchester City","logo":"https:/media.api-sports.io/football/teams/50.png","winner":false},"away":{"id":48,"name":"West Ham","logo":"https://media.api-sports.io/football/teams/48.png","winner":false}},
                    "goals":{"home":2,"away":2},
                    "score":{"halftime":{"home":1,"away":2},"fulltime":{"home":2,"away":2},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}
                },
                {
                    "fixture":{"id":1035554,"referee":null,"timezone":"UTC","date":"2026-02-11T15:00:00+00:00","timestamp":1716130800,"periods":{"first":null,"second":null},"venue":{"id":555,"name":"Etihad Stadium","city":"Manchester"},"status":{"long":"Not Started","short":"NS","elapsed":null}},
                    "league":{"id":39,"name":"Premier League","country":"England","logo":"https:/media.api-sports.io/football/leagues/39.png","flag":"https:/media.api-sports.io/flags/gb.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":50,"name":"Manchester City","logo":"https:/media.api-sports.io/football/teams/50.png","winner":null},"away":{"id":48,"name":"West Ham","logo":"https://media.api-sports.io/football/teams/48.png","winner":null}},
                    "goals":{"home":null,"away":null},
                    "score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}
                },
                {
                    "fixture":{"id":1035555,"referee":null,"timezone":"UTC","date":"2026-02-11T15:00:00+00:00","timestamp":1716130800,"periods":{"first":null,"second":null},"venue":{"id":555,"name":"Etihad Stadium","city":"Manchester"},"status":{"long":"Not Started","short":"NS","elapsed":null}},
                    "league":{"id":39,"name":"Premier League","country":"England","logo":"https:/media.api-sports.io/football/leagues/39.png","flag":"https:/media.api-sports.io/flags/gb.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":48,"name":"West Ham","logo":"https://media.api-sports.io/football/teams/48.png","winner":null},"away":{"id":50,"name":"Manchester City","logo":"https:/media.api-sports.io/football/teams/50.png","winner":null}},
                    "goals":{"home":null,"away":null},
                    "score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}
                },
                {
                    "fixture":{"id":1035556,"referee":null,"timezone":"UTC","date":"2026-02-11T15:00:00+00:00","timestamp":1716130800,"periods":{"first":null,"second":null},"venue":{"id":581,"name":"Bramall Lane","city":"Sheffield"},"status":{"long":"Not Started","short":"NS","elapsed":null}},
                    "league":{"id":39,"name":"Premier League","country":"England","logo":"https:/media.api-sports.io/football/leagues/39.png","flag":"https:/media.api-sports.io/flags/gb.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":62,"name":"Sheffield Utd","logo":"https:/media.api-sports.io/football/teams/62.png","winner":null},"away":{"id":47,"name":"Tottenham","logo":"https://media.api-sports.io/football/teams/47.png","winner":null}},
                    "goals":{"home":null,"away":null},
                    "score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}
                },
                {
                    "fixture":{"id":1035557,"referee":null,"timezone":"UTC","date":"2026-02-11T15:00:00+00:00","timestamp":1716130800,"periods":{"first":null,"second":null},"venue":{"id":581,"name":"Bramall Lane","city":"Sheffield"},"status":{"long":"Not Started","short":"NS","elapsed":null}},
                    "league":{"id":39,"name":"Premier League","country":"England","logo":"https:/media.api-sports.io/football/leagues/39.png","flag":"https:/media.api-sports.io/flags/gb.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":62,"name":"Sheffield Utd","logo":"https:/media.api-sports.io/football/teams/62.png","winner":null},"away":{"id":47,"name":"Tottenham","logo":"https://media.api-sports.io/football/teams/47.png","winner":null}},
                    "goals":{"home":null,"away":null},
                    "score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}
                }]
        },
        {    
            "name": "La Liga",
            "fixtures": 
                [{
                    "fixture":{"id":1038331,"referee":null,"timezone":"UTC","date":"2026-02-11T00:00:00+00:00","timestamp":1716681600,"periods":{"first":null,"second":null},"venue":{"id":1456,"name":"Estadio Santiago Bernabéu","city":"Madrid"},"status":{"long":"Time to be defined","short":"TBD","elapsed":null}},
                    "league":{"id":140,"name":"La Liga","country":"Spain","logo":"https:/media.api-sports.io/football/leagues/140.png","flag":"https:/media.api-sports.io/flags/es.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":541,"name":"Real Madrid","logo":"https://media.api-sports.io/football/teams/541.png","winner":null},"away":{"id":543,"name":"Real Betis","logo":"https:/media.api-sports.io/football/teams/543.png","winner":null}},
                    "goals":{"home":null,"away":null},
                    "score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}
                },
                {
                    "fixture":{"id":1038332,"referee":null,"timezone":"UTC","date":"2026-02-11T00:00:00+00:00","timestamp":1716681600,"periods":{"first":null,"second":null},"venue":{"id":1456,"name":"Estadio Santiago Bernabéu","city":"Madrid"},"status":{"long":"Time to be defined","short":"TBD","elapsed":null}},
                    "league":{"id":140,"name":"La Liga","country":"Spain","logo":"https:/media.api-sports.io/football/leagues/140.png","flag":"https:/media.api-sports.io/flags/es.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":541,"name":"Real Madrid","logo":"https://media.api-sports.io/football/teams/541.png","winner":null},"away":{"id":543,"name":"Real Betis","logo":"https:/media.api-sports.io/football/teams/543.png","winner":null}},
                    "goals":{"home":null,"away":null},
                    "score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}
                },
                {
                    "fixture":{"id":1038333,"referee":null,"timezone":"UTC","date":"2026-02-11T00:00:00+00:00","timestamp":1716681600,"periods":{"first":null,"second":null},"venue":{"id":1456,"name":"Estadio Santiago Bernabéu","city":"Madrid"},"status":{"long":"Time to be defined","short":"TBD","elapsed":null}},
                    "league":{"id":140,"name":"La Liga","country":"Spain","logo":"https:/media.api-sports.io/football/leagues/140.png","flag":"https:/media.api-sports.io/flags/es.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":541,"name":"Real Madrid","logo":"https://media.api-sports.io/football/teams/541.png","winner":null},"away":{"id":543,"name":"Real Betis","logo":"https:/media.api-sports.io/football/teams/543.png","winner":null}},
                    "goals":{"home":null,"away":null},
                    "score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}
                },
                {
                    "fixture":{"id":1038334,"referee":null,"timezone":"UTC","date":"2026-02-11T00:00:00+00:00","timestamp":1716681600,"periods":{"first":null,"second":null},"venue":{"id":1456,"name":"Estadio Santiago Bernabéu","city":"Madrid"},"status":{"long":"Time to be defined","short":"TBD","elapsed":null}},
                    "league":{"id":140,"name":"La Liga","country":"Spain","logo":"https:/media.api-sports.io/football/leagues/140.png","flag":"https:/media.api-sports.io/flags/es.svg","season":2026,"round":"Regular Season - 38"},
                    "teams":{"home":{"id":541,"name":"Real Madrid","logo":"https://media.api-sports.io/football/teams/541.png","winner":null},"away":{"id":543,"name":"Real Betis","logo":"https:/media.api-sports.io/football/teams/543.png","winner":null}},
                    "goals":{"home":null,"away":null},
                    "score":{"halftime":{"home":null,"away":null},"fulltime":{"home":null,"away":null},"extratime":{"home":null,"away":null},"penalty":{"home":null,"away":null}}
                }] 
        }
    ]`;

  let fixturesSampleJson: AllFixtures[] = [];

  try {
    const jsonData = JSON.parse(fixturesSample);
    fixturesSampleJson = jsonData;
  } catch (error) {
    console.error("Error parsing JSON: ", error);
  }

  return fixturesSampleJson;
}

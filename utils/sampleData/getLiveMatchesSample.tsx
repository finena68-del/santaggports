import { AllFixtures } from "../type";

export default function getLiveMatchSample(): AllFixtures[] {
  // Sample JSON data as a string
  const fixturesSample = `[
    {
  "name": "Live Matches",
            "fixtures":
                 [
{
fixture: {
id: 1500797
referee: null
timezone: "UTC"
date: "2026-02-11T00:00:00+00:00"
timestamp: 1770768000
periods: {
first: 1770768000
second: 1770771600
}
venue: {
id: null
name: "Arena da Amazonia"
city: "Manaus"
}
status: {
long: "Match Finished"
short: "FT"
elapsed: 90
extra: 9
}
}
league: {
id: 522
name: "Amazonense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/522.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 1"
standings: true
}
teams: {
home: {
id: 2214
name: "Manaus FC"
logo: "https://media.api-sports.io/football/teams/2214.png"
winner: true
}
away: {
id: 7862
name: "Princesa Solimões"
logo: "https://media.api-sports.io/football/teams/7862.png"
winner: false
}
}
goals: {
home: 2
away: 1
}
score: {
halftime: {
home: 2
away: 1
}
fulltime: {
home: 2
away: 1
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
}
{
fixture: {
id: 1501003
referee: null
timezone: "UTC"
date: "2026-02-11T00:00:00+00:00"
timestamp: 1770768000
periods: {
first: 1770768000
second: 1770771600
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Match Finished"
short: "FT"
elapsed: 90
extra: 10
}
}
league: {
id: 520
name: "Acreano"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/520.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 5"
standings: true
}
teams: {
home: {
id: 18391
name: "ADESG"
logo: "https://media.api-sports.io/football/teams/18391.png"
winner: false
}
away: {
id: 2220
name: "Rio Branco"
logo: "https://media.api-sports.io/football/teams/2220.png"
winner: true
}
}
goals: {
home: 0
away: 2
}
score: {
halftime: {
home: 0
away: 2
}
fulltime: {
home: 0
away: 2
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
}
{
fixture: {
id: 1512187
referee: null
timezone: "UTC"
date: "2026-02-11T00:00:00+00:00"
timestamp: 1770768000
periods: {
first: 1770768000
second: 1770771600
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Match Finished"
short: "FT"
elapsed: 90
extra: 3
}
}
league: {
id: 906
name: "Reserve League"
country: "Argentina"
logo: "https://media.api-sports.io/football/leagues/906.png"
flag: "https://media.api-sports.io/flags/ar.svg"
season: 2026
round: "Regular Season - 2"
standings: true
}
teams: {
home: {
id: 18681
name: "Boca Juniors Res."
logo: "https://media.api-sports.io/football/teams/18681.png"
winner: true
}
away: {
id: 22937
name: "Deportivo Riestra Res."
logo: "https://media.api-sports.io/football/teams/22937.png"
winner: false
}
}
goals: {
home: 3
away: 0
}
score: {
halftime: {
home: 1
away: 0
}
fulltime: {
home: 3
away: 0
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
}
{
fixture: {
id: 1492139
referee: "Raphael Claus, Brazil"
timezone: "UTC"
date: "2026-02-11T00:30:00+00:00"
timestamp: 1770769800
periods: {
first: 1770769800
second: 1770773400
}
venue: {
id: null
name: "Estádio Manoel Barradas"
city: "Salvador"
}
status: {
long: "Match Finished"
short: "FT"
elapsed: 90
extra: 6
}
}
league: {
id: 71
name: "Serie A"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/71.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 3"
standings: true
}
teams: {
home: {
id: 136
name: "Vitoria"
logo: "https://media.api-sports.io/football/teams/136.png"
winner: false
}
away: {
id: 127
name: "Flamengo"
logo: "https://media.api-sports.io/football/teams/127.png"
winner: true
}
}
goals: {
home: 1
away: 2
}
score: {
halftime: {
home: 0
away: 2
}
fulltime: {
home: 1
away: 2
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
}
{
fixture: {
id: 1499253
referee: "Derlis Lopez, Paraguay"
timezone: "UTC"
date: "2026-02-11T00:30:00+00:00"
timestamp: 1770769800
periods: {
first: 1770769800
second: 1770773400
}
venue: {
id: null
name: "Polideportivo de Pueblo Nuevo"
city: "San Cristóbal"
}
status: {
long: "Match Finished"
short: "PEN"
elapsed: 120
extra: null
}
}
league: {
id: 13
name: "CONMEBOL Libertadores"
country: "World"
logo: "https://media.api-sports.io/football/leagues/13.png"
flag: null
season: 2026
round: "Qualification Round 1"
standings: false
}
teams: {
home: {
id: 2807
name: "Deportivo Tachira FC"
logo: "https://media.api-sports.io/football/teams/2807.png"
winner: true
}
away: {
id: 3711
name: "The Strongest"
logo: "https://media.api-sports.io/football/teams/3711.png"
winner: false
}
}
goals: {
home: 1
away: 0
}
score: {
halftime: {
home: 1
away: 0
}
fulltime: {
home: 1
away: 0
}
extratime: {
home: 0
away: 0
}
penalty: {
home: 5
away: 3
}
}
}
{
fixture: {
id: 1514132
referee: "Hector Martinez, Uruguay"
timezone: "UTC"
date: "2026-02-11T01:00:00+00:00"
timestamp: 1770771600
periods: {
first: 1770771600
second: 1770775200
}
venue: {
id: null
name: "Estadio Olimpico Universitario"
city: "Mexico City"
}
status: {
long: "Match Finished"
short: "FT"
elapsed: 90
extra: 6
}
}
league: {
id: 16
name: "CONCACAF Champions League"
country: "World"
logo: "https://media.api-sports.io/football/leagues/16.png"
flag: null
season: 2026
round: "Round of 32"
standings: false
}
teams: {
home: {
id: 2286
name: "U.N.A.M. - Pumas"
logo: "https://media.api-sports.io/football/teams/2286.png"
winner: true
}
away: {
id: 25484
name: "San Diego"
logo: "https://media.api-sports.io/football/teams/25484.png"
winner: false
}
}
goals: {
home: 1
away: 0
}
score: {
halftime: {
home: 0
away: 0
}
fulltime: {
home: 1
away: 0
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
}
{
fixture: {
id: 1511964
referee: null
timezone: "UTC"
date: "2026-02-11T01:00:00+00:00"
timestamp: 1770771600
periods: {
first: 1770771600
second: 1770775200
}
venue: {
id: 0
name: null
city: null
}
status: {
long: "Match Finished"
short: "FT"
elapsed: 90
extra: 10
}
}
league: {
id: 607
name: "Roraimense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/607.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 3"
standings: true
}
teams: {
home: {
id: 21125
name: "River RR"
logo: "https://media.api-sports.io/football/teams/21125.png"
winner: null
}
away: {
id: 1218
name: "Sao Raimundo"
logo: "https://media.api-sports.io/football/teams/1218.png"
winner: null
}
}
goals: {
home: 2
away: 2
}
score: {
halftime: {
home: 1
away: 2
}
fulltime: {
home: 2
away: 2
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
}
{
fixture: {
id: 1505979
referee: "Alvaro Jose Melendez Panneflek, Colombia"
timezone: "UTC"
date: "2026-02-11T01:30:00+00:00"
timestamp: 1770773400
periods: {
first: 1770773400
second: 1770777000
}
venue: {
id: 21805
name: "Estadio Américo Montanini"
city: "Bucaramanga"
}
status: {
long: "Match Finished"
short: "FT"
elapsed: 90
extra: 9
}
}
league: {
id: 239
name: "Primera A"
country: "Colombia"
logo: "https://media.api-sports.io/football/leagues/239.png"
flag: "https://media.api-sports.io/flags/co.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 1131
name: "Bucaramanga"
logo: "https://media.api-sports.io/football/teams/1131.png"
winner: null
}
away: {
id: 1142
name: "Deportes Tolima"
logo: "https://media.api-sports.io/football/teams/1142.png"
winner: null
}
}
goals: {
home: 0
away: 0
}
score: {
halftime: {
home: 0
away: 0
}
fulltime: {
home: 0
away: 0
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
}
{
fixture: {
id: 1514133
referee: "Juan Calderon, Costa Rica"
timezone: "UTC"
date: "2026-02-11T03:00:00+00:00"
timestamp: 1770778800
periods: {
first: 1770778800
second: 1770782400
}
venue: {
id: null
name: "Estadio Universitario (UANL)"
city: "Monterrey"
}
status: {
long: "Match Finished"
short: "FT"
elapsed: 90
extra: 5
}
}
league: {
id: 16
name: "CONCACAF Champions League"
country: "World"
logo: "https://media.api-sports.io/football/leagues/16.png"
flag: null
season: 2026
round: "Round of 32"
standings: false
}
teams: {
home: {
id: 2279
name: "Tigres UANL"
logo: "https://media.api-sports.io/football/teams/2279.png"
winner: true
}
away: {
id: 3830
name: "Forge"
logo: "https://media.api-sports.io/football/teams/3830.png"
winner: false
}
}
goals: {
home: 4
away: 1
}
score: {
halftime: {
home: 1
away: 0
}
fulltime: {
home: 4
away: 1
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
}
{
fixture: {
id: 1518711
referee: null
timezone: "UTC"
date: "2026-02-11T07:00:00+00:00"
timestamp: 1770793200
periods: {
first: 1770793200
second: 1770796800
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Match Finished"
short: "FT"
elapsed: 90
extra: 5
}
}
league: {
id: 765
name: "PFL"
country: "Philippines"
logo: "https://media.api-sports.io/football/leagues/765.png"
flag: "https://media.api-sports.io/flags/ph.svg"
season: 2026
round: "Regular Season - 14"
standings: true
}
teams: {
home: {
id: 21576
name: "Manila Digger"
logo: "https://media.api-sports.io/football/teams/21576.png"
winner: true
}
away: {
id: 16192
name: "Mendiola"
logo: "https://media.api-sports.io/football/teams/16192.png"
winner: false
}
}
goals: {
home: 12
away: 0
}
score: {
halftime: {
home: 3
away: 0
}
fulltime: {
home: 12
away: 0
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
}
{
fixture: {
id: 1509581
referee: null
timezone: "UTC"
date: "2026-02-11T08:00:00+00:00"
timestamp: 1770796800
periods: {
first: 1770796800
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 3627
name: "Kolos Kovalivka"
logo: "https://media.api-sports.io/football/teams/3627.png"
winner: null
}
away: {
id: 20034
name: "Corvinul Hunedoara"
logo: "https://media.api-sports.io/football/teams/20034.png"
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
}
{
fixture: {
id: 1520351
referee: null
timezone: "UTC"
date: "2026-02-11T08:00:00+00:00"
timestamp: 1770796800
periods: {
first: 1770796800
second: 1770800400
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Match Finished"
short: "FT"
elapsed: 90
extra: 1
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 19449
name: "Spartak Kostroma"
logo: "https://media.api-sports.io/football/teams/19449.png"
winner: true
}
away: {
id: 6822
name: "Rodina Moskva"
logo: "https://media.api-sports.io/football/teams/6822.png"
winner: false
}
}
goals: {
home: 2
away: 0
}
score: {
halftime: {
home: 1
away: 0
}
fulltime: {
home: 2
away: 0
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
}
{
fixture: {
id: 1513910
referee: null
timezone: "UTC"
date: "2026-02-11T09:00:00+00:00"
timestamp: 1770800400
periods: {
first: 1770800400
second: 1770804000
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Second Half"
short: "2H"
elapsed: 55
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 662
name: "Kalju Nomme"
logo: "https://media.api-sports.io/football/teams/662.png"
winner: null
}
away: {
id: 4144
name: "Tukums"
logo: "https://media.api-sports.io/football/teams/4144.png"
winner: null
}
}
goals: {
home: 1
away: 1
}
score: {
halftime: {
home: 1
away: 0
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
}
{
fixture: {
id: 1518712
referee: null
timezone: "UTC"
date: "2026-02-11T09:00:00+00:00"
timestamp: 1770800400
periods: {
first: 1770800400
second: 1770804000
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Second Half"
short: "2H"
elapsed: 47
extra: null
}
}
league: {
id: 765
name: "PFL"
country: "Philippines"
logo: "https://media.api-sports.io/football/leagues/765.png"
flag: "https://media.api-sports.io/flags/ph.svg"
season: 2026
round: "Regular Season - 14"
standings: true
}
teams: {
home: {
id: 18265
name: "Dynamic Herb Cebu"
logo: "https://media.api-sports.io/football/teams/18265.png"
winner: true
}
away: {
id: 21578
name: "Philippine Army"
logo: "https://media.api-sports.io/football/teams/21578.png"
winner: false
}
}
goals: {
home: 5
away: 1
}
score: {
halftime: {
home: 5
away: 1
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
}
{
fixture: {
id: 1514120
referee: null
timezone: "UTC"
date: "2026-02-11T09:30:00+00:00"
timestamp: 1770802200
periods: {
first: 1770802200
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "First Half"
short: "1H"
elapsed: 40
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 402
name: "Aalborg"
logo: "https://media.api-sports.io/football/teams/402.png"
winner: null
}
away: {
id: 2068
name: "Skive"
logo: "https://media.api-sports.io/football/teams/2068.png"
winner: null
}
}
goals: {
home: 1
away: 1
}
score: {
halftime: {
home: 1
away: 1
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
}
{
fixture: {
id: 1504108
referee: null
timezone: "UTC"
date: "2026-02-11T09:30:00+00:00"
timestamp: 1770802200
periods: {
first: 1770802200
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "First Half"
short: "1H"
elapsed: 37
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 7291
name: "Hanácká"
logo: "https://media.api-sports.io/football/teams/7291.png"
winner: true
}
away: {
id: 15134
name: "Karviná II"
logo: "https://media.api-sports.io/football/teams/15134.png"
winner: false
}
}
goals: {
home: 3
away: 0
}
score: {
halftime: {
home: 3
away: 0
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
}
{
fixture: {
id: 1518713
referee: null
timezone: "UTC"
date: "2026-02-11T09:45:00+00:00"
timestamp: 1770803100
periods: {
first: 1770803100
second: null
}
venue: {
id: 18607
name: "Rizal Memorial Stadium"
city: "Manila"
}
status: {
long: "First Half"
short: "1H"
elapsed: 25
extra: null
}
}
league: {
id: 765
name: "PFL"
country: "Philippines"
logo: "https://media.api-sports.io/football/leagues/765.png"
flag: "https://media.api-sports.io/flags/ph.svg"
season: 2026
round: "Regular Season - 14"
standings: true
}
teams: {
home: {
id: 8030
name: "Kaya"
logo: "https://media.api-sports.io/football/teams/8030.png"
winner: null
}
away: {
id: 16191
name: "Maharlika"
logo: "https://media.api-sports.io/football/teams/16191.png"
winner: null
}
}
goals: {
home: 0
away: 0
}
score: {
halftime: {
home: 0
away: 0
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
}
{
fixture: {
id: 1516466
referee: null
timezone: "UTC"
date: "2026-02-11T10:00:00+00:00"
timestamp: 1770804000
periods: {
first: 1770804000
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "First Half"
short: "1H"
elapsed: 8
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 661
name: "FK Liepaja"
logo: "https://media.api-sports.io/football/teams/661.png"
winner: false
}
away: {
id: 9686
name: "Alcoyano"
logo: "https://media.api-sports.io/football/teams/9686.png"
winner: true
}
}
goals: {
home: 0
away: 1
}
score: {
halftime: {
home: 0
away: 1
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
}
{
fixture: {
id: 1514791
referee: null
timezone: "UTC"
date: "2026-02-11T10:00:00+00:00"
timestamp: 1770804000
periods: {
first: 1770804000
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "First Half"
short: "1H"
elapsed: 9
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 8623
name: "Slovácko II"
logo: "https://media.api-sports.io/football/teams/8623.png"
winner: null
}
away: {
id: 14062
name: "Považská Bystrica"
logo: "https://media.api-sports.io/football/teams/14062.png"
winner: null
}
}
goals: {
home: 0
away: 0
}
score: {
halftime: {
home: 0
away: 0
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
}
{
fixture: {
id: 1514792
referee: null
timezone: "UTC"
date: "2026-02-11T11:00:00+00:00"
timestamp: 1770807600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 1601
name: "Toronto FC"
logo: "https://media.api-sports.io/football/teams/1601.png"
winner: null
}
away: {
id: 2149
name: "Fredrikstad"
logo: "https://media.api-sports.io/football/teams/2149.png"
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
}
{
fixture: {
id: 1521150
referee: null
timezone: "UTC"
date: "2026-02-11T11:00:00+00:00"
timestamp: 1770807600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 10
name: "Friendlies"
country: "World"
logo: "https://media.api-sports.io/football/leagues/10.png"
flag: null
season: 2026
round: "Friendly International"
standings: false
}
teams: {
home: {
id: 17942
name: "Belgium U17"
logo: "https://media.api-sports.io/football/teams/17942.png"
winner: null
}
away: {
id: 17947
name: "Czech Republic U17"
logo: "https://media.api-sports.io/football/teams/17947.png"
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
}
{
fixture: {
id: 1503599
referee: null
timezone: "UTC"
date: "2026-02-11T12:00:00+00:00"
timestamp: 1770811200
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 20831
name: "Muscelul Câmpulung Elite"
logo: "https://media.api-sports.io/football/teams/20831.png"
winner: null
}
away: {
id: 2594
name: "CS Mioveni"
logo: "https://media.api-sports.io/football/teams/2594.png"
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
}
{
fixture: {
id: 1505892
referee: null
timezone: "UTC"
date: "2026-02-11T12:30:00+00:00"
timestamp: 1770813000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 402
name: "Aalborg"
logo: "https://media.api-sports.io/football/teams/402.png"
winner: null
}
away: {
id: 2069
name: "Thisted FC"
logo: "https://media.api-sports.io/football/teams/2069.png"
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
}
{
fixture: {
id: 1518714
referee: null
timezone: "UTC"
date: "2026-02-11T12:30:00+00:00"
timestamp: 1770813000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 765
name: "PFL"
country: "Philippines"
logo: "https://media.api-sports.io/football/leagues/765.png"
flag: "https://media.api-sports.io/flags/ph.svg"
season: 2026
round: "Regular Season - 14"
standings: true
}
teams: {
home: {
id: 22754
name: "Davao Aguilas"
logo: "https://media.api-sports.io/football/teams/22754.png"
winner: null
}
away: {
id: 16193
name: "Stallion"
logo: "https://media.api-sports.io/football/teams/16193.png"
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
}
{
fixture: {
id: 1504111
referee: null
timezone: "UTC"
date: "2026-02-11T13:00:00+00:00"
timestamp: 1770814800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 1331
name: "FSV Mainz 05 II"
logo: "https://media.api-sports.io/football/teams/1331.png"
winner: null
}
away: {
id: 24517
name: "Darmstadt 98 II"
logo: "https://media.api-sports.io/football/teams/24517.png"
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
}
{
fixture: {
id: 1504110
referee: null
timezone: "UTC"
date: "2026-02-11T13:00:00+00:00"
timestamp: 1770814800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Match Cancelled"
short: "CANC"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 2150
name: "hodd"
logo: "https://media.api-sports.io/football/teams/2150.png"
winner: null
}
away: {
id: 6970
name: "Brattvåg"
logo: "https://media.api-sports.io/football/teams/6970.png"
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
}
{
fixture: {
id: 1509582
referee: null
timezone: "UTC"
date: "2026-02-11T13:00:00+00:00"
timestamp: 1770814800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 3628
name: "Metalist 1925 Kharkiv"
logo: "https://media.api-sports.io/football/teams/3628.png"
winner: null
}
away: {
id: 2762
name: "Jeonbuk Motors"
logo: "https://media.api-sports.io/football/teams/2762.png"
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
}
{
fixture: {
id: 1517953
referee: null
timezone: "UTC"
date: "2026-02-11T13:00:00+00:00"
timestamp: 1770814800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 4378
name: "Radomlje"
logo: "https://media.api-sports.io/football/teams/4378.png"
winner: null
}
away: {
id: 3632
name: "Ruh Lviv"
logo: "https://media.api-sports.io/football/teams/3632.png"
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
}
{
fixture: {
id: 1504112
referee: null
timezone: "UTC"
date: "2026-02-11T13:00:00+00:00"
timestamp: 1770814800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 7562
name: "Sárbogárd"
logo: "https://media.api-sports.io/football/teams/7562.png"
winner: null
}
away: {
id: 11856
name: "Paksi SE II"
logo: "https://media.api-sports.io/football/teams/11856.png"
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
}
{
fixture: {
id: 1504113
referee: null
timezone: "UTC"
date: "2026-02-11T13:00:00+00:00"
timestamp: 1770814800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 11860
name: "Újpest II"
logo: "https://media.api-sports.io/football/teams/11860.png"
winner: null
}
away: {
id: 5070
name: "BKV Előre"
logo: "https://media.api-sports.io/football/teams/5070.png"
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
}
{
fixture: {
id: 1513911
referee: null
timezone: "UTC"
date: "2026-02-11T13:00:00+00:00"
timestamp: 1770814800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Match Cancelled"
short: "CANC"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 14054
name: "Galanta"
logo: "https://media.api-sports.io/football/teams/14054.png"
winner: null
}
away: {
id: 14948
name: "Boleráz"
logo: "https://media.api-sports.io/football/teams/14948.png"
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
}
{
fixture: {
id: 1514843
referee: null
timezone: "UTC"
date: "2026-02-11T13:15:00+00:00"
timestamp: 1770815700
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 402
name: "Sudani Premier League"
country: "Sudan"
logo: "https://media.api-sports.io/football/leagues/402.png"
flag: "https://media.api-sports.io/flags/sd.svg"
season: 2026
round: "Regular Season - 10"
standings: false
}
teams: {
home: {
id: 5242
name: "Al Shorta"
logo: "https://media.api-sports.io/football/teams/5242.png"
winner: null
}
away: {
id: 15595
name: "Al Hilal Port Sudan"
logo: "https://media.api-sports.io/football/teams/15595.png"
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
}
{
fixture: {
id: 1516467
referee: null
timezone: "UTC"
date: "2026-02-11T13:30:00+00:00"
timestamp: 1770816600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 2004
name: "Volgar Astrakhan"
logo: "https://media.api-sports.io/football/teams/2004.png"
winner: null
}
away: {
id: 1077
name: "Arsenal Tula"
logo: "https://media.api-sports.io/football/teams/1077.png"
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
}
{
fixture: {
id: 1514345
referee: null
timezone: "UTC"
date: "2026-02-11T13:30:00+00:00"
timestamp: 1770816600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 402
name: "Sudani Premier League"
country: "Sudan"
logo: "https://media.api-sports.io/football/leagues/402.png"
flag: "https://media.api-sports.io/flags/sd.svg"
season: 2026
round: "Regular Season - 10"
standings: false
}
teams: {
home: {
id: 5234
name: "Al Ahli Khartoum"
logo: "https://media.api-sports.io/football/teams/5234.png"
winner: null
}
away: {
id: 27318
name: "Al Hilal Manaqil"
logo: "https://media.api-sports.io/football/teams/27318.png"
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
}
{
fixture: {
id: 1514346
referee: null
timezone: "UTC"
date: "2026-02-11T13:30:00+00:00"
timestamp: 1770816600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 402
name: "Sudani Premier League"
country: "Sudan"
logo: "https://media.api-sports.io/football/leagues/402.png"
flag: "https://media.api-sports.io/flags/sd.svg"
season: 2026
round: "Regular Season - 10"
standings: false
}
teams: {
home: {
id: 5545
name: "Merreikh Kosti"
logo: "https://media.api-sports.io/football/teams/5545.png"
winner: null
}
away: {
id: 25524
name: "Umm Mughad"
logo: "https://media.api-sports.io/football/teams/25524.png"
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
}
{
fixture: {
id: 1504109
referee: null
timezone: "UTC"
date: "2026-02-11T13:30:00+00:00"
timestamp: 1770816600
periods: {
first: null
second: 1770820200
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Second Half"
short: "2H"
elapsed: 90
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 20034
name: "Corvinul Hunedoara"
logo: "https://media.api-sports.io/football/teams/20034.png"
winner: null
}
away: {
id: 10533
name: "Dukla Banská Bystrica"
logo: "https://media.api-sports.io/football/teams/10533.png"
winner: null
}
}
goals: {
home: 0
away: 0
}
score: {
halftime: {
home: 0
away: 0
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
}
{
fixture: {
id: 1514793
referee: null
timezone: "UTC"
date: "2026-02-11T14:00:00+00:00"
timestamp: 1770818400
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 1078
name: "FC UFA"
logo: "https://media.api-sports.io/football/teams/1078.png"
winner: null
}
away: {
id: 6822
name: "Rodina Moskva"
logo: "https://media.api-sports.io/football/teams/6822.png"
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
}
{
fixture: {
id: 1509583
referee: null
timezone: "UTC"
date: "2026-02-11T14:00:00+00:00"
timestamp: 1770818400
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Match Cancelled"
short: "CANC"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 3627
name: "Kolos Kovalivka"
logo: "https://media.api-sports.io/football/teams/3627.png"
winner: null
}
away: {
id: 3499
name: "Dila"
logo: "https://media.api-sports.io/football/teams/3499.png"
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
}
{
fixture: {
id: 1517963
referee: null
timezone: "UTC"
date: "2026-02-11T14:00:00+00:00"
timestamp: 1770818400
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 10
name: "Friendlies"
country: "World"
logo: "https://media.api-sports.io/football/leagues/10.png"
flag: null
season: 2026
round: "Friendly International"
standings: false
}
teams: {
home: {
id: 17981
name: "Switzerland U17"
logo: "https://media.api-sports.io/football/teams/17981.png"
winner: null
}
away: {
id: 12514
name: "Netherlands U17"
logo: "https://media.api-sports.io/football/teams/12514.png"
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
}
{
fixture: {
id: 1514794
referee: null
timezone: "UTC"
date: "2026-02-11T15:00:00+00:00"
timestamp: 1770822000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 9569
name: "Nashville SC"
logo: "https://media.api-sports.io/football/teams/9569.png"
winner: null
}
away: {
id: 1613
name: "Columbus Crew"
logo: "https://media.api-sports.io/football/teams/1613.png"
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
}
{
fixture: {
id: 1507980
referee: null
timezone: "UTC"
date: "2026-02-11T16:00:00+00:00"
timestamp: 1770825600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: "Mariehamn"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 899
name: "League Cup"
country: "Finland"
logo: "https://media.api-sports.io/football/leagues/899.png"
flag: "https://media.api-sports.io/flags/fi.svg"
season: 2026
round: "Group Stage"
standings: false
}
teams: {
home: {
id: 587
name: "Mariehamn"
logo: "https://media.api-sports.io/football/teams/587.png"
winner: null
}
away: {
id: 1168
name: "Turku PS"
logo: "https://media.api-sports.io/football/teams/1168.png"
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
}
{
fixture: {
id: 1520352
referee: null
timezone: "UTC"
date: "2026-02-11T16:00:00+00:00"
timestamp: 1770825600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 1485
name: "Medjimurje Cakovec"
logo: "https://media.api-sports.io/football/teams/1485.png"
winner: null
}
away: {
id: 8593
name: "Mladost Ždralovi"
logo: "https://media.api-sports.io/football/teams/8593.png"
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
}
{
fixture: {
id: 1508220
referee: null
timezone: "UTC"
date: "2026-02-11T16:00:00+00:00"
timestamp: 1770825600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Match Cancelled"
short: "CANC"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 7361
name: "Start Brno"
logo: "https://media.api-sports.io/football/teams/7361.png"
winner: null
}
away: {
id: 20825
name: "Sparta Brno"
logo: "https://media.api-sports.io/football/teams/20825.png"
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
}
{
fixture: {
id: 1520353
referee: null
timezone: "UTC"
date: "2026-02-11T16:00:00+00:00"
timestamp: 1770825600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 14068
name: "Humenné"
logo: "https://media.api-sports.io/football/teams/14068.png"
winner: null
}
away: {
id: 15051
name: "Sokol Ľubotice"
logo: "https://media.api-sports.io/football/teams/15051.png"
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
}
{
fixture: {
id: 1508219
referee: null
timezone: "UTC"
date: "2026-02-11T16:00:00+00:00"
timestamp: 1770825600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 24785
name: "Barycz Sułów"
logo: "https://media.api-sports.io/football/teams/24785.png"
winner: null
}
away: {
id: 12900
name: "Śląsk Wrocław II"
logo: "https://media.api-sports.io/football/teams/12900.png"
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
}
{
fixture: {
id: 1514845
referee: null
timezone: "UTC"
date: "2026-02-11T16:15:00+00:00"
timestamp: 1770826500
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 402
name: "Sudani Premier League"
country: "Sudan"
logo: "https://media.api-sports.io/football/leagues/402.png"
flag: "https://media.api-sports.io/flags/sd.svg"
season: 2026
round: "Regular Season - 10"
standings: false
}
teams: {
home: {
id: 25523
name: "Al-Mergheni"
logo: "https://media.api-sports.io/football/teams/25523.png"
winner: null
}
away: {
id: 27328
name: "Al-Hilal Omdurman II"
logo: "https://media.api-sports.io/football/teams/27328.png"
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
}
{
fixture: {
id: 1512735
referee: null
timezone: "UTC"
date: "2026-02-11T16:30:00+00:00"
timestamp: 1770827400
periods: {
first: null
second: null
}
venue: {
id: 0
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 823
name: "Nasjonal U19 Champions League"
country: "Norway"
logo: "https://media.api-sports.io/football/leagues/823.png"
flag: "https://media.api-sports.io/flags/no.svg"
season: 2026
round: "Group Stage - 2"
standings: true
}
teams: {
home: {
id: 16554
name: "Brann U19"
logo: "https://media.api-sports.io/football/teams/16554.png"
winner: null
}
away: {
id: 16569
name: "Åsane U19"
logo: "https://media.api-sports.io/football/teams/16569.png"
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
}
{
fixture: {
id: 1507734
referee: null
timezone: "UTC"
date: "2026-02-11T17:00:00+00:00"
timestamp: 1770829200
periods: {
first: null
second: null
}
venue: {
id: null
name: "Toyota Stadium"
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 1608
name: "Atlanta United FC"
logo: "https://media.api-sports.io/football/teams/1608.png"
winner: null
}
away: {
id: 1602
name: "New York Red Bulls"
logo: "https://media.api-sports.io/football/teams/1602.png"
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
}
{
fixture: {
id: 1513912
referee: null
timezone: "UTC"
date: "2026-02-11T17:00:00+00:00"
timestamp: 1770829200
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 3734
name: "Znojmo"
logo: "https://media.api-sports.io/football/teams/3734.png"
winner: null
}
away: {
id: 8288
name: "Retz"
logo: "https://media.api-sports.io/football/teams/8288.png"
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
}
{
fixture: {
id: 1502757
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1062
name: "Paulista - A4"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/1062.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 3"
standings: true
}
teams: {
home: {
id: 7786
name: "São Caetano"
logo: "https://media.api-sports.io/football/teams/7786.png"
winner: null
}
away: {
id: 10036
name: "Nacional SP"
logo: "https://media.api-sports.io/football/teams/10036.png"
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
}
{
fixture: {
id: 1514304
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: 0
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1063
name: "Copa Alagoas"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/1063.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Group Stage - 3"
standings: false
}
teams: {
home: {
id: 9125
name: "Dimensão Saúde"
logo: "https://media.api-sports.io/football/teams/9125.png"
winner: null
}
away: {
id: 146
name: "CRB"
logo: "https://media.api-sports.io/football/teams/146.png"
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
}
{
fixture: {
id: 1505893
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Match Cancelled"
short: "CANC"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 9365
name: "Pirmasens"
logo: "https://media.api-sports.io/football/teams/9365.png"
winner: null
}
away: {
id: 14642
name: "Borussia Neunkirchen"
logo: "https://media.api-sports.io/football/teams/14642.png"
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
}
{
fixture: {
id: 1502559
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 476
name: "Paulista - A2"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/476.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 9"
standings: true
}
teams: {
home: {
id: 10019
name: "Juventus"
logo: "https://media.api-sports.io/football/teams/10019.png"
winner: null
}
away: {
id: 7846
name: "Linense"
logo: "https://media.api-sports.io/football/teams/7846.png"
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
}
{
fixture: {
id: 1502655
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 605
name: "Paulista - A3"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/605.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 10033
name: "EC São Bernardo"
logo: "https://media.api-sports.io/football/teams/10033.png"
winner: null
}
away: {
id: 22851
name: "Catanduva"
logo: "https://media.api-sports.io/football/teams/22851.png"
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
}
{
fixture: {
id: 1502657
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 605
name: "Paulista - A3"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/605.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 10040
name: "Rio Preto"
logo: "https://media.api-sports.io/football/teams/10040.png"
winner: null
}
away: {
id: 10035
name: "Marília"
logo: "https://media.api-sports.io/football/teams/10035.png"
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
}
{
fixture: {
id: 1503744
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: 0
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 610
name: "Brasiliense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/610.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 7"
standings: true
}
teams: {
home: {
id: 12924
name: "Paranoá"
logo: "https://media.api-sports.io/football/teams/12924.png"
winner: null
}
away: {
id: 2208
name: "Brasiliense"
logo: "https://media.api-sports.io/football/teams/2208.png"
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
}
{
fixture: {
id: 1503746
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: 0
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 610
name: "Brasiliense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/610.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 7"
standings: true
}
teams: {
home: {
id: 12925
name: "Real FC"
logo: "https://media.api-sports.io/football/teams/12925.png"
winner: null
}
away: {
id: 2226
name: "Sobradinho EC"
logo: "https://media.api-sports.io/football/teams/2226.png"
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
}
{
fixture: {
id: 1507733
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 16489
name: "Austin"
logo: "https://media.api-sports.io/football/teams/16489.png"
winner: null
}
away: {
id: 1607
name: "Chicago Fire"
logo: "https://media.api-sports.io/football/teams/1607.png"
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
}
{
fixture: {
id: 1502658
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 605
name: "Paulista - A3"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/605.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 18304
name: "USAC"
logo: "https://media.api-sports.io/football/teams/18304.png"
winner: null
}
away: {
id: 20714
name: "Itapirense"
logo: "https://media.api-sports.io/football/teams/20714.png"
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
}
{
fixture: {
id: 1502756
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1062
name: "Paulista - A4"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/1062.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 3"
standings: true
}
teams: {
home: {
id: 22949
name: "Jabaquara"
logo: "https://media.api-sports.io/football/teams/22949.png"
winner: null
}
away: {
id: 22950
name: "Joseense"
logo: "https://media.api-sports.io/football/teams/22950.png"
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
}
{
fixture: {
id: 1502656
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 605
name: "Paulista - A3"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/605.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 22951
name: "Rio Branco SP"
logo: "https://media.api-sports.io/football/teams/22951.png"
winner: null
}
away: {
id: 22852
name: "União São João"
logo: "https://media.api-sports.io/football/teams/22852.png"
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
}
{
fixture: {
id: 1514305
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: 0
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1063
name: "Copa Alagoas"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/1063.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Group Stage - 3"
standings: false
}
teams: {
home: {
id: 22960
name: "Zumbi"
logo: "https://media.api-sports.io/football/teams/22960.png"
winner: null
}
away: {
id: 9127
name: "CSE"
logo: "https://media.api-sports.io/football/teams/9127.png"
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
}
{
fixture: {
id: 1502758
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1062
name: "Paulista - A4"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/1062.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 3"
standings: true
}
teams: {
home: {
id: 23581
name: "Tanabi"
logo: "https://media.api-sports.io/football/teams/23581.png"
winner: null
}
away: {
id: 10022
name: "Penapolense"
logo: "https://media.api-sports.io/football/teams/10022.png"
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
}
{
fixture: {
id: 1514303
referee: null
timezone: "UTC"
date: "2026-02-11T18:00:00+00:00"
timestamp: 1770832800
periods: {
first: null
second: null
}
venue: {
id: 0
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1063
name: "Copa Alagoas"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/1063.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Group Stage - 3"
standings: false
}
teams: {
home: {
id: 24096
name: "Aliança"
logo: "https://media.api-sports.io/football/teams/24096.png"
winner: null
}
away: {
id: 18363
name: "Cruzeiro Arapiraca"
logo: "https://media.api-sports.io/football/teams/18363.png"
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
}
{
fixture: {
id: 1503060
referee: null
timezone: "UTC"
date: "2026-02-11T18:15:00+00:00"
timestamp: 1770833700
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 626
name: "Sergipano"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/626.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 8"
standings: true
}
teams: {
home: {
id: 13122
name: "Dorense"
logo: "https://media.api-sports.io/football/teams/13122.png"
winner: null
}
away: {
id: 7772
name: "Confiança"
logo: "https://media.api-sports.io/football/teams/7772.png"
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
}
{
fixture: {
id: 1503058
referee: null
timezone: "UTC"
date: "2026-02-11T18:15:00+00:00"
timestamp: 1770833700
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 626
name: "Sergipano"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/626.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 8"
standings: true
}
teams: {
home: {
id: 18298
name: "América SE"
logo: "https://media.api-sports.io/football/teams/18298.png"
winner: null
}
away: {
id: 2204
name: "AO Itabaiana"
logo: "https://media.api-sports.io/football/teams/2204.png"
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
}
{
fixture: {
id: 1503059
referee: null
timezone: "UTC"
date: "2026-02-11T18:15:00+00:00"
timestamp: 1770833700
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 626
name: "Sergipano"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/626.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 8"
standings: true
}
teams: {
home: {
id: 24809
name: "Desportiva Aracaju"
logo: "https://media.api-sports.io/football/teams/24809.png"
winner: null
}
away: {
id: 10002
name: "Lagarto"
logo: "https://media.api-sports.io/football/teams/10002.png"
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
}
{
fixture: {
id: 1503061
referee: null
timezone: "UTC"
date: "2026-02-11T18:15:00+00:00"
timestamp: 1770833700
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 626
name: "Sergipano"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/626.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 8"
standings: true
}
teams: {
home: {
id: 24812
name: "Guarany SE"
logo: "https://media.api-sports.io/football/teams/24812.png"
winner: null
}
away: {
id: 18299
name: "Falcon"
logo: "https://media.api-sports.io/football/teams/18299.png"
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
}
{
fixture: {
id: 1520354
referee: null
timezone: "UTC"
date: "2026-02-11T18:30:00+00:00"
timestamp: 1770834600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 9329
name: "Heimstetten"
logo: "https://media.api-sports.io/football/teams/9329.png"
winner: null
}
away: {
id: 1314
name: "SpVgg Unterhaching"
logo: "https://media.api-sports.io/football/teams/1314.png"
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
}
{
fixture: {
id: 1500922
referee: null
timezone: "UTC"
date: "2026-02-11T18:30:00+00:00"
timestamp: 1770834600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: "Belem"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 627
name: "Paraense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/627.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 5"
standings: true
}
teams: {
home: {
id: 15611
name: "Tuna Luso"
logo: "https://media.api-sports.io/football/teams/15611.png"
winner: null
}
away: {
id: 1219
name: "Sao Francisco"
logo: "https://media.api-sports.io/football/teams/1219.png"
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
}
{
fixture: {
id: 1516237
referee: null
timezone: "UTC"
date: "2026-02-11T18:30:00+00:00"
timestamp: 1770834600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 608
name: "Maranhense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/608.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Final"
standings: true
}
teams: {
home: {
id: 18317
name: "Tuntum"
logo: "https://media.api-sports.io/football/teams/18317.png"
winner: null
}
away: {
id: 2213
name: "Imperatriz"
logo: "https://media.api-sports.io/football/teams/2213.png"
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
}
{
fixture: {
id: 1513913
referee: null
timezone: "UTC"
date: "2026-02-11T19:00:00+00:00"
timestamp: 1770836400
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 1605
name: "Los Angeles Galaxy"
logo: "https://media.api-sports.io/football/teams/1605.png"
winner: null
}
away: {
id: 20787
name: "St. Louis City"
logo: "https://media.api-sports.io/football/teams/20787.png"
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
}
{
fixture: {
id: 1514662
referee: null
timezone: "UTC"
date: "2026-02-11T19:00:00+00:00"
timestamp: 1770836400
periods: {
first: null
second: null
}
venue: {
id: 0
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 168
name: "League Cup"
country: "Iceland"
logo: "https://media.api-sports.io/football/leagues/168.png"
flag: "https://media.api-sports.io/flags/is.svg"
season: 2026
round: "Round - 5"
standings: false
}
teams: {
home: {
id: 2121
name: "Grotta"
logo: "https://media.api-sports.io/football/teams/2121.png"
winner: null
}
away: {
id: 827
name: "IA Akranes"
logo: "https://media.api-sports.io/football/teams/827.png"
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
}
{
fixture: {
id: 1521156
referee: null
timezone: "UTC"
date: "2026-02-11T20:00:00+00:00"
timestamp: 1770840000
periods: {
first: null
second: null
}
venue: {
id: null
name: "Estadio Luso Brasileiro"
city: "Rio de Janeiro"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 624
name: "Carioca - 1"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/624.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Relegation Group - 1"
standings: true
}
teams: {
home: {
id: 7835
name: "Portuguesa RJ"
logo: "https://media.api-sports.io/football/teams/7835.png"
winner: null
}
away: {
id: 7782
name: "Nova Iguaçu"
logo: "https://media.api-sports.io/football/teams/7782.png"
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
}
{
fixture: {
id: 1512186
referee: null
timezone: "UTC"
date: "2026-02-11T20:00:00+00:00"
timestamp: 1770840000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 906
name: "Reserve League"
country: "Argentina"
logo: "https://media.api-sports.io/football/leagues/906.png"
flag: "https://media.api-sports.io/flags/ar.svg"
season: 2026
round: "Regular Season - 2"
standings: true
}
teams: {
home: {
id: 18680
name: "Barracas Central Res."
logo: "https://media.api-sports.io/football/teams/18680.png"
winner: null
}
away: {
id: 18695
name: "River Plate Res."
logo: "https://media.api-sports.io/football/teams/18695.png"
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
}
{
fixture: {
id: 1512194
referee: null
timezone: "UTC"
date: "2026-02-11T20:00:00+00:00"
timestamp: 1770840000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 906
name: "Reserve League"
country: "Argentina"
logo: "https://media.api-sports.io/football/leagues/906.png"
flag: "https://media.api-sports.io/flags/ar.svg"
season: 2026
round: "Regular Season - 2"
standings: true
}
teams: {
home: {
id: 18688
name: "Huracán Res."
logo: "https://media.api-sports.io/football/teams/18688.png"
winner: null
}
away: {
id: 18690
name: "Lanús Res."
logo: "https://media.api-sports.io/football/teams/18690.png"
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
}
{
fixture: {
id: 1512183
referee: null
timezone: "UTC"
date: "2026-02-11T20:00:00+00:00"
timestamp: 1770840000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 906
name: "Reserve League"
country: "Argentina"
logo: "https://media.api-sports.io/football/leagues/906.png"
flag: "https://media.api-sports.io/flags/ar.svg"
season: 2026
round: "Regular Season - 2"
standings: true
}
teams: {
home: {
id: 27412
name: "Atl. Rafaela 2"
logo: "https://media.api-sports.io/football/teams/27412.png"
winner: null
}
away: {
id: 25592
name: "San Martín San Juan Res."
logo: "https://media.api-sports.io/football/teams/25592.png"
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
}
{
fixture: {
id: 1512197
referee: null
timezone: "UTC"
date: "2026-02-11T20:00:00+00:00"
timestamp: 1770840000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 906
name: "Reserve League"
country: "Argentina"
logo: "https://media.api-sports.io/football/leagues/906.png"
flag: "https://media.api-sports.io/flags/ar.svg"
season: 2026
round: "Regular Season - 2"
standings: true
}
teams: {
home: {
id: 27413
name: "Quilmes 2"
logo: "https://media.api-sports.io/football/teams/27413.png"
winner: null
}
away: {
id: 18685
name: "Estudiantes La Plata Res"
logo: "https://media.api-sports.io/football/teams/18685.png"
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
}
{
fixture: {
id: 1516468
referee: null
timezone: "UTC"
date: "2026-02-11T20:30:00+00:00"
timestamp: 1770841800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 1615
name: "DC United"
logo: "https://media.api-sports.io/football/teams/1615.png"
winner: null
}
away: {
id: 1612
name: "Minnesota United FC"
logo: "https://media.api-sports.io/football/teams/1612.png"
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
}
{
fixture: {
id: 1521439
referee: null
timezone: "UTC"
date: "2026-02-11T21:00:00+00:00"
timestamp: 1770843600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1219
name: "Copa Presidente"
country: "El-Salvador"
logo: "https://media.api-sports.io/football/leagues/1219.png"
flag: "https://media.api-sports.io/flags/sv.svg"
season: 2026
round: "Regular Season - 1"
standings: true
}
teams: {
home: {
id: 135
name: "Cruzeiro"
logo: "https://media.api-sports.io/football/teams/135.png"
winner: null
}
away: {
id: 4306
name: "Municipal Limeño"
logo: "https://media.api-sports.io/football/teams/4306.png"
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
}
{
fixture: {
id: 1509584
referee: null
timezone: "UTC"
date: "2026-02-11T21:00:00+00:00"
timestamp: 1770843600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 1598
name: "Orlando City SC"
logo: "https://media.api-sports.io/football/teams/1598.png"
winner: null
}
away: {
id: 2242
name: "FC Cincinnati"
logo: "https://media.api-sports.io/football/teams/2242.png"
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
}
{
fixture: {
id: 1510068
referee: null
timezone: "UTC"
date: "2026-02-11T21:00:00+00:00"
timestamp: 1770843600
periods: {
first: null
second: null
}
venue: {
id: null
name: "Estadio Los Andes II"
city: "San Miguelito"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 304
name: "Liga Panameña de Fútbol"
country: "Panama"
logo: "https://media.api-sports.io/football/leagues/304.png"
flag: "https://media.api-sports.io/flags/pa.svg"
season: 2026
round: "Regular Season - 5"
standings: true
}
teams: {
home: {
id: 2889
name: "Sporting San Miguelito"
logo: "https://media.api-sports.io/football/teams/2889.png"
winner: null
}
away: {
id: 2881
name: "Alianza FC"
logo: "https://media.api-sports.io/football/teams/2881.png"
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
}
{
fixture: {
id: 1514795
referee: null
timezone: "UTC"
date: "2026-02-11T21:00:00+00:00"
timestamp: 1770843600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 3990
name: "Charleston Battery"
logo: "https://media.api-sports.io/football/teams/3990.png"
winner: null
}
away: {
id: 9026
name: "Greenville Triumph"
logo: "https://media.api-sports.io/football/teams/9026.png"
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
}
{
fixture: {
id: 1521440
referee: null
timezone: "UTC"
date: "2026-02-11T21:00:00+00:00"
timestamp: 1770843600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1219
name: "Copa Presidente"
country: "El-Salvador"
logo: "https://media.api-sports.io/football/leagues/1219.png"
flag: "https://media.api-sports.io/flags/sv.svg"
season: 2026
round: "Regular Season - 1"
standings: true
}
teams: {
home: {
id: 19412
name: "Dragón"
logo: "https://media.api-sports.io/football/teams/19412.png"
winner: null
}
away: {
id: 4310
name: "Águila"
logo: "https://media.api-sports.io/football/teams/4310.png"
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
}
{
fixture: {
id: 1516494
referee: null
timezone: "UTC"
date: "2026-02-11T21:00:00+00:00"
timestamp: 1770843600
periods: {
first: null
second: null
}
venue: {
id: null
name: "Estadio Emiliano Ghezzi"
city: "Fernando de la Mora"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1085
name: "CONMEBOL U20 Femenino"
country: "World"
logo: "https://media.api-sports.io/football/leagues/1085.png"
flag: null
season: 2026
round: "Group Stage"
standings: false
}
teams: {
home: {
id: 23457
name: "Argentina U20 W"
logo: "https://media.api-sports.io/football/teams/23457.png"
winner: null
}
away: {
id: 23458
name: "Bolivia U20 W"
logo: "https://media.api-sports.io/football/teams/23458.png"
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
}
{
fixture: {
id: 1516495
referee: null
timezone: "UTC"
date: "2026-02-11T21:00:00+00:00"
timestamp: 1770843600
periods: {
first: null
second: null
}
venue: {
id: null
name: "Estadio Luis Alfonso Giagni"
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1085
name: "CONMEBOL U20 Femenino"
country: "World"
logo: "https://media.api-sports.io/football/leagues/1085.png"
flag: null
season: 2026
round: "Group Stage"
standings: false
}
teams: {
home: {
id: 23461
name: "Peru U20 W"
logo: "https://media.api-sports.io/football/teams/23461.png"
winner: null
}
away: {
id: 19079
name: "Brazil U20 W"
logo: "https://media.api-sports.io/football/teams/19079.png"
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
}
{
fixture: {
id: 1521441
referee: null
timezone: "UTC"
date: "2026-02-11T21:00:00+00:00"
timestamp: 1770843600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1219
name: "Copa Presidente"
country: "El-Salvador"
logo: "https://media.api-sports.io/football/leagues/1219.png"
flag: "https://media.api-sports.io/flags/sv.svg"
season: 2026
round: "Regular Season - 1"
standings: true
}
teams: {
home: {
id: 27508
name: "Tenancingo"
logo: "https://media.api-sports.io/football/teams/27508.png"
winner: null
}
away: {
id: 19763
name: "Platense"
logo: "https://media.api-sports.io/football/teams/19763.png"
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
}
{
fixture: {
id: 1507735
referee: null
timezone: "UTC"
date: "2026-02-11T21:30:00+00:00"
timestamp: 1770845400
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 1611
name: "Sporting Kansas City"
logo: "https://media.api-sports.io/football/teams/1611.png"
winner: null
}
away: {
id: 1604
name: "New York City FC"
logo: "https://media.api-sports.io/football/teams/1604.png"
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
}
{
fixture: {
id: 1492132
referee: "W. do Nascimento"
timezone: "UTC"
date: "2026-02-11T22:00:00+00:00"
timestamp: 1770847200
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 71
name: "Serie A"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/71.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 3"
standings: true
}
teams: {
home: {
id: 132
name: "Chapecoense-sc"
logo: "https://media.api-sports.io/football/teams/132.png"
winner: null
}
away: {
id: 147
name: "Coritiba"
logo: "https://media.api-sports.io/football/teams/147.png"
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
}
{
fixture: {
id: 1503668
referee: null
timezone: "UTC"
date: "2026-02-11T22:00:00+00:00"
timestamp: 1770847200
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 130
name: "Copa Argentina"
country: "Argentina"
logo: "https://media.api-sports.io/football/leagues/130.png"
flag: "https://media.api-sports.io/flags/ar.svg"
season: 2026
round: "Round of 64"
standings: false
}
teams: {
home: {
id: 437
name: "Rosario Central"
logo: "https://media.api-sports.io/football/teams/437.png"
winner: null
}
away: {
id: 1966
name: "Sportivo Belgrano"
logo: "https://media.api-sports.io/football/teams/1966.png"
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
}
{
fixture: {
id: 1502561
referee: null
timezone: "UTC"
date: "2026-02-11T22:00:00+00:00"
timestamp: 1770847200
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 476
name: "Paulista - A2"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/476.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 9"
standings: true
}
teams: {
home: {
id: 7779
name: "Ituano"
logo: "https://media.api-sports.io/football/teams/7779.png"
winner: null
}
away: {
id: 1201
name: "Inter De Limeira"
logo: "https://media.api-sports.io/football/teams/1201.png"
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
}
{
fixture: {
id: 1492136
referee: "B. Machado"
timezone: "UTC"
date: "2026-02-11T22:00:00+00:00"
timestamp: 1770847200
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: "Mirassol"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 71
name: "Serie A"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/71.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 3"
standings: true
}
teams: {
home: {
id: 7848
name: "Mirassol"
logo: "https://media.api-sports.io/football/teams/7848.png"
winner: null
}
away: {
id: 135
name: "Cruzeiro"
logo: "https://media.api-sports.io/football/teams/135.png"
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
}
{
fixture: {
id: 1502560
referee: null
timezone: "UTC"
date: "2026-02-11T22:00:00+00:00"
timestamp: 1770847200
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 476
name: "Paulista - A2"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/476.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 9"
standings: true
}
teams: {
home: {
id: 10018
name: "Água Santa"
logo: "https://media.api-sports.io/football/teams/10018.png"
winner: null
}
away: {
id: 7826
name: "Ferroviária"
logo: "https://media.api-sports.io/football/teams/7826.png"
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
}
{
fixture: {
id: 1502562
referee: null
timezone: "UTC"
date: "2026-02-11T22:00:00+00:00"
timestamp: 1770847200
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 476
name: "Paulista - A2"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/476.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 9"
standings: true
}
teams: {
home: {
id: 10025
name: "Sertãozinho"
logo: "https://media.api-sports.io/football/teams/10025.png"
winner: null
}
away: {
id: 156
name: "Sao Bento"
logo: "https://media.api-sports.io/football/teams/156.png"
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
}
{
fixture: {
id: 1521036
referee: null
timezone: "UTC"
date: "2026-02-11T22:00:00+00:00"
timestamp: 1770847200
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: "Horizonte"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 609
name: "Cearense - 1"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/609.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Final"
standings: true
}
teams: {
home: {
id: 12297
name: "Horizonte"
logo: "https://media.api-sports.io/football/teams/12297.png"
winner: null
}
away: {
id: 15505
name: "Iguatu"
logo: "https://media.api-sports.io/football/teams/15505.png"
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
}
{
fixture: {
id: 1500949
referee: null
timezone: "UTC"
date: "2026-02-11T22:00:00+00:00"
timestamp: 1770847200
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 621
name: "Piauiense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/621.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 25417
name: "Atlético Piauiense"
logo: "https://media.api-sports.io/football/teams/25417.png"
winner: null
}
away: {
id: 26860
name: "Teresina Esporte Club"
logo: "https://media.api-sports.io/football/teams/26860.png"
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
}
{
fixture: {
id: 1501128
referee: null
timezone: "UTC"
date: "2026-02-11T22:00:00+00:00"
timestamp: 1770847200
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 623
name: "Sul-Matogrossense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/623.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 27285
name: "Bataguassu"
logo: "https://media.api-sports.io/football/teams/27285.png"
winner: null
}
away: {
id: 22828
name: "Pantanal"
logo: "https://media.api-sports.io/football/teams/22828.png"
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
}
{
fixture: {
id: 1500684
referee: null
timezone: "UTC"
date: "2026-02-11T22:15:00+00:00"
timestamp: 1770848100
periods: {
first: null
second: null
}
venue: {
id: null
name: "Arena Cajueiro"
city: "Feira de Santana"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 602
name: "Baiano - 1"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/602.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 7"
standings: true
}
teams: {
home: {
id: 7822
name: "Bahia de Feira"
logo: "https://media.api-sports.io/football/teams/7822.png"
winner: null
}
away: {
id: 15103
name: "Barcelona BA"
logo: "https://media.api-sports.io/football/teams/15103.png"
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
}
{
fixture: {
id: 1516235
referee: null
timezone: "UTC"
date: "2026-02-11T22:30:00+00:00"
timestamp: 1770849000
periods: {
first: null
second: null
}
venue: {
id: null
name: "Estadio Municipal Nhozinho Santos"
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 608
name: "Maranhense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/608.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Semi-finals"
standings: true
}
teams: {
home: {
id: 2216
name: "Moto Club"
logo: "https://media.api-sports.io/football/teams/2216.png"
winner: null
}
away: {
id: 15606
name: "IAPE"
logo: "https://media.api-sports.io/football/teams/15606.png"
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
}
{
fixture: {
id: 1502564
referee: null
timezone: "UTC"
date: "2026-02-11T22:30:00+00:00"
timestamp: 1770849000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 476
name: "Paulista - A2"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/476.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 9"
standings: true
}
teams: {
home: {
id: 2230
name: "Votuporanguense"
logo: "https://media.api-sports.io/football/teams/2230.png"
winner: null
}
away: {
id: 10026
name: "Taubaté"
logo: "https://media.api-sports.io/football/teams/10026.png"
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
}
{
fixture: {
id: 1521037
referee: null
timezone: "UTC"
date: "2026-02-11T22:30:00+00:00"
timestamp: 1770849000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 628
name: "Goiano - 1"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/628.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Quarter-finals"
standings: true
}
teams: {
home: {
id: 7820
name: "Anapolina"
logo: "https://media.api-sports.io/football/teams/7820.png"
winner: null
}
away: {
id: 16465
name: "Jataiense"
logo: "https://media.api-sports.io/football/teams/16465.png"
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
}
{
fixture: {
id: 1516234
referee: null
timezone: "UTC"
date: "2026-02-11T22:30:00+00:00"
timestamp: 1770849000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 608
name: "Maranhense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/608.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Semi-finals"
standings: true
}
teams: {
home: {
id: 7832
name: "Maranhão"
logo: "https://media.api-sports.io/football/teams/7832.png"
winner: null
}
away: {
id: 155
name: "Sampaio Correa"
logo: "https://media.api-sports.io/football/teams/155.png"
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
}
{
fixture: {
id: 1512687
referee: null
timezone: "UTC"
date: "2026-02-11T22:30:00+00:00"
timestamp: 1770849000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 603
name: "Paraibano"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/603.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 8"
standings: true
}
teams: {
home: {
id: 10670
name: "Atlético Cajazeirense"
logo: "https://media.api-sports.io/football/teams/10670.png"
winner: null
}
away: {
id: 1197
name: "Botafogo PB"
logo: "https://media.api-sports.io/football/teams/1197.png"
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
}
{
fixture: {
id: 1521038
referee: null
timezone: "UTC"
date: "2026-02-11T22:30:00+00:00"
timestamp: 1770849000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 628
name: "Goiano - 1"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/628.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Quarter-finals"
standings: true
}
teams: {
home: {
id: 10671
name: "CRAC"
logo: "https://media.api-sports.io/football/teams/10671.png"
winner: null
}
away: {
id: 151
name: "Goias"
logo: "https://media.api-sports.io/football/teams/151.png"
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
}
{
fixture: {
id: 1502563
referee: null
timezone: "UTC"
date: "2026-02-11T22:30:00+00:00"
timestamp: 1770849000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 476
name: "Paulista - A2"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/476.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 9"
standings: true
}
teams: {
home: {
id: 20713
name: "Grêmio Prudente"
logo: "https://media.api-sports.io/football/teams/20713.png"
winner: null
}
away: {
id: 10021
name: "Monte Azul"
logo: "https://media.api-sports.io/football/teams/10021.png"
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
}
{
fixture: {
id: 1502659
referee: null
timezone: "UTC"
date: "2026-02-11T22:30:00+00:00"
timestamp: 1770849000
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 605
name: "Paulista - A3"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/605.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 22954
name: "Uniao Barbarense"
logo: "https://media.api-sports.io/football/teams/22954.png"
winner: null
}
away: {
id: 22946
name: "Francana"
logo: "https://media.api-sports.io/football/teams/22946.png"
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
}
{
fixture: {
id: 1502565
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 476
name: "Paulista - A2"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/476.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 9"
standings: true
}
teams: {
home: {
id: 143
name: "Oeste"
logo: "https://media.api-sports.io/football/teams/143.png"
winner: null
}
away: {
id: 10003
name: "Santo André"
logo: "https://media.api-sports.io/football/teams/10003.png"
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
}
{
fixture: {
id: 1521011
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: "Recife"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 622
name: "Pernambucano - 1"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/622.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Semi-finals"
standings: true
}
teams: {
home: {
id: 753
name: "Santa Cruz"
logo: "https://media.api-sports.io/football/teams/753.png"
winner: null
}
away: {
id: 755
name: "Nautico Recife"
logo: "https://media.api-sports.io/football/teams/755.png"
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
}
{
fixture: {
id: 1492131
referee: "M. Delgado"
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: "MRV Arena"
city: "Belo Horizonte"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 71
name: "Serie A"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/71.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 3"
standings: true
}
teams: {
home: {
id: 1062
name: "Atletico-MG"
logo: "https://media.api-sports.io/football/teams/1062.png"
winner: null
}
away: {
id: 1198
name: "remo"
logo: "https://media.api-sports.io/football/teams/1198.png"
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
}
{
fixture: {
id: 1509585
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 667
name: "Friendlies Clubs"
country: "World"
logo: "https://media.api-sports.io/football/leagues/667.png"
flag: null
season: 2026
round: "Club Friendlies"
standings: false
}
teams: {
home: {
id: 1596
name: "San Jose Earthquakes"
logo: "https://media.api-sports.io/football/teams/1596.png"
winner: null
}
away: {
id: 1617
name: "Portland Timbers"
logo: "https://media.api-sports.io/football/teams/1617.png"
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
}
{
fixture: {
id: 1501149
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 521
name: "Amapaense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/521.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 1"
standings: true
}
teams: {
home: {
id: 2231
name: "Ypiranga-PE"
logo: "https://media.api-sports.io/football/teams/2231.png"
winner: null
}
away: {
id: 10858
name: "Oratório"
logo: "https://media.api-sports.io/football/teams/10858.png"
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
}
{
fixture: {
id: 1502566
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 476
name: "Paulista - A2"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/476.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 9"
standings: true
}
teams: {
home: {
id: 7870
name: "XV de Piracicaba"
logo: "https://media.api-sports.io/football/teams/7870.png"
winner: null
}
away: {
id: 15622
name: "São José EC"
logo: "https://media.api-sports.io/football/teams/15622.png"
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
}
{
fixture: {
id: 1521168
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: "Estadio Municipal Dito Souza"
city: "Varzea Grande"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 630
name: "Matogrossense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/630.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Quarter-finals"
standings: true
}
teams: {
home: {
id: 9999
name: "CEOV Operário"
logo: "https://media.api-sports.io/football/teams/9999.png"
winner: null
}
away: {
id: 13130
name: "Nova Mutum EC"
logo: "https://media.api-sports.io/football/teams/13130.png"
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
}
{
fixture: {
id: 1502662
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: "Estadio Ulrico Mursa"
city: "Santos"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 605
name: "Paulista - A3"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/605.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 10023
name: "Portuguesa Santista"
logo: "https://media.api-sports.io/football/teams/10023.png"
winner: null
}
away: {
id: 10024
name: "Rio Claro"
logo: "https://media.api-sports.io/football/teams/10024.png"
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
}
{
fixture: {
id: 1502752
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1062
name: "Paulista - A4"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/1062.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 3"
standings: true
}
teams: {
home: {
id: 10028
name: "Barretos"
logo: "https://media.api-sports.io/football/teams/10028.png"
winner: null
}
away: {
id: 22955
name: "Vocem"
logo: "https://media.api-sports.io/football/teams/22955.png"
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
}
{
fixture: {
id: 1502753
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1062
name: "Paulista - A4"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/1062.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 3"
standings: true
}
teams: {
home: {
id: 10031
name: "Comercial"
logo: "https://media.api-sports.io/football/teams/10031.png"
winner: null
}
away: {
id: 22953
name: "Taquaritinga"
logo: "https://media.api-sports.io/football/teams/22953.png"
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
}
{
fixture: {
id: 1502661
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 605
name: "Paulista - A3"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/605.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 10038
name: "Paulista"
logo: "https://media.api-sports.io/football/teams/10038.png"
winner: null
}
away: {
id: 10032
name: "Desportivo Brasil"
logo: "https://media.api-sports.io/football/teams/10032.png"
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
}
{
fixture: {
id: 1513690
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: "Cascavel"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 606
name: "Paranaense - 1"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/606.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Final"
standings: true
}
teams: {
home: {
id: 10673
name: "Cascavel"
logo: "https://media.api-sports.io/football/teams/10673.png"
winner: null
}
away: {
id: 12936
name: "Andraus Brasil"
logo: "https://media.api-sports.io/football/teams/12936.png"
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
}
{
fixture: {
id: 1502660
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 605
name: "Paulista - A3"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/605.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 15621
name: "Bandeirante SP"
logo: "https://media.api-sports.io/football/teams/15621.png"
winner: null
}
away: {
id: 22956
name: "XV de Jau"
logo: "https://media.api-sports.io/football/teams/22956.png"
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
}
{
fixture: {
id: 1500919
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 627
name: "Paraense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/627.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 5"
standings: true
}
teams: {
home: {
id: 20723
name: "Cametá"
logo: "https://media.api-sports.io/football/teams/20723.png"
winner: null
}
away: {
id: 149
name: "Paysandu"
logo: "https://media.api-sports.io/football/teams/149.png"
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
}
{
fixture: {
id: 1502751
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1062
name: "Paulista - A4"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/1062.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 3"
standings: true
}
teams: {
home: {
id: 23569
name: "AEA"
logo: "https://media.api-sports.io/football/teams/23569.png"
winner: null
}
away: {
id: 18466
name: "EC Lemense"
logo: "https://media.api-sports.io/football/teams/18466.png"
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
}
{
fixture: {
id: 1502755
referee: null
timezone: "UTC"
date: "2026-02-11T23:00:00+00:00"
timestamp: 1770850800
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 1062
name: "Paulista - A4"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/1062.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 3"
standings: true
}
teams: {
home: {
id: 23576
name: "Inter de Bebedouro"
logo: "https://media.api-sports.io/football/teams/23576.png"
winner: null
}
away: {
id: 23572
name: "Colorado Caieiras"
logo: "https://media.api-sports.io/football/teams/23572.png"
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
}
{
fixture: {
id: 1510069
referee: null
timezone: "UTC"
date: "2026-02-11T23:15:00+00:00"
timestamp: 1770851700
periods: {
first: null
second: null
}
venue: {
id: null
name: "Estadio Universidad Latina"
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 304
name: "Liga Panameña de Fútbol"
country: "Panama"
logo: "https://media.api-sports.io/football/leagues/304.png"
flag: "https://media.api-sports.io/flags/pa.svg"
season: 2026
round: "Regular Season - 5"
standings: true
}
teams: {
home: {
id: 2888
name: "Deportivo Universitario"
logo: "https://media.api-sports.io/football/teams/2888.png"
winner: null
}
away: {
id: 2887
name: "San Francisco FC"
logo: "https://media.api-sports.io/football/teams/2887.png"
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
}
{
fixture: {
id: 1505981
referee: null
timezone: "UTC"
date: "2026-02-11T23:30:00+00:00"
timestamp: 1770852600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 239
name: "Primera A"
country: "Colombia"
logo: "https://media.api-sports.io/football/leagues/239.png"
flag: "https://media.api-sports.io/flags/co.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 1125
name: "Millonarios"
logo: "https://media.api-sports.io/football/teams/1125.png"
winner: null
}
away: {
id: 1144
name: "Rionegro Aguilas"
logo: "https://media.api-sports.io/football/teams/1144.png"
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
}
{
fixture: {
id: 1501130
referee: null
timezone: "UTC"
date: "2026-02-11T23:30:00+00:00"
timestamp: 1770852600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 623
name: "Sul-Matogrossense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/623.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 1206
name: "Corumbaense"
logo: "https://media.api-sports.io/football/teams/1206.png"
winner: null
}
away: {
id: 10687
name: "Ivinhema"
logo: "https://media.api-sports.io/football/teams/10687.png"
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
}
{
fixture: {
id: 1503745
referee: null
timezone: "UTC"
date: "2026-02-11T23:30:00+00:00"
timestamp: 1770852600
periods: {
first: null
second: null
}
venue: {
id: 0
name: null
city: "Gama"
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 610
name: "Brasiliense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/610.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 7"
standings: true
}
teams: {
home: {
id: 1222
name: "Gama"
logo: "https://media.api-sports.io/football/teams/1222.png"
winner: null
}
away: {
id: 7771
name: "Ceilândia"
logo: "https://media.api-sports.io/football/teams/7771.png"
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
}
{
fixture: {
id: 1514521
referee: null
timezone: "UTC"
date: "2026-02-11T23:30:00+00:00"
timestamp: 1770852600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 615
name: "Rondoniense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/615.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 12"
standings: false
}
teams: {
home: {
id: 1229
name: "Genus"
logo: "https://media.api-sports.io/football/teams/1229.png"
winner: null
}
away: {
id: 12946
name: "Porto Velho"
logo: "https://media.api-sports.io/football/teams/12946.png"
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
}
{
fixture: {
id: 1501132
referee: null
timezone: "UTC"
date: "2026-02-11T23:30:00+00:00"
timestamp: 1770852600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 623
name: "Sul-Matogrossense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/623.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 2217
name: "Operario Ferroviario"
logo: "https://media.api-sports.io/football/teams/2217.png"
winner: null
}
away: {
id: 13103
name: "Costa Rica "
logo: "https://media.api-sports.io/football/teams/13103.png"
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
}
{
fixture: {
id: 1501129
referee: null
timezone: "UTC"
date: "2026-02-11T23:30:00+00:00"
timestamp: 1770852600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 623
name: "Sul-Matogrossense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/623.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 10006
name: "Águia Negra"
logo: "https://media.api-sports.io/football/teams/10006.png"
winner: null
}
away: {
id: 27286
name: "CR Aquidauana"
logo: "https://media.api-sports.io/football/teams/27286.png"
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
}
{
fixture: {
id: 1514522
referee: null
timezone: "UTC"
date: "2026-02-11T23:30:00+00:00"
timestamp: 1770852600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 615
name: "Rondoniense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/615.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 12"
standings: false
}
teams: {
home: {
id: 12944
name: "Guaporé"
logo: "https://media.api-sports.io/football/teams/12944.png"
winner: null
}
away: {
id: 7823
name: "Barcelona RO"
logo: "https://media.api-sports.io/football/teams/7823.png"
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
}
{
fixture: {
id: 1501131
referee: null
timezone: "UTC"
date: "2026-02-11T23:30:00+00:00"
timestamp: 1770852600
periods: {
first: null
second: null
}
venue: {
id: null
name: null
city: null
}
status: {
long: "Not Started"
short: "NS"
elapsed: null
extra: null
}
}
league: {
id: 623
name: "Sul-Matogrossense"
country: "Brazil"
logo: "https://media.api-sports.io/football/leagues/623.png"
flag: "https://media.api-sports.io/flags/br.svg"
season: 2026
round: "Regular Season - 6"
standings: true
}
teams: {
home: {
id: 18365
name: "Naviraiense"
logo: "https://media.api-sports.io/football/teams/18365.png"
winner: null
}
away: {
id: 16480
name: "Dourados Atlético"
logo: "https://media.api-sports.io/football/teams/16480.png"
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
}
]}
  ]`;

  let liveMatchSampleJson: AllFixtures[] = [];

  try {
    const jsonData = JSON.parse(fixturesSample);
    liveMatchSampleJson = jsonData;
  } catch (error) {
    console.error("Error parsing JSON: ", error);
  }

  return liveMatchSampleJson;
}

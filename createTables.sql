DROP TABLE  "Appearances";
DROP TABLE  "AwardsManagers";
DROP TABLE  "AwardsPlayers";
DROP TABLE  "AwardsShareManagers";
DROP TABLE  "Batting";
DROP TABLE  "CollegePlaying";
DROP TABLE  "Fielding";
DROP TABLE  "Managers";
DROP TABLE  "Individual";
DROP TABLE  "Pitching";
DROP TABLE  "Salaries";
DROP TABLE  "Schools";
DROP TABLE  "Teams";
DROP TABLE  "TeamsFranchises";


CREATE TABLE "Appearances" (
    "yearID" INTEGER,
    "teamID" VARCHAR(3),
    "lgID" VARCHAR(2),
    "playerID" VARCHAR(9),
    "G_all" INTEGER,
    "GS" INTEGER,
    "G_batting" INTEGER,
    "G_defense" INTEGER,
    "G_p" INTEGER,
    "G_c" INTEGER,
    "G_1b" INTEGER,
    "G_2b" INTEGER,
    "G_3b" INTEGER,
    "G_ss" INTEGER,
    "G_lf" INTEGER,
    "G_cf" INTEGER,
    "G_rf" INTEGER,
    "G_of" INTEGER,
    "G_dh" INTEGER,
    "G_ph" INTEGER,
    "G_pr" INTEGER,
    PRIMARY KEY ( "yearID", "teamID", "playerID" )
);

CREATE TABLE "AwardsManagers" (
    "playerID" VARCHAR(10),
    "awardID" VARCHAR(75),
    "yearID" INTEGER,
    "lgID" VARCHAR(2),
    "tie" VARCHAR(1),
    "notes" VARCHAR(100),
    PRIMARY KEY ( "yearID", "awardID", "lgID", "playerID" )
);


CREATE TABLE "AwardsPlayers" (
    "playerID" VARCHAR(9),
    "awardID" VARCHAR(255),
    "yearID" INTEGER,
    "lgID" VARCHAR(2),
    "tie" VARCHAR(1),
    "notes" VARCHAR(100),
    PRIMARY KEY ( "yearID", "awardID", "lgID", "playerID" )
);

CREATE TABLE "AwardsShareManagers" (
    "awardID" VARCHAR(25),
    "yearID" INTEGER,
    "lgID" VARCHAR(2),
    "playerID" VARCHAR(10),
    "pointsWon" INTEGER,
    "pointsMax" INTEGER,
    "votesFirst" INTEGER,
    PRIMARY KEY ( "awardID", "yearID", "lgID", "playerID" )
);


CREATE TABLE "Batting" (
    "playerID" VARCHAR(9),
    "yearID" INTEGER,
    "stint" INTEGER,
    "teamID" VARCHAR(3),
    "lgID" VARCHAR(2),
    "G" INTEGER,
    "G_batting" INTEGER,
    "AB" INTEGER,
    "R" INTEGER,
    "H" INTEGER,
    "2B" INTEGER,
    "3B" INTEGER,
    "HR" INTEGER,
    "RBI" INTEGER,
    "SB" INTEGER,
    "CS" INTEGER,
    "BB" INTEGER,
    "SO" INTEGER,
    "IBB" INTEGER,
    "HBP" INTEGER,
    "SH" INTEGER,
    "SF" INTEGER,
    "GIDP" INTEGER,
    "G_old" INTEGER,
    PRIMARY KEY ( "playerID", "yearID", "stint" )
);

CREATE TABLE "CollegePlaying" (
    "playerID" VARCHAR(9),
    "schoolID" VARCHAR(15),
    "yearID" INTEGER
);

CREATE TABLE "Fielding" (
    "playerID" VARCHAR(9),
    "yearID" INTEGER,
    "stint" INTEGER,
    "teamID" VARCHAR(3),
    "lgID" VARCHAR(2),
    "POS" VARCHAR(2),
    "G" INTEGER,
    "GS" INTEGER,
    "InnOuts" INTEGER,
    "PO" INTEGER,
    "A" INTEGER,
    "E" INTEGER,
    "DP" INTEGER,
    "PB" INTEGER,
    "WP" INTEGER,
    "SB" INTEGER,
    "CS" INTEGER,
    "ZR" FLOAT,
    PRIMARY KEY ( "playerID", "yearID", "stint", "POS" )
);


CREATE TABLE "Managers" (
    "playerID" VARCHAR(10),
    "yearID" INTEGER,
    "teamID" VARCHAR(3),
    "lgID" VARCHAR(2),
    "inseason" INTEGER,
    "G" INTEGER,
    "W" INTEGER,
    "L" INTEGER,
    "rank" INTEGER,
    "plyrMgr" VARCHAR(1),
    PRIMARY KEY ( "yearID", "teamID", "inseason" )
);

CREATE TABLE "Individual" (
    "playerID" VARCHAR(10) PRIMARY KEY,
    "birthYear" INTEGER,
    "birthMonth" INTEGER,
    "birthDay" INTEGER,
    "birthCountry" VARCHAR(50),
    "birthState" VARCHAR(2),
    "birthCity" VARCHAR(50),
    "deathYear" INTEGER,
    "deathMonth" INTEGER,
    "deathDay" INTEGER,
    "deathCountry" VARCHAR(50),
    "deathState" VARCHAR(2),
    "deathCity" VARCHAR(50),
    "nameFirst" VARCHAR(50),
    "nameLast" VARCHAR(50),
    "nameGiven" VARCHAR(255),
    "weight" INTEGER,
    "height" FLOAT,
    "bats" VARCHAR(1),
    "throws" VARCHAR(1),
    "debut" DATE,
    "finalGame" DATE,
    "retroID" VARCHAR(9),
    "bbrefID" VARCHAR(9)
);


CREATE TABLE "Pitching" (
    "playerID" VARCHAR(9),
    "yearID" INTEGER,
    "stint" INTEGER,
    "teamID" VARCHAR(3),
    "lgID" VARCHAR(2),
    "W" INTEGER,
    "L" INTEGER,
    "G" INTEGER,
    "GS" INTEGER,
    "CG" INTEGER,
    "SHO" INTEGER,
    "SV" INTEGER,
    "IPouts" INTEGER,
    "H" INTEGER,
    "ER" INTEGER,
    "HR" INTEGER,
    "BB" INTEGER,
    "SO" INTEGER,
    "BAOpp" FLOAT,
    "ERA" FLOAT,
    "IBB" INTEGER,
    "WP" INTEGER,
    "HBP" INTEGER,
    "BK" INTEGER,
    "BFP" INTEGER,
    "GF" INTEGER,
    "R" INTEGER,
    "SH" INTEGER,
    "SF" INTEGER,
    "GIDP" INTEGER,
    PRIMARY KEY ( "playerID", "yearID", "stint" )
);


CREATE TABLE "Salaries" (
    "yearID" INTEGER,
    "teamID" VARCHAR(3),
    "lgID" VARCHAR(2),
    "playerID" VARCHAR(9),
    "salary" FLOAT,
    PRIMARY KEY ( "yearID", "teamID", "lgID", "playerID" )
);

CREATE TABLE "Schools" (
    "schoolID" VARCHAR(15) PRIMARY KEY,
    "name_full" VARCHAR(255),
    "city" VARCHAR(55),
    "state" VARCHAR(55),
    "country" VARCHAR(55)
);


CREATE TABLE "Teams" (
    "yearID" INTEGER,
    "lgID" VARCHAR(2),
    "teamID" VARCHAR(3),
    "franchID" VARCHAR(3),
    "divID" VARCHAR(1),
    "Rank" INTEGER,
    "G" INTEGER,
    "Ghome" INTEGER,
    "W" INTEGER,
    "L" INTEGER,
    "DivWin" VARCHAR(1),
    "WCWin" VARCHAR(1),
    "LgWin" VARCHAR(1),
    "WSWin" VARCHAR(1),
    "R" INTEGER,
    "AB" INTEGER,
    "H" INTEGER,
    "2B" INTEGER,
    "3B" INTEGER,
    "HR" INTEGER,
    "BB" INTEGER,
    "SO" INTEGER,
    "SB" INTEGER,
    "CS" INTEGER,
    "HBP" INTEGER,
    "SF" INTEGER,
    "RA" INTEGER,
    "ER" INTEGER,
    "ERA" FLOAT,
    "CG" INTEGER,
    "SHO" INTEGER,
    "SV" INTEGER,
    "IPouts" INTEGER,
    "HA" INTEGER,
    "HRA" INTEGER,
    "BBA" INTEGER,
    "SOA" INTEGER,
    "E" INTEGER,
    "DP" INTEGER,
    "FP" FLOAT,
    "name" VARCHAR(50),
    "park" VARCHAR(255),
    "attendance" INTEGER,
    "BPF" INTEGER,
    "PPF" INTEGER,
    "teamIDBR" VARCHAR(3),
    "teamIDlahman45" VARCHAR(3),
    "teamIDretro" VARCHAR(3),
    PRIMARY KEY ( "yearID", "lgID", "teamID" )
);


CREATE TABLE "TeamsFranchises" (
    "franchID" VARCHAR(3) PRIMARY KEY,
    "franchName" VARCHAR(50),
    "active" VARCHAR(2),
    "NAassoc" VARCHAR(3)
);
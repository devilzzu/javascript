// var name = "Hong HS"
// var role = "Front-End Developer"
var bio = {
  "name": "Hong HS",
  "role": "Front-End Developer",
  "contact": {
    "mobile": "010-1111-2222",
    "github": "https://github.com/sharryhong"
  },
  "bioPic": "images/snoopy.jpg",
  "welcomeMessage": "Hi, I'm HS. Nice to meet you! :)",
  "skills": ["JavaScript","HTML","CSS","SASS","AngularJS"]
};
bio.email = "kshopzoa15@gmail.com";

var work = {
  "position": "Flash Developer",
  "employer": "freelancer",
  "years": "8"
};

var education = {};
education["name"] = "Fast Campus";
education["years"] = "2016.06 ~ 09";
education["city"] = "Seoul, Korea";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#main").append(work["position"]);
$("#main").append(education.name);


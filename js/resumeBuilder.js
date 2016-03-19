/**
* @description Represents a book
* @constructor
* @param {string} title - The title of the book
* @param {string} author - The author of the book
*/

var bio = {
    name: "Stephen Pearl",
    role: "Web Developer",
    contacts: {
        mobile: "555-555-5555",
        email: "pearls@gmail.com",
        github: "cerberusaeon",
        twitter: "@wildmind",
        location: "Washington D.C."
    },
    welcomeMessage: "Welcome to Wildmind.",
    skills: "Shadow Dom expert and passive cake eater",
    biopic: "images/my_picture.jpg",
    display: function(){

    }
}

function School(name, location, degree, major, dates, url){
    this.name = name;
    this.location = location;
    this.degree = degree;
    this.major = major;
    this.dates = dates;
    this.url = url;
}

function OnlineCourse(title, school, date, url){
    this.title = title;
    this.school = school;
    this.date = date;
    this.url = url;
}

function Job(employer, title, location, dates, description){
    this.employer = employer;
    this.title = title;
    this.location = location;
    this.dates = dates;
    this.description = description;
}

function Project(title, dates, description, images){
    this.title = title;
    this.dates = dates;
    this.description = description;
    this.images = images;
}
var education = {
    schools: [],
    onlineCourses: [],
    display: function(){

    }
}

var work = {
    job: [],
    display: function(){

    }
}

var projects = {
    projects: [],
}

$(document).ready(function(){
    var job = new Job("employer1", "title1", "Washington d.c.", "2008-10-10", "description of job 1");
    var project = new Project("project1","2012-05-05", "A really cool project", "images/fry.jpg");
    work.job.add(job);
    projects.add(project);


    $("#headerName").append(HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role));

    $("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio.name));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#bioPic").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#welcomeMsg").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    $("#skillsStart").append(HTMLskillsStart.replace("%data%", HTMLskillsStart))
    $("#skills").append(HTMLskills.replace("%data%", bio.skills));
    $("#workStart").append(HTMLworkStart);
    $("#workEmployer").append(HTMLworkEmployer.replace("%data%", work.job[0].employer ));
    $("#workTitle").append(HTMLworkTitle.replace("%data%", work.job[0].title ));
    $("#workDates").append(HTMLworkDates.replace("%data%", work.job[0].dates ));
    $("#workLocation").append(HTMLworkLocation.replace("%data%", work.job[0].location ));
    $("#workDescription").append(HTMLworkDescription.replace("%data%", work.job[0].description ));

    $

});

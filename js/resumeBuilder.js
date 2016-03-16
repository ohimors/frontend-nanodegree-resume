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
    biopic: "/images/my_picture.jpg",
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
    var headerName = HTMLheaderName.replace("%data%", bio.name);
    var headerRole = HTMLheaderRole.replace("%data%", bio.role);
    var contactGeneric = HTMLcontactGeneric.replace("%data%", bio.name);
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var bioPic = HTMLbioPic.replace("%data%", "WHAT THE FUCK");
    //not using this element
    //var blog = HTMLbog("%data", bio.contacts.blog);
    var location = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#headerName").append(headerName + headerRole);
    $("#topContacts").append(contactGeneric);
    $("#topContacts").append(mobile);
    $("#topContacts").append(email);
    $("#topContacts").append(twitter);
    $("#topContacts").append(github);
    $("#topContacts").append(location);

    $("#biopic").innerHTML = bioPic;
    alert("what");

});

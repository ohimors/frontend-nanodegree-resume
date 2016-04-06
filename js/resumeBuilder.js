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
    skills: ["Shadow Dom expert", "passive cake eater"],
    biopic: "images/my_picture.jpg",
    display: function() {
        $("#headerName").append(HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role));

        $("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio.name));
        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#bioPic").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#welcomeMsg").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

        $("#skillsStart").append(HTMLskillsStart.replace("%data%", HTMLskillsStart));
        $("#skills").append(HTMLskills.replace("%data%", bio.skills));

        $("#footerContacts").append(HTMLcontactGeneric.replace("%data%", bio.name));
        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    }
};

function School(name, location, degree, major, dates, url) {
    this.name = name;
    this.location = location;
    this.degree = degree;
    this.major = major;
    this.dates = dates;
    this.url = url;
}

function OnlineCourse(title, school, date, url) {
    this.title = title;
    this.school = school;
    this.date = date;
    this.url = url;
}

function Job(employer, title, location, dates, description) {
    this.employer = employer;
    this.title = title;
    this.location = location;
    this.dates = dates;
    this.description = description;
}

function Project(title, dates, description, images) {
    this.title = title;
    this.dates = dates;
    this.description = description;
    this.images = images;
}
var education = {
    schools: [],
    onlineCourses: [],
    display: function() {
        $("#educationTitle").after(HTMLschoolStart);
        var educationTitleNode = $(".education-entry");
        this.schools.forEach(function(currSchool){
            var concatMajor = "";
            currSchool.major.forEach(function (currMajor){
                if(currMajor === currSchool.major[currSchool.major.length - 1]){
                    concatMajor += currMajor;
                }
                else{
                    concatMajor += currMajor + ",&nbsp; ";
                }
            });

            educationTitleNode
                .append(HTMLschoolName.replace("%data%", currSchool.name) + HTMLschoolDegree.replace("%data%", currSchool.degree))
                .append(HTMLschoolDates.replace("%data%", currSchool.dates))
                .append(HTMLschoolMajor.replace("%data%", concatMajor))
                .append(HTMLschoolLocation.replace("%data%", currSchool.location));
        });
    }

};

var work = {
    jobs: [],
    display: function() {
        $("#workExperienceTitle").after(HTMLworkStart);
        var workExperienceTitleNode = $(".work-entry");
        this.jobs.forEach(function(currJob){
            workExperienceTitleNode
                .append(HTMLworkEmployer.replace("%data%", currJob.employer) + HTMLworkTitle.replace("%data%", currJob.title))
                .append(HTMLworkDates.replace("%data%", currJob.dates))
                .append(HTMLworkLocation.replace("%data%", currJob.location))
                .append(HTMLworkDescription.replace("%data%", currJob.description));
        });
    }
};

var projects = {
    projects: [],
    display: function() {
        $("#projectTitle").append(HTMLprojectStart);
        var projectTitleNode = $(".project-entry");
        this.projects.forEach(function(currProject){
            projectTitleNode
                .append(HTMLprojectTitle.replace("%data%", currProject.title))
                .append(HTMLprojectDates.replace("%data%", currProject.dates))
                .append(HTMLprojectDescription.replace("%data%", currProject.description));
            currProject.images.forEach(function(image){
                projectTitleNode.append(HTMLprojectImage.replace("%data%", image));

            });
        });
    }
};

$(document).ready(function() {
    var job = new Job("employer1", "title1", "Washington d.c.", "2008-10-10", "description of job 1");
    var project = new Project("project1", "2012-05-05", "A really cool project", ["images/fry.jpg"]);
    var education1 = new School("New York University", "New York, New York", "BS", ["Computer Science","Economics"], "2008-08", "https://nyu.edu");

    education.schools.push(education1);
    work.jobs.push(job);
    projects.projects.push(project);
    bio.display();
    work.display();
    projects.display();
    education.display();

    $("#mapTitle").after(googleMap);

    //set footer vars
});

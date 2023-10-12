import React from "react";
import { Link } from "react-router-dom";

// the variable 'projects' is all of my projects I want to showcase
// uses map method to loop over all projects and create a card for each one
const Portfolio = () => {
    const projects = [
        {
            title: "Ecopaw Tracker",
            imageUrl: "https://i.postimg.cc/vT6ZgbPy/Ecopaw-Tracker-Screenshot.png",
            deployedLink: "https://ecopaw-tracker-033283e6e802.herokuapp.com/",
            githubLink: "https://github.com/MCunha17/ecopaw-tracker",
            problem: "The problem solved with this application was wanting to track the user's carbon emissions in an effort to save polar bears. This was solved by allowing users to create an account to log their carbon emissions and providing multiple donation websites to donate to polar bear conservation funds. For users to track their carbon emissions, the user would enter their miles traveled by car, public transportation, and walking with the goal being to limit their carbon emissions as much as possible and to be aware of how many carbon emissions they have in a day.",
            technologies: "Carbon Footprint API, bcrypt, Express, Handlebars templates, sequelize, and MySQL"
        },
        {
            title: "Thirst Traps",
            imageUrl: "https://user-images.githubusercontent.com/124208861/233245572-31c3d049-8850-45d8-8eae-6c9f804bc93c.png",
            deployedLink: "https://annabellefosburgh.github.io/heavy-dolphin/",
            githubLink: "https://github.com/annabellefosburgh/heavy-dolphin",
            problem: "The problem solved with this application was wanting to find a new drink to try based on a certain criteria the user wants. This was solved by creating a drop down menu for three separate criteria, which were alcoholic/non-alcoholic, the spirit type, and category of drink. Given that criteria it picked a drink for the user and provides a YouTube video on how to make that drink.",
            technologies: "TheCocktailDB API, YouTube IFrame Player API, and Picnic CSS framework"
        },
        {
            title: "PWA Text Editor",
            imageUrl: "https://dochub.com/20peytra/7J4mQvgRv6o83g0Rj2pO5n/pwa-text-editor-screenshot-png?dt=uDZ_atmy7D6sSxEbPckZ",
            deployedLink: "https://jate-quill-892f91be6a60.herokuapp.com/",
            githubLink: "https://github.com/pjt3232/PWA-Text-Editor",
            problem: "The problem solved with this application is wanting a simple text editor that doesn't have overwhelming features, but works when the user is offline. This was solved by allowing the user to write text that is then saved to the user's computer storage and by adding offline functionality. Every time the user wants to use the app, it will have their previous data and work with internet connection or without. This app also has the option to download it directly to the user's computer.",
            technologies: "PWAs, WebpackPwaManifest, Inject Manifest, IndexedDB, service workers, and workbox npm packages"
        },
        {
            title: "NoSQL Social Network",
            imageUrl: "https://i.postimg.cc/t4nHtByq/No-SQL-Social-Network-Screenshot.png",
            deployedLink: "https://drive.google.com/file/d/1NpvXVn7bcMkF0VJZVlX5-6kWFfL4PmN6/view",
            githubLink: "https://github.com/pjt3232/NoSQL-Social-Network",
            problem: "The problem solved with this application is wanting to create the back-end calls for the server in an application that will eventually be a social networking app. This was solved by creating the back-end functionality for users, their posted thoughts, and another user's reactions to those thoughts. With these back-end calls, the user can create, update, read, and/or delete any user, thought, or reaction.",
            technologies: "NoSQL, MongoDB, and Express"
        },
        {
            title: "Business Database",
            imageUrl: "https://i.postimg.cc/9FYrGFmX/Business-Database-Screenshot.png",
            deployedLink: "https://drive.google.com/file/d/1uyoBdPSWTIw5QIYcmSfOK5386Hb3zmCl/view?usp=sharing",
            githubLink: "https://github.com/pjt3232/Business-Database",
            problem: "The problem solved with this application is wanting to create a log of all of your employees and departments. This was solved by allowing the user to create, update, read, and/or delete any employee, manager, department, or salary. This app provides a drop down menu in the terminal that allows you to chose from various options, once you select an option it will use the user's input to update the entire log of the database. This allows you to manage how much money is going into each department, while also logging the user's entire business database that they have created.",
            technologies: "MySQL and Inquirer npm package"
        },
        {
            title: "Weather Dashboard",
            imageUrl: "https://dochub.com/20peytra/oGZeMNnwXOb60ZeVQvbrYd/weather-dashboard-screenshot-png?dt=AZHBcx_FyJw6vB4h5oHy",
            deployedLink: "https://pjt3232.github.io/Weather-Dashboard/",
            githubLink: "https://github.com/pjt3232/Weather-Dashboard",
            problem: "The problem solved with this application is wanting to know the weather in various locations around the world. This was solved by allowing the user to select a city from anywhere in the world, which then displays a 5 day forecast of that city to the user. This app also allows the user to have a saved history of their past locations they had viewed, allowing convient access to prior search results.",
            technologies: "OpenWeather API, jQuery, Bootstrap, and Day.js"
        },
    ];

    return (
        <section className="container content">
            <div>
                <div>
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="card">
                                <img variant="top" src={project.imageUrl} alt={project.title} className="project-img"/>
                                <div>
                                    <h2>{project.title}</h2>
                                    <p><strong>Problem/Solution: </strong>{project.problem}</p>
                                    <p><strong>Technologies: </strong>{project.technologies}</p>
                                    <Link to={project.deployedLink} target="_blank">
                                        <button className="btn-primary">Deployed Application</button>{' '}
                                    </Link>
                                    <Link to={project.githubLink} target="_blank">
                                        <button className="btn-secondary">GitHub Repository</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
import React from "react";

// main page that has an about me paragraph and headshot
const AboutMe = () => {
    return (
        <section className="container content about-me">
            <div>
                <div>
                    <div className="avatar-container">
                        <img src="https://i.postimg.cc/kgkgqF2Y/Headshot-Image.jpg" alt="Peyton Tranel" className="avatar-img"/>
                    </div>
                    <div>
                        <p>
                        I'm currently a student in the UW-Madison Coding Bootcamp, but looking to start my career in the field! Outside of work and school, I like to stay active, watch sports, such as football and basketball, and I absolutely love listening to music of any genre. I got into coding by loving math in high school and realizing how the crticial thinking in coding is very similar. Coding really interests me and I'm passionate about how it works from behind the scenes to the joy it can bring to the daily lives of the users. I'm most comfortable and effective with back-end applications, databases, and front-end development with React, but I'm always looking to better myself as a developer by learning new skills for whatever role I may be needed in. When it comes to work, I become very dedicated and always give my best effort because I want the project and my team to succeed. What I promise to give you everyday is that I'm very hardworking, I'm dependable, I have great listening skills, and love collaborating with others. I believe this career field is capable of changing the world, and I couldn't be happier to be learning about it and ultimately being a part of it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
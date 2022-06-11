import { Button } from "react-bootstrap";
import React from "react";
import project1 from "../../images/project1.PNG";
import project2 from "../../images/project2.PNG";
import project3 from "../../images/project3.PNG";
const Projects = () => {
  const data = [
    {
      id: 1,
      title: "Computr Accessories",
      img: project1,
      url: "https://computer-accessories-fe813.web.app/",
    },
    {
      id: 2,
      title: "Medicor",
      img: project2,
      url: "https://medicor-warehouse.web.app/",
    },
    {
      id: 3,
      title: "Orthopedic Physician",
      img: project3,
      url: "https://orthopedic-physician-4ca6a.web.app/",
    },
  ];
  return (
    <div className=" bg-first mt-12 pb-12">
      <div>
        <h1
          className="text-2xl font-bold text-white text-center mb-6 p-5"
          id="projects"
        >
          My Projects
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {data.map((project) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={project.img} style={{ height: "300px" }} alt="" />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title text-second">{project.title}</h2>
                <p>
                  <a href={project.url} target="_blank" alt="">
                    {" "}
                    <Button className="text-white uppercase border border-second p-3 rounded-full bg-first font-bold">
                      Live Site
                    </Button>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

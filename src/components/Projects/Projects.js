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
    <div className="pb-12 mt-10">
      <div>
        <h1
          className="text-3xl font-bold text-center text-green-500 mb-6 p-5"
          id="projects"
        >
          My Projects
        </h1>
        <div className="flex justify-evenly flex-wrap space-y-4 ">
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
                    <button className=" uppercase border border-second p-3 rounded-full font-bold text-white bg-lime-500 hover:bg-green-600">
                      Live Site
                    </button>
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

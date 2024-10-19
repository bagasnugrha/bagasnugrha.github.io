import clinicapp from "../assets/images/clinicapp.jpg";
import elearning from "../assets/images/bslc_elearning.jpg";
import tweetur from "../assets/images/tweetur.jpg";

const projects = [
  {
    title: "Tweetur",
    img: tweetur,
    url: "https://github.com/bagasnugrha/tweetur",
    description:
      "A short message posting app with React.js, Laravel REST API and MySQL",
  },
  {
    title: "cliniccapp",
    img: clinicapp,
    url: "https://github.com/bagasnugrha/final-project-bad-lec",
    description: "Clinic Appointment App with JavaFX and MySQL",
  },
  {
    title: "E-Learning by BSLC (contributor)",
    img: elearning,
    url: "https://elearning.bslc.or.id",
    description:
      "A learning platform that provides modules from various majors",
  },
];

const Projects = () => {
  return (
    <>
      <div className="m-auto">
        <h2 className="text-center lg:text-left mb-3">Projects</h2>
        <div className="container lg:flex lg:flex-wrap lg:gap-7 lg:justify-between">
          {projects.map((project, index) => (
            <div key={index} className="mb-10 lg:mb-0 lg:w-2/5">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-3/4 lg:w-full m-auto rounded-md object-cover mb-3 shadow-md shadow-background-inverse/50"
                />
              </a>
              <h3 className="text-center">{project.title}</h3>
              <p className="text-center m-auto">
                <small>{project.description}</small>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

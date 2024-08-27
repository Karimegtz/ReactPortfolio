import { useState } from 'react';
import Project from "../Project";

function Portfolio() {


  const [projects] = useState([
    {
      name: 'noteTaker',
      link: "https://notetaker-6pvs.onrender.com",
      
    },
    {
      name: 'bookSearch',
      link: "https://book-search-engine-22v1.onrender.com",
      
    },
    {
      name: 'textEditor',
      link: "https://wpa-text-editor.onrender.com",
      
    },
    {
      name: 'codeRefactor',
      link: "https://karimegtz.github.io/Code-Refactor/",
      
    },
    {
      name: 'blogBuilder',
      link: "https://karimegtz.github.io/BlogBuilderJS/",
      
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

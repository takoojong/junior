import React from 'react';
import "./portfolio.css";


const Portfolio = () => {

  var [project ,setProjecct]=React.useState([{
    imageUrl:'',
    title:'',
    gitDemoUrl:'',
    demoUrl:'',

  }]);
  
  React.useEffect(()=>{
  
    fetch("https://ojongomema.cyclic.app/users/get/all/project",{method:"GET"})
    .then(function(res){
      return res.json();
    }).then(function(data){
      setProjecct(data);
    })
  
  },[]);


    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Porfolio</h2>


        <div className="container portfolio__container">

        {project.map(function(projects){
let i=0;
return (


  <article className="portfolio__item" key={projects._id}>
  <div className="portfolio__item-image">
    <img src={projects.imageUrl} alt="porfolio" />
    <h3>PROJECT-{i++}</h3>
    <h3>{projects.title}</h3>
    <div className=".portfolio__item-cta">
      <a href={projects.gitDemoUrl} className="btn">
        Github
      </a>
      <a
        href={projects.demoUrl}
        className="btn btn-primary"
      >
        Live Demo
      </a>
    </div>
  </div>
</article>
  
);

})}

        </div>
      
      </section>
    );
}
export default Portfolio
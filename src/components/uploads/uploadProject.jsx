import React from "react"
import "./uploadProject.css"
function UploadProject(){
    const [showComp, setShowComp]=React.useState(false);
    // const [hideComp, setHideComp]=React.useState(true);
    var style =null;

    function showContent(){
        style={
          display:'block',
        }
        setShowComp(true);
      }
      
      function hideContent(){
        style={
          display:'none',
        }
        setShowComp(false);
      }
let [projectUpload, setProjectUpload]=React.useState(null)
 function getInputDates(event){
  setProjectUpload(prevstate=>{
    return {
      ...prevstate,
      [event.target.name]:event.target.value
    }
  })
 }
console.log(projectUpload)
 function sumitData(event){
fetch('https://ojongomema.cyclic.app/users/upload/project',{
  method:"POST",
  body:JSON.stringify(projectUpload),
  headers: {'Content-Type': 'application/json'}
})
.then(response =>response.json())
.then(res=>{
  
})
.catch(error => {
  console.error(error);
});


 }



    return(
        <div>

<button className="open-button" onClick={showContent} >UPLOAD</button>

{showComp &&
<div className="form-popup" id="myForm" style={style}>
  <form className="form-container"  onSubmit={sumitData}>
    <h4 className="h4Upload" style={{color:"black"}}>UPLOAD PROJECT</h4>
<div style={{display:"flex"}} className="all">
    <label ><b style={{color:"black"}}>Project title</b></label>
    <input   type="text" placeholder="enter project image url" name="imageUrl" required onChange={getInputDates} />
    </div>
    <div style={{display:"flex"}} className="all">
    <label ><b style={{color:"black"}}>Git repo url</b></label> <br />
    <input type="text" placeholder="enter the project title" name="title" required onChange={getInputDates}  />
    </div>

    <div style={{display:"flex"}} className="all">
    <label ><b style={{color:"black",marginTop:"2px"}}><pre  >Demo url   </pre></b></label>
    <input  type="text" placeholder="enter project git url" name="gitDeomoUrl" required  onChange={getInputDates} />
    </div>
    <div style={{display:"flex"}} className="all">
    <label ><b style={{color:"black"}}><pre>Image url  </pre></b></label>
    <input  type="text" placeholder="enter project demo url" name="demoUrl" required onChange={getInputDates}  />
    </div>
    <button type="submit" className="btn" >UPLOAD</button>

  </form>
  <button type="button" className="cancel" onClick={hideContent}>Close </button>
</div>
 }
        </div>
    )
}


export default UploadProject;
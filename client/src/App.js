import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axio from 'axios'

function App() {
  const [data,setData] = useState({})
  const [d,setD] = useState({})
  const [serverdata,setServerdata] = useState([])

  const updateVal = (event)=>{
    const {name,value} = event.target
    setData((pre)=>{
      return( {...pre,[name]:value } )
    })
  }
  const updaD = (event)=>{
    const {name,value} = event.target
    setD((pre)=>{
      return( {...pre,[name]:value } )
    })
  }

  const uploadData =async (event)=>{
    event.preventDefault()
   const id=await axio.post("http://localhost:3500",data)
  }
  const getdata =async (event)=>{
    event.preventDefault()
    const d = await axio.get("http://localhost:3500")
    setServerdata(d.data)
  }


  const updatebuttom = (e)=>{
    const i = axio.put(`http://localhost:3500/${e}`,d)
  }
  const deletebuttom = (p)=>{
    const i = axio.delete(`http://localhost:3500/${p}`)
    
  }
  
  return (
    <>
    <div className="App">
     <form>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-6">
      <input type="text" name="Name" className="form-control" onChange={updateVal} />
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Title</label>
    <div className="col-sm-6">
      <input type="text" name="title" className="form-control" onChange={updateVal} />
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Content</label>
    <div className="col-sm-6">
      <input type="text" name="content" className="form-control" onChange={updateVal} />
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Heading</label>
    <div className="col-sm-6">
      <input type="text" name="heading" className="form-control" onChange={updateVal}  />
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Upload Data</label>
    <div className="col-sm-6">
      <button type="submit" onClick={uploadData} className="btn btn-primary">Click Here</button>
    </div>
  </div>
  <button type="submit" onClick={getdata}  className="btn btn-primary">List Refresh</button>
  </form>
  <div>
   
     
    { 
      serverdata.map((v,i)=>{
      return(<>
        <form >
          <div className="main">
        <br/>
        <br/>
          <div>
          <div className="form-group row">
        <label  className="col-sm-2 col-form-label">Name</label>
        <label  className="col-sm-2 col-form-label"> {v.Name} </label>
        <div className="col-sm-8">
        <input type="text" name="Name"  onChange={updaD} className="form-control"  />
        </div>
        

   </div>
        </div>
        <div>
          <div className="form-group row">
        <label  className="col-sm-2 col-form-label">Title</label>
        <label  className="col-sm-2 col-form-label">{v.title}</label>
        <div className="col-sm-8">
        <input type="text" name="title"  onChange={updaD}  className="form-control"  />
        </div>

   </div>
        </div>
        <div>
          <div className="form-group row">
        <label  className="col-sm-2 col-form-label">Content</label>
        <label  className="col-sm-2 col-form-label">{v.content}</label>
        <div className="col-sm-8">
        <input type="text" name="content" onChange={updaD} className="form-control"  />
        </div>

   </div>
        </div>
        <div>
          <div className="form-group row">
        <label  className="col-sm-2 col-form-label">Heading</label>
        <label  className="col-sm-2 col-form-label">{v.heading}</label>
        
        <div className="col-sm-8">
        <input type="text" name="heading" onChange={updaD} className="form-control"  />
        <input type="hidden" id="never" value={v._id}/>
        </div>
        <input type="submit"  value="update" className="col-sm-1 btn btn-primary"  onClick={()=>updatebuttom(v._id)}/>
        <input type="submit" value="Delete" className="col-sm-1 btn btn-danger" onClick={()=>deletebuttom(v._id)} />
        

   </div>
        </div>
        <br/>
        </div>
        <br/>
        <br/>
        </form>
        
      </>)
    })}
   
  </div>
    </div>
</>
  
  );
}
export default App;

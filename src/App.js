
import { useEffect, useState } from 'react';
import './App.css';
import {FaAngleDoubleRight} from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const jobs = await response.json()
    setJobs(jobs)
    setLoading(false)
  }
  useEffect(()=>{
    fetchJobs();
  }, [])
  
  if(loading){
    return (
    <div className="App">
      <h1>Loading....</h1>
    </div>
    )
  }

  const {  company, dates, duties, title} = jobs[value]
  return (
    <div className="App">
      <div className="tab-title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <section className="container">
        <div className="btn-container">
          {jobs.map((job, index)=>{
            return (
            <div key={job.id}>
              <button onClick={() => setValue(index)} className={`${index === value ? 'active-btn' : 'btn'}` }>{job.company}</button> 
            </div>
            )
          })}
        </div>
        <div className="details">
          <h3>{title}</h3>
          <h4 className="company">{company}</h4>
          <p>{dates}</p>
          {duties.map((duty, index) => {
            return (
            <div key={index} className="duty">
              <p className="icon"><FaAngleDoubleRight /> </p>
              <p className="duty-p">{duty}</p>
            </div>
            )
          })}
        </div>
      </section>

    </div>
  );
}

export default App;

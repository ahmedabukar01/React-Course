import Header from './component/Header'
import Tasks from './component/Tasks'
import {useState} from 'react'
import AddTask from './component/AddTask';
import Example from './component/Example';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  const [show, setShow] = useState(false);

  const [tasks, setTasks] = useState([
      {
        id: 1,
        text : "meeting with developer",
        time: "6:23 pm"
      },
      {
          id: 2,
          text : "Sleeping",
          time: "10:30 am"
      },
      {
          id: 3,
          text : "Creating Github Repository",
          time: "9:45 pm"
      },
      {
          id: 4,
          text : "Building Landing page",
          time: "3:23 pm"
      }
  ])

  return (
    <Router> 

        <div className="container">
          <Routes>
            <Route path="/" element={
              <>
               <Header show={show} setShow={setShow}/>
                {show && <AddTask setTasks={setTasks}/>}
                <Tasks tasks={tasks} setTasks={setTasks}/>

                <Link to="/example" > go to Example page</Link>
              </>
            } />

            <Route path="/example" element={<Example />}/>
          </Routes>

      </div>

    </Router>

  );
}

export default App;

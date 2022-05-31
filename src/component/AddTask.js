import {useState} from 'react';

const AddTask = ({setTasks}) => {
    const [text, setText] = useState('');
    const [time, setTime] = useState('');

    const textHandle = (e) =>{
        setText(e.target.value);
    }
    const timeHandle = (e) =>{
        setTime(e.target.value);
    }

    const submitHandle = (e)=>{
        e.preventDefault();

        const newTask = {
            text,
            time
        }

        setTasks(oldTask => [...oldTask, newTask]);

        setText('');
        setTime('');
    }
  return (
    <div>
        <form onSubmit={submitHandle}>
            <input type="text" placeholder="Enter Text" value={text} onChange={(e)=>textHandle(e)} />
            <input type="text" placeholder="Enter Time" value={time} onChange={(e)=>timeHandle(e)}/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddTask
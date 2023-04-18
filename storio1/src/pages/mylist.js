import React,{useState,useEffect} from 'react'

export default function mylist() {
    const [task, settask] = useState('');
    const [tasks, settasks] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem("localTasks")){
            const storedList =JSON.parse(localStorage.getItem("localTasks"));
            settasks(storedList);
        }
    })
    
    const addTask = (e) => {
        if(task) {
            const newtask = {id:new Date().getTime().toString(), title:task , purchased:false};
            settasks([...tasks,newtask]);
            localStorage.setItem('localTasks',JSON.stringify([...tasks,newtask]))
        }
    };

    const handleDelete = (task) =>{
        const deleted = tasks.filter((t) => t.id !== task.id);
        settasks(deleted);
        localStorage.setItem('localTasks',JSON.stringify(deleted));
    };

    
    const handleCheck = (task) => {
        const updatedTasks = tasks.map((t) => {
            if (t.id === task.id) {
                return { ...t, purchased: !t.purchased};
            } else {
                return t;
            }
        });
        settasks(updatedTasks);
        localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
    };


  return (
    <div className='h-screen bg-black text-white'>
        <h3 className='text-white'>My List</h3>
        <input type='text' className='text-black' placeholder='Add task' value={task} onChange={(e) => settask(e.target.value)} />
        <button type='submit' className='bg-[#ff9900]' onClick={addTask}>Add</button>

        {/* Tasks section */}
        <div>
            You have 
            {
                !tasks.length? " no tasks"
                :tasks.length === 1?" 1 task"
                :tasks.length>1 ?  ` ${tasks.length} tasks`
                : null
            }
            <div>
                {tasks.map((task) =>
                    <React.Fragment key={task.id}>
                        <button onClick={() => handleCheck(task) }  >X</button>
                        <p className={ task.purchased ? "text-green-500" :"text-red-500" } >{task.title}</p>
                        <button onClick={() => handleDelete(task)}>Del</button>
                    </React.Fragment>
                )}
            </div>
        </div>
    </div>
  )
}

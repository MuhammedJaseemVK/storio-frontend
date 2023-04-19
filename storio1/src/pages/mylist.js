import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import { BsCheckCircle, BsCheckCircleFill, BsTrash } from 'react-icons/bs';

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
    <div className='h-screen bg-black text-white  p-5'>
        <div className='flex flex-col gap-2'>
            <Link href="/signup"><MdArrowBack className='text-white text-3xl' /></Link>

            
                <h3 className='text-white text-3xl font-semibold '>Shopping <span className='text-[#ff9900]'>list</span></h3>
                
                <div className='flex flex-row w-full'>
                    <input type='text' className='text-black p-2 w-1/10 rounded-l-md ' placeholder='Add task' value={task} onChange={(e) => settask(e.target.value)} />
                    <button type='submit' className='bg-[#ff9900] w-9/10 rounded-r-md p-2' onClick={addTask}>Add</button>
                </div>

        </div>

            {/* Tasks section */}
            <div className='text-lg flex flex-col gap-2 mt-2'>
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
                        <div className='flex flex-row gap-2 w-full justify-between bg-white text-black rounded-md p-2'>
                            <button onClick={() => handleCheck(task)} >
                                {task.purchased ? 
                                <BsCheckCircleFill className='text-[#ff9900]' />
                                :<BsCheckCircle className='text-[#ff9900]' /> 
                                }
                            </button>
                            <p className={task.purchased ? "line-through" :"" } >{task.title}</p>
                            <button onClick={() => handleDelete(task)}><BsTrash className='text-[#ff9900]' /></button>
                        </div>
                    </React.Fragment>
                )}
            </div>
          </div>
    </div>
  )
}

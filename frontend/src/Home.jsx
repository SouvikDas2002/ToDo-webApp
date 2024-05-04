import React, { useEffect, useState } from 'react'
import Input from './components/Input'
import axios from 'axios';
import './App.css'


const Home = () => {
    const [todos, setTodo] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/getTasks`)
            .then(res => setTodo(res.data))
            .catch(err => console.log(err))
    }, [todos]);
    function handleEdit(id) {
        axios.put(`${process.env.REACT_APP_API}/update/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }
    function handleDelete(id) {
        axios.delete(`${process.env.REACT_APP_API}/remove/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>To-Do List</h2>
            <Input />
            {
                todos.length === 0 ?
                    <div> No Record</div>
                    :
                    todos.map(x => {
                        return (
                            <div className='tasks' key={x._id}>
                                <div className='title'>
                                    {!x.done &&
                                        <input type='checkbox' onClick={() => handleEdit(x._id)} />
                                    }
                                    <p className={x.done ? 'done' : 'left'}>{x.tasks}</p>
                                </div>
                                <div>
                                    <button className='deletebutton' onClick={() => handleDelete(x._id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Home
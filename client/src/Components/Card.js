import React, { useState } from 'react';
import TodoList from './TodoList';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from './ButtonIcon';
import TextMuted from './TextMuted';

export default function Card({ task, index, addTasks, deleteData }) {
  const [list, setList] = useState('')

  return (
    <div className='container-card'>

      <div className='d-flex row align-items-center'>
        <div className='col-sm-9'>
          <h5>{task.title}</h5>
        </div>
        <div className='col-sm-2'>
          <ButtonIcon
            type='outline-danger'
            icon={faTrash}
            onClick={() => { deleteData(index) }}
          />
        </div>
      </div>
      <hr />

      {task.tasks.length === 0 && <TextMuted text={'List masih kosong'} />}
      <ul className="list-group list-group-flush">
        {task.tasks.map((item, idx) => <TodoList tasks={item} key={item + idx} deleteData={() => deleteData(index, idx)} />)}
      </ul>

      <div className='d-flex row align-items-center mt-3'>
        <div className='col-sm-9'>
          <input
            value={list}
            className="form-control"
            placeholder='Tambah list..'
            onChange={(e) => setList(e.nativeEvent.target.value)}
          />
        </div>
        <div className='col'>
          <ButtonIcon
            type='success'
            icon={faPlus}
            onClick={() => { addTasks(index, list); setList('') }}
          />
        </div>
      </div>

    </div>
  )
}
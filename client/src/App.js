import React, { useState } from "react";
import "./App.css";
import Swal from 'sweetalert2'
import Card from "./Components/Card";
import TextMuted from "./Components/TextMuted";

function App() {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')

  function addData() {
    let newObj = {
      title,
      tasks: []
    }
    setData([...data, newObj])
    setTitle('')
  }

  function deleteData(index, indexList) {
    let temp = [...data]
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: "Anda tidak dapat mengembalikan data!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        if (indexList === undefined) {
          temp.splice(index, 1)
        } else {
          temp[index].tasks.splice(indexList, 1)
        }
        setData(temp)
        Swal.fire({
          title:'Dihapus!',
          text:'Berhasil dihapus.',
          icon:'success',
          confirmButtonColor: '#3085d6',
        })
      }
    })
  }

  function addTasks(index, text) {
    let temp = [...data]
    temp[index].tasks.push(text)
    setData(temp)
  }

  return (
    <div className="container">
      <div className="App">
        <h1 className="mt-3">Pekerjaan Rumah Yang Perlu Dilakukan</h1>
        <div className="d-flex row align-items-center justify-content-center mt-4 mb-4">
          <div className="col-sm-3">
            <input
              value={title}
              className="form-control"
              placeholder="Tambah Pekerjaan.."
              onChange={(e) => setTitle(e.nativeEvent.target.value)}
            />
          </div>
          <div className="col-sm-1">
            <button onClick={addData} className="btn btn-success">Tambah</button>
          </div>
        </div>
      </div>
      {data.length === 0 && <TextMuted text={'Data masih kosong'} />}
      <div className="grid">
        {data.map((item, index) => <Card key={item.title + index} task={item} addTasks={addTasks} deleteData={deleteData} index={index} />)}
      </div>
    </div>
  );
}

export default App;

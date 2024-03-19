import { useState } from "react"


function App() {

  // useState diye data receive kore
  let [name, setName] = useState("")
  let [caption, setCaption] = useState("")
  let [show, setShow] = useState(false)
  let [index, setIndex] = useState("")

  let [arr, setArr] = useState([])

  let handleButton = () => {
    let arr2 = [...arr]
    // array te kono kichu patha te hole push keyword use korte hoi
    arr2.push({
      name: name,
      caption: caption,
    })

    setArr(arr2)
    setName("")
    setCaption("")

  }

  let handleDelete = (index) => {
    let arr3 = [...arr]
    // Array theke kichu delete korte hole splice keyword use korte hoi ar shathe index bole dite hoi 
    arr3.splice( index, 1 )
    setArr(arr3)
  }

  let handleEdit = (item,index) => {
    setName(item.name)
    setCaption(item.caption)
    setShow(true)
    setIndex(index)
  }
  
  let handleUpdate = () => {

    let arr4 = [...arr]
    arr4[index] = ({
      name: name,
      caption: caption
    })
    setArr(arr4)
    setShow(false)
    setName("")
    setCaption("")

  }


  return (
    <>
    {/* input er value neyar jonno onchange use korte hoi */}
    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" /> <br />
    <input value={caption} onChange={(e) => setCaption(e.target.value)} type="text" placeholder="Caption" /> <br />
    {
      show ?
      <button onClick={handleUpdate}>Update</button>
      :
      <button onClick={handleButton}>Add Todo</button>
    }
    {
      arr.map((item,index) => (
        <>
        <li>{item.name}</li>
        <li>{item.caption}</li>
        {/* function er shathe kichu perameter pass korle call back ( ()=> ) function use korte hobe ar perameter e kichu pass korte hobe  */}
        <button onClick={() => handleEdit(item,index)}>Edit</button>
        <button onClick={() => handleDelete(index)}>Delete</button>
        </>
      ))
    }
    </>
  )
}

export default App

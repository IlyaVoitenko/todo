import React, { useState } from "react"

const list = () =>{
    let [list,setList] = useState([{}])
    let [input , setInput] = useState({})

     function deleteElement(selectItem) {
         let filter = list.filter((i)=>{i.id!==selectItem.id})
         setList(filter)
     }

     function addElement(event){
         event.preventDefault()
         setList([...list,input])
         setInput({text:'',id:0})
     }

     function createElement(event) {
         setInput({id:list.length+1,text:event.target.value})
     }

    return(
        <div>
            <input onChange={createElement} value={input.text}></input>
            <button onClick={addElement}>Add</button>
            {list.map((i)=><div key={i.id}>{i.text}
            <button onClick={()=>{deleteElement(i)}}>delete</button></div>)}
        </div>
    )
}
export default list
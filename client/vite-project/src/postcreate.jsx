import React,{useState} from 'react'
import axios from 'axios'

function Postcreate() {
    const [title, settitle] = useState('')
const onSubmit=async(event)=>{
event.preventDefault()
await axios.post('http://localhost:4000/post',{
    title
  
})
settitle('')
}
  return (
    <div>
        <form onSubmit={onSubmit}>
<input value={title} onChange={e=>settitle(e.target.value)}/>

<button>submit</button>
</form>
    </div>
  )
}

export default Postcreate
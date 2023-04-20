import React,{useState} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';
import axios from 'axios';
function DialogDemo() {
    const [title,settitle]=useState('')
    const onSubmit=async(event)=>{
        event.preventDefault()
        await axios.post('http://localhost:4000/post',{title}
        )
        settitle('')
    }

return(

  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Edit profile</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <form onSubmit={onSubmit}>

        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" value={title} onChange={e=> settitle(e.target.value)}/>
        </fieldset>
       <button>submit</button>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className="Button green">Save changes</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
}



export default DialogDemo;
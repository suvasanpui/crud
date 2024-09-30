import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Search from './components/Search'
import { collection, getDoc, getDocs } from 'firebase/firestore';
import {db} from './config/firebase.js'
import ContactList from './components/ContactList.jsx';
import Modal from './components/Modal.jsx';
import AddandUpdata from './components/AddandUpdata.jsx';


function App() {
  const [contacts, setContacts] = useState([]);

  const [open, setOpen]=useState(false);

  const isOpen=()=>{
    setOpen(true);
  }
  const isClose=()=>{
    setOpen(false);
  }

  const getContact=async()=>{
    try{
      const contactCollections=collection(db,"crud");
      const contactSnapsot=await getDocs(contactCollections);
      const contactRef=contactSnapsot.docs.map((doc)=>{
        return{
          id:doc.id,
          ...doc.data()
        }
      }
    );
      setContacts(contactRef);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    
    getContact();
  },[]);

  return (
    <div className='max-w-[370px] mx-auto'>
      <Nav/>
      <Search isOpen={isOpen}/>
      <div>
        {
          contacts.map((index)=>{
            return <ContactList key={index.id} index={index}/>
          })
        }
      </div>
      <Modal isOpen={open} isClose={isClose}/>
    </div>
  )
}

export default App

import React from "react";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { collection, deleteDoc, doc } from "firebase/firestore";
import {db} from '../config/firebase';
import Modal from "./Modal";

function ContactList({ index }) {
  const editContact=async (id)=>{
    console.log(id);
    return <Modal/>
  }
    const deleteContact=async (id)=>{
        try{
            await deleteDoc(doc(db,"crud",id));
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div
      key={index.id}
      className="bg-yellow flex rounded-lg items-center pl-3 pr-3 gap-5 m-4 justify-between"
    >
      <IoIosContact className="text-3xl flex" />
      <div className="pl-3">
        <h2 className="font-medium">{index.name}</h2>
        <p>{index.email}</p>
      </div>
      <div className="flex gap-2">
        <RiEditCircleLine className=" flex text-2xl cursor-pointer" onClick={()=>editContact(index.id)}/>
        <MdDelete className=" flex text-2xl cursor-pointer" onClick={()=>deleteContact(index.id)}/>
      </div>
    </div>
  );
}

export default ContactList;

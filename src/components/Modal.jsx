import React from "react";
import { createPortal } from "react-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { Field, Form, Formik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import {db} from '../config/firebase'

function Modal({ isOpen, isClose, children }) {
    const addContact=async (contact)=>{
        try{
            const contactRef=collection(db,"crud");
            await addDoc(contactRef,contact);
        }catch(error){
            console.log("error");
        }
    }
  return createPortal(
    <div>
      {isOpen && (
        <>
          <div className="relative z-50 bg-white min-h-[230px] max-w-[370px] p-2 m-auto rounded-lg">
            <div className="flex justify-end items-end">
              <IoMdCloseCircle
                className="self-end flex text-red-600 text-2xl cursor-pointer"
                onClick={isClose}
              />
            </div>
            <div>
              <Formik initialValues={{
                name:"",
                email:"",
              }} onSubmit={(value)=>{
                addContact(value);
                console.log(value);
              }
              }>
                <Form>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-medium">Name</label>
                    <Field name="name" className="border h-[30px] rounded-sm p-2"/>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <Field name="email" className="border h-[30px] rounded-sm p-2"/>
                  </div>
                  <div>
                    <button className="bg-green-700 mt-4 rounded-sm w-[100px] border-yellow text-white ">Submit</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          <div
            className="top-0 z-40 absolute h-screen w-screen backdrop-blur"
            onClick={isClose}
          />
        </>
      )}
    </div>,
    document.getElementById("root-modal")
  );
}

export default Modal;

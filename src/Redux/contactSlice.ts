import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface Contact{
    id:number,
    name:string;
    lastName:string;
    contact:string;
}
interface ContactState {
    contacts:Contact[];
    filterContacts:Contact[];
    editContact:Contact;
    filtered:boolean;
} 
interface searchPayload{
    search:string;
}
const initialState :ContactState={
    contacts:[],
    filterContacts:[],
    editContact:{name:'',lastName:'',contact:'',id:-1},
    filtered:false
}
const contactSlice = createSlice({
    name:'Contacts',
    initialState,
    reducers:{
    setEditContact:(state,action:PayloadAction<Contact>)=>{
       state.editContact=action.payload
    },
    searchFilter:(state,action:PayloadAction<searchPayload>)=>{
        state.filtered=true
        console.log(action.payload)
        if(action.payload.search==''){
            state.filtered=false
        }
        state.filterContacts = state.contacts.filter((obj:Contact)=> obj.name.includes(action.payload.search)||obj.lastName.includes(action.payload.search)||obj.contact.includes(action.payload.search))
},
    addContact:(state,action:PayloadAction<Partial<Contact>>)=>{
        const newValue:Contact={
            id:state.contacts.length,
            name:action.payload.name||'',
            lastName:action.payload.lastName||'',
            contact:action.payload.contact||''
        }
        state.contacts=[...state.contacts,newValue]
    },
    editContact :(state,action:PayloadAction<Contact>)=>{
        console.log(action.payload)
        const index:number = state.contacts.findIndex((obj:Contact)=>obj.id===action.payload.id)
        console.log(index)
        state.contacts[index]=action.payload
    },
    deleteContact :(state,action:PayloadAction<{id:number}>)=>{
        state.contacts=state.contacts.filter((obj)=>obj.id!=action.payload.id)
    }
},

})

export const editContactSelector = (state:RootState )=> state.contacts.editContact

export const contactsSelector = (state:RootState)=> state.contacts.contacts

export const filterContactsSelector = (state:RootState)=> state.contacts.filterContacts

export const filteredSelector = (state:RootState)=> state.contacts.filtered

export const {searchFilter,setEditContact,addContact,editContact,deleteContact}  = contactSlice.actions
export default contactSlice.reducer
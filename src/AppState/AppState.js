import React ,{useState,useEffect} from "react";
import AppNavigation from '../AppNavigation/AppNavigation'


export default function AppState(){

const[allNotes,setAllNotes] =useState([{ noteId:'1',noteTitle:'First N',noteText:'First Note'},
                                        {noteId:'2',noteTitle:'Second N',noteText:'Second Note2'}]);
const[note,setNote] =useState({});


const AppState = {
    allNotes,
    setAllNotes,
    note,
    setNote
};


    return <AppNavigation AppState = {AppState}/>


}
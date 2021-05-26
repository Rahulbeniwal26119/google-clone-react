import React, {useState} from 'react'
import "./Search.css"
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import {Button} from "@material-ui/core"
import {useHistory} from "react-router-dom"
import {useStateValue} from "../../StateProvider"
import {actionTypes} from "../../reducer";
import { SettingsBluetooth } from '@material-ui/icons'

function Search({hideButtons = false}) {
    const [{term}, dispatch] = useStateValue();
    var history = useHistory();
    const [input, setInput]  =  useState(""); 
    const [length, setInputLength] = useState(0);
    const search = e =>{
        e.preventDefault();
        console.log("You hit search");

        dispatch({
            type : actionTypes.SET_SEARCH_TERM,
            term : input
        })
        history.push("/search");
        
    }
    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon"/>
                <input value={length == 0 ? term : input} onChange={e => {setInput(e.target.value); setInputLength(1);}}/>
                <MicIcon/>
            </div>
            {
                !hideButtons ? (
                    <div className="search_buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
                ) : 
            <div className="search_buttonsHidden">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            }
        </form>
    )
}
export default Search

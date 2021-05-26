import React from 'react'
import {Link} from 'react-router-dom'
import "./SearchPage.css";
import {useStateValue} from "../../StateProvider"
import useGoogleSearch from './useGoogleSearch';
import Search from './Search';
function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    // const {data} = useGoogleSearch(term)

    // console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                <img className="googleSearchLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"/>
                </Link>
                <div className="searchPageHeaderBody">
                <Search hideButtons/>
                </div>
                <h1>{term}</h1>
            </div>
            <div className="searchPage_result">
                
            </div>
        </div>
    )
}

export default SearchPage

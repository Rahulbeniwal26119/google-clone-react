import React from 'react'
import { Link } from 'react-router-dom'
import "./SearchPage.css";
import { useStateValue } from "../../StateProvider"
import useGoogleSearch from './useGoogleSearch';
import Search from './Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description"
import ImageIcon from "@material-ui/icons/Image"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from "@material-ui/icons/MoreVert"
function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term)
    

    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img className="googleSearchLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" />
                </Link>
                <div className="searchPageHeaderBody">
                    <Search hideButtons />
                    <div className="searchPageOptions">
                        <div className="searchPageOptionsLeft">
                            <div className="searchPageOption">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPageOption">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPageOption">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPageOption">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPageOption">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPageOption">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchPageOptionsRight">
                            <div className="searchPageOption">
                                <Link to="/settings">Setting</Link>
                            </div>
                            <div className="searchPageOption">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                term && (
                    <div className="searchPageResults">
                        <p className="searchPageResultCount">
                            About {data?.searchInformation.formattedTotalResults} results ({
                                data?.searchInformation.formattedSearchTime
                            } second) for {term}
                        </p>
                        {data?.items.map(items => (
                            <div className="searchPageResult">
                                <a href={items.link}>
                                    {
                                        items.pagemap?.cse_image?.length > 0 && 
                                        items.pagemap?.cse_image[0]?.src && 
                                        (
                                            <img className="searchPageResultImage" src={
                                                items.pagemap?.cse_image[0].src
                                            }/>
                                        )
                                    }
                                {items.displayLink}
                                </a>
                                <a className="searchPageResultTitle" href={items.link}>
                                    <h2>{items.title}</h2>
                                </a>
                                <p className="searchPageResultSnippet">{items.snippet}</p>
                                </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default SearchPage

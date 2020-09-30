import React, {useState} from 'react';
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";




function Search({ hideButtons = false}) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");  /* Use StateHook */
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        console.log('You hit the search button >> ', input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        // Do something with input...
        history.push('/search')

        //
    };

    return (
        <form className="search">              {/* Changed from div to form coz if i do Enter, it should Search */}
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className="search_buttons">
                    <Button type='submit' onClick={search} variant="outlined">Google Search</Button>    {/* For searching by pressing Enter, we used Button type submit and changed top div to form */}
                    <Button href="https://www.google.com/doodles/" variant="outlined">I'm feeling Lucky</Button>
                </div>
            ): (
                <div className="search_buttons">
                    <Button className="search_buttonsHidden" type='submit' onClick={search} variant="outlined">Google Search</Button>    {/* For searching by pressing Enter, we used Button type submit and changed top div to form */}
                    <Button className="search_buttonsHidden" variant="outlined">I'm feeling Lucky</Button>
                </div>
            )}
            
        </form>
    )
}

export default Search;

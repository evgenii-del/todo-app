import React, {useState} from "react";
import AddButtonPopup from "./AddButtonPopup/AddButtonPopup";

import plusSvg from './../../assets/images/plus.svg';


const AddButton = (props) => {
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <div className="add-folder">
            <ul className="todo__items">
                <li onClick={() => setOpenPopup(true)}>
                    <i>
                        <img src={plusSvg} alt="add-button"/>
                    </i>
                    <span>Add folder</span>
                </li>
            </ul>
            {openPopup && <AddButtonPopup colors={props.colors} onCreateFolder={props.onCreateFolder} setOpenPopup={setOpenPopup}/>}
        </div>
    );
}

export default AddButton;

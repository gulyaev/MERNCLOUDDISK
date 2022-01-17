import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDir } from "../../actions/file";
import { setPopupDisplay } from "../../reducers/fileReducer";

const Popup = () => {
    const [dirName, setDirName] = useState("");
    const popupDisplay = useSelector(state => state.files.popupDisplay);
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);
    /*
    useEffect (()=>{
        console.log(dirName)
    }, [dirName]);
    */

    const createHandler = () => {
        dispatch(createDir(currentDir, dirName));
        setDirName("");
        dispatch(setPopupDisplay('none'));
    }

    return (
        <div className="popup" onClick={()=> dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(event=> event.stopPropagation())}>
                <div className="popup__header">
                    <div className="popup__title">Создать новую папку</div>
                    <button className="popup__close" onClick={()=> dispatch(setPopupDisplay('none'))}>X</button>
                </div>
                <input type="text" placeholder="Введите название папки..." onChange={(e)=> setDirName(e.target.value)} value={dirName}/>
                <button className="popup__create" onClick={()=>createHandler()}>Создать</button>
            </div>
        </div>
    )
}

export default Popup;
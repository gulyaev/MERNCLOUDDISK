import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles, createDir } from "../../actions/file";
import FileList from "./fileList/FileList";
import "./disk.less"
import Popup from "./Popup";
import {setCurrentDir, setPopupDisplay} from "../../reducers/fileReducer"

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);
    const dirStack = useSelector(state => state.files.dirStack);

    useEffect(()=>{
        dispatch(getFiles(currentDir));
        console.log("dirStack " + dirStack);
    }, [currentDir]);

    const showPopupHandler = () => {
        dispatch(setPopupDisplay('flex'));
    }
    
    const backClickHandler = () => {
        const backDirId = dirStack.pop();
        dispatch(setCurrentDir(backDirId));
    }

    return (
        <div className="disk">
            <div className="disk__btns">
                <button className="disk__back" onClick={()=>backClickHandler()}>Назад</button>
                <button className="disk__create" onClick = {() => showPopupHandler()}>Создать папку</button>
            </div>
            <FileList />
            <Popup />
        </div>
    )
}

export default Disk;
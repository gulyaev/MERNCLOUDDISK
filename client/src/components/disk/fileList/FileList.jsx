import React from "react";
import { useSelector } from "react-redux";
import "./fileList.less"
import File from "./file/File";

const FileList = () => {
    const files = useSelector(state => state.files.files).map(file => <File file={file} key={file.id}/>);
    /*
    const files = [{_id:1, name: 'direc', type: 'dir', size: '5gb', date: '20.02.2020'},
    {_id:1, name: 'direc', type: 'jpg', size: '5gb', date: '20.02.2020'}
    ].map(file => <File file={file} key={file.id}/>);
    */

    return (
        <div className="filelist">
            <div className="filelist__header">
                 <div className="filelist__name">Название</div>
                 <div className="filelist__date">Дата</div>
                 <div className="filelist__size">Размер</div>
            </div>
            {files}
        </div>
    )
}

export default FileList;
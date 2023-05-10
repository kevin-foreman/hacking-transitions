import React, {useContext} from "react";
import "../../../src/styles/LeftColumn.css"
import LeftColumnContext from "../../context/LeftColumnContext";

function LeftColumnNames(){
    const {students} = useContext(LeftColumnContext);
    return (
        <>
            {students.map((student, index) => {
                let fullName = "";
                (student.middlename) ? fullName = `${student.firstname}  ${student.middlename}  ${student.lastname}` : fullName = `${student.firstname}  ${student.lastname}`
                           
                return(                
                <div key={index} className="leftColumnNames">
                    <div className="LCName" onClick={() => handleStudentClicked(fullName ,student.id - 1)}>{fullName}</div>
                </div>
                )
            })}
        </>
    );
}
export default LeftColumnNames;
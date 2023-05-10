import React, { useContext } from 'react';
import '../../styles/StudentDetails.css'
import LeftColumnContext from "../../context/LeftColumnContext";

const StudentDetail = () => {
    
    const {openDropDown, students} = useContext(LeftColumnContext)

    console.log("openDropDown state = ", openDropDown);
    console.log("students state = ", students);

    return (
        <div
            id='detailsmain'
            className='studentDetails'
        >
            <h1 className='select-student'>PLEASE SELECT A STUDENT FROM THE DROPDOWN</h1> 
            {/* <table>
                <tbody>
                    <tr>
                        <td
                            id='details-0'
                            className='column1'
                        >Name</td>
                        <td
                        className='column2'>
                        {studentName}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-1'
                            className='column1'
                        >Branch</td>
                        <td
                        className='column2'>
                        {studentBranch}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-2'
                            className='column1'
                        >Outprocessing Status</td>
                        <td
                            className='column2'>
                            {studentStatus}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-3'
                            className='column1'
                        >Current Taskers</td>
                        <td
                        className='column2'>
                        {currentTasks}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-4'
                            className='column1'
                        >To-do</td>
                        <td
                        className='column2'>
                        {toDoTasks}</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}

export default StudentDetail;
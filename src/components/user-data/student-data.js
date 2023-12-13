import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import studentApiRequest from "../../services/studentBaseApiRequest";

const StudentData = () => {
    const [data, setData] = useState([]);
    const { _id } = useParams();

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await studentApiRequest.fetchAllStudents(_id);
                setData(response);
            } catch (err) {
                console.error(err);
            }
        };
        fetchStudentData();
    }, [_id])
    return (


        <div className="students-container">
            <h1 className='title'>STUDENTS</h1>
            {data.map((result) => (
                <div key={result._id} className="students">

                    <Link to={`/student-BioData/${result._id}`} className="link-name">
                        <div className="student-name" >
                            {result.firstName}  {result.lastName}
                        </div>
                    </Link>

                    <div >

                    </div>
                </div>
            ))}
        </div>

    )

}
export default StudentData
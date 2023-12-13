import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import staffApiRequest from "../../services/staffBaseApiRequest";

const StaffData = () => {
    const [data, setData] = useState([]);
    const { _id } = useParams();

    useEffect(() => {
        const fetchStaffData = async () => {
            try {
                const response = await staffApiRequest.fetchAllStaff(_id);
                setData(response);
            } catch (err) {
                console.error(err);
            }
        };

        fetchStaffData();
    }, [_id])
    return (




        <div className='staffs-container'>
            <h1 className="title">STAFFS</h1>

            {data.map((result) => (

                <div key={result._id} className="staffs">

                    <Link to={`/staff-BioData/${result._id}`} className='link-name nameOfStaff' >

                        {result &&

                            <div className="staff-name">
                                {result.firstName}  {result.lastName}
                            </div>}
                    </Link>
                </div>
            ))}
        </div>
    )

}
export default StaffData
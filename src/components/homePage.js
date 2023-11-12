import React from 'react'
import graduating_students from '../images/graduating_students.jpg'
import '../App.css'
import Heading from './header';

const Home = () => {
    return (
        <div className='home-page-container'>
            <div>
                <Heading />
            </div>
            <img src={graduating_students} alt='Graduating students' className='studentsWalking' />

            <h5 className='school-intro-heading'>ABOUT US</h5>
            < div className='school-intro' >
                <p>  Grace And Truth Academy was established out of a vision. Without gainsaying, the vision to establish a private secondary school is to breed God fearing moral and academically sound students that will stimulate the positive change the world needs. The vision was incubated by the end of the 21st century precisely in the year 1999. God inspired us to name the proposed secondary school "Grace And Truth Academy", a place where God has been existing, where He is existing now and where He will continue to exist forever in Jesus name. It consists of the following schools:
                </p>

                <ul>
                    <li>GRACE AND TRUTH JUNIOR SCHOOL</li>
                    <li>GRACE AND TRUTH SENIOR SCHOOL</li>
                </ul>
                The school was registered with OYO State Ministry of Education after necessary inspections were carried out by its officials in June 2002.
                <p>
                    The school commenced on the 18th of September, 2002. We give all glory to God for the spiritual state of our students in this school. The MOTTO of the school " CHRIST IN ME " is being experienced by majority of our students. The school produced her first sets of graduates in 2008. Subsequent sets of graduates have also been produced with some students now undergraduates in various universities in Nigeria and abroad. Presently the school has students from different parts of the country.
                </p>
                <p>
                    The history of the School cannot be separated from the future of the School. Over the years, the School has diligently nurtured children others thought could not fare better. We constantly remind them that God created everyone with his or her unique ability. We also remind them that we cannot help them to realize such abilities by aiding them to fraudulently pass exams.
                </p>
                <p>
                    Many wonder why we do not place much emphasis on advertisement in respect of our school and yet students keep coming from various part of the country. A Chief Executive of a leading restaurant remarked "To me marketing starts with having a good product. You could do the best marketing with a bad product, it might still not succeed, although it may work for some time but it will surely wane. But with a good product, a small push will bring you to a pool".
                </p>

                We look forward to you joining us and be a part of this great history making.
            </div>

            <h5 className="input-name"> CODE OF CONDUCT</h5>
            <div className='code-of-conduct'>

                In general we expect our students to be responsible members of the community and ambassadors for Grace And Truth Academy. Students are expected to:

                Wear the full uniform and to be smartly dressed at all times.
                Refrain from physical or verbal aggression and disputes.
                In general we expect our students to be responsible members of the community and ambassadors for Grace And Truth Academy.
            </div>
        </div>
    )
}

export default Home
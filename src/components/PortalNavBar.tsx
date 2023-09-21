import {AiOutlineMenu,AiOutlineDown} from 'react-icons/ai';
import profilePicture from "../img/me.jpg"


export const PortalNavbar = ()  => {

    // interface User {
    //     fullName : string ;
    // }

    // const name : User{
    //     fullName : "Lebele Thabang";
    // }
    return (
    <div className="navbar">
        <div className="navbar__container">
            <div className='split'>
                <div className="navbar__breadcrumb">
                    <AiOutlineMenu/>
                </div>
                <div className="navbar__profile">
                    <img src= {profilePicture} className="navbar__profile-picture" alt='image'/>
                    <p className="navbar__profile_name">Thabang Admore</p>
                    <AiOutlineDown className="chevron-down"/>
                </div>
            </div>
           
        </div>
    </div>
    )
}
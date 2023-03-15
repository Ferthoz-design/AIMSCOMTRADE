import "../Compontent/ServiceStyle.css";
import React from 'react';
import { FaBrush, FaCarSide, FaCity, FaUserCog, FaTshirt } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdCastForEducation } from "react-icons/md";
import { TbCurrencyRupee, TbMessages } from "react-icons/tb";

const Service = () => {
    return (
        <div className="Service-Container">
            <h1>Our Services</h1>
            <div className="Cont-top">
                <h2>PRATIMA</h2>
                <div className="pratima-box">
                    <div className="Box1">
                        <FaBrush size={50} className="icon" style={{ color: "#fff" }} />
                        <p><Link to="/Contact" className='para'>Pratima Brush Works & Co</Link></p>
                        <p className="def">Manufacturing of Domestic and Industrial Brushes.</p>
                        
                    </div>
                    <div className="Box1">
                        <FaUserCog size={50} className="icon" style={{ color: "#fff" }} />
                        <p><Link to="/Contact" className='para'>Pratima Agency</Link></p>
                        <p className="def">Trading and Distribution Of Brushes.</p>
                    </div>
                    <div className="Box1">
                        <FaCarSide size={50} className="icon" style={{ color: "#fff" }} />
                        <p><Link to="/Contact" className='para'>Pratima Tour & Travels</Link></p>
                        <p className="def">Conducting Customized Packages And Guide Tours Across India,International and Domestic Ticketing Services Alongwith Chauffeur Services For any Hatchback to SUV Cars.</p>
                    </div>
                    <div className="Box1">
                        <FaCity size={50} className="icon" style={{ color: "#fff" }} />
                        <p><Link to="/Contact" className='para'>Pratima Commercial</Link></p>
                        <p className="def">End to End Group Services Offered.</p>
                    </div>
                </div>
            </div>
            <div className="Cont-down">
                <h2>AIMS</h2>
                <div className="Aims-box">
                    <div className="Box1">
                        <TbCurrencyRupee size={50} className="icon" style={{ color: "#fff" }} />
                        <p> <Link to="/Contact" className='para'>Aims Comtrade</Link></p>
                        <p className="def">Complete loan solutions provider with BFC and NBFC lending partners with added facilities of inhouse insurance coverage providing peace of mind.</p>
                    </div>
                    <div className="Box1">
                        <FaTshirt size={50} className="icon" style={{ color: "#fff" }} />
                        <p><Link to="/Contact" className='para'>Aims Garments</Link></p>
                        <p className="def">Manufacturing and Trading of School Dresses and Corporate Dressings.</p>
                    </div>
                    <div className="Box1">
                        <AiOutlineThunderbolt size={50} className="icon" style={{ color: "#fff" }} />
                        <p> <Link to="/Contact" className='para'>Aims Electrical</Link></p>
                        <p className="def">Electrical and Electronic Gadgets including Solar devices. </p>
                    </div>
                    <div className="Box1">
                        <MdCastForEducation size={50} className="icon" style={{ color: "#fff" }} />
                        <p><Link to="/Contact" className='para'>Aims Education</Link></p>
                        <p className="def">Edutech services provider in different platforms with loan provider guidance. </p>
                    </div>
                    <div className="Box1">
                        <TbMessages size={50} className="icon" style={{ color: "#fff" }} />
                        <p> <Link to="/Contact" className='para'>Aims Communication</Link></p>
                        <p className="def">Complete Taxation services providers in tune with Banking and financial sectors. </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service

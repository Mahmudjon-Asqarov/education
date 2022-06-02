import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

import { IoIosArrowDown } from 'react-icons/io';
function Header() {
    return (
        <header className='header'>
            <div className=" container wrapper_header">
                <div className="header_icon">
                    <h1>Mahmudjon education</h1>
                </div>
                <ul className="h_collection">
                    <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > Home <IoIosArrowDown /></Link>
                        <div className="hover_container_pages">
                            <ul className='hover_container_pages_collection' >
                                <li className='hover_container_pages_items'><p>Link</p></li>
                            </ul>
                            <ul className='hover_container_pages_collection' >
                                <li className='hover_container_pages_items'><p>Link</p></li>
                            </ul>
                        </div>

                    </li>
                    <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > Pages<IoIosArrowDown /> </Link>
                        <div className="hover_container_pages">
                            <ul className='hover_container_pages_collection' >
                                <li className='hover_container_pages_items'><p>Link</p></li>
                                <li className='hover_container_pages_items'><p>Link</p></li>
                            </ul>

                        </div>
                    </li>
                    <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > Elements<IoIosArrowDown /></Link>
                        <div className="hover_container_pages">
                            <ul className='hover_container_pages_collection' >
                                <li className='hover_container_pages_items'><p>Link</p></li>
                            </ul>

                        </div>
                    </li>
                    <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > Courses<IoIosArrowDown /></Link>
                        <div className="hover_container_pages">
                            <ul className='hover_container_pages_collection' >
                                <li className='hover_container_pages_items'><p>Link</p></li>
                                <li className='hover_container_pages_items'><p>Link</p></li>
                            </ul>
                            <ul className='hover_container_pages_collection' >
                                <li className='hover_container_pages_items'><p>Link</p></li>
                                <li className='hover_container_pages_items'><p>Link</p></li>
                            </ul>
                        </div>
                    </li>
                    <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > Reaserch<IoIosArrowDown /></Link>
                        <div className="hover_container_pages">
                            <ul className='hover_container_pages_collection' >
                                <li className='hover_container_pages_items'><p>Link</p></li>
                                <li className='hover_container_pages_items'><p>Link</p></li>
                                <li className='hover_container_pages_items'><p>Link</p></li>
                                <li className='hover_container_pages_items'><p>Link</p></li>
                            </ul>

                        </div>
                    </li>
                    <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > News<IoIosArrowDown /></Link>
                        <div className="hover_container_pages">
                            <ul className='hover_container_pages_collection' >
                                <li className='hover_container_pages_items'><p>Link</p></li>
                                <li className='hover_container_pages_items'><p>Link</p></li>
                                <li className='hover_container_pages_items'><p>Link</p></li>
                            </ul>
                            <ul className='hover_container_pages_collection' >
                                <li className='hover_container_pages_items'><p>Link</p></li>
                                <li className='hover_container_pages_items'><p>Link</p></li>
                            </ul>
                        </div>
                    </li>
                    <li className="h_collection_link"><Link to={"/"} className='h_collection_link h_link' > Contact<IoIosArrowDown /></Link>
                        <div className="hover_container_pages">

                        </div>
                    </li>
                    <Link to={"/"} className='h_collection_link h_btn'>Apply now</Link>
                </ul>
            </div>
        </header>
    )
}

export default Header
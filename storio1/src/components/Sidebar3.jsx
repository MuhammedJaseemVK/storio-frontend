import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

function Sidebar3() {
    const [currentLink, setCurrentLink] = useState(1);
    return (
        <Section>
            <div className="top">
                <div className="brand">
                    <AiFillCodeSandboxCircle />
                    <span>STORIO</span>
                </div>
                <div className="links">
                    <ul>
                        <li
                            className={currentLink === 1 ? "active" : "none"}
                            onClick={() => setCurrentLink(1)}
                        >
                            <a href="/shopownerhome">
                                <AiOutlineAppstore />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li
                            className={currentLink === 2 ? "active" : "none"}
                            onClick={() => setCurrentLink(2)}
                        >
                            <a href="/sales">
                                <AiOutlineShoppingCart />
                                <span>Sales</span>
                            </a>
                        </li>
                        <li
                            className={currentLink === 3 ? "active" : "none"}
                            onClick={() => setCurrentLink(3)}
                        >
                            <a href="/scan">
                                <AiOutlineShopping />
                                <span>Scan</span>
                            </a>
                        </li>
                        <li
                            className={currentLink === 4 ? "active" : "none"}
                            onClick={() => setCurrentLink(4)}
                        >
                            <a href="/inventory">
                                <AiOutlinePieChart />
                                <span>Inventory</span>
                            </a>
                        </li>
                        <li
                            className={currentLink === 5 ? "active" : "none"}
                            onClick={() => setCurrentLink(5)}
                        >
                            <a href="/addproduct">
                                <AiOutlineUsergroupAdd />
                                <span>Add Product</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="logout">
                <a href="#">
                    <AiOutlineLogout />
                    <span>Logout</span>
                </a>
            </div>
        </Section>


    )
}

export default Sidebar3;
const Section = styled.section`
position: fixed;
left: 0;
background-color: #212223;
height: 100vh;
width: 18vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem 0;
gap: 2rem;
.top{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .brand {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.3rem 0;
        svg {
            color: orange;
            font-size: 2rem;
        }
        span {
            font-size: 1.5rem;
            font-weight: bold;
            color: #ff9900;
        }
    }
    .links {
        display: flex;
        justify-content: center;
        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li{
                padding: 0.6rem 2rem;
                border-radius: 0.3rem;
                &:hover {
                    background-color: white;
                    a{
                        color: black;
                    }
                }
                a {
                    text-decoration: none;
                    display: flex;
                    gap: 1rem;
                    color: white;
                    svg {
                        font-size: 1.4rem;
                    }
                    span {
                        display: flex;
                        gap: 2rem;
                    }
                }
            }
            .active {
                background-color: #ff9900;
                a {
                    color: white;
                }
            }
        }
    }
}
.logout {
    padding: 0.6rem 3rem;
    margin-left: -2rem;
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        gap: 1rem;
        svg {
            font-size:1.4rem;
        }
        span {
            display: flex;
        }
    }
}
`
    ;

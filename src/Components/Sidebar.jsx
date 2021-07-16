import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Css/Sidebar.module.css'


const links = [

    {
        title: "Home",
        to: "/"
    },
    {
        title: "International",
        to: "/international"

    },

    {
        title: "Business",
        to: "/business"
    },

    {
        title: "Entertainment",
        to: "/entertainment"
    },
    {
        title: "Sports",
        to: "/sports"
    },
    {
        title: "Health",
        to: "/health"
    }

]

function Sidebar() {


    return (
        <div className={styles.SidebarCont}>
            <div>
                <Link to="/">
                    <h1>NEWS APP</h1>
                </Link>
            </div>
            {
                links.map((item) => {
                    return <div key={item.title}>
                        <Link to={item.to}>{item.title}</Link>
                    </div>
                })
            }
        </div>
    )

}


export { Sidebar }
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Css/Sidebar.module.css'


const links = [

    {
        title: "Home",
        to: "/",
        logo: <i className="ri-home-line"></i>
    },
    {
        title: "International",
        to: "/international",
        logo: <i className="ri-earth-line"></i>
    },

    {
        title: "Business",
        to: "/business",
        logo: <i className="ri-briefcase-3-fill"></i>
    },

    {
        title: "Entertainment",
        to: "/entertainment",
        logo: <i className="ri-video-line"></i>
    },
    {
        title: "Sports",
        to: "/sports",
        logo: <i className="ri-t-shirt-line"></i>
    },
    {
        title: "Health",
        to: "/health",
        logo: <i className="ri-heart-add-fill"></i>
    }

]

function Sidebar() {


    return (
        <div className={styles.SidebarCont}>
            <div className={styles.newsLogo}>
                <Link to="/"
                    style={{ textDecoration: "none" }}
                    className={styles.logoLink}>
                    <h1>NEWS APP</h1>
                </Link>
            </div>

            <div className={styles.CateCont}>
                {
                    links.map((item) => {
                        return <div key={item.title} className={styles.ecahCateLinkCont}>
                            <Link to={item.to}
                                style={{ textDecoration: "none" }}
                                className={styles.ecahCateLink}
                            >
                                <div className={styles.ecahCateLogoAndTitle}>
                                    <div className={styles.ecahCateLogo}>
                                        {item.logo}

                                    </div>
                                    <div className={styles.ecahCateTitle}>
                                        {item.title}

                                    </div>
                                </div>

                            </Link>
                        </div>
                    })
                }
            </div>

            <div style={{ textAlign: "left", paddingTop: "15px" }}>
                <div style={{ fontWeight: "500" }}>Follow us on</div>
                <div className={styles.socialMedia}>
                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="Google" />
                    <img src="https://www.pngkey.com/png/detail/335-3354560_rumpfmuskulatur-trainieren-high-resolution-facebook-vector-logo.png" alt="Facebook" />
                    <img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="Twitter" />
                    <img src="https://banner2.cleanpng.com/20171202/f59/linkedin-download-png-5a22d420d16602.1978549215122319688577.jpg" alt="LinkedIn" />
                </div>
            </div>

            <div style={{ textAlign: "left", paddingTop: "15px" }}>
                <div style={{ fontWeight: "500" }}>Subscribe to newsletter</div>
                <div className={styles.subscribeViaMail}>
                    <input placeholder="Enter email" />
                    <i style={{ padding: "10px", backgroundColor: "#0063B4", color: "white" }} className="ri-mail-line"></i>
                </div>

            </div>
        </div>
    )

}


export { Sidebar }
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContextProvider';
import styles from './Css/NewsHomePage.module.css';

function NewsHomePage() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("covid");

    const { isLoading, isError, setIsLoading, setIsError } = useContext(AppContext);
    const apiKey = "aa5e294999944a439c748a4e1e9b6587";


    const getNewsData = (query) => {

        setIsLoading(true);

        axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=20`)
            .then((res) => {

                setData(res.data.articles)
                console.log(res.data.articles);
            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
                setIsLoading(false);

            })
            .finally(() => {

                setIsLoading(false);
                setIsError(false);

            })

    }


    useEffect(() => {

        getNewsData(query);

    }, [])

    return (
        <div style={{ paddingLeft: "30%" }} className={styles.homePageCont}>

            <div className={styles.newsHomePageNav}>

                <div className={styles.serachBoxCont}>
                    <input placeholder="Search News" onChange={(e) => setQuery(e.target.value)} value={query} />
                    <button onClick={() => getNewsData(query)}><i class="ri-search-line"></i></button>
                </div>

            </div>




            <div className={styles.wholeNewsCont}>
                {
                    data.map((item) => {

                        return <div className={styles.eachNewsCont}>
                            <div className={styles.description}>{item.description}</div>

                        </div>

                    })
                }
            </div>

        </div>

    )

}


export { NewsHomePage }
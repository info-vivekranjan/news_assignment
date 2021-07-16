import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContextProvider';
import styles from './Css/NewsHomePage.module.css';

function InternationalNews() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("international");

    const { isLoading, isError, setIsLoading, setIsError } = useContext(AppContext);
    const apiKey = "ee819a61329e466f89564d1da67b56c3";


    const getNewsData = (query) => {

        setIsLoading(true);

        axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=10`)
            .then((res) => {

                setData(res.data.articles)
                console.log(res);
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
        <div style={{ paddingLeft: "23%" }} className={styles.homePageCont}>



            <div className={styles.serachBoxCont}>
                <input placeholder="Search News" onChange={(e) => setQuery(e.target.value)} value={query} />
                <button onClick={() => getNewsData(query)}><i class="ri-search-line"></i></button>
            </div>






            <div className={styles.wholeNewsCont}>

                <>

                    {

                        isLoading ? <h3>Loading...</h3> :
                            isError ? <h3>Something went wrong...</h3> :
                                <>
                                    {
                                        data.map((item) => {

                                            return <div className={styles.eachNewsCont}>
                                                <div className={styles.description}>
                                                    {item.description}

                                                    <div className={styles.descriptionBottom}>
                                                        <div>{item.source.name}</div>
                                                        <div>{item.publishedAt}</div>
                                                    </div>

                                                </div>
                                                <a href={item.url} target="_blank" className={styles.imgCont}>
                                                    <img src={item.urlToImage} alt="NewsImg" />
                                                </a>


                                            </div>

                                        })
                                    }

                                </>

                    }

                </>

            </div>

        </div>

    )

}


export { InternationalNews }
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContextProvider';
import styles from './Css/NewsHomePage.module.css';


function NewsHomePage() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("covid");

    const { isLoading, isError, setIsLoading, setIsError } = useContext(AppContext);
    const apiKey = "ee819a61329e466f89564d1da67b56c3";

    const [page, setPage] = useState(1)

    const getNewsData = (query, page = 1) => {

        setIsLoading(true);

        axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=10&page=${page}`)
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

        getNewsData(query, page);
    }, [query, page])



    return (
        <div className={styles.homePageCont}>



            <div className={styles.serachBoxCont}>

                <input placeholder="Search News" onChange={(e) => setQuery(e.target.value)} value={query} />
                <button onClick={() => getNewsData(query)}><i className="ri-search-line"></i></button>
            </div>






            <div className={styles.wholeNewsCont}>

                <>

                    {

                        isLoading ? <h3>Loading...</h3> :
                            isError ? <h3>Something went wrong...</h3> :
                                <>
                                    {
                                        data.map((item, index) => {

                                            return <div key={index} className={styles.eachNewsCont}>
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

            <div className={styles.pagination}>
                <button className={styles.backBtn} disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
                <button className={styles.currentBtn}>{page}</button>
                <button className={styles.nextBtn} onClick={() => setPage(page + 1)}>Next</button>
            </div>

        </div>

    )

}


export { NewsHomePage }
import React, { useState, useEffect } from "react";
import "./datafetcher.css"


export const DataFetcher = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<any>()
    useEffect(() => {
        let isCalled = false
        fetch("http://universities.hipolabs.com/search?country=United+States").then(res => res.json()).then((data) => {
            if (!isCalled) {
                let newData = data
                setData(newData.slice(0, 30))
                setLoading(false)
                isCalled = true
            }
        }).catch((error) => { console.log(error) })

        return () => {
            isCalled = false
        }
    }, [])

    return (
        <div className="data-fetcher-container">
            {loading ? 
            <div className="loading-container">
            <span className="loading"></span>
            <span className="loading"></span>
            <span className="loading"></span>
            <span className="loading"></span>
            <span className="loading"></span>
            <span className="loading"></span>
            <span className="loading"></span>
            </div> :
                <>{data && data.map((d: any, i: number) => {
                    return (
                        <div key={i} className="country-details">
                            <div>
                                <h3>{d.name} - {d.country}</h3>
                                <a href={d.web_pages} target="_blank">{d.web_pages}</a>
                            </div>
                        </div>
                    )
                })}
                </>
            }
        </div>
    )
}
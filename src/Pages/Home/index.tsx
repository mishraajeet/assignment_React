import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Users } from "../../Components/Users";
import { Counter } from "../../Components/Counter";
import { DataFetcher } from "../../Components/DataFetcher";
import { TodoComponent } from "../../Components/Todo"
import "./home.css";

const tabs = ['Users', 'Counter', 'Fetch Data', 'Todo']

export const HomePage = () => {
    const [activeTab, setActiveTab] = useState('Users')
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    const handleTab = (title: string, index: number) => {
        setActiveTab(title)
        setActiveTabIndex(index)
    }
    return (
        <div className="home-page-container">
            <div className="tab">
                {
                    tabs.map((item: string, i: number) => {
                        return (
                            <h4 onClick={() => handleTab(item, i)} key={i} className={activeTabIndex === i ? 'active' : ''}>{item}</h4>

                        )
                    })
                }
            </div>
            {activeTab === 'Users' ? <Users /> : activeTab === 'Counter' ? <Counter /> : activeTab === 'Fetch Data' ? <DataFetcher /> : <TodoComponent />}
        </div>
    )
}

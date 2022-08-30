import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import axios from 'axios';



const { TabPane } = Tabs;


function ProfilePage() {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    //console.log(user._id);


    useEffect(() => {
        if (!user) window.location.href = '/'
    }, [])

    return (
        <div className='ml-3 mt-3'>
            <Tabs defaultActiveKey="1">
                <TabPane tab="profile" key="1">
                    <h1>My Profile</h1>
                    <br />
                    <h1>Name :{user.name.toUpperCase()}</h1>
                    

                </TabPane>
            </Tabs>

        </div>
    )
}

export default ProfilePage






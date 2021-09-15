// import React from 'react'
import './Body.css'
import image from './aa.png'
function Body() { 
    return (
        <div className='parentdiv'>
                <div className='data'>     
            <div className='name'>
            <h2>JUSTIN CASE</h2> 
            </div>
            <div className='pic'>
            <img src={image} height={150} width={150} />
            </div>
            <div className='post'>
            <h3>45 POSTS</h3> 
            </div>
                </div>
                <div className='bio'>
                <div className='biohead'>
                    <h1>Bio</h1>
                </div>
                <div className='biodata'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle
                        y of type and scrambled it to make a type specimen book
                        Lorem Ipsum has been the industry's standard dummy text 
                        .</p>
                </div>
                <div className='footer'>
                    <p><a href='#'>Your Skill</a></p>
                    <p>Joined 12.09.21</p>
                </div>

            </div>
        </div>
        ) }

export default Body;
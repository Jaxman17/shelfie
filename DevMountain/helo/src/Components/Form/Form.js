import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import no_image from '../../no_image.jpg';


class Form extends Component {
    render() {
        return (
            <div className='dashboard'>
                <Nav />
                <div className='main-content-form'>
                    <div>
                        <div className='new-post'>
                            <div>
                                <div>Title:</div>
                                <input className='input-new-post' />
                            </div>
                            <div>
                                <img src={no_image} alt='' className=''/>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;
import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import Search from '../../search_logo.png';



class Dashboard extends Component {
    render(){
        return (
            <div className='dashboard'>
                <Nav />
                <div className='main-content-dash'>
                    <div>
                        <div className='search-bar-dashboard'>
                            <input className='search'/>
                            <button className='search-button'><img src={Search} alt='' className='search-button'/></button>
                            <button className='reset'>Reset</button>
                            <div className='my-posts'>
                                My Posts <input type='checkbox'/>
                            </div>
                        </div>
                        <div className=''>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
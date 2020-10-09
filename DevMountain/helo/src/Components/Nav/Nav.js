import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dashboard from '../../home_logo.png';
import New from '../../new_logo.png';
import Logout from '../../shut_down.png';
import {Link} from 'react-router-dom';
import no_image from '../../no_image.jpg';
import {logout} from '../../ducks/reducer';
import {withRouter} from 'react-router-dom';



class Nav extends Component {
    render(){
        if(this.props.reduxState.user.signedIn === false){
            this.props.history.push('/')
        }
        console.log(this.props)
        return (
            <div className='nav-bar'>
                <div>
                    <Link to='/post'><img src={no_image} alt='' className='nav-img'/></Link>
                </div>
                <div>
                    UserName: Here
                </div>
                <div>
                    <Link to='/dashboard'><img src={Dashboard} alt='' className='nav-img'/></Link>
                </div>
                <div>
                    <Link to='/form'><img src={New} alt='' className='nav-img'/></Link>
                </div>
                <div className='logout'>
                    <div>
                        <button onClick={() => this.props.logout()}><img src={Logout} alt='' className='nav-img'/></button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reduxState: state
    }
}


export default withRouter(connect(mapStateToProps, {logout})(Nav));
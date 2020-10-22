//// containing the stars as an array of data and sent to Deck to be displayed and for the favorite button to be invoked//

import React, { Component } from 'react'
import axios from 'axios'
import Deck from './Deck'
import Header from './Header'
import Favorites from './Favorites'

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedStars: [],
            index: 0,
            favStars: []

        }
    }
    componentDidMount() {
        this.getDisplayedStars();
        
    }
    getDisplayedStars = () => {
        axios.get('/api/starList/')
            .then(res => {
                this.setState({ displayedStars: res.data })
            })
            .catch(err => console.log(err))
    }
    nextStar = () => {
        if (this.state.index === this.state.displayedStars.length - 1){
            this.setState({index: 0})
        } else {
            this.setState({index: this.state.index + 1})
        }
    }
    previousStar = () => {
        if (this.state.index === 0){
            this.setState({index: this.state.displayedStars.length - 1})
        } else {
            this.setState({index: this.state.index - 1})
        }
    }
    getFavStars = (favArr) => {
       this.setState({favStars: favArr})

    }
    
    
    render() {
        console.log(this.state)
        // // const currentStar = ( 
        // //     <Deck
        //         star={this.state.displayStars[this.state.index]}
        //     />
        // )

        return (
            <section>
                <Header />
                {
                    this.state.displayedStars.length > 0
                    ? (
                        <Deck
                            star={this.state.displayedStars[this.state.index]}
                            prevFn={this.previousStar}
                            nextFn={this.nextStar}
                            getFavStars={this.getFavStars}
                        />

                    ): <p>Loading Star</p>
                }
                <Favorites favorites={this.state.favStars} getFavStars={this.getFavStars}/>
            </section>
        )
    }
}
export default Display
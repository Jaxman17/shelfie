import React, { Component } from 'react'
import axios from 'axios'
class Deck extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         favorited: false,
    //         selectedStar: {},

    //     }
    // }

    // componentDidMount() {
    //     axios.get(`/api/starList/${this.state.id}`)
    //         .then(res => {
    //             this.setState({ selectedStar: res.data })
    //         })
    // }
    favButton = (id) => {
        console.log(id);
        axios.post("/api/favList", { id })
        .then(res =>{
            this.props.getFavStars(res.data)
        })
    }



    // nextStar = () => {
    //     this.setState({index: this.state.id + 1});
    //     axios.get(`/api/starList/${this.state.id + 1}`)
    //     .then(res => {
    //         this.setState({selectedStar: res.data})
    //     })
    //     .catch(err => console.log(err));
    // }

    // previousStar= () => {
    //     const {id} = this.state;
    //     if(id !== 1){
    //         this.setState({index: this.state.id - 1});
    //         axios.get(`/api/starList/${this.state.id - 1}`)
    //         .then(res => {
    //             this.setState({selectedStar: res.data})
    //         })
    //         .catch(err => console.log(err));
    //     }
    // }



    render() {
        console.log(this.props)

        return (
            <section>
                <img src={this.props.star.url} />
                <p>{this.props.star.name}</p>
                <button onClick={this.props.prevFn}> BACK </button>
                <button onClick={() => this.favButton(this.props.star.id)}> FAVORITE </button>
                <button onClick={this.props.nextFn}> NEXT</button>

            </section>
        )
    }
}

export default Deck
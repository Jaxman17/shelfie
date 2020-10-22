import React, {Component} from 'react'
import Stars from './Stars'
import axios from 'axios'

export default class Favorites extends Component{
    // constructor(){
    //     super();
    //     this.state= {
    //         favorites: []

    //     }
    // }
    // componentDidMount(){
    //     axios.get('/api/favList')
    //     .then(res => this.setState({favorites: res.data}))
    //     .catch(err => console.log(err))
    // }
    editName = (id, newName) => {
        let body = {name: newName};
    
        axios.put(`/api/favList/${id}`, body)
        .then(res => {
          this.props.getFavStars(res.data)
        })
        .catch(err => console.log(err));
      }
      deleteFav = (id) => {
        axios.delete(`/api/favList/${id}`)
        .then(res => {
          this.props.getFavStars(res.data)
        })
        .catch(err => console.log(err));
      }


    render(){
        const favoritesMapped = this.props.favorites.map((fav, index) => {
            return(
                <Stars
                star={fav}
                key={index}
                nameFn={this.editName}
                deleteFn={this.deleteFav}/>
            )
        })
         

        return(
            <div>
                <h1>Favorites!</h1>
                {favoritesMapped}
            </div>
        )
    }

    

    

    

}


import React, { Component } from 'react'


class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            renameStar: '',
            
        }
    }
    handleInput = (val) => {
        this.setState({ renameStar: val })
    }
    handleToggle = () => {
        this.setState({ isEditing: !this.state.isEditing })
    }
    handleEdit = (id) => {
        this.props.nameFn(id, this.state.renameStar);
        this.handleToggle();
    }
    render() {
        return (

            <div>
                <img src={this.props.star.url} alt={this.props.star.name} />
                {this.state.isEditing
                    ? (
                        <div>
                            <input
                                value={this.state.nameInput}
                                onChange={e => this.handleInput(e.target.value)} />
                            <button onClick={() => this.handleEdit(this.props.star.id)}>Submit!</button>
                        </div>
                    )
                    : (
                        <div>
                            <p>{this.props.star.name}</p>
                            <button onClick={this.handleToggle}>Rename!</button>
                        </div>
                    )}
                <button onClick={() => this.props.deleteFn(this.props.star.id)}>Delete from list *sad star noises*</button>
            </div>





        )
    }
    // 
}
export default Stars
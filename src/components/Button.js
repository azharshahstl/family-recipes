import React from 'react'


class Button extends React.Component {

    state = {
        liked: false
    }


    handleOnClick = (state) => {

        // debugger;
        if (state.liked == false) {
            this.setState({
                liked: true
            })
            
        }
        else {
            this.setState({
                liked: false 
            })

        }

    }

    render(){
        return (
            <>
                <button onClick={(state) => {this.handleOnClick(this.state)}}>Like Button</button>
                {this.state.liked ? 'This recipe has 1 like.':'This recipe has 0 likes.'}
            </>
        )
    }
}

export default Button
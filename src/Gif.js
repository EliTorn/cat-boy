import React from "react";
import axios from "axios";

class Gif extends React.Component {
    state = {
        my_rul : "https://cdn.catboys.com/baka/baka_4.gif"
    }
    componentDidMount() {
        this.getGif();
    }

    getGif = () =>{
    axios.get("http://api.catboys.com/baka")
        .then((response)=>{
            this.setState({
                my_rul : response.data.url
            })
        })
    }
    render() {
        return (
            <div className="App">
                <img src={this.state.my_rul}  alt={this.state.my_rul}/>
                <button onClick={this.getGif}>Click here to the Change the Gift</button>
            </div>

        );
    }
}
export default Gif;
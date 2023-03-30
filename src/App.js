import './App.css';
import React from 'react'
import axios from "axios";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Gif from "./Gif";


class App extends React.Component {

    state = {
        currentUrl: "https://cdn.catboys.com/dice/2.png"
    }

    componentDidMount() {
        this.getImage();
    }


    getImage = () => {
        axios.get("https://api.catboys.com/img")
            .then((response) => {
                this.setState({
                    currentUrl: response.data.url
                })
            })
    }

    image = () => {
        return (
            <div>
                <img src={this.state.currentUrl} width={400} height={500} alt={this.state.currentUrl}/>
                <button onClick={this.getImage}>Click here to the Change the image</button>
            </div>
        )
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <NavLink style={{margin: "10px"}} to={"/"} >Home</NavLink>
                    <NavLink style={{margin: "10px"}} to={"/Gif"}>Click to Get Gif</NavLink>
                    <Routes>
                        <Route path={"/Gif"} element={<Gif/>}/>
                    </Routes>
                </BrowserRouter>
                {this.image()}

            </div>

        );
    }
}


export default App;

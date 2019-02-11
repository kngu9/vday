import React, {Component} from 'react';
import '../../../dist/styles.css';

class Jumbotron extends Component{
    render(){
        return(
            <div class="container">
                <div class="jumbotron">
                    <h1 id='jumbotron' class="display-1">Hello. Happy Valentine's Day.</h1>
                    <h4 id='description' class="lead">Here are some of our fun times together.</h4>
                </div>
            </div>
        )
    }
}

export default Jumbotron;
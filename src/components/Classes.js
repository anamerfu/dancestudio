import React, { Component } from 'react';
import Class from './Class'
import firebase from "../firebase";

class Classes extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            classes: []
        }

    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('classes');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    className: items[item].className,
                    classDescription: items[item].classDescription
                });
            }
            this.setState({
                classes: newState
            });
        });
    }

    // let classes = this.state.classes.map((class)  => {
    //     return (
    //         <Class name={class.className} description={class.classDescription} />
    //     );
    // });

    render() {
        return (
            <div className="content" id="contact-content">
                <h1>Classes</h1>

                {this.state.classes.map((item) => {
                    return (
                        <Class className={item.className} classDescription={item.classDescription}/>
                    )
                })}


            </div>

        )
    }


};

export default Classes;
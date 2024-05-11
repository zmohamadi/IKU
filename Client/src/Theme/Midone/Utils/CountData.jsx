'use client'

import React, {Component} from 'react';


export class CountData extends Component {
    constructor(props){
        super(props);
        this.state ={
            items: props.items!=undefined? props.items:[],
        }


    }

    componentWillReceiveProps(props){
        this.setState({
            items: props.items!=undefined? props.items:[],
        });
    }

    componentDidMount(){

        window.$(document).ready(function(){
            window.$('.owl-carousel').owlCarousel({
                rtl:true,
                loop:true,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:6
                    }
                }
            });
        });
    }

    render(){

        let {items} = this.state;

        // console.log(items);

        return(<div className='col-lg-12 col-xl-12'>
                    <div className='icon-cards-row' >
                        <div className='owl-container'>
                            <div className='owl-carousel'>
                                {items.map((item, index)=>{
                                    return(<a href='#' className='card' >
                                                <div className='card-body text-center'>
                                                    <i className={item.icon}></i>
                                                    <p className='card-text mb-0'> {item.label}
                                                    </p>
                                                    <p className='lead text-center'>
                                                    <span className='numberltr'>{item.count} </span></p>
                                                </div>
                                            </a>)
                                }
                                )}
                            </div>
                        </div>
                    </div>
                </div>


         );
}
}

import React from "react";


export class Container extends React.Component {
    render(){
        return(
                <div className="bg-white border-slate-800 flex justify-center">
                    <div> {this.props.title} </div>
                    <div> {this.props.children}</div>
                </div>
            
        )
    }
}
import React from "react";


export class Container extends React.Component {
    render(){
        return(
                <div className="bg-white border-2 border-slate-800 flex justify-center flex-col w-68 h-92">
                    <div> {this.props.title} </div>
                    <div> {this.props.children}</div>
                </div>
            
        )
    }
}
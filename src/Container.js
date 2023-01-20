import React from "react";


export class Container extends React.Component {
    render(){
        return(
            <div className="bg-black border-50 border-black">
                <h3 className="text-white"> Hello Word my name is Yari</h3>
                {this.props.children}
            </div>
            
        )
    }
}
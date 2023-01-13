import React,{createRef} from "react";

export class UncontrolledLogin extends React.Component {

    _formRef = createRef()

    handlerFormSubmit=(event)=>{
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.value 

        console.log(username,password,remember)

    }


    render(){
        return (
            <div>
                <h3> My uncontrolled Form Component</h3>

                <form ref={this._formRef} onSubmit={this.handlerFormSubmit}>
                    <input name="username"/>
                    <input name="password" type="password"/>
                    <input name="remember"type="checkbox" />
                    <button name="submit" type="submit"> Login</button>
                    <button type="reset">Reset</button>  
                </form>
            </div>
        )
    }
}
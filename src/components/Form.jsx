import React from 'react'
import Message from './Message'
class Form extends React.Component{
    constructor(){
        super()
        this.state=({
            message:"",
            messageToSend:""
        })
    }
    handlerInput(e){
        this.setState({message:e.target.value})
    }
    handlerSubmit(e){

        e.preventDefault();
        this.setState({messageToSend:this.state.message})
    }
    render(){
        return(
            <>
            <form onSubmit={(e)=>this.handlerSubmit(e)}>
                <fieldset>
                    <label>A Message You Would To Pass:</label>
                    <input type='text' value={this.state.message} onChange={(e)=> this.handlerInput(e)} placeholder='write your message here'/>
                </fieldset>
                <button type='submit'>
                    Send Message
                </button>
              
            </form>
            <Message text={this.state.messageToSend}/>
            </>
        )
    }
}
export default Form
import React,{ Component } from "react";
export default class Cell extends Component{
    constructor(props) {
        super()
        console.log(props)
        this.state = {color: props.value} // ...define initial state with a key of 'color' set to the 'value' prop
      }
      clicked= ()=>{
          this.setState({color: "#333"})
      }
      render(){
          return(
              <div onClick={this.clicked} className="cell" style={{backgroundColor: this.state.color}}>

              </div>
          )
      }
}
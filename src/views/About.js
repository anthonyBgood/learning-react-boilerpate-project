import React, { Component } from 'react'

class About extends Component{

  state = {
    returnBackOne: false , 
  }




  redirectAfterComplete = () => {

 
    console.log('AT FUNCTION')
    console.log('AT FUNCTION: ', this.props.history)


    if(this.state.returnBackOne){
      this.props.history.goBack()
    }else{
      this.props.history.push('/Home/')
    }

   


  }


componentDidMount(){
  const { match } = this.props
  if(!match.isExact && !this.state.returnBackOne){

    this.setState(() => ({
      returnBackOne: true
    }))

  }

}


render (){

  


  
  console.log('about 1: ', this.props)
  console.log('about 2: ', this.state)






  return (
    <div>
      <h3>
      About
      </h3>

      <button onClick={this.redirectAfterComplete}>Hit ME!</button>
    </div>
  )

}



}

export default About
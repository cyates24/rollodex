import React, { Component } from "react";

class Rolodex extends Component {
  state = {
    isClicked: false
  };

  render() {
    console.log(this.props.results)
    return <div className='main'>
      <div>
        {this.props.results.map((item)=>
          (
          <div>
            {item.name.first } {item.name.last}
           <img src={item.picture.thumbnail}alt={item.name}/>
          </div>
        ))}
      </div>
    </div>;
  }
}

export default Rolodex;

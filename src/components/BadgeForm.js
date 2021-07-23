import React, { Component } from "react";

class BadgeForm extends Component {
  handleChange = (e) => {
    console.log({ 
      // Event name for input tag
      name: e.target.name,
      // Value of the input
      value: e.target.value 
    }); 
  }
  
  handleClick = e => {
    console.log("Button clicked")
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted')
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} className="form-control " type="text" name="firstName" />
          </div>

          {/* Default button type inside a form is submit */}
          {/* To avoid this, set type to "button" or handle onSubmit action in form */}
          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form> 
      </div>
    )
  }
}

export default BadgeForm;

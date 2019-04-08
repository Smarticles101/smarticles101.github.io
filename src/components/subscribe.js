import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import './subscribe.css';

export default class Subscribe extends React.Component {

  state = {
    email: ''
  }

  setEmail = (e) => {
      this.setState({ email: e.target.value})
  }

  _handleSubmit = async (e) => {
    console.log("submitted");
    e.preventDefault();

    const result = await addToMailchimp(this.state.email);

    this.setState({ email: '' });
    
  }

  render () {
    return (
      <>
        <h2>Subscribe</h2>
        <p>Stay up to date with my blog and other random stuff</p>
        <form onSubmit={this._handleSubmit}>
          <input type="email" value={this.state.email} onChange={this.setEmail} />
          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}
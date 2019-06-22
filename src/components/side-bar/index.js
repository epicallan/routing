import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
    <div className="sidebar-container">
      {this.props.children}
    </div>
    )
  }
}
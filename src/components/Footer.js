import React, { Component } from "react"

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
              <h3>All rights reserved &copy;{new Date().getFullYear().toString() } </h3>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <>
        <header>
          <img src="https://i.imgur.com/KDIDiSE.png" alt="Facebook"/>
          <div className="user">
            <a href="/">
              Meu perfil
              <i className="fas fa-user-circle"></i>
            </a>
          </div>
        </header>
      </>
    )
  }
}

export default Header
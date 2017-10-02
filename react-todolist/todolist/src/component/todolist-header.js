import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        val : ''
    }
  }
  addItem( ev ){
    if( ev.keyCode === 13 ){
      //console.log(ev.target.value)
      this.props.addItemHeader(ev.target.value)
      ev.target.value = ''
    }
  }
  render () {
    return  <header className="header">
              <h1>todos</h1>
              <input className="new-todo" onKeyDown={this.addItem.bind(this)}  placeholder="请输入内容" />
            </header>
  }
}

export default Header;
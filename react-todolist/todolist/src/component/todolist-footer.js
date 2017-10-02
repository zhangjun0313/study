import React from 'react'

class Footer extends React.Component{
  	render(){
		let arr = this.props.list
		if( arr.length ){
			return <footer className="footer">
							<span className="todo-count">
								<strong className="num">{this.props.m}</strong>
								<span>条未选中</span>
							</span>
						</footer>
		}
		return <div></div>
	}
}
export default Footer
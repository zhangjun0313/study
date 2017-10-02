import React from 'react'

class Item extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			off:false,
			val:this.props.txt
		}
	}
	removeItem(){
		console.log(this.props.index)
		this.props.removeItemContent(this.props.index)
	}
	changeState(){
		//console.log(this.props.selected,this.props.index)

		this.props.changeItemSelected(this.props.selected,this.props.index)
	}
	changeTxtFn(){
		this.setState({
			off:!this.state.off
		},()=>{
			//console.log(this.input)
			this.input.focus()
			this.input.setSelectionRange(this.input.value.length,this.input.value.length)
		})
		setTimeout(()=>{
			console.log(this.state.off)
		})
	}
	changeTitle( ev ){
		if( ev.keyCode === 13 ){
			this.setState({
				off:false
			})
			this.props.changeTitleContent(ev.target.value,this.props.index)
		}else if( ev.keyCode === 27 ){
			console.log(this.props.txt)
			this.setState({
				val:this.props.txt
			})
			this.setState({
				off:false
			})
		}
	}
	fn(){
		
	}
	func( ev ){
		this.setState({
			val:ev.target.value
		})
		//console.log(ev.target.value)
	}
	titleDone(ev){
		this.setState({
			off:false
		})
		//console.log(ev.target.value)
		this.props.changeTitleContent(ev.target.value,this.props.index)
	}
	render(){
		return <li className={ `${this.props.selected ? 'completed' : ''} ${this.state.off ? 'editing' : ''} ` }>
								<div className="view">
									<input 
										onChange={this.fn.bind(this)} 
										className="toggle" type="checkbox" 
										onClick={this.changeState.bind(this)} 
										checked={this.props.selected} 
									/>
									<label onDoubleClick={this.changeTxtFn.bind(this)}>{this.props.txt}</label>
									<button className="destroy" onClick={this.removeItem.bind(this)}></button>
								</div>
								<input 
									className="edit" 
									onChange={this.func.bind(this)} 
									value={this.state.val} 
									onKeyDown={this.changeTitle.bind(this)} 
									ref={( input ) => { this.input = input }}
									onBlur={this.titleDone.bind(this)}
								/>
						</li>
	}
}
export default Item
//edit
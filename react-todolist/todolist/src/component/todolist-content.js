import React from 'react'
import Item from './todolist-item';
class Content extends React.Component{
	removeItemContent( i ){
		//console.log( 'content:'+i )
		this.props.removeItemApp(i)
	}
	changeItemSelected( itemSelected , i ){
		//console.log( 'content:' + itemSelected , i)
		this.props.changeItemSelectedApp(itemSelected,i)
	}
	changeAllItemSeleted(){
	// 	//console.log(this.state.allSeleted)
		this.props.changeAllItemSeletedApp()
	}
	changeTitleContent( val , i ){
		//console.log('content'+val,i)
		this.props.changeTitleApp(val,i)
	}
	fn(){

	}
	render(){
		//console.log(this.props.selected)
		//console.log(this.props.n,this.props.list.length)
		return <section className="main">
							<input 
								className="toggle-all" 
								onChange={this.fn.bind(this)} 
								type="checkbox" 
								checked={this.props.n === this.props.list.length} 
								onClick={this.changeAllItemSeleted.bind(this)} 
							/>
							<ul className="todo-list">
								{
									this.props.list.map( ( item , index ) => {
										return <Item 
													changeItemSelected={this.changeItemSelected.bind(this)} 
													removeItemContent={this.removeItemContent.bind(this)} 
													selected={item.selected} 
													txt={item.title} 
													index={index} 
													key={index}
													changeTitleContent={this.changeTitleContent.bind(this)}
												></Item>
									} )
								}
							</ul>
					</section>
	}
}
export default Content
//
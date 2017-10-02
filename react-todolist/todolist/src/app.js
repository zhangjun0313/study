import React from 'react';
import Header from './component/todolist-header';
import Footer from './component/todolist-footer';
import Content from './component/todolist-content';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list : this.props.list,
      allSeleted : true
    }
  }
  addItemHeader(val){
    //console.log(val)
    let arr = this.state.list
    arr.push( {
      id:Math.random(),
      title:val,
      selected:false
    } )
    let n = 0
    for( let i = 0 ; i < arr.length ; i++ ){
      if( arr[i].selected === true ){
        n++
        if( n === arr.length ){
          //console.log('全都选中了' + n)
          this.setState({
            allSeleted : false
          })
        }else{
          //console.log('其中有没有选中的' + n)
          this.setState({
            allSeleted : true
          })
        }
      }
    }
    this.setState({
      list:arr
    })
  }
  removeItemApp( i ){
    //console.log( 'app:'+i )
    let arr = this.state.list
    arr.splice( i , 1 )
    let n = 0
    for( let i = 0 ; i < arr.length ; i++ ){
      if( arr[i].selected === true ){
        n++
        if( n === arr.length ){
          //console.log('全都选中了' + n)
          this.setState({
            allSeleted : false
          })
        }else{
          //console.log('其中有没有选中的' + n)
          this.setState({
            allSeleted : true
          })
        }
      }
    }
    this.setState({
      list:arr
    })
  }
  changeItemSelectedApp( itemSelected , i ){
    //console.log( 'app' + itemSelected , i )
    let arr = this.state.list
    arr[i].selected = !itemSelected
    let n = 0
    for( let i = 0 ; i < arr.length ; i++ ){
      if( arr[i].selected === true ){
        n++
        if( n === arr.length ){
          //console.log('全都选中了' + n)
          this.setState({
            allSeleted : false
          })
        }else{
          //console.log('其中有没有选中的' + n)
          this.setState({
            allSeleted : true
          })
        }
      }
    }
    this.setState({
      list:arr
    })
    //console.log(this.state.list)
  }
  changeAllItemSeletedApp(state){
    //console.log(this.state.allSeleted)
    
    let arr = this.state.list
    for( let i = 0 ; i < arr.length ; i++ ){
      arr[i].selected = this.state.allSeleted
    }
    this.setState({
      list:arr
    })
    this.setState({
      allSeleted:!this.state.allSeleted
    })
  }
  changeTitleApp( val , i ){
    //console.log(val,i+'app')
    let arr = this.state.list
    arr[i].title = val
    this.setState({
      list:arr
    })
  }
  render () {
    //console.log(this.state.allSeleted)
    let arr = this.state.list
    let n = 0
    let m = arr.length
    for( let i = 0 ; i < arr.length ; i++ ){
      //console.log(arr[i])
      if( arr[i].selected === true ){
        n++
        m--
      }
    }
    
    //console.log(m)
    return <div>
              <section className="todoapp">
                <div>
                 <Header addItemHeader={this.addItemHeader.bind(this)}></Header>
                  <Content 
                      changeItemSelectedApp={this.changeItemSelectedApp.bind(this)} 
                      removeItemApp={this.removeItemApp.bind(this)} 
                      list={this.state.list}
                      n={n}
                      changeAllItemSeletedApp={this.changeAllItemSeletedApp.bind(this)}
                      changeTitleApp={this.changeTitleApp.bind(this)}
                  ></Content>
                  <Footer m={m} list={this.state.list}></Footer>
                </div>
              </section>
            </div>
  }
}

export default App;
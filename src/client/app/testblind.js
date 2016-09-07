//es5
import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom'


var ToDoList = React.createClass({
	render: function(){
		return (
			<ul>{this.props.items.map(function(item){
				return <li>{item}</li>
			})}  </ul>

			)
	}
})
var ToDoApp = React.createClass({
	getInitialState: function(){
		return {text: "", items:[]}

	},

	onChange: function(e){
		e.preventDefault();
		this.setState({text: e.target.value})

	},

	onSubmit:function(e){
		e.preventDefault();
		this.setState({items: this.state.items.concat([this.state.text]), text: ""})

	},

	render: function(){
		return (
			<div>
			<h3>TODOAPP</h3>
			<ToDoList items ={this.state.items}/>
			<form onSubmit = {this.onSubmit} >
			<input type="text" onChange={this.onChange} value={this.state.text} />
			<button>{'Add #' + (this.state.items.length + 1)}</button>
			</form>
			</div>




			)
	}
})

ReactDOM.render(<ToDoApp/>, document.getElementById("container"))
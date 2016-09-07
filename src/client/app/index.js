import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom'
//import AwesomeComponent from './AwesomeComponent.jsx';

// class Logo extends React.Component {
//         render(){
//             return <img className="center" {...this.props} />;
//         }
//       }

//       Logo.propTypes = {
//           src: React.PropTypes.string.isRequired
//       };

//       class Label extends React.Component {
//         render() {
//             return <p className="default-label" {...this.props}> Hello World <span className="name"> {
//                 this.props.name
//             } </span>
//             </p>;
//         }
//       }

//       class Input extends React.Component {
//         render() {
//             return <input
//                 className="default-input"
//                 placeholder="Enter your name"
//                 {...this.props}
//                 type="text"
//              />;
//         }
//       }

//       class App extends React.Component{
//         constructor(props) {
//           super(props);
//           this.handleChange = this.handleChange.bind(this)
//           this.state = {
//                 name: ''
//           };
//         }

//         handleChange(e) {
//           this.setState({
//             name: e.target.value
//           });
//         }

//         render() {
//             return <div className="widget">
//                 <Logo className="center" src="http://goo.gl/fx5Zwn"/>
//                 <Label className="default-label" name={this.state.name} />
//                 <Input className="default-input" onChange={this.handleChange} /> </div>;
//         }
//       }


// render(<App/>, document.getElementById('app'));

// var MenuExample = React.createClass({

//     getInitialState: function(){
//         return { focused: 0 };
//     },

//     clicked: function(index){

//         // The click handler will update the state with
//         // the index of the focused menu entry

//         this.setState({focused: index});
//     },

//     render: function() {

//         // Here we will read the items property, which was passed
//         // as an attribute when the component was created

//         var self = this;

//         // The map method will loop over the array of menu entries,
//         // and will return a new array with <li> elements.

//         return (
//             <div>
//                 <ul>{ this.props.items.map(function(m, index){
        
//                     var style = '';
        
//                     if(self.state.focused == index){
//                         style = 'focused';
//                     }
        
//                     // Notice the use of the bind() method. It makes the
//                     // index available to the clicked function:
        
//                     return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
        
//                 }) }
                        
//                 </ul>
                
//                 <p>Selected: {this.props.items[this.state.focused]}</p>
//             </div>
//         );

//     }
// });

// // Render the menu component on the page, and pass an array with menu options

// ReactDOM.render(
//     <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
//     document.getElementById('container')
// );


var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<TodoApp />, document.getElementById("container"));
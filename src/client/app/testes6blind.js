import React from 'react';
import {render} from 'react-dom';

class Logo extends React.Component {
        render(){
            return <img className="center" {...this.props} />;
        }
      }

      Logo.propTypes = {
          src: React.PropTypes.string.isRequired
      };

class Display extends React.Component{
	render(){
		return <span>{this.props.text}</span>
	}
}

class App extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {text: ""}
	}



	handleChange(e){
		this.setState({
			text: e.target.value
		})
	}


	render(){
		return <div className="widget">
                <Logo src="http://goo.gl/fx5Zwn"/>
                <Display text={this.state.text}/>
                <input onChange={this.handleChange} value={this.state.text}/>

                </div>


	}
}

render(<App/>, document.getElementById('container'));
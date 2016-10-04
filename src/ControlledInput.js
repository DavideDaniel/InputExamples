import React, {Component} from 'react';

export default class ControlledInput extends Component {
    constructor() {
        super()
        this.state = {
            val: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
    }
    render() {
        const styl = {
            borderColor: this.state.val && /[\!\$\%\^\&\*\(\@\#\)]/.test(this.state.val)
                ? 'red'
                : 'black',
            borderImage: 'none',
            borderStyle: 'solid',
            borderWidth: 1,
        }
        return (
            <fieldset>
                <label>{this.state.val}</label>
                {this.state.warn ? (<h1>{this.state.warn}</h1>) : null}
                <input type='text' style={styl} ref='input' maxLength={this.props.maxCharacters} name={this.props.name} value={this.props.value} onChange={this.handleChange}/>

            </fieldset>
        );
    }

    validate(e) {
      if(this.state.warn) {
        this.setState({warn:null})
      }

      if(/[\!\$\%\^\&\*\(\@\#\)]/.test(e.target.value)){
        const val = e.target.value[e.target.value.length-1]
        this.setState({warn:`${val} is not a valid character`});
      }
    }

    handleChange(e) {
        this.validate(e);
        this.setState({val: e.target.value});
    }
}
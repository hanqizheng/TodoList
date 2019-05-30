import React, { Component } from 'react'
import style from './Form.css'
import pinkstyle from './FormPink.css'
import bluestyle from './FormBlue.css'
import blackstyle from './FormBlack.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      thing: '',
      theme: {
        'pink': pinkstyle,
        'green': style,
        'blue': bluestyle,
        'black': blackstyle
      }
    }
    this.state = this.initialState
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({
      thing: value
    })
    console.log(this.state.thing)
  }

  submitForm = () => {
    this.props.handleSubmit(this.state.thing)
    this.setState(this.initialState)
  }

  render() {
    const { theme } = this.props
    const themeStyle = this.state.theme[theme.color]
    return (
      <div className={themeStyle.formBg}>
        <form>
          <div>
            <input
              type="text"
              defaultValue={this.state.thing}
              className={themeStyle.formInput}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="button"
              value="Add"

              className={themeStyle.formButton}
              onClick={this.submitForm}
            />
          </div>
        </form>
      </div>
    )
  }

}

export default Form
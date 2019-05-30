import React, { Component } from 'react'
import style from './ThemeButton.css'

class ThemeButton extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      btnColor: '#91f0d0'
    }
    this.state = this.initialState
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    const { btnColor } = this.props
    this.setState({
      btnColor
    })
  }

  handleClick() {
    const { theme, changeTheme } = this.props
    console.log('this is handle click', theme)
    changeTheme(theme)
  }

  render() {
    const btnStyle = {
      backgroundColor: this.state.btnColor
    }

    return (
      <div className={style.buttonBg}>
        <input
          type='button'
          style={btnStyle}
          className={style.themeButton}
          onClick={e => this.handleClick()}
        />
      </div>
    )
  }
}

export default ThemeButton
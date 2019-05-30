import React, { Component } from 'react'
import style from './Table.css'
import pinkstyle from './TablePink.css'
import bluestyle from './TableBlue.css'
import blackstyle from './TableBlack.css'


class Table extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      isEdit: false,
      theme: {
        'pink': pinkstyle,
        'green': style,
        'blue': bluestyle,
        'black': blackstyle
      }
    }
    this.state = this.initialState
  }

  editThing = (e, index) => {
    if (this.refs[`edit${index}`].value === 'Edit') {
      this.refs[`edit${index}`].value = 'Save'
    } else {
      this.refs[`edit${index}`].value = 'Edit'
    }
    this.refs[`text${index}`].readOnly = !this.refs[`text${index}`].readOnly
  }

  render() {
    const { theme, things, removeThing } = this.props
    const themeStyle = this.state.theme[theme.color]

    return (
      <div className={themeStyle.listBg}>
        <div className={themeStyle.listTitle}>
          <h1>TODO</h1>
        </div>
        <table className={themeStyle.tableBg}>
          <tbody>
            {
              things.map((row, index) => {
                return (
                  <tr key={index} className={themeStyle.tableItem}>
                      <td>
                        <input
                          type="text"
                          ref={`text${index}`}
                          defaultValue={row}
                          readOnly={true}
                          className={themeStyle.tableItemText}
                        />
                      </td>
                      <td className={themeStyle.tableItemAction}>
                        <input
                          type="button"
                          value="Done"
                          className={themeStyle.tableButtonDone}
                          onClick={() => removeThing(index)}
                        />
                      </td>
                      <td className={themeStyle.tableItemAction}>
                        <input
                          type="button"
                          ref={`edit${index}`}
                          defaultValue='Edit'
                          className={themeStyle.tableButtonEdit}
                          onClick={(e) => this.editThing(e, index)}
                        />
                      </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }

}

export default Table
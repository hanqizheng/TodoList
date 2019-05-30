import React from 'react'
import { connect } from 'dva'
import Table from '../components/Table/Table'
import Form from '../components/Form/Form'
import ThemeButton from '../components/ThemeButton/ThemeButton'
import style from './IndexPage.css'

const Things = props => {
  const { dispatch, things, theme } = props

  function handleSubmit(thing) {
    console.log('this. handle submit', thing)
    dispatch({
      type: 'things/addThing',
      payload: thing
    })
  }

  function removeThing(index) {
    console.log('this is remove thing', index)
    dispatch({
      type: 'things/deleteThing',
      payload: index
    })
  }

  function changeTheme(theme) {
    console.log('this is change theme', theme)
    dispatch({
      type: 'theme/changeColor',
      payload: theme
    })
  }

  return (
    <div className={style.App}>
      <div>
        <div className={style.colorSelection}>
          <ThemeButton
            btnColor={'#91f0d0'}
            theme={'green'}
            changeTheme={changeTheme}
          />
          <ThemeButton
            btnColor={'#eeb6ff'}
            theme={'pink'}
            changeTheme={changeTheme}
          />
          <ThemeButton
            btnColor={'#a8e9ff'}
            theme={'blue'}
            changeTheme={changeTheme}
          />
          <ThemeButton
            btnColor={'#727272'}
            theme={'black'}
            changeTheme={changeTheme}
          />
        </div>
        <Table
          things={things.things}
          theme={theme}
          removeThing={removeThing}
        />

        <Form
          theme={theme}
          handleSubmit={handleSubmit}
        />

      </div>

    </div>
  )
}

const mapStateToProps = state => {
  const { things, theme } = state
  return { things, theme }
}

export default connect(mapStateToProps)(Things)
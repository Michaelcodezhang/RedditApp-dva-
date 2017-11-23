import React, {Component } from 'react'
import {Button, Radio} from 'antd'
const RadioGroup = Radio.Group

class Picker extends Component{
  render () {
    const {value, onChange} = this.props
    return (
      <div>
        <h1>{value || 'xxx'}</h1>
        <RadioGroup onChange={e => onChange(e.target.value)} defaultValue="reactjs">
          <Radio value='reactjs'>reactjs</Radio>
          <Radio value='frontend'>frontend</Radio>
        </RadioGroup>
      </div>
    )
  }
}

export default Picker

import React from 'react'
import HeadingSection from './heading'
import FormSection from './form'
import MainSection from './main'

const Layout = React.createClass({
  propTypes: {
    isConnected: React.PropTypes.bool.isRequired
  },
  getInitialState: function () {
    return {
      isConnected: false
    }
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({
      isConnected: nextProps.isConnected
    })
  },
  render: function () {
    return (
    <div>
      <HeadingSection isConnected={this.state.isConnected} />
      <FormSection />
      <MainSection />
    </div>
    )
  }
})

module.exports = Layout

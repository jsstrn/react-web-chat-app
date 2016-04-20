const React = require('react')

const HeadingSection = React.createClass({
  propTypes: {
    isConnected: React.PropTypes.bool.isRequired
  },
  getInitialState: function () {
    return {
      isConnected: false,
      label: 'default',
      message: 'loading'
    }
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({
      isConnected: nextProps.isConnected,
      label: (nextProps.isConnected) ? 'label label-success' : 'label label-danger',
      message: (nextProps.isConnected) ? 'connected' : 'disconnected'
    })
  },
  render: function () {
    return (
    <h1>Chat Reactor <span id='status' className={this.state.label}>
    {this.state.message}</span></h1>
    )
  }
})

module.exports = HeadingSection

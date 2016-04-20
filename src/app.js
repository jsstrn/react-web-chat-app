const io = require('socket.io-client')
const React = require('react')
const ReactDOM = require('react-dom')
const Layout = require('./components/layout')

function render (status) {
  console.log('Rendering React Components ' + status)
  ReactDOM.render(
    <Layout isConnected={status} />,
    document.querySelector('.container')
  )
}

render(false)

const socket = io(window.location.host)

socket.on('connect', function () {
  console.log('Connected to Chat Socket')
  render(true)
})

socket.on('disconnect', function () {
  console.log('Disconnected from Chat Socket')
  render(false)
})

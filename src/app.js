import io from 'socket.io-client'
import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/layout'

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

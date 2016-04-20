/*globals io*/
const React = require('react')
const ReactDOM = require('react-dom')

const MainSection = React.createClass({
  render: function () {
    return (
      <main className='panel panel-default hidden'>
        <div className='panel-heading'>
          <form id='MessageForm' className='form-inline text-right'>
            <fieldset>
              <input type='text' className='form-control ' placeholder='say what?' required autofocus />
              <button id='sendMessage' className='btn btn-success' disabled>Send</button>
            </fieldset>
          </form>
        </div>
        <section className='panel-body'>
          <div className='text-center'><small id='connected'></small></div>
          <hr />
          <div id='messages'></div>
        </section>
      </main>
    )
  }
})

const FormSection = React.createClass({
  render: function () {
    return (
      <section id='join' className='well hidden'>
        <form id='JoinForm' className='form-inline text-right'>
            <fieldset>
              <input type='text' className='form-control'  placeholder='Your name' />
              <button id='sendJoin' className='btn btn-success' disabled>Join</button>
            </fieldset>
        </form>
      </section>
    )
  }
})

const HeadingSection = React.createClass({
  render: function () {
    return (
    <h1>WDISG2 Chat <span id='status' className='label label-default'>{this.state.message}</span></h1>
    )
  }
})

const Layout = React.createClass({
  getInitialState: function () {
    return {
      status: false,
      message: 'loading - from component'
    }
  },
  componentWillReceiveProps: function (nextProps) {
    console.log(nextProps.status)
    this.setState({
      status: nextProps.status,
      message: 'connected from component'
    })
  },
  render: function () {
    return (
    <div>
      <HeadingSection message={this.state.message} />
      <FormSection />
      <MainSection />
    </div>
    )
  }
})

const socket = io(window.location.host)
let status = false
socket.on('connect', function () {
  console.log('Connected to Chat Socket')
  status = true
  ReactDOM.render(
    <Layout status={status} />,
    document.querySelector('.container')
  )
})
socket.on('disconnect', function () {
  console.log('Disconnected from Chat Socket')
  status = false
})

console.log(status)

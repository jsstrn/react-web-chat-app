const React = require('react')

const MainSection = React.createClass({
  render: function () {
    return (
      <main className='panel panel-default'>
        <div className='panel-heading'>
          <form id='MessageForm' className='form-inline text-center'>
            <fieldset>
              <input type='text' className='form-control ' placeholder='say what?' required autoFocus />
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

module.exports = MainSection

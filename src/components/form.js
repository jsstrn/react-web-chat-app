const React = require('react')

const FormSection = React.createClass({
  render: function () {
    return (
      <section id='join' className='well hidden'>
        <form id='JoinForm' className='form-inline text-right'>
            <fieldset>
              <input type='text' className='form-control' placeholder='Your name' />
              <button id='sendJoin' className='btn btn-success' disabled>Join</button>
            </fieldset>
        </form>
      </section>
    )
  }
})

module.exports = FormSection

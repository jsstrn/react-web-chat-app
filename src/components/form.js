import React from 'react'

const FormSection = React.createClass({
  render: function () {
    return (
      <section id='join' className='well'>
        <form id='JoinForm' className='form-inline text-center'>
            <fieldset>
              <input type='text' className='form-control' placeholder='Your name' required autoFocus />
              <button id='sendJoin' className='btn btn-success' disabled>Join</button>
            </fieldset>
        </form>
      </section>
    )
  }
})

module.exports = FormSection

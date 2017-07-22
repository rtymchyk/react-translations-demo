import React from 'react'
import PropTypes from 'prop-types'
import { _, Message } from 'react-translations'

export default function Homepage ({ locale }) {
  function handleButtonClick () {
    /**
     * If you are wondering why this is a hard refresh, it's because 
     * clients are only served the translations they need (for the language
     * they originally requested the page in). So, dynamic locale
     * changing is not supported! This is an optimization to prevent
     * clients from getting insanely huge sets of messages that they will
     * potentially never use.
     */
    window.location.href = locale === 'en-US' ? '/fr' : '/en-US'
  }

  return (
    <div>
      {/* Singular form */}
      <Message className="large" id="react-translations Demo" />
      {/* Singular form with context */}
      <Message id="Hello World!" context="Homepage" />
      {/* Plural form */}
      <Message
        id="You have one cat!"
        idPlural="You have {numCats} cats!"
        count={1}
        numCats="1" />
      {/* Plural form with context */}
      <Message
        id="You have {numCats} car!"
        idPlural="You have {numCats} cars!"
        numCats="1,000"
        count={1000}
        context="Homepage"
        comment="Here's a comment for the translator" />
      {/* Short form */}
      <Message i18n={_('Hey {name}!')} name="Bob" />

      <button
        onClick={handleButtonClick}
        id="locale-button">
        {locale === 'en-US' ? '→ fr' : '→ en-US'}
      </button>
    </div>
  )
}

Homepage.contextTypes = {
  locale: PropTypes.string.isRequired,
}

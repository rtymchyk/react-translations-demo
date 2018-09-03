import React from 'react'
import PropTypes from 'prop-types'
import { _, Message } from 'react-translations'
import { Route } from 'react-router-dom'

function MoreExamples () {
  return (
    <div>
      {/* Plural form with context and translator comment */}
      <Message
        id="You have {numCats} car!"
        idPlural="You have {numCats} cars!"
        numCats="1,000"
        count={1000}
        context="Homepage"
        comment="Here's a comment for the translator" />
      {/* Short form */}
      <Message i18n={_('Hey {name}!')} name="Bob" />
    </div>
  )
}

export default function Homepage ({ match, location, history }, { locale }) {
  function handleLocaleClick () {
    /**
     * If you are wondering why this is a hard refresh, it's because
     * clients are only served the translations they need (for the language
     * they originally requested the page in). So, dynamic locale
     * changing is not supported. This is an optimization to prevent
     * clients from fetching insanely huge sets of messages that they will
     * potentially never use.
     */
    window.location.href = locale === 'en-US' ? '/fr' : '/en-US'
  }

  function handleMoreClick () {
    if (location.pathname.endsWith('more')) {
      history.push(`${match.url}`)
    } else {
      history.push(`${match.url}/more`)
    }
  }

  return (
    <div>
      {/* Singular form */}
      <Message className="large" id="🌍 react-translations 🌍 Demo" />
      {/* Singular form with context */}
      <Message id="Hello World!" context="Homepage" />
      {/* Plural form */}
      <Message
        id="You have one cat!"
        idPlural="You have {numCats} cats!"
        count={1}
        numCats="1" />

      <Route path={`${match.url}/more`} component={MoreExamples}/>

      <div className="button-container">
        <button
          onClick={handleMoreClick}
          className="locale-button">
          {!location.pathname.endsWith('more') ? (
            <Message id="More Examples"/>
          ) : (
            <Message id="Less Examples"/>
          )}
        </button>
        <button
          onClick={handleLocaleClick}
          className="locale-button">
          {locale === 'en-US' ? '→ fr 🇫🇷' : '→ en-US 🇺🇸'}
        </button>
      </div>

    </div>
  )
}

Homepage.contextTypes = {
  locale: PropTypes.string.isRequired,
}

Homepage.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

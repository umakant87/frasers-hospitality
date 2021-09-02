import React from 'react'
import Text from './../../Atoms/Text/Text'
import FormInput from './../../Atoms/FormInput/FormInput'
import './EmailSubscription.scss'

const EmailSubscription = ({
  subscriptionHeader,
  subscriptionText,
  buttonLabel,
  placeholderText,
}) => {
  const submitButton = () => {
    console.log('form submited')
  }
  return (
    <div className="c-email-subscription">
      <div className="c-email-subscription__description">
        <Text type="h4" value={subscriptionHeader} />
        <Text type="p" value={subscriptionText} />
      </div>
      <div className="c-email-subscription__signup">
        <form
          id="sign-up"
          class="c-email-subscription__signup__form"
          method="post"
        >
          <FormInput id="name" name="name" type="text" placeholder="Name*" />

          <FormInput
            id="emailid"
            name="emailid"
            type="email"
            placeholder="Email Address*"
          />
          <FormInput id="agree" name="afgree" type="checkbox" />
          <p className="agree-text">
            I agree that Frasers Property Industrial (acting through FPE
            Beratungs GmbH, Seitzstrasse 23, 80538 Munich, and Frasers Property
            Industrial Australia Pty Limited Lvl 2, 1C Homebush Bay Drive Rhodes
            NSW Australia) may process my contact data for advertising and
            contact me by email to inform me about our project development
            offers. I can withdraw my consent at any time.
          </p>
          <button className="btn btn-primary" onClick={submitButton}>
            {buttonLabel}
          </button>
        </form>
      </div>
    </div>
  )
}
export default EmailSubscription

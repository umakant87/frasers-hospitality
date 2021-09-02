import React from 'react'
import './FooterWithAddress.scss'
import SocialAccount from '../../Molecules/SocialAccount/SocialAccount'
import Link from '../../Atoms/Link/Link'
import Text from '../../Atoms/Text/Text'

const FooterWithAddress = ({
  links,
  address,
  email,
  phone,
  copyRightContent,
  disclaimerText,
  ...props
}) => {
  return (
    <div className="c-footer-address">
      <div className="d-flex col-12">
        <Text type="h2" value="Frasers Property Industrial" />
      </div>
      <div className="c-footer-address__container">
        <div className="c-footer-address__footer-about section">
          <Text
            type="p"
            value="Frasers Property Industrial acknowledges the Traditional Custodians of the land which our business operates on in Australia. We pay our respects to Aboriginal and Torres Strait Islanders Elders’ past, present and future."
          />
        </div>

        <div className="c-footer-address__footer-address  section">
          <ul>
            <li>
              <Text type="p" value="<b>For all enquires</b>" />
              <Text type="h4" value={email} />
            </li>
            <li>
              <Text type="p" value="<b>A part of</b>" />
              <Text type="h4" value="Frasers Property Limited" />
            </li>
          </ul>
        </div>

        <div className="c-footer-address__footer-links  section">
          <ul className="c-footer-address__list">
            {links &&
              links.map((link, index) => {
                return (
                  <li className="c-footer-address__item" key={index}>
                    <Link
                      isExternal
                      label={link.title}
                      path={link.url}
                      titleLabel={link.title}
                    >
                      {link.title}
                    </Link>
                  </li>
                )
              })}
          </ul>
        </div>

        <div className="c-footer-address__social-account  section">
          <SocialAccount
            socialmenus={[
              {
                label: 'Twitter',
                service: 'twitter',
                url: 'https://twitter.com',
              },
              {
                label: 'Youtube',
                service: 'youtube',
                url: 'https://www.youtube.com/',
              },
              {
                label: 'LinkedIn',
                service: 'linkedin',
                url: 'https://www.linkedin.com/',
              },
            ]}
          />
          <Text type="p" value={copyRightContent} />
        </div>
      </div>
    </div>
  )
}

export default FooterWithAddress

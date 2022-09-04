import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from './cohe-site.scss?inline'
import './cohe-link/cohe-link'
import './cohe-logo/cohe-logo'
import './cohe-menu/cohe-menu'

/**
 * An site element.
 */
@customElement('cohe-site')
export class CoheSite extends LitElement {
  render() {
    return html`
      <header>
        <cohe-link>
          <cohe-logo centered></cohe-logo>
        </cohe-link>
        <cohe-menu>
          <cohe-link to="https://github.com/coheia" external>
            Github
          </cohe-link>
          <cohe-link to="https://linkedin.com/in/coheia" external>
            Linkedin
          </cohe-link>
        </cohe-menu>
      </header>
    `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'cohe-site': CoheSite
  }
}

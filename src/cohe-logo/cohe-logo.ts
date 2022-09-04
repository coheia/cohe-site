import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './cohe-logo.scss?inline'

/**
 * An logo element.
 */
@customElement('cohe-logo')
export class CoheLogo extends LitElement {
  @property({ type: String })
  name = 'coheia'

  @property({ type: Boolean })
  centered = false

  render() {
    return html` <h1>${this.name}</h1> `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'cohe-logo': CoheLogo
  }
}

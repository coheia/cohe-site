import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './cohe-link.scss?inline'

/**
 * An link element.
 */
@customElement('cohe-link')
export class CoheLink extends LitElement {
  @property({ type: String })
  to: string | undefined

  @property({ type: Boolean })
  external: boolean = false

  render() {
    return html`
      <a href=${this.to || '/'} target=${this.external ? '_blank' : '_self'}>
        <slot>coheia.dev</slot>
      </a>
    `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'cohe-link': CoheLink
  }
}

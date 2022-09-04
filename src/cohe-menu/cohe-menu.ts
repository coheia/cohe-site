import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from './cohe-menu.scss?inline'

/**
 * An menu element.
 */
@customElement('cohe-menu')
export class CoheMenu extends LitElement {
  render() {
    return html` <nav><slot></slot></nav> `
  }

  static styles = unsafeCSS(styles)
}

declare global {
  interface HTMLElementTagNameMap {
    'cohe-menu': CoheMenu
  }
}

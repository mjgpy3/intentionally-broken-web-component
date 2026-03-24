import {LitElement, html, css} from 'lit'
import {customElement} from 'lit/decorators.js'

/**
 * A minimal web component that intentionally throws an exception.
 * This component is designed to fail for testing error handling.
 *
 * @example
 * ```html
 * <broken-component></broken-component>
 * ```
 */
@customElement('broken-component')
export class BrokenComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `

  constructor() {
    super()
    // Intentionally throw an error in the constructor
    throw new Error('This component is intentionally broken!')
  }

  render() {
    return html`<p>This should never render</p>`
  }
}

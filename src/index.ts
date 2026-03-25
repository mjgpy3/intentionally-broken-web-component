import {LitElement, html, css} from 'lit'
import {customElement} from 'lit/decorators.js'

/**
 * A minimal web component that intentionally breaks.
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

  render() {
    return html`<p>This should render but then break</p>`
  }
}

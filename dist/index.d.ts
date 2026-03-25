import * as lit from 'lit';
import { LitElement } from 'lit';

/**
 * A minimal web component that intentionally breaks.
 * This component is designed to fail for testing error handling.
 *
 * @example
 * ```html
 * <broken-component></broken-component>
 * ```
 */
declare class BrokenComponent extends LitElement {
    static styles: lit.CSSResult;
    render(): lit.TemplateResult<1>;
}

export { BrokenComponent };

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-counter")
export class MyCounter extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The number of times the button has been clicked!!
   */
  @property({ type: Number })
  count = 0;

  override render() {
    return html`
      <h1>My Counter</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent("count-changed"));
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-counter": MyCounter;
  }
}

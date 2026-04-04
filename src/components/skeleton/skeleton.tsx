import { Component, h, Host, Prop } from '@stencil/core';
import { ALLOWED_ANIMATIONS } from './skeleton.constants';

@Component({
  tag: 'nb-skeleton',
  styleUrl: 'skeleton.scss',
  shadow: true,
})
export class Skeleton {
  /**
   * Number of rows of current skeleton type
   *
   * @memberof Skeleton
   */
  @Prop()
  count = 1;

  /**
   * Accessible text announced by screen readers while content is loading
   *
   * @type {string}
   * @memberof Skeleton
   */
  @Prop()
  label: string = 'Loading...';

  /**
   * Wrapper element tag that carries ARIA attributes (e.g. div, span, section)
   *
   * @type {string}
   * @memberof Skeleton
   */
  @Prop()
  as: string = 'div';

  /**
   * Render rows directly in the host element and apply ARIA attributes to host
   *
   * @type {boolean}
   * @memberof Skeleton
   */
  @Prop()
  asChild = false;

  /**
   * Variant of the skeleton - circle or row
   *
   * @type {('circle' | '')}
   * @memberof Skeleton
   */
  @Prop()
  variant: 'circle' | 'rect' | 'text' = 'text';

  /**
   * Width of the skeleton ex. 100px, 100%, auto etc.
   *
   *
   * @type {string}
   * @memberof Skeleton
   */
  @Prop()
  width: string = null;

  /**
   * Height of the skeleton ex. 100px, 100%, auto etc.
   *
   * @type {string}
   * @memberof Skeleton
   */
  @Prop()
  height: string = null;

  /**
   * MarginBottom of the skeleton ex. 10px, 0 etc.
   *
   * @type {string}
   * @memberof Skeleton
   */
  @Prop()
  marginBottom: string = null;  

  /**
   * Animation type
   *
   * @type {('progress' | 'progress-dark' | 'pulse' | 'false')}
   * @memberof Skeleton
   */
  @Prop()
  animation: 'progress' | 'progress-dark' | 'pulse' | 'false' = 'progress';

  /**
   * Custom css styles (background/margins/width/height etc.)
   *
   * @type {({[k: string]: string} | string)}
   * @memberof Skeleton
   */
  @Prop() customStyles: { [key: string]: string } | string = {};

  /**
   * Whether to show warnings for the wrong animation type/custom styles
   *
   * @memberof Skeleton
   */
  @Prop() showWarnings = true;

  items: number[] = [];
  parsedCustomStyles: { [key: string]: string } = {};

  componentWillLoad() {
    this.init();
  }

  componentWillUpdate() {
    this.init();
  }

  init() {
    this.items.length = this.count;
    this.items.fill(1);
    this.parsedCustomStyles = {};

    if (!ALLOWED_ANIMATIONS.includes(this.animation)) {
      if (this.showWarnings) {
        console.warn(`\`Skeleton\` need to receive 'animation' as: ${ALLOWED_ANIMATIONS.join(', ')}. Forcing default to "progress".`);
      }

      this.animation = 'progress';
    }

    if (this.customStyles && typeof this.customStyles === 'string') {
      try {
        const parsed = JSON.parse(this.customStyles);
        if (parsed && typeof parsed === 'object') {
          this.parsedCustomStyles = parsed;
        }
      } catch (error) {
        if (this.showWarnings) {
          console.warn(`can't parse styles`, this.customStyles);
        }
      }
    } else if (this.customStyles && typeof this.customStyles === 'object') {
      this.parsedCustomStyles = this.customStyles;
    }
  }

  get style() {
    let dimenssionsStyles: {
      width?: string,
      height?: string,
      marginBottom?: string,
    } = {
      width: null,
      height: null,
      marginBottom: null
    };
    
    if (this.width) {
      dimenssionsStyles.width = this.width;
    }

    if (this.height) {
      dimenssionsStyles.height = this.height;
    }

    if (this.marginBottom) {
      dimenssionsStyles.marginBottom = this.marginBottom;
    }

    const styles = this.parsedCustomStyles;

    return {...dimenssionsStyles, ...styles};
  }

  resolveWrapperTag() {
    const tag = (this.as || '').trim().toLowerCase();

    if (/^[a-z][a-z0-9-]*$/.test(tag)) {
      return tag;
    }

    if (this.showWarnings) {
      console.warn('`Skeleton` `as` prop must be a valid html tag name. Falling back to "div".');
    }

    return 'div';
  }

  get ariaProps() {
    return {
      'aria-busy': 'true',
      'aria-label': this.label,
      'aria-valuemin': '0',
      'aria-valuemax': '100',
      'aria-valuetext': this.label,
      role: 'progressbar',
    };
  }

  renderRows() {
    return this.items.map((_, index) => {
      return (
        <span
          key={index}
          class={{
              circle: this.variant === 'circle',
              rect: this.variant === 'rect',
              progress: this.animation === 'progress',
              'progress-dark': this.animation === 'progress-dark',
              pulse: this.animation === 'pulse',
              skeleton: true
            }
          }
          aria-hidden="true"
          style={this.style}
        ></span>
      );
    });
  }

  render() {
    if (this.asChild) {
      return <Host {...this.ariaProps}>{this.renderRows()}</Host>;
    }

    const WrapperTag = this.resolveWrapperTag() as any;

    return (
      <Host>
        <WrapperTag {...this.ariaProps}>{this.renderRows()}</WrapperTag>
      </Host>
    );
  }
}

import { Component, h, Prop } from '@stencil/core';
import cn from 'classnames';
import { ALLOWED_ANIMATIONS } from './skeleton.constants';

@Component({
  tag: 'nb-skeleton',
  styleUrl: 'skeleton.scss',
  shadow: false,
  scoped: true
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
   * Appearance of the skeleton - circle or row
   *
   * @type {('circle' | '')}
   * @memberof Skeleton
   */
  @Prop()
  appearance: 'circle' | '' = '';

  /**
   * Animation type
   *
   * @type {('progress' | 'progress-dark' | 'pulse' | 'false')}
   * @memberof Skeleton
   */
  @Prop()
  animation: 'progress' | 'progress-dark' | 'pulse' | 'false' = 'progress';

  /**
   * Custom css styles (width/height etc.)
   *
   * @type {({[k: string]: string} | string)}
   * @memberof Skeleton
   */
  @Prop() customStyles: {[k: string]: string} | string = {};

  /**
   * Whether to show warnings for the wrong animation type/custom styles
   *
   * @memberof Skeleton
   */
  @Prop() showWarnings = true;

  items: number[] = [];

  componentWillLoad() {
    this.items.length = this.count;
    this.items.fill(1);

    if (!ALLOWED_ANIMATIONS.includes(this.animation)) {
      if (this.showWarnings) {
        console.warn(`\`Skeleton\` need to receive 'animation' as: ${ALLOWED_ANIMATIONS.join(', ')}. Forcing default to "progress".`);
      }

      this.animation = 'progress';
    }

    if (this.customStyles && typeof(this.customStyles) === 'string') {
      try {
        this.customStyles = JSON.parse(this.customStyles);
      } catch (error) {
        if (this.showWarnings) {
          console.warn(`can't parse styles`, this.customStyles);
        }
      }
    }
  }


  render() {
    return this.items.map((_, index) => {
      return (
        <span
          key={index}
          class={cn([
            'skeleton',
            {
              'circle': this.appearance === 'circle',
              'progress': this.animation === 'progress',
              'progress-dark': this.animation === 'progress-dark',
              'pulse': this.animation === 'pulse',
            },
          ])}
          aria-busy="true"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuetext="Loading..."
          role="progressbar"
          tabindex="0"
          style={typeof this.customStyles === 'object' ? this.customStyles : {}}

          // TODO: add theme prop
        ></span>
      );
    });
  }
}

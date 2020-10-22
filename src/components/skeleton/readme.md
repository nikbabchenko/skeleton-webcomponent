# nb-skeleton



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                         | Type                                                  | Default      |
| -------------- | --------------- | ------------------------------------------------------------------- | ----------------------------------------------------- | ------------ |
| `animation`    | `animation`     | Animation type                                                      | `"false" \| "progress" \| "progress-dark" \| "pulse"` | `'progress'` |
| `count`        | `count`         | Number of rows of current skeleton type                             | `number`                                              | `1`          |
| `customStyles` | `custom-styles` | Custom css styles (background/margins/width/height etc.)            | `string \| { [key: string]: string; }`                | `{}`         |
| `height`       | `height`        | Height of the skeleton ex. 100px, 100%, auto etc.                   | `string`                                              | `null`       |
| `showWarnings` | `show-warnings` | Whether to show warnings for the wrong animation type/custom styles | `boolean`                                             | `true`       |
| `variant`      | `variant`       | Variant of the skeleton - circle or row                             | `"circle" \| "rect" \| "text"`                        | `'text'`     |
| `width`        | `width`         | Width of the skeleton ex. 100px, 100%, auto etc.                    | `string`                                              | `null`       |


## CSS Custom Properties

| Name                       | Description                                                           |
| -------------------------- | --------------------------------------------------------------------- |
| `--skeleton-background`    | Skeleton background: Default: #eff1f6                                 |
| `--skeleton-border-radius` | Skeleton border-radius: Default: 4px for the row, 50% for the circle  |
| `--skeleton-height`        | Skeleton height: Default: 20px for the row, 40px for the circle       |
| `--skeleton-margin-bottom` | Skeleton margin-bottom: Default: 10px for the row, 5px for the circle |
| `--skeleton-width`         | Skeleton width: Default: 100% for the row, 40px for the circle        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

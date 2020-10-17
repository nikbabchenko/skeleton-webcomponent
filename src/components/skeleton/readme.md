# nb-skeleton



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                         | Type                                                  | Default      |
| -------------- | --------------- | ------------------------------------------------------------------- | ----------------------------------------------------- | ------------ |
| `animation`    | `animation`     | Animation type                                                      | `"false" \| "progress" \| "progress-dark" \| "pulse"` | `'progress'` |
| `appearance`   | `appearance`    | Appearance of the skeleton - circle or row                          | `"" \| "circle"`                                      | `''`         |
| `count`        | `count`         | Number of rows of current skeleton type                             | `number`                                              | `1`          |
| `customStyles` | `custom-styles` | Custom css styles (background/margins/width/height etc.)            | `string \| { [k: string]: string; }`                  | `{}`         |
| `showWarnings` | `show-warnings` | Whether to show warnings for the wrong animation type/custom styles | `boolean`                                             | `true`       |


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

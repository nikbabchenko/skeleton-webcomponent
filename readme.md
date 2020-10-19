	
![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Skeleton Loader Webcomponent
![Variants](https://skeleton-webcomponent-loader.web.app/images/variants.gif)

**Skeleton Loader** is a very lightweight (**5.2kb** gzip / **10kb** without compression) webcomponent to make beautiful, animated loading skeletons in any web app - pure html/css/js or Angular/React.

> Spinners and loaders have traditionally been the way to tell users
> that content is going to take a while to load. While this approach is
> great, it’s quickly becoming obsolete in modern development. Skeleton
> screens are becoming the perfect replacement for traditional loaders
> because they focus on progress rather than wait times, hence reducing
> loading-time frustration...

-- [#Smashing Magazine - Implementing Skeleton Screens In React ](https://www.smashingmagazine.com/2020/04/skeleton-screens-react/)

![In Action](https://skeleton-webcomponent-loader.web.app/images/loader-example.gif)

## Demos
[Skeleton Loader Home Page](https://skeleton-webcomponent-loader.web.app/)

### Install
You can get it on NPM installing  `skeleton-webcomponent-loader`   as a project dependency or via UNPKG

    npm i skeleton-webcomponent-loader
    
#### Script tag via UNPKG (global npm delivery network)
    <script  type="module"  src="https://unpkg.com/skeleton-webcomponent-loader@1.0.3/dist/skeleton-webcomponent/skeleton-webcomponent.esm.js"></script>
    <script  type="nomodule"  src="https://unpkg.com/skeleton-webcomponent-loader@1.0.3/dist/skeleton-webcomponent/skeleton-webcomponent.js"></script>

#### Script tag via npm
    <script  type="module"  src="./node_modules/skeleton-webcomponent-loader/dist/skeleton-webcomponent/skeleton-webcomponent.esm.js"></script>
    <script  type="nomodule"  src="./node_modules/skeleton-webcomponent-loader/dist/skeleton-webcomponent/skeleton-webcomponent.js"></script>

#### ESM import (Webpack/Browsers which support ES modules/Angular/React)

    import {defineCustomElements as initSkeleton} from  './node_modules/skeleton-webcomponent-loader/loader/index.js';
    initSkeleton();

#### Angular
In app.module.ts or any module which uses skeleton in order to provide ability to use webcomponents: 

    @NgModule({
      //whatever you have on app module goes here... 
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    export class AppModule {}

And in **main.ts:** or you can add it via **stript tags** in index.html as described before

    import { defineCustomElements as initSkeleton } from  'skeleton-webcomponent-loader/loader';
    initSkeleton();

### How to use?
- Add to the page 
- Put to the html/jsx/whatever...

        <nb-skeleton></nb-skeleton> 

Pass properties and see it in action


### Properties

| Property       | Attribute       | Description                                                         | Type                                                  | Default      |
| -------------- | --------------- | ------------------------------------------------------------------- | ----------------------------------------------------- | ------------ |
| `animation`    | `animation`     | Animation type                                                      | `"false" | "progress" | "progress-dark" | "pulse"` | `'progress'` |
| `count`        | `count`         | Number of rows of current skeleton type                             | `number`                                              | `1`          |
| `customStyles` | `custom-styles` | Custom css styles (background/margins/width/height etc.)            | `string | { [k: string]: string; }`                  | `{}`         |
| `height`       | `height`        | Height of the skeleton ex. 100px, 100%, auto etc.                   | `string`                                              | `null`       |
| `showWarnings` | `show-warnings` | Whether to show warnings for the wrong animation type/custom styles | `boolean`                                             | `true`       |
| `variant`      | `variant`       | Variant of the skeleton - circle or row                             | `"circle" | "rect" | "text"`                        | `'text'`     |
| `width`        | `width`         | Width of the skeleton ex. 100px, 100%, auto etc.                    | `string`                                              | `null`       |


### CSS Custom Properties

| Name                       | Description                                                           |
| -------------------------- | --------------------------------------------------------------------- |
| `--skeleton-background`    | Skeleton background: Default: #eff1f6                                 |
| `--skeleton-border-radius` | Skeleton border-radius: Default: 4px for the row, 50% for the circle  |
| `--skeleton-height`        | Skeleton height: Default: 20px for the row, 40px for the circle       |
| `--skeleton-margin-bottom` | Skeleton margin-bottom: Default: 10px for the row, 5px for the circle |
| `--skeleton-width`         | Skeleton width: Default: 100% for the row, 40px for the circle        |


Inspired by [ngx-skeleton-loader](https://github.com/willmendesneto/ngx-skeleton-loader)

# [Webpack]Frontend starter kit

> Webpack + SASS, Pug and ES6

> Also eslint, sass lint and svg sprites

# Requirements

You need [nodejs](https://nodejs.org/en/) with npm

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for craft svg icons
npm run icons

```

# SVG Sprites

All svg icons need to move in ./src/assets/icons

How to add icon in pug file
```pug
+icon([filled], [stroked], 'filename-in-iconsdir', 'custom-style')
```
or without custom style
```pug
+icon([filled], [stroked], 'filename-in-iconsdir')

//- Filled example
+icon(true, false, 'icon-name')

//- Stroked example
+icon(false, true, 'icon-name')

//- Both example
+icon(true, true, 'icon-name')
```

Custom styles for icons:
```pug
//- Flip X
+icon(true, false, 'icon-name', 'icon__flip-x')

//- Flip Y
+icon(true, false, 'icon-name', 'icon__flip-y')
```

For customization icon you can use
```sass
.icon-filename-in-iconsdir
    // styles

    &.custom-style
        // styles
```
or without custom style
```sass
.icon-filename-in-iconsdir
    // styles
```

# Frontend starter kit

> With webpack + sass, pug and es6
> Also eslint, sass lint

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
+icon('filename-in-iconsdir', 'custom-style')
```
or without custom style
```pug
+icon('filename-in-iconsdir')
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

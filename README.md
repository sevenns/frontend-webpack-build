### Requirements

You need [nodejs](https://nodejs.org/en/) with npm

### Build Setup

``` bash
# install dependencies
npm install

# build for craft svg icons (run once before dev or build)
npm run icons

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

### SVG Sprites

All svg icons need to move in ./src/assets/icons

How to add icon in pug file
```pug
+icon([filled], [stroked], 'filename-in-iconsdir', 'custom-class')
```
or without custom class
```pug
+icon([filled], [stroked], 'filename-in-iconsdir')

//- Filled example
+icon(true, false, 'icon-name')

//- Stroked example
+icon(false, true, 'icon-name')

//- Both example
+icon(true, true, 'icon-name')
```

Custom classes for icons:
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

    &.custom-class
        // styles
```
or without custom class
```sass
.icon-filename-in-iconsdir
    // styles
```

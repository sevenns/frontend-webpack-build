### - Rep in dev

### - Requirements

You need [nodejs](https://nodejs.org/en/) with npm (LTS recommended)

### - Build Setup

``` bash
# install dependencies and link bin scripts
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production
npm run build
```

### - Project client structure

- CLIENT
	- **classes** (java-like js structure)
		- *Main.js* entry point of js
		- Preloader.js
		- ...
	- **components** (pug components)
	- **layouts** (pug layouts)
	- **styles** (sass styles)
		- components (styles of pug components)
		- functions (sass functions)
		- mixins (sass mixins)
		- pages (style of pug views)
		- plugins (external plugins)
		- variables (sass variables)
	- **variables** (pug variables)
	- **views** (pug pages)
		- index.pug (index page)
		- ...folders
			- index.pug
			- ...pages
		- ...pages

### - Features
- *Main.js* has 4 main methods:
	- **loaded** - document ready
	- **scrolled** - window on scroll
	- **resized** - window on resize
	- **beforeLoaded** - window on load
- In dev server renders *views* with saving folder structure

### - Arrangements
- pug *variables* files must have an object with the same name as the file
- sass *variables* files must have the same name as the beginning of each variable

### - Limitation (mb temporary)
After saving pug files hmr injecting changes but doesn't reload the page. Need manually reloading.

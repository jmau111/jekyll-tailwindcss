# Tailwindcss for Jekyll

[![release](https://img.shields.io/github/release/jmau111/jekyll-tailwindcss.svg)](https://github.com/jmau111//jekyll-tailwindcss/releases/latest)
[![release date](https://img.shields.io/github/release-date/jmau111/jekyll-tailwindcss.svg)](https://github.com/jmau111/jekyll-tailwindcss/releases)
[![release feed](https://img.shields.io/badge/release-feed-yellow)](https://github.com/jmau111/jekyll-tailwindcss/releases.atom)

Here is a simple demo of Tailwindcss in Jekyll with sass

[See the live demo](https://demos.julien-maury.dev/jekyll-tailwindcss/)

## How to use it

1. clone the repository
2. cd jekyll-tailwindcss
3. `bundle` to install jekyll dependencies
4. `yarn` to install node modules
5. `bundle exec jekyll serve` to run a local server

Enjoy!

## Purge

Note that I don't use the built-in purge CSS of Tailwind. Instead, I use a Jekyll plugin to purge unused CSS.

It's vital to understand how Tailwind purges CSS to avoid mistakes: 

> It doesn't try to parse your HTML and look for class attributes or dynamically execute your JavaScript — it simply looks for any strings in the entire file that match a regular expression

Please read the documenation. For example, the following won't work:

```html
<div class="text-{{  error  ?  'red'  :  'green'  }}-600"></div>
```
Instead always write the full class name, eg:

```html
<div class="{{  error  ?  'text-red-600'  :  'text-green-600'  }}"></div>
```


[Source: documentation Tailwindcss](https://tailwindcss.com/docs/optimizing-for-production)

Here is the final build command:

```
JEKYLL_ENV=production jekyll build
```

## Demo URL

[See the live demo](https://demos.julien-maury.dev/jekyll-tailwindcss/)

Styles are from [https://tailwindcomponents.com/component/card-hero-section](https://tailwindcomponents.com/component/card-hero-section)

# Lovelace Card Preloader
Allows preloading of Lovelace cards as a work around for changes in Home Assistant 0.107

## Installation

### Via HACS
Find the plugin in HACS; install it.

### Manually
* Download all the files
* Add **lovelace-card-preloader.js** to /config/www/your/path
* Add to your Lovelace resources as

```
resources:
  - url: /local/your/path/lovelace-card-preloader.js
    type: js  
```

## Usage

Example configuration - add to the start of your Lovelace configuration:

```
preload:
  - markdown
  - gauge
```

## Note

You are likely to see errors logged in the browser console when the page loads, for example:

```text
hui-markdown-card Error: Invalid Configuration: Content Required
```

This is because preloading involves creating an empty instance of the card with no config.

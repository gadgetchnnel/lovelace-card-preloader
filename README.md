# Lovelace Card Preloader
Allows preloading of Lovelace cards and rows as a work around for changes in Home Assistant 0.107

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
preload_cards:
  - markdown
  - gauge
preload_rows:
  - divider
```

**Note:** Versions prior to 0.0.3 used a **preload** option (which only supported preloading cards), this has been deprecated and may be removed in a later version and it is recommended that you update your config to use **preload_cards** and **preload_rows**


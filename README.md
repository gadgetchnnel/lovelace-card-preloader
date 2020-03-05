# Lovelace Card Preloader
Allows preloading of Lovelace cards as a work around for changes in Home Assistant 0.107

## Installation

### Via HACS
This can be added as a custom repository to HACS

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

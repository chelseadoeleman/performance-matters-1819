# | Performance Matters |

**Here I improved the performance of my application which uses images from Unsplash, to create a better user experience. Mainly by switching from client to server side rendering with Express**

[Link to website](https://unsplash-slider.herokuapp.com/)


## Table of Contents
* **[How to install](#how-to-install)** 
* **[Walktrough the application](#walk-trough-the-application)** 
* **[Performance features](#performance-features)**
* **[Resources](#resources)**
* **[Credits](#credits)**
* **[Checklist](#checklist)**
* **[License](#license)**

## How to install

Before installing make sure you have installed the latest version of node.js.
Choose or make a new directory.
Load the template into your directory.

```bash
git clone https://github.com/chelseadoeleman/performance-matters-1819.git
```

Make sure you are in the right directory 
```bash
cd performance-matters-1819
```

Check if you have the latest version of npm.
Install the dependencies in [package.json](./package.json)
```bash
npm install
```

## Walktrough the application

In the application you can scroll through a slider, to see different images that can be found on [unsplash](https://unsplash.com/). Next to the unsplash image slider you can find a map of the world. When clicking on an image, you will get redirected to that location where the photo was either uploaded or taken. Depending on what location the author has given their photo(s). 

The Application also has a search function, to get the images you would like to see. And when clicking on the link under the photo you are able to view more details about that picture.

**NOTE** Right now there is an alert that tells you when the location is unknown, this has yet to be changed because it can be quite irritating. Sorry!


## Performance features

<details>
  <summary> Image loading</summary>

  #### Image loading

  When entering the page you weren't able to see what content will be shown on the page because of the loading time. So I set a standard width of an image, so that the outline of those images will be shown on load. I also picked a color which is defined in the API as a specific color for that image. Whether this is the most prominent color in that image I don't know for sure.

</details>

<details>
  <summary> First view</summary>

  #### First view

  Image loading is also a part of this, but I also made sure the textual content of a page is shown on load. Right now it will be shown in a default font chosen by the user in settings, but I still want to change this to make this feature a lot smoother. 

</details>


<details>
  <summary> Perceived performance</summary>

  #### Perceived performance

  To make the page load faster I minified and compressed by files, so the loading time will be faster. I also set ```srcset``` and ```sizes``` on the images, so that when the user is using a smaller viewport smaller images will be inserted instead of an higher resolution. By doing this the transferred files went from 70.6mb to 13.2mb. This is a much smaller amount. And decreases the loading time drastically. I compressed the files with brotli and gzip.

  After I set srcset and sizes the statics of progressive web app became drastically worse, than before.

</details>



## Learning process


## Resources

**API**
* [Unsplash](https://unsplash.com/developers)
* [Mapbox](https://www.mapbox.com/)

**Resources**
* [Express](https://expressjs.com/)
* [Node](https://nodejs.org/en/)
* [Helmet](https://github.com/helmetjs/helmet)
* [Node-fetch](https://www.npmjs.com/package/node-fetch)
* [Babel-polyfill](https://cdnjs.com/libraries/babel-polyfill)
* [Gulp](https://gulpjs.com/)
* [Ejs](https://ejs.co/)
* [Nodemon](https://nodemon.io/)


## Checklist
- [x] Set up node server with express.
- [x] Implement templating with ejs.
- [x] Render detailpage and searchfuntion.
- [x] Make sure the user is able is able to see content directly (first view)
- [x] Set fixed ration image as an placeholder, for the image to load.
- [x] Compress files with Brotli and Gzip
- [x] Minify javascript and css.
- [ ] Subset font

## License
This repository is licensed as [MIT](LICENSE) by [Chelsea Doeleman](https://github.com/chelseadoeleman).

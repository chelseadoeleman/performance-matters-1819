# | Performance Matters |

**Here I improved the performance of my application which uses images from Unsplash, to create a better user experience. Mainly by switching from client to server side rendering with Express**

![Unsplash API](./docs/app3.0.png)

[Link to website](https://unsplash-slider.herokuapp.com/)


## Table of Contents
* [How to install](#how-to-install) 
* [Walktrough the application](#walk-trough-the-application) 
* [Performance features](#performance-features)
* [Resources](#resources)
* [Credits](#credits)
* [Checklist](#checklist)
* [License](#license)

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

</details>

<details>
  <summary> First view</summary>

  #### First view

</details>


<details>
  <summary> Perceived performance</summary>

  #### Perceived performance

</details>



## Learning process


## Resources

**API**
* [Unsplash](https://unsplash.com/developers)
* [Mapbox](https://www.mapbox.com/)

**Resources**
* [Express](https://parceljs.org/)
* [Node](https://babeljs.io/docs/en/babel-polyfill)
* [Navigo](https://github.com/krasimir/navigo)
* [Classes](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Klasses)
* [Times function to start counting from 1 in an array](https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n)

## Credits

*   **Maikel:** For helping with Classes and setting up the router.
*   **Tim:** For helping with the header, to be able to send more requests.

## Checklist
- [x] Find an API of your interest
- [x] Retrieve data from the API asynchronous. 
- [x] Store data in an object (without parse, because data object are not defined as a string)
- [x] Show images in a slider

## License
This repository is licensed as [MIT](LICENSE) by [Chelsea Doeleman](https://github.com/chelseadoeleman).

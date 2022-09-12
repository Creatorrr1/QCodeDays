// Instruction ->

// A program that can take data (pageViews)
// the program takes in urlPath and Ip as arguments
// loops through the Ip and filters the unique ones
// repeated ones with the same Ip address will be filtered out

// how many number of page views a page has
// the count only increases when the url and Ip is the same

// Example ->

//   Input: PageView (urlPath, Ip)
//   Output:
//          $ node index.js server.log
//          /about/2 8 unique views
//          /index 5 unique views

// Data ->

const data = [
    {
      url: '/help_page/1',
      Ip: '126.318.035.038',
    },
    {
      url: '/contact',
      Ip: '184.123.665.067',
    },
    {
      url: '/home',
      Ip: '184.123.665.067',
    },
    {
      url: '/about/2',
      Ip: '444.701.448.104',
    },
    {
      url: '/help_page/1',
      Ip: '929.398.951.889',
    },
    {
      url: '/index',
      Ip: '444.701.448.104',
    },
    {
      url: '/help_page/1',
      Ip: '722.247.931.582',
    },
    {
      url: '/about',
      Ip: '061.945.150.735',
    },
    {
      url: '/help_page/1',
      Ip: '646.865.545.408',
    },
    {
      url: '/home',
      Ip: '235.313.352.950',
    },
  ];
  
  // Pseudocode ->
  // the function takes in an array of objects
  // each obj has url path and Ip address
  // loops through the array and returns the url path and pageView
  // the pageView only increments when the same url path is being visited
  // only when it's by 2 different Ip address
  // steps ->
  // loops through the url path and increments pageView
  // increments again if the url is the same
  
  // Code ->
  
  // function program(data) {
  //   // ...
  //   let pageViews = [];
  
  //   for (let i = 0; i < data.length; i++) {
  //     let pageView = 0;
  //     let pageViewObj = {
  //       url: '',
  //       pageView: '',
  //     };
  
  //     currentData = data[i];
  
  //     if (pageViewObj.url !== currentData.url) {
  //       pageViewObj.url = currentData.url;
  //       pageView += pageView;
  //       pageViewObj.pageView = pageView;
  //       pageViews.push(pageViewObj);
  //     }
  
  //     var uniquePageViews = pageViews.filter((pageView, index) => {
  //       if (pageViews.indexOf(pageView) === index) {
  //         pageView.pageView++;
  //         // then splice the extra repeated url while incrementing the pageView
  //         // once removed
  //       }
  //       if (pageViews.indexOf(pageView) !== index) {
  //         pageView.splice(1, index);
  //       }
  //       return pageViews.indexOf(pageView) === index;
  //     });
  //   }
  
  //   if (pageViews !== []) {
  //     const foundUrl = pageViews.includes(currentData.url);
  //     console.log('found ->', foundUrl);
  //     console.log('PageView ->', pageViews);
  //   }
  
  //   console.log('uniquePageViews: ', uniquePageViews);
  //   return uniquePageViews;
  // }
  
  // console.log(program(data));
  
  // Pseudocode ->
  // the function takes in an array of objects
  // each obj has url path and Ip address
  // loops through the array and returns the url path and pageView
  // the pageView only increments when the same url path is being visited
  // only when it's by 2 different Ip address
  // steps ->
  // loops through the url path and increments pageView
  // increments again if the url is the same
  
  function program(data) {
    let pageVisits = [];
  
    for (let i = 0; i < data.length; i++) {
      let uniqueViews = 0;
      let pageViewObj = {
        url: '',
        uniqueViews: '',
      };
  
      currentData = data[i];
  
      // if (currentData.url !== pageViewObj.url) {
      pageViewObj.url = currentData.url;
      uniqueViews = 1;
      pageViewObj.uniqueViews = uniqueViews;
      pageVisits.push(pageViewObj);
      // }
      const foundUrl = pageVisits.find((url) => url.url === currentData.url);
    }
  
    const newPageVisits = pageVisits.filter((pageVisit, index) => {
      if (pageVisit.url.indexOf(pageVisit.url) === index) {
        pageVisit.uniqueViews++;
      }
    });
  
    console.log('this is a console.log(pageVisits)', pageVisits);
    return pageVisits;
  }
  
  console.log(program(data));
  
  module.exports = program;
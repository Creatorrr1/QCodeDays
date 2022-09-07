const fs = require('fs');
const fileName = process.argv[2];
const { EOL } = require('os');

fs.readFileSync(`./${fileName}`, (err, data) => {
  const parsedData = parseData(data);
  const pageCounts = countPageViews(parsedData);
  const uniquePageCounts = countUniquePageViews(pageCounts);
  display(uniquePageCounts);
});

const parseData = (data) => data.toString().trim().split(EOL);

const countPageViews = (views) => {
  const obj = {};
  views.forEach((view) => {
    const [page, ip] = view.split(' ');
    if (!obj[page]) obj[page] = [];
    obj[page].push(ip);
  });
  return obj;
};

const countUniquePageViews = (pageCounts) => {
  return Object.keys(pageCounts).map((page) => {
    const uniqueIps = new Set(pageCounts[page]);
    return { page, size: uniqueIps.size };
  });
};

const display = (list) => {
  list
    .sort((a, b) => a.size + b.size)
    .forEach((item) => {
      console.log(`${item.page} ${item.size} unique views`);
    });
};

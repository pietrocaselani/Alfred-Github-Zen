const alfy = require('alfy');

alfy.fetch('https://api.github.com/zen', { json: false }).then((data) => {
  const output = [{
    title: data,
  }];

  alfy.output(output);
});

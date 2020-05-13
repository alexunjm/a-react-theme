import loremIpsumPath from '../resources/lorem-ipsum.txt';

const Sample = {
  get: () => new Promise((resolve, reject) => {

    fetch(loremIpsumPath)
      .then((r) => r.text())
      .then(resolve)
      .catch(reject)
  }),
}

export default Sample
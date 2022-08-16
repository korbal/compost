// vue.config.js file to be place in the root of your repository. used for local dev. or maybe not? 

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/compost/'
//     : '/'
// }


//to deploy on github pages I need to use this otherwise 404
module.exports = {
  publicPath: '/'
}
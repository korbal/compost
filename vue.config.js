// vue.config.js file to be place in the root of your repository.used for local dev IF there is no custom domain associated with it on Github pages
// once there is, comment out the following line and uncomment the next one
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/compost/'
//     : '/'
//}


//to deploy on github pages I need to use this otherwise 404.
module.exports = {
  publicPath: '/'
}

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/compost/' // github repo name
//     : '/',
// }
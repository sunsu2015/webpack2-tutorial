/**
 * Created by sunsu on 2017/11/28.
**/
const path = require('path');
 module.exports = {
     entry:'./src/index.js',
     output:{
         path:path.resolve(__dirname,'dist'),
         filename:'bundle.js'
     }
 }
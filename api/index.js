//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Type} = require('./src/db.js')
const { getAllTypes  } = require('./src/clients/pokeClient')

// Syncing all the models at once.
conn.sync({ force: true })
    .then(async () => {
    let allTypes = await getAllTypes();
    allTypes.splice(18, 1)
    for (let i = 0; i < allTypes.length; i++) {
      Type.create({
        name: allTypes[i]
      })
      
    }
 
    server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});


// allTypes.splice(18, 1)
// console.log(allTypes);
// allTypes.forEach(element => {
//     Type.create({
//       name: element.name
//     })

// });
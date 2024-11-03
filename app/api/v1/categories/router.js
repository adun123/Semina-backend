const express = require('express');
const router = express();
const { create,index, find, update, destroy} = require('./controller');


router.get('/categories', index);

router.get('/categories/:id', find);
router.put('/categories/:id', update);
router.delete('/categories/:id', destroy);

router.post('/categories', create);

module.exports = router;

// (req, res) => {
//     const data = [
//         {
//             _id: 1,
//             name:'seminar 1',
//         },
//         {
//             _id: 2,
//             name:'Mean',
//         },
//     ];


//     res.status(200).json({
//         data
//     });
// }
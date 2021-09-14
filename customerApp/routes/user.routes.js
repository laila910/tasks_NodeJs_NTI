const router = require("express").Router()
const userController = require('../controller/user.controller')

router.get('/addcustomer', userController.addcustomer)
router.post('/addcustomer', userController.savecustomer)

router.get('', userController.showall)

router.get('/showcustomer/:accNum', userController.getSingle)

router.get('/updatecustomer/:accNum', userController.editcustomer)
router.post('/updatecustomer/:accNum', userController.updatecustomer)

router.get('/search', userController.searchcustomerdata)
router.post('/search', userController.returnsearchcustomerdata)

router.get('/addbalance/:accNum', userController.addbalance)
router.post('/addbalance/:accNum', userController.savedbalance)

router.get('/withdraw/:accNum', userController.withdraw)
router.post('/withdraw/:accNum', userController.savedwithdraw)


router.get('/del/:accNum', userController.deletecustomer)
router.get('/activate/:accNum', userController.activatestatus)

router.get('*', userController.err404)
module.exports = router
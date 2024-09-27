const express=require('express');
const router=express.Router();
const employ=require('../controllers/employ');
const userathontecation=require('../service/jwt');
router.get('/',userathontecation,employ.employList);
router.put('/:id',userathontecation,employ.update);
router.post('/newemploy',userathontecation,employ.createEmploy);
router.put('/uodateemploy',userathontecation,employ.uodateEmploy);
router.post('/adminlogin',employ.adminLogin)
router.delete('/:id',userathontecation,employ.deleteEmploy)
module.exports=router;
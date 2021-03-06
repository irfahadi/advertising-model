// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/IndexController'


const router = Router();
router.get('/', indexCtrl.orap.findOrap);
router.get('/:prod_id', indexCtrl.orap.findOrap);
router.post('/:orad_id', indexCtrl.orap.createOrap);
router.put('/:orap_id', indexCtrl.orap.updateOrap);
router.put('/click/:orap_id', indexCtrl.orap.clickOrap);
router.delete('/:orap_id', indexCtrl.orap.deleteOrap);


export default router;

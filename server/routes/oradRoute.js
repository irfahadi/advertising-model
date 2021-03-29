// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/IndexController'


const router = Router();
router.get('/:acco_id', indexCtrl.orad.findOrad);
router.get('/', indexCtrl.orad.findOrad);
router.post('/', indexCtrl.orad.createOrad);
router.put('/:orad_id', indexCtrl.orad.updateOrad);
router.delete('/:orad_id', indexCtrl.orad.deleteOrad);

export default router;

// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/IndexController'


const router = Router();
router.get('/', indexCtrl.pack.findPack);
router.post('/', indexCtrl.pack.createPack);
router.put('/:pack_name', indexCtrl.pack.updatePack);
router.delete('/:pack_name', indexCtrl.pack.deletePack);

export default router;
/*  gunakan salah satu untuk latihan, kita buat 3 route : 
    1. region-raw : menggunakan raw query
    2. region-seq : menggunakan method sequelize
    3. region-ctrl : bisnis logic dipisah di folder controller
*/


import orad from './oradRoute';
import orap from './orapRoute';
import pack from './packRoute';
import status from './statusRoute'

export default {
  orad, orap, pack, status
};

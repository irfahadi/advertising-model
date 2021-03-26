 
// findAll = select * from regions
const findOrad = async (req,res) => {
    if (req.params.acco_id){
        const orad = await req.context.models.orad.findAll({
          where:{orad_acco_id: req.params.acco_id},
          include:{
            model:req.context.models.orap
          }
        }
          );
        return res.send(orad);
    }
    else {
        const orad = await req.context.models.orad.findAll();
        return res.send(orad);
    }   
}

const createOrad = async (req,res) =>{
    const { orad_publish_on, orad_finished_on, orad_bill_amount, orad_watr_numbers, orad_stat_name,orad_acco_id, orad_pack_name} = req.body;
    const orad = await req.context.models.orad.create({
      orad_created_on: Date.now(),
      orad_publish_on: orad_publish_on,
      orad_finished_on: orad_finished_on,
      orad_bill_amount: Number(orad_bill_amount),
      orad_watr_numbers : orad_watr_numbers,
      orad_acco_id: orad_acco_id,
      orad_stat_name: orad_stat_name,
      orad_pack_name: orad_pack_name
    });
  
    return res.send(orad);
}
const updateOrad = async (req, res) => {
  const { orad_publish_on, orad_finished_on, orad_bill_amount, orad_watr_numbers, orad_stat_name,orad_acco_id, orad_pack_name} = req.body;
  const orad = await req.context.models.orad.create({
    orad_created_on: Date.now(),
    orad_publish_on: orad_publish_on,
    orad_finished_on: orad_finished_on,
    orad_bill_amount: Number(orad_bill_amount),
    orad_watr_numbers : Number(orad_watr_numbers),
    orad_acco_id: orad_acco_id,
    orad_stat_name: orad_stat_name,
    orad_pack_name: orad_pack_name
  },
    {
      where: {
        orad_id: req.params.orad_id
      }
    }
  );

  return res.send(200);
};
const deleteOrad = async (req, res) => {
    const result = await req.context.models.orad.destroy({
      where: { orad_id : req.params.orad_id },
    });
  
    return res.send(200);
  };



// Gunakan export default agar semua function bisa dipakai di file lain.
export default {
    findOrad, createOrad, updateOrad, deleteOrad
}
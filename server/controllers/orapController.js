
// findAll = select * from regions
const findOrap = async (req,res) => {
    if (req.params.orap_id){
        const orap = await req.context.models.orap.findByPk(
            req.params.orap_id,
          );
        return res.send(orap);
    }
    else {
        const orap = await req.context.models.orap.findAll();
        return res.send(orap);
    }   
}

const createOrap = async (req,res) =>{
    const { orap_total_duration, orap_total_amount, orap_current_duration, orap_current_amount, orap_orad_id, orap_prod_id, orad_publish_on, orad_finished_on, orad_bill_amount, orad_watr_numbers, acco_id} = req.body;
    let orad=[]
    try {
      orad = await req.context.models.orad.findOne({where:{orad_acco_id:acco_id}})
    } catch (error) {
      return res(error)
    }
    return console.log(orad)
    // const orap = await req.context.models.orap.create({
    //   orap_total_duration: orap_total_duration,
    //   orap_total_amount: orap_total_amount,
    //   orap_current_duration: orap_current_duration,
    //   orap_current_amount: orap_current_amount,
    //   orap_orad_id: orad.orad_id,
    //   orap_prod_id: orap_prod_id
    // });
  
    // return res.send(orap);
}
const updateOrap = async (req, res) => {
  const { orap_total_duration, orap_total_amount, orap_current_duration, orap_current_amount, orap_orad_id, orap_prod_id} = req.body;
  const orap = await req.context.models.orap.create({
      orap_total_duration: orap_total_duration,
      orap_total_amount: orap_total_amount,
      orap_current_duration: orap_current_duration,
      orap_current_amount: orap_current_amount,
      orap_orad_id: orap_orad_id,
      orap_prod_id: orap_prod_id
    },
    {
      where: {
        orap_id: req.params.orap_id
      }
    }
  );

  return res.send(200);
};
const deleteOrap = async (req, res) => {
    const result = await req.context.models.orap.destroy({
      where: { orap_id : req.params.orap_id },
    });
  
    return res.send(200);
  };



// Gunakan export default agar semua function bisa dipakai di file lain.
export default {
    findOrap, createOrap, updateOrap, deleteOrap
}
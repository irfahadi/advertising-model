const findPack = async (req,res) => {
  if (req.params.total_amount && req.params.total_duration) {
    const pack = await req.context.models.pack.findOne({
      where: {
        pack_amount: req.params.total_amount,
        pack_duration: req.params.total_duration,
      },
    });
    return res.send(pack);
  }
  else {
    const pack = await req.context.models.pack.findAll();
    return res.send(pack);
  }   
}

const createPack = async (req,res) =>{
    const { pack_name, pack_desc, pack_duration, pack_amount, pack_satuan } = req.body;
    const pack = await req.context.models.pack.create({
      pack_name : pack_name,
      pack_desc : pack_desc,
      pack_duration : pack_duration,
      pack_amount: pack_amount,
      pack_satuan : pack_satuan
    });
  
    return res.send(pack);
}
const updatePack = async (req, res) => {
    const { pack_desc, pack_duration, pack_amount, pack_satuan } = req.body;
    const pack = await req.context.models.pack.update({
      pack_desc : pack_desc,
      pack_duration : pack_duration,
      pack_amount: pack_amount,
      pack_satuan : pack_satuan,
      pack_name: req.params.pack_name
    },
    {
      where: {
        pack_name: req.params.pack_name
      }
    }
  );

  return res.send(200);
};
const deletePack = async (req, res) => {
    const result = await req.context.models.pack.destroy({
      where: { pack_name : req.params.pack_name },
    });
  
    return res.send(200);
  };



// Gunakan export default agar semua function bisa dipakai di file lain.
export default {
    findPack, createPack, updatePack, deletePack
}
const packageType = (sequelize, DataTypes) => {
    const packageType = sequelize.define('package_type', {
        pack_name: {
          type: DataTypes.STRING(10),
          allowNull: false,
          primaryKey: true
        },
        pack_desc: {
          type: DataTypes.STRING(55),
          allowNull: true
        },
        pack_duration: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        pack_amount: {
          type: DataTypes.REAL,
          allowNull: true
        },
        pack_satuan: {
          type: DataTypes.STRING(5),
          allowNull: true
        }
      }, {
        sequelize,
        tableName: 'package_type',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "package_type_pkey",
            unique: true,
            fields: [
              { name: "pack_name" },
            ]
          },
        ]
      });
      packageType.associate = models => {
        packageType.hasMany(models.orad,{foreignKey : 'orad_pack_name'});
      }
      return packageType;
}
export default packageType;
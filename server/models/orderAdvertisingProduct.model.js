const orderAdvertisingProduct = (sequelize, DataTypes) => {
    const orderAdvertisingProduct = sequelize.define('order_advertising_product', {
      orap_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      orap_total_duration: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      orap_total_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      orap_current_duration: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      orap_current_amount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      orap_orad_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'order_advertising',
          key: 'orad_id'
        }
      },
      orap_prod_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'product',
          key: 'prod_id'
        }
      }
    }, {
      sequelize,
      tableName: 'order_advertising_product',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "order_advertising_product_pkey",
          unique: true,
          fields: [
            { name: "orap_id" },
          ]
        },
      ]
    });
    orderAdvertisingProduct.associate = models => {
      orderAdvertisingProduct.belongsTo(models.orad,{foreignKey:'orap_orad_id', onDelete : 'CASCADE'});
      orderAdvertisingProduct.belongsTo(models.product,{foreignKey:'orap_prod_id', onDelete : 'CASCADE'});
    }
      return orderAdvertisingProduct;
}
export default orderAdvertisingProduct;
module.exports = function(sequelize, DataTypes) {
	var Player = sequelize.define("Player", {
		playerId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		playerName: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		playerImage: DataTypes.BLOB
	},
	{
		timestamps: false,
		classMethods: {
			associate:function(models){
				// A player belongsTo (or can be on) only one team.
				Player.belongsTo(models.Team, { 
					foreignKey: 'fk_teamId',
					allowNull: false
				});
			}
		}
	});
	
	return Player;
}
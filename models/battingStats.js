module.exports = function(sequelize, DataTypes) {
	var BattingStats = sequelize.define("BattingStats", {
		battingStatsId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		AB: DataTypes.INTEGER,
		R: DataTypes.INTEGER,
		H: DataTypes.INTEGER,
		HR: DataTypes.INTEGER,
		RBI: DataTypes.INTEGER,
		BB: DataTypes.INTEGER,
		K: DataTypes.INTEGER
	},
	{
		classMethods:{
			associate:function(models){
				BattingStats.belongsTo(models.Player, { foreignKey:'fk_playerId' } );
			}
		}
	}
	);

	return BattingStats;
}
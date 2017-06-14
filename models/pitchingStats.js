module.exports = function(sequelize, DataTypes) {
	var PitchingStats = sequelize.define("PitchingStats", {
		pitchingStatsId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		IP: DataTypes.FLOAT(4,1),
		H: DataTypes.INTEGER,
		R: DataTypes.INTEGER,
		W: DataTypes.INTEGER,
		SV: DataTypes.INTEGER,
		ER: DataTypes.INTEGER,
		K: DataTypes.INTEGER,
		BB: DataTypes.INTEGER,
		HR: DataTypes.INTEGER
	},
	{
		classMethods:{
			associate:function(models){
				PitchingStats.belongsTo(models.Player, { foreignKey:'fk_playerId' } );
			}
		}
	}
	);

	return PitchingStats;
}
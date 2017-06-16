module.exports = function(sequelize, DataTypes) {
	var PitchingStats = sequelize.define("PitchingStats", {
		pitchingStatsId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		p_IP: DataTypes.FLOAT(4,1),
		p_H: DataTypes.INTEGER,
		p_R: DataTypes.INTEGER,
		p_W: DataTypes.INTEGER,
		p_SV: DataTypes.INTEGER,
		p_ER: DataTypes.INTEGER,
		p_K: DataTypes.INTEGER,
		p_BB: DataTypes.INTEGER,
		p_HR: DataTypes.INTEGER
	},
	{
		timestamps: false,
		classMethods: {
			associate:function(models){
				// PitchingStats belongsTo one game.
				PitchingStats.belongsTo(models.Game, { 
					foreignKey: 'fk_gameId',
					allowNull: false
				});

				// PitchingStats belongsTo one player.
				PitchingStats.belongsTo(models.Player, { 
					foreignKey:'fk_playerId',
					allowNull: false
				});

			}
		}
	}
	);

	return PitchingStats;
}
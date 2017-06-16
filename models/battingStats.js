module.exports = function(sequelize, DataTypes) {
	var BattingStats = sequelize.define("BattingStats", {
		battingStatsId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		b_AB: DataTypes.INTEGER,
		b_R: DataTypes.INTEGER,
		b_H: DataTypes.INTEGER,
		b_HR: DataTypes.INTEGER,
		b_RBI: DataTypes.INTEGER,
		b_BB: DataTypes.INTEGER,
		b_K: DataTypes.INTEGER
	},
	{
		timestamps: false,
		classMethods: {
			associate:function(models){
				// A BattingStats belongsTo one game.
				BattingStats.belongsTo(models.Game, { 
					foreignKey: 'fk_gameId',
					allowNull: false
				});

				// A BattingStats belongsTo one player.
				BattingStats.belongsTo(models.Player, { 
					foreignKey: 'fk_playerId',
					allowNull: false
				});
			}
		}
	});

	return BattingStats;
}
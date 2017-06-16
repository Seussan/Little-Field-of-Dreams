module.exports = function(sequelize, DataTypes) {
	var Game = sequelize.define("Game", {
		gameId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		awayTeam: {
			type: DataTypes.INTEGER,
			allowNull: false
		},		
		homeTeam: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	},
	{
		timestamps: false,
		classMethods: {
			associate:function(models){
				// A game has battingStats.
				Game.hasMany(models.BattingStats, { 
					foreignKey: 'fk_gameId',
					allowNull: false
				});

				// A game has pitchingStats.
				Game.hasMany(models.PitchingStats, { 
					foreignKey: 'fk_gameId',
					allowNull: false
				});
			}
		}
	});
	
	return Game;
}
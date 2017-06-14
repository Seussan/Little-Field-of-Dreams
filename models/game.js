module.exports = function(sequelize, DataTypes) {
	var Game = sequelize.define("Game", {
		gameId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		homeTeamScore: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		awayTeamScore: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		classMethods: {
			associate:function(models){
				// A game can "belong to" (or be played by) both a Home team and an Away team.
				Game.belongsToMany(models.Team, { 
					as: 'gameTeams', 
					through: 'TeamGames', 
					foreignKey: 'fk_gameId', 
					otherKey: 'fk_teamId'
				});

				// A game can "belong to" (or be played by) many players.
				Game.belongsToMany(models.Player, { 
					as: 'gamePlayers', 
					through: 'GamePlayers', 
					foreignKey: 'fk_gameId', 
					otherKey: 'fk_playerId'
				});
			}
		}
	});
	
	return Game;
}
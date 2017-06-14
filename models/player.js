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
		classMethods: {
			associate:function(models){
				// A player belongsTo (or can be on) only one team.
				Player.belongsTo(models.Team, { foreignKey: 'fk_teamId' } );

				// A player can "belong to" (or play in) many games.
				Player.belongsToMany(models.Game, { 
					as: 'playerGames', 
					through: 'GamePlayers', 
					foreignKey: 'fk_playerId', 
					otherKey: 'fk_gameId'
				});
			}
		}
	});
	
	return Player;
}
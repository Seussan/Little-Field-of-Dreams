module.exports = function(sequelize, DataTypes) {
	var Team = sequelize.define("Team", {
		teamId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		teamName: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		teamLocation: DataTypes.STRING(50),
		teamImage: DataTypes.BLOB,
		teamWins: DataTypes.INTEGER,
		teamLosses: DataTypes.INTEGER
	},
	{
		classMethods: {
			associate:function(models){
				// A team belongsTo (or can be in) only one league.
				Team.belongsTo(models.League, { foreignKey: 'fk_leagueId' } );

				// A team has many players.
				Team.hasMany(models.Player, { foreignKey: 'fk_teamId' } );

				// A team can "belong to" (or play in) many games.
				Team.belongsToMany(models.Game, { 
					as: 'teamGames', 
					through: 'TeamGames', 
					foreignKey: 'fk_teamId', 
					otherKey: 'fk_gameId'
				});
			}
		}
	});

	return Team;
}
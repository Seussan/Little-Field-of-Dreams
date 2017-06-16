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
//		teamLocation: DataTypes.STRING(50),
//		teamWins: DataTypes.INTEGER,
//		teamLosses: DataTypes.INTEGER,
		teamImage: DataTypes.BLOB('medium')
	},
	{
		timestamps: false,
		classMethods: {
			associate:function(models){
				// A team belongsTo (or can be in) only one league.
				Team.belongsTo(models.League, { 
					foreignKey: 'fk_leagueId',
					allowNull: false
				});

				// A team has many players.
				Team.hasMany(models.Player, { 
					foreignKey: 'fk_teamId',
					allowNull: false
				});
			}
		}
	});

	return Team;
}
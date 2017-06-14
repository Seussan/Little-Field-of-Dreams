module.exports = function(sequelize, DataTypes) {
	var League = sequelize.define("League", {
		leagueId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		leagueName: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	},
	{
		classMethods:{
			associate:function(models){
				League.hasMany(models.Team, { foreignKey:'fk_leagueId' } );
			}
		}
	}
	);

	return League;
}
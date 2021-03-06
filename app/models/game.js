import DS from 'ember-data';
const { Model, attr , hasMany} = DS;

export default class GameModel extends Model {
	@attr('string') code;
	@attr('number') status;
	@attr('number') totalUsers;
	@attr('string') winnerName;
	@attr('string') winnerId;

	get statusLetra() {
		let statusString='';
		if(this.status===1){
			statusString="CREATED"
		}
		else if(this.status===2){
			statusString="STARTED";
		}
		else if(this.status===3){
			statusString="COMPLETED";
		}
		return statusString;
	}



}

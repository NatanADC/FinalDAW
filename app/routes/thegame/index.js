import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class ThegameIndexRoute extends Route {
	model(){
		return hash({
			games: this.store.findAll('game'),
			//players: this.store.findAll('user')
          	//plays: this.store.findAll('play')
		})
	}

}

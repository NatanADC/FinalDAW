import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | thegame/ingame', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:thegame/ingame');
    assert.ok(route);
  });
});

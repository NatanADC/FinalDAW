import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | thegame/ingame', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:thegame/ingame');
    assert.ok(controller);
  });
});

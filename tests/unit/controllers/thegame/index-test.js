import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | thegame/index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:thegame/index');
    assert.ok(controller);
  });
});

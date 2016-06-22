import template from './levelCreator.html';
import controller from './levelCreator.controller';
import './levelCreator.styl';

let levelCreatorComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default levelCreatorComponent;

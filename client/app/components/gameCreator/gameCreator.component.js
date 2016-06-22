import template from './gameCreator.html';
import controller from './gameCreator.controller';
import './gameCreator.styl';

let gameCreatorComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default gameCreatorComponent;

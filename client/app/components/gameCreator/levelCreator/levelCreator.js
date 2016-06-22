import angular from 'angular';
import uiRouter from 'angular-ui-router';
import levelCreatorComponent from './levelCreator.component';

let levelCreatorModule = angular.module('levelCreator', [
  uiRouter
])

.component('levelCreator', levelCreatorComponent);

export default levelCreatorModule;

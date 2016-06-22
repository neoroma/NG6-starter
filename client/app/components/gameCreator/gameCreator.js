import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameCreatorComponent from './gameCreator.component';

let gameCreatorModule = angular.module('gameCreator', [
  uiRouter
])

  .component('gameCreator', gameCreatorComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('game', {
        url: '/game',
        template: '<game-creator></game-creator>'
      });
  })

export default gameCreatorModule;

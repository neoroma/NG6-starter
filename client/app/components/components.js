import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import GameCreator from './gameCreator/gameCreator'

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  GameCreator.name
]);

export default componentModule;

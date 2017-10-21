import { Template } from 'meteor/templating';


const tasks = [
  {text: 'Pickup kids from scool'},
  {text: 'Go food shoping'},
  {text: 'Meeting with boss'}
];

Template.main.helpers({
  title(){
    return 'QuickTodos';
  },
  todos() {
    return tasks;
  }
});
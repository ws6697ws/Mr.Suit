Router.configure({
  layoutTemplate: "index"
});

Router.route('/', {name: 'postsList'});

Router.route('/design_detail', {name: 'postPage'});

Router.route('/send_messages', {name: 'mesmain'});

Router.route('/received_message', {named:''});
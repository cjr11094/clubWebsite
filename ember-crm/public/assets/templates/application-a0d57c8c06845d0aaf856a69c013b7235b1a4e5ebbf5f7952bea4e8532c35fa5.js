Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars, depth0, helpers, partials, data) { this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<h1> Hello World </h1>\n<ul class=\"nav nav-tabs\">\n  <li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li>\n  <li role=\"presentation\"><a href=\"#\">Profile</a></li>\n  <li role=\"presentation\"><a href=\"#\">Messages</a></li>\n</ul>\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

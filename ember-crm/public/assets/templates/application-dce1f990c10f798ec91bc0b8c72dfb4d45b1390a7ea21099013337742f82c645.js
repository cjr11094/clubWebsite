Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars, depth0, helpers, partials, data) { this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"page-header\">\n  <img class=\"amherst-logo\" src=\"assets/amherst-logo.jpg\"/><h1>Amherst College FC </h1>\n</div>\n<ul class=\"nav nav-tabs\">\n  <li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li>\n  <li role=\"presentation\"><a href=\"#\">About</a></li>\n  <li role=\"presentation\"><a href=\"#\">Contact Us</a></li>\n</ul>\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

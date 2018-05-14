webpackJsonp([0x79231c92a1da],{350:function(a,t){a.exports={data:{markdownRemark:{html:'<h1>Hints and tips on making different UI components</h1>\n<p>This document tries to give some hints and tips on how to make common UI stuff</p>\n<h2>Modal Dialogs</h2>\n<p>Its handy to have popups with detailed views, confirmation dialogs or wizards.</p>\n<p>Here\'s a quick and easy way to make them in hawtio:</p>\n<ul>\n<li>\n<p>ensure your angular module depends on <strong>\'ui.bootstrap.dialog\'</strong>:</p>\n<p>angular.module(pluginName, [\'bootstrap\', \'ui.bootstrap.dialog\', \'hawtioCore\'])</p>\n</li>\n<li>\n<p>create a <a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/activemq/js/browse.ts#L7">new Core.Dialog() object in your controller scope</a> with some name</p>\n</li>\n<li>\n<p>Then in the modal dialog markup, using <a href="http://angular-ui.github.io/bootstrap/#/modal">angular ui bootstrap modals</a> refer to <strong>name.show</strong> and <strong>name.options</strong>, then to open/show use <strong>name.open()</strong> and <strong>name.close()</strong>as in this <a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/activemq/html/browseQueue.html#L70">example markup for the above controller code</a></p>\n</li>\n</ul>\n<p>This also means you only have to come up with 1 name per dialog - the name of the dialog object - rather than naming the various flags/options/open/close methods :)</p>\n<h2>Grids / Tables</h2>\n<p>We have 2 implementations currentl, <a href="http://angular-ui.github.io/ng-grid/">ng-grid</a> which has a really nice directive and angular way of working with it; check it out for the documentation on how to make a grid.</p>\n<p>We\'ve also got a <a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/datatable/doc/developer.md">datatable plugin</a> which provides a directive and API to ng-grid but uses the underlying <a href="http://datatables.net/">jQuery DataTable widget</a> until ng-grid is as fast and solves all the same use cases.</p>',frontmatter:{title:""}}},pathContext:{path:"/how-to-make-ui-stuff/"}}}});
//# sourceMappingURL=path---how-to-make-ui-stuff-4355df5489779fc1c35f.js.map
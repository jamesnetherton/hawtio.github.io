webpackJsonp([0xbb96b23acbf5],{341:function(e,o){e.exports={data:{markdownRemark:{html:"<h1>Code Conventions</h1>\n<p>While we don't want to be too anal about coding styles, we are trying to adopt conventions to help make things easier to find, name, navigate and use.</p>\n<p>Here's a few of them we've found over time...</p>\n<h2>TypeScript / JavaScript code style</h2>\n<ul>\n<li>Use 2 spaces for TypeScript / JavaScript / JSON / HTML / CSS / XML please</li>\n</ul>\n<h2>Angular Controllers</h2>\n<ul>\n<li>for AngularJS Controllers, setup all the $scope properties and functions at the top of the controller code please</li>\n<li>then put all the associated nested functions below; so its easier to grok the $scope by looking at the top of the file</li>\n<li>its good practice to put a plugin in a TypeScript / JavaScript module</li>\n<li>when sharing functions across controllers, pop them into the module as exported functions; they could be handy outside the module too.</li>\n<li>\n<p>common file names for plugin $foo:</p>\n<ul>\n<li>$fooPlugin.ts is the plugin</li>\n<li>$fooHelpers.ts containers the exported helper functions.</li>\n</ul>\n</li>\n</ul>\n<h2>Plugin File Layout</h2>\n<p>Each plugin should have its own directory tree with optional child folders called:</p>\n<ul>\n<li><code>html</code> for any HTML partials or layouts</li>\n<li><code>js</code> for JavaScript / TypeScript / CoffeeScript code</li>\n<li><code>img</code> for images</li>\n<li><code>css</code> for CSS / SASS / SCSS files</li>\n<li><code>doc</code> for user documentation  (in <code>doc\\help.md</code> and other files) and developer documentation (<code>doc\\developer.md</code>) which then plugins into the help system</li>\n</ul>\n<p>For a plugin called <code>foo</code> Inside the <code>foo/js</code> folder we typically use a file called <code>fooPlugin.ts</code> to define the plugin. This is the file which creates an AngularJS module and defines any associated factories, services, directives, filters, routes, etc.</p>\n<p>Each controller we typically put into a file; usually using a lowercase version of the controller name (usually omitting the 'Controller' suffix since other than the <code>fooPlugin.ts</code> file most of the source is just controllers).</p>\n<p>For general helper functions we tend to have a file called <code>fooHelpers.ts</code>.</p>\n<h2>URI Templates</h2>\n<p>It is common to use URI templates to denote different views. We try follow these conventions...</p>\n<p>For a given entity or resource <code>Foo</code> consider using these URI templates:</p>\n<ul>\n<li><code>/foo</code> for the top level view of all the foos to view/search <code>foo</code>s</li>\n<li><code>/foo/edit</code> the edit page for <code>foo</code>s if that makes sense</li>\n<li><code>/foo/id/:id</code> the URI template of a single <code>foo</code> looking up by uniqueID</li>\n<li><code>/foo/idx/:index</code> the URI template of a single <code>foo</code> looking up by index. So <code>/foo/idx/0</code> could redirect to <code>/foo/id/abc</code> to show the first in a collection</li>\n</ul>\n<p>Having the extra level of indirection between <code>/foo</code> and the id of a <code>foo</code> item; lets us have other ways to navigate the foo collection; by name/location/country or whatever.</p>\n<p>This avoids us having <code>/foo</code> and <code>/foos</code> top level paths and having to figure out a nice URI for plural of foo and makes it easier to group all <code>foo</code> URIs by <code>path.startsWith(\"/foo\")</code></p>\n<h2>UI Conventions</h2>\n<p>When showing buttons we tend to use the order Start, Pause, Stop, Refresh, Delete (remove where applicable) so that the more serious options like Delete are at the far end and the easier options (start/pause) are closer together.</p>\n<p>We are currently using these <a href=\"http://fortawesome.github.io/Font-Awesome/\">Font Awesome icons</a> by default</p>\n<ul>\n<li>start: green icon-play-circle</li>\n<li>pause: icon-pause</li>\n<li>stop: orangle icon-off</li>\n<li>refresh: icon-refresh</li>\n<li>delete: icon-remove</li>\n</ul>",frontmatter:{title:""}}},pathContext:{slug:"/docs/coding-conventions/"}}}});
//# sourceMappingURL=path---docs-coding-conventions-75e9ad1870cd5f78d329.js.map
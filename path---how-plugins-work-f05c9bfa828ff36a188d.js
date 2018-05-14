webpackJsonp([0x7a548b1689f8],{349:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Currently hawtio uses JMX to discover which MBeans are present and then dynamically updates the navigation bars and tabs based on what it finds. The UI is updated whenever hawtio reloads the mbeans JSON; which it does periodically or a plugin can trigger explicitly.</p>\n<p>So you can deploy the standard <a href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-web/1.5.9/hawtio-web-1.5.9.war">hawtio-web.war</a>; then as you deploy more services to your container, hawtio will update itself to reflect the suitable plugins in the UI.</p>\n<p>Relying on JMX for discovery doesn\'t mean though that plugins can only interact with JMX; they can do anything at all that a browser can. e.g. a plugin could use REST to discover UI capabilities and other plugins.</p>\n<p>A hawtio plugin is anything that will run inside a browser. We\'ve tried to keep hawtio plugins as technology agnostic as possible; so a plugin is just some combination of JS / HTML / CSS / markup / images and other content that can be loaded in a browser.</p>\n<h2>What is a Plugin?</h2>\n<p>From a plugin developer\'s perspective a plugin is just a set of resources; usually at least one JavaScript file.</p>\n<p>For <a href="http://hawt.io/plugins/index.html">all the plugins</a> we\'ve done so far we\'ve picked <a href="http://angularjs.org/">AngularJS</a> as the UI framework, which has nice a two-way binding between the HTML markup and the JS data model along with modularisation, web directives and dependency injection.</p>\n<p>We\'re using TypeScript to generate the JS code to get syntax for modules, classes, interfaces, type inference and static type checking; but folks can use anything that compiles to JS (e.g. vanilla JS or JSLint / Google Closure, CoffeeScript or any of the JVM language -> JS translators like GWT, Kotlin, Ceylon etc)</p>\n<p>In terms of JS code, we\'re using JavaScript modules to keep things separated, so plugins can\'t conflict but they can work together if required. From an AngularJS perspective we\'re using AngularJS\'s modules and dependency injection; which makes it easy for plugins to interact with each other &#x26; share services between them. e.g. plugins which want to interact with or listen to changes in the MBean tree can be injected with the Workspace service etc.</p>\n<h3>Example Plugin</h3>\n<p>If you want so see some example code, here\'s a <a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/log/js/logPlugin.ts">log plugin</a> designed to work with an MBean which queries the log statements from SLF4J/log4j, etc.</p>\n<ul>\n<li>We can <a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/log/js/logPlugin.ts#L5">map single page URIs templates</a> to HTML templates (partials) and controllers. This will add the view at <a href="http://localhost:8282/hawtio/#/logs">http://localhost:8282/hawtio/#/logs</a> if you are running hawtio locally.</li>\n<li>These AngularJS modules can be added and removed at runtime inside the same single page application without requiring a reload.</li>\n<li><a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/log/js/logPlugin.ts#L12">Here\'s where we register a top-level navigation bar item</a> for this the new log tab.</li>\n<li>Here\'s a <a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/log/js/logPlugin.ts#L19">sub tab in the JMX plugin</a> which is only visible if you select a node in the JMX tree.</li>\n</ul>\n<p>Thanks to the dependency injection of <a href="http://angularjs.org/">AngularJS</a> different plugins can expose services and perform various kinds of integration and wiring together.</p>\n<h2>Adding Your Own Plugins</h2>\n<p>There are various ways of adding your own plugins to hawtio:</p>\n<h3>Static Linking</h3>\n<p>The simplest way to make plugins available is to statically link them inside the WAR hosting the hawtio web application.</p>\n<p>e.g. if you create a maven WAR project and <a href="https://github.com/hawtio/hawtio/blob/master/sample/pom.xml#L17">add the hawtio-web WAR dependency and use the maven war plugin</a> you can then add your own plugins into the <strong>src/main/webapp/app</strong> directory.</p>\n<h3>Separate Deployment Unit</h3>\n<p>Plugins can be packaged up as a separate deployment unit (WAR, OSGi bundle, EAR, etc) and then deployed like any other deployment unit.</p>\n<p>The plugin then needs to expose a hawtio plugin MBean instance which describes how to load the plugin artifacts (e.g. local URLs inside the container or public URLs to some website). See the <a href="https://github.com/hawtio/hawtio/tree/master/hawtio-plugin-examples">plugin examples</a> for more details.</p>\n<p>So plugins can be deployed into the JVM via whatever container you prefer (web container, OSGi, JEE). </p>\n<p>To see how this works check out the <a href="https://github.com/hawtio/hawtio/blob/master/hawtio-plugin-examples/readme.md">plugin examples and detailed description</a>.</p>\n<p>For example WAR deployment units can easily be deployed in a web container such as Apache Tomcat. Just drop the plugin in the deploy directory along with the hawtio WAR. And hawtio will automatic detect the custom plugin.</p>\n<p>The standalone hawtio application (hawtio-app) is also capable of using custom plugins as WAR files. This can be done by copying the plugin WARs to the plugins sub directory where hawtio-app is launched.</p>\n<p>For example the current directory is <code>myfolder</code>, where we create a sub directory named <code>plugins</code>, and then copy our custom plugins as WAR files to that directory. And then just launch hawtio-app as usual.</p>\n<pre><code>myfolder$\nmkdir plugins\ncp ~/mycustomplugin.war plugins\njava -jar hawtio-app-1.5.9.jar\n</code></pre>\n<p>You can copy as many custom plugins to the <code>plugins</code> directory.</p>\n<p>An important aspect however, is that the name of the WAR file must match the context-path name, that has been configured in the <code>web.xml</code> file. For example the groovy-shell example plugin has configured <code>groovy-shell-plugin</code> as its context-path, which means the name of the WAR file must be <code>groovy-shell-plugin.war</code>. Here is the name configured <a href="https://github.com/hawtio/hawtio/blob/master/hawtio-plugin-examples/groovy-shell-plugin/pom.xml#L23">here</a>, which will be used as placeholder in the <a href="https://github.com/hawtio/hawtio/blob/master/hawtio-plugin-examples/groovy-shell-plugin/src/main/resources/WEB-INF/web.xml#L14">web.xml</a> file.</p>\n<h3>Using a Registry</h3>\n<p>We\'ve not fully implemented this yet--but we can have a simple JSON registry inside the hawtio application which maps known MBean object names to external plugins. We can then auto-install plugins using trusted JSON repositories of plugins.</p>\n<p>This has the benefit of not requiring any changes to the JVM being managed (other than Jolokia being inside).</p>\n<p>Here is a <a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/test.json">sample JSON file</a> to show the kind of thing we mean.</p>\n<h3>Plugin Manager (plugin)</h3>\n<p>We could add a "plugin manager" plugin to allow users to add new plugins either into the JVM, some registry or purely on the client side with local storage. So rather like with <a href="http://jenkins-ci.org/">jenkins</a> you can install new plugins from a repository of well known plugins, we could add the same capability to hawtio.</p>',frontmatter:{title:""}}},pathContext:{path:"/how-plugins-work/"}}}});
//# sourceMappingURL=path---how-plugins-work-f05c9bfa828ff36a188d.js.map
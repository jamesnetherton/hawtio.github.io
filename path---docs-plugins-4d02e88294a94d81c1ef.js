webpackJsonp([50355500681693],{350:function(t,a){t.exports={data:{markdownRemark:{html:'<p><strong>hawtio</strong> is highly modular with lots of plugins (see below), so that hawtio can discover exactly what services are inside a JVM and dynamically update the console to provide an interface to them as things come and go. So after you have deployed hawtio into a container, as you add and remove new services to your JVM the hawtio console updates in real time.</p>\n<p>For more details see the <a href="http://hawt.io/configuration/index.html">Configuration Guide</a> and <a href="http://hawt.io/plugins/howPluginsWork.html">How Plugins Work</a>.</p>\n<h2>Included Plugins</h2>\n<p>The following plugins are all included by default in the <a href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-web/1.5.9/hawtio-web-1.5.9.war">hawtio-web.war</a> distro. You can see the <a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app">source for the all default plugins here</a>.</p>\n<table class="table">\n  <tr>\n    <th>Plugin</th>\n    <th>Description</th>\n    <th>Source</th>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/api/">api</a></td>\n    <td>This plugin supports viewing the APIs of WSDL and WADL documents on <a href="http://cxf.apache.org/">Apache CXF</a> based web service endpoints</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/api">api</a></td>\n  </tr>  \n  <tr>\n    <td><a href="http://hawt.io/plugins/activemq/">activemq</a></td>\n    <td>Adds support for <a href="http://activemq.apache.org/">Apache ActiveMQ</a>. Lets you browse broker statistics, create queues/topcs, browse queues, send messages and visualise subscription and network information</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/activemq">activemq</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/camel/">camel</a></td>\n    <td>Adds support for <a href="http://camel.apache.org/">Apache Camel</a>. Lets you browse CamelContexts, routes, endpoints. Visualise running routes and their metrics. Create endpoints. Send messages. Trace message flows, as well profile routes to identifiy which parts runs fast or slow.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/camel">camel</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/camin/">camin</a></td>\n    <td>The camin plugin is used to render Gantt sequence diagrams of <a href="http://camel.apache.org/">Apache Camel</a> routes.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/camin">camin</a></td>\n  </tr>\n  <tr>\n    <td>core</td>\n    <td>Provides the core plugin mechanisms.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/core">core</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/dashboard/">dashboard</a></td>\n    <td>Provides some default dashboards for viewing graphs, metrics and other widgets on a customisable tabbed view. You can create your own dashboards; they are stored and versioned as JSON files in a git repository so that you can easily share them on <a href="http://github.com/">github</a>. The default configuration repository <a href="https://github.com/hawtio/hawtio-config">is here</a></td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/dashboard">dashboard</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/diagnostics/">diagnostics</a></td>\n    <td>The diagnostics plugin allow you to control the Java Flight Recorder, see class histogram and access to JVM flags.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/diagnostics">diagnostics</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/dozer/">dozer</a></td>\n    <td>The Dozer plugin adds editing support for the <a href="http://dozer.sourceforge.net/">Dozer data mapping library</a> which can be used with <a href="http://camel.apache.org/">Apache Camel</a></td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/dozer">dozer</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/elasticsearch/">elasticsearch</a></td>\n    <td>The elasticsearch plugin allows to connect to an <a href="http://www.elasticsearch.org/">ElasticSearch</a> server and perform queries to retrieve documents from indices.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/elasticsearch">elasticsearch</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/fabric/">fabric</a></td>\n    <td>Adds support for <a href="http://fuse.fusesource.org/fabric/">Fuse Fabric</a> such as to view profiles, versions and containers in your fabric and view/edit the profile configuration in git.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/fabric">fabric</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/git/">git</a></td>\n    <td>Provides the HTML5 front end to the back end <a href="http://git-scm.com/">git repository</a> used to store configuration and files in plugins such as <a href="http://hawt.io/plugins/dashboard/">dashboard</a> and <a href="http://hawt.io/plugins/wiki/">wiki</a>. Uses the\n    <a href="https://github.com/hawtio/hawtio/blob/master/hawtio-git/src/main/java/io/hawt/git/GitFacadeMXBean.java#L26">GitFacadeMXBean</a> from the <a href="https://github.com/hawtio/hawtio/tree/master/hawtio-git">hawtio-git module</a></td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/git">git</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/health/">health</a></td>\n    <td>Adds support for <a href="http://hawt.io/plugins/health/">Health MBeans</a> so its easy to see the health of systems which support them\n    (such as <a href="http://activemq.apache.org/">Apache ActiveMQ</a> and <a href="http://fuse.fusesource.org/fabric/">Fuse Fabric</a>)</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/health">health</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/infinispan/">infinispan</a></td>\n    <td>Adds support for <a href="http://infinispan.org/">Infinispan</a> so you can visualise the caches you have and see their metrics.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/infinispan">infinispan</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/insight/">insight</a></td>\n    <td>This plugin provides a number of views for provising insight into a <a href="http://fuse.fusesource.org/fabric/">Fuse Fabric</a> using <a href="http://www.elasticsearch.org/">ElasticSearch</a> to query data for logs, metrics or historic Camel messages.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/insight">insight</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/jboss/">jboss</a></td>\n    <td>Adds support for <a href="http://www.jboss.org/jbossas">JBoss Application Server</a>, or <a href="http://www.wildfly.org/">JBoss WildFly</a> such as viewing, starting, stopping, refreshing web applications, view connectors and JMX etc.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/jboss">jboss</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/jclouds/">jclouds</a></td>\n    <td>Adds support for <a href="http://jclouds.org/">jclouds</a> so you can view your cloud resources and start, stop and restart your compute nodes etc.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/jclouds">jclouds</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/jetty/">jetty</a></td>\n    <td>Adds support for <a href="http://www.eclipse.org/jetty/">Jetty</a> such as viewing, starting, stopping, refreshing web applications, view connectors and JMX etc.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/jetty">jetty</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/jmx/">jmx</a></td>\n    <td>Provides the core <a href="http://www.oracle.com/technetwork/java/javase/tech/javamanagement-140525.html">JMX</a> support for interacting with MBeans, viewing real time attributes, charting and invoking operations.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/jmx">jmx</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/junit/">junit</a></td>\n    <td>Adds support for running JUnit tests from within hawtio.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/junit">junit</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/jvm/">jvm</a></td>\n    <td>The jvm plugin allows you to connect to local or remote JVMs, and as well install the Jolokia JVM agent into the JVMs.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/jvm">jvm</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/karaf/">karaf</a></td>\n    <td>Adds support for <a href="http://karaf.apache.org/">Apache Karaf</a> so you can browse features, bundles, services and configuration.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/karaf">karaf</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/logs/">log</a></td>\n    <td>Provides support for visualising the <a href="http://hawt.io/plugins/logs/">logs</a> inside the JVM along with linking log statements to the source code which generates them. <i>Hawt!</i></td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/log">log</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/maven/">maven</a></td>\n    <td>Lets you query maven repositories for artifacts; then see the available versions, javadoc and source.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/maven">maven</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/openejb/">openejb</a></td>\n    <td>Adds support for <a href="http://openejb.apache.org/">Apache OpenEJB</a></td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/openejb">openejb</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/osgi/">osgi</a></td>\n    <td>Provides support for <a href="http://www.osgi.org/Main/HomePage">OSGi containers</a> such as <a href="http://karaf.apache.org/">Apache Karaf</a> using the standard OSGi management hooks.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/osgi">osgi</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/quartz/">quartz</a></td>\n    <td>Lets you view and manage Quartz Schedulers, such as adjusting triggers at runtime.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/quartz">quartz</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/runtime/">runtime</a></td>\n    <td>General overview of the Java process including command line, system properties and key metrics.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/runtime">runtime</a></td>\n  </tr>  \n  <tr>\n    <td><a href="http://hawt.io/plugins/source/">source</a></td>\n    <td>Used by the <a href="http://hawt.io/plugins/logs/">log plugin</a> to view the source code of any file in a maven source artefact using the maven coordinates, class name / file name and line number.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/source">source</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/springBoot/">springBoot</a></td>\n    <td>Spring Boot plugin to show information about the Spring Boot application.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/springBoot">source</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/threads/">threads</a></td>\n    <td>Provides support for viewing the threads running in the JVM.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/threads">threads</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/tomcat/">tomcat</a></td>\n    <td>Adds support for <a href="http://tomcat.apache.org/">Apache Tomcat</a> and <a href="http://tomee.apache.org/">Apache TomEE</a> such as viewing, starting, stopping, refreshing applications, view connectors, sessions, and JMX etc.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/tomcat">tomcat</a></td>\n  </tr>\n  <tr>\n    <td><a href="http://hawt.io/plugins/wiki/">wiki</a></td>\n    <td>Provides a git based wiki for viewing, creating and editing text files (Markdown, HTML, XML, property files, JSON) which are then versioned and stored in a git repository</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/wiki">wiki</a></td>\n  </tr>\n</table>\n<h2>Developer plugins</h2>\n<p>The following plugins are not intended to be used by users of hawtio, but are there for developers of hawtio plugins to use to build even <em>hawter</em> plugins.</p>\n<table class="table">\n  <tr>\n    <th>Plugin</th>\n    <th>Description</th>\n    <th>Source</th>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/branding/doc/developer.md">branding</a></td>\n    <td>The branding plugin applies an extra branding stylesheet depending on the version and type of server hawtio is running in.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/branding">branding</a></td>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/datatable/doc/developer.md">datatable</a></td>\n    <td>This plugin provides a programming API similar to <a href="http://angular-ui.github.com/ng-grid/">ng-grid</a> for writing table/grids in angularjs but uses <a href="http://datatables.net/">jQuery DataTables</a> as the underlying implementation.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/datatable">datatable</a></td>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/forcegraph/doc/developer.md">forcegraph</a></td>\n    <td>The force graph plugin adds a directive to hawtio that allows en easy and customizable way of displaying graph data as a D3 forced graph.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/forcegraph">forcegraph</a></td>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/forms/doc/developer.md">forms</a></td>\n    <td>This plugin provides an easy way, given a <a href="http://json-schema.org/">JSON Schema</a> model of generating a form with 2 way binding to some JSON data.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/forms">forms</a></td>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/ide/doc/developer.md">ide</a></td>\n    <td>This plugin provides a directive for linking to source code in your IDE. Currently only IDEA supported</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/ide">ide</a></td>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/perspective/doc/developer.md">perspective</a></td>\n    <td>The perspective plugin makes it easy to define different perspectives which affect which top level nav bars appear in hawtio so that it can behave in different ways for different kinds of users.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/perspective">perspective</a></td>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/tree/doc/developer.md">tree</a></td>\n    <td>This plugin provides a simple HTML directive for working with <a href="http://wwwendt.de/tech/dynatree/doc/dynatree-doc.html">jQuery DynaTree widgets</a> from AngularJS</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/tree">tree</a></td>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/ui/doc/developer.md">ui</a></td>\n    <td>Provides various AngularJS directives for custom widgets</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-web/src/main/webapp/app/ui">ui</a></td>\n  </tr>\n</table>\n<h2>Server Side Plugins</h2>\n<p>Each hawtio distro has these <a href="http://hawt.io/plugins/index.html">browser based plugins</a> inside already. The hawtio UI updates itself in real time based on what it can find in the server side JVM it connects to. So for example if you deploy some Apache Camel then the Camel plugin will appear.</p>\n<p>In addition there are some server side Java based plugins you can deploy to add new behaviour to your hawtio console.</p>\n<table class="table">\n  <tr>\n    <th>Server Side Plugin</th>\n    <th title="which distribution is this plugin included?">Distribution</th>\n    <th>Description</th>\n    <th>Source</th>\n  </tr>\n  <tr>\n    <td>fabric-core</td>\n    <td><a href="http://www.jboss.org/products/amq">JBoss A-MQ 6.1, <a href="http://www.jboss.org/products/fuse">JBoss Fuse</a> 6.1 and <a href="http://fabric8.io/">fabric8</a> distros</td>\n    <td>Provides support for the <a href="http://hawt.io/plugins/fabric/">fabric</a> plugin and adds an MBean for accessing the OSGi MetaType metadata for generating nicer OSGi Config Admin forms in the <a href="http://hawt.io/plugins/osgi/">osgi</a> plugin.</td>\n    <td><a href="https://github.com/jboss-fuse/fuse/tree/master/fabric/fabric-core">source</a></td>\n  </tr>\n  <tr>\n    <td>hawtio-aether</td>\n    <td>hawtio-default.war</td>\n    <td>Used by the <a href="http://hawt.io/plugins/maven/">maven</a> plugin to resolve dependency trees</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-aether/">source</a></td>\n  </tr>\n  <tr>\n    <td>hawtio-git</td>\n    <td>hawtio-web.war</td>\n    <td>Supports the <a href="http://hawt.io/plugins/wiki/">wiki</a> plugin and allows the <a href="http://hawt.io/plugins/dashboard/">dashboard</a> plugin to load/save/store and version dashboard configurations.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-git/">source</a></td>\n  </tr>\n  <tr>\n    <td>hawtio-json-schema-mbean</td>\n    <td>hawtio-default.war</td>\n    <td>Provides introspection and JSON Schema lookup of beans which is used for the <a href="http://hawt.io/plugins/fabric/">fabric</a> plugin and is needed for the Dozer editor in the  <a href="http://hawt.io/plugins/wiki/">wiki</a></td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-json-schema-mbean/">source</a></td>\n  </tr>\n  <tr>\n    <td>hawtio-local-jvm-mbean</td>\n    <td>hawtio-default.war</td>\n    <td>Provides \'jconsole-like\' discovery of all JVMs on the same machine as the JVM so that the <a href="http://hawt.io/plugins/jvm/">jvm</a> plugin can easily connect to any local JVMs</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-local-jvm-mbean/">source</a></td>\n  </tr>\n  <tr>\n    <td>hawtio-ide</td>\n    <td>hawtio-default.war</td>\n    <td>Server side code for the <a href="https://github.com/hawtio/hawtio/blob/master/hawtio-web/src/main/webapp/app/ide/doc/developer.md">ide</a> plugin</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-ide/">source</a></td>\n  </tr>\n  <tr>\n    <td>hawtio-maven-indexer</td>\n    <td>hawtio-default.war</td>\n    <td>Required for the <a href="http://hawt.io/plugins/maven/">maven</a> plugin so that it can download and quickly search maven central for artifacts.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-maven-indexer/">source</a></td>\n  </tr>\n  <tr>\n    <td>insight-log</td>\n    <td><a href="http://www.jboss.org/products/amq">JBoss A-MQ, <a href="http://www.jboss.org/products/fuse">JBoss Fuse</a> and <a href="http://fabric8.io/">fabric8</a> distros</td>\n    <td>Karaf based plugin which is required for the <a href="http://hawt.io/plugins/log/">log</a> plugin to query logs.</td>\n    <td><a href="https://github.com/jboss-fuse/fuse/tree/master/insight/insight-log">source</a></td>\n  </tr>\n  <tr>\n    <td>insight-log4j</td>\n    <td></td>\n    <td>A log4j based plugin required for the <a href="http://hawt.io/plugins/log/">log</a> plugin to query logs.</td>\n    <td><a href="https://github.com/jboss-fuse/fuse/tree/master/insight/insight-log4j">source</a></td>\n  </tr>\n</table>\n<h2>External plugins</h2>\n<table class="table">\n  <tr>\n    <th>Plugin</th>\n    <th>Description</th>\n    <th>Source</th>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-plugin-examples/simple-plugin">simple-plugin</a></td>\n    <td>A very simple hello world plugin implemented as a separate plugin</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-plugin-examples/simple-plugin">simple-plugin</a></td>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-plugin-examples/custom-perspective">custom-perspective</a></td>\n    <td>A simple plugin that edits hawtio\'s default perspective definition, used to show or hide tabs and group tabs into different perspectives, implemented as a separate plugin</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-plugin-examples/custom-perspective">custom-perspective</a></td>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-karaf-terminal">hawtio-karaf-terminal</a></td>\n    <td>A terminal plugin brought over from Apache Felix that uses Ajax term in the front-end to implement a terminal in hawtio when it\'s running in an Apache Karaf based container.</td>\n    <td><a href="https://github.com/hawtio/hawtio/tree/master/hawtio-karaf-terminal">hawtio-karaf-terminal</a></td>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/jboss-fuse/fuse/blob/master/insight/insight-kibana3/src/main/webapp/js/kibana3Plugin.js">insight-kibana3</a></td>\n    <td>A hawtio plugin that embeds the kibana3 frontend for Elastic Search into hawtio.  Source link is to the plugin definition, had to tell hawtio where to find all of kibana3\'s javascript files in <a href="https://github.com/jboss-fuse/fuse/blob/master/insight/insight-kibana3/pom.xml">the pom.xml</a></td>\n    <td><a href="https://github.com/jboss-fuse/fuse/blob/master/insight/insight-kibana3/src/main/webapp/js/kibana3Plugin.js">insight-kibana3</a></td>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/jboss-fuse/fuse/tree/master/insight/insight-eshead/src/main/webapp/hawtio">insight-eshead</a></td>\n    <td>A plugin that embeds the ESHead elastic search frontend into hawtio, source link points to the hawtio specific stuff</td>\n    <td><a href="https://github.com/jboss-fuse/fuse/tree/master/insight/insight-eshead/src/main/webapp/hawtio">insight-eshead</a></td>\n  </tr>\n  <tr>\n    <td><a href="https://github.com/jboss-fuse/fuse/tree/master/insight/insight-eshead/src/main/webapp/hawtio">insight-eshead</a></td>\n    <td>A plugin that embeds the ESHead elastic search frontend into hawtio, source link points to the hawtio specific stuff</td>\n  </tr>\n</table>\n<p>If you create a new external plugin to hawtio please fork this repository, update this file to add a link to your plugin and <a href="http://hawt.io/contributing/index.html">submit a pull request</a>.</p>',frontmatter:{title:""}}},pathContext:{slug:"/docs/plugins/"}}}});
//# sourceMappingURL=path---docs-plugins-4d02e88294a94d81c1ef.js.map
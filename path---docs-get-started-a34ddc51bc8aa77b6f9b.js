webpackJsonp([39068286934403],{577:function(e,t){e.exports={data:{markdownRemark:{html:'<p>You can use hawtio from a Chrome Extension or in many different containers - or outside a container in a stand alone executable jar. Below are all the various options for running hawtio. To see whats changed lately check out the <a class="btn btn-default" href="http://hawt.io/changelog.html">change log</a></p>\n<p>The Hawtio platform consists of 2 parts, the backend which is running in a Java Web Container the Jolokia gateway (JMX to JSON) and the front end containing the Angular, D3, ... Javascript to do the rendering of the JSON responses in a very nice way.\nDepending how you plan to use Hawtio for your project in your environment, you can run the backend using a <a href="#standalone">java standalone jar</a>, <a href="#web-container">a servlet engine</a>, <a href="#jee">application server</a> or <a href="#osgi">an OSGI container</a>.\nIf you do not use a servlet container or application server, you can also embed the hawtio backend <a href="#embedded">inside your process</a>.</p>\n<p>The front end could be accessed using the <strong>HTML5 web console</strong> or from <a href="#chrome-ext">Google Browser</a></p>\n<p>The out of the box defaults try to do the right thing for most folks but if you want to configure things then please check out the <a class="btn btn-default" href="http://hawt.io/configuration/index.html">configuration guide</a></p>\n<p><a name="standalone"></a></p>\n<h2 id="using-the-executable-jar"><a href="#using-the-executable-jar" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using the executable jar</h2>\n<p>You can startup hawtio on your machine using the hawtio-app executable jar.</p>\n<p><a class="btn btn-large btn-primary" href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-app/1.5.9/hawtio-app-1.5.9.jar">Download the executable hawtio-app-1.5.9.jar</a></p>\n<p>Once you have downloaded it, just run this from the command line:</p>\n<pre><code>java -jar hawtio-app-1.5.9.jar\n</code></pre>\n<p>Note: If you launch hawt.io with Java 9, add the specified modules to avoid errors on startup and allow attaching to other Java processes:</p>\n<pre><code>java --add-modules jdk.attach,java.xml.bind -jar hawtio-app-1.5.9.jar\n</code></pre>\n<p>And the console should show you which URL to open to view hawtio; which by default is <a href="http://localhost:8080/hawtio/">http://localhost:8080/hawtio/</a></p>\n<p>You can specify the port number to use, for example to use port 8090 run from the command line:</p>\n<pre><code>java -jar hawtio-app-1.5.9.jar --port 8090\n</code></pre>\n<p>hawtio supports other options which you can get listed by running from command line:</p>\n<pre><code>java -jar hawtio-app-1.5.9.jar --help\n</code></pre>\n<p><a name="web-container"></a></p>\n<h2 id="using-a-servlet-engine-or-application-server"><a href="#using-a-servlet-engine-or-application-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using a Servlet Engine or Application Server</h2>\n<p>If you are running Tomcat, Jetty you could just deploy a WAR:\n(JBoss AS or Wildfly users see other containers section further below)</p>\n<p><b>TIP:</b> You may want to use the offline deployment which do not connects to the internet for plugins such as Maven and Git.</p>\n<div class="row">\n  <div class="col-md-6 span6 text-center">\n    <p>\n      <a class="btn btn-large  btn-primary" href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-default/1.5.9/hawtio-default-1.5.9.war">Download hawtio-default.war</a>\n    </p>\n    <p>\n      a bare hawtio web application with minimal dependencies (online mode connecting to the internet for the Maven and Git plugin)\n    </p>\n  </div>\n  <div class="col-md-6 span6 text-center">\n    <p>\n      <a class="btn btn-large  btn-primary" href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-default-offline/1.5.9/hawtio-default-offline-1.5.9.war">Download hawtio-default-offline.war</a>\n    </p>\n    <p>\n      a bare <b>offline</b> hawtio web application with minimal dependencies in offline mode, where Maven and Git plugins are not enabled.\n    </p>\n  </div>\n  <div class="col-md-6 span6 text-center">\n    <p>\n      <a class="btn btn-large  btn-primary" href="https://oss.sonatype.org/content/repositories/public/io/hawt/sample/1.5.9/sample-1.5.9.war">Download sample.war</a>\n    </p>\n    <p>\n      a hawtio web application which comes with some <a href="http://activemq.apache.org/">Apache ActiveMQ</a> and\n      <a href="http://camel.apache.org/">Apache Camel</a> to play with which is even <i>hawter</i>\n    </p>\n  </div>\n</div>\n<p>Copy the WAR file to your deploy directory in your container.</p>\n<p>If you rename the downloaded file to <em>hawtio.war</em> then drop it into your deploy directory then open <a href="http://localhost:8080/hawtio/">http://localhost:8080/hawtio/</a> and you should have your hawtio console to play with.</p>\n<p>Otherwise you will need to use either <a href="http://localhost:8080/hawtio-default-1.5.9/">http://localhost:8080/hawtio-default-1.5.9/</a> or <a href="http://localhost:8080/sample-1.5.9/">http://localhost:8080/sample-1.5.9/</a>  depending on the file name you downloaded.</p>\n<p>Please check <a href="http://hawt.io/configuration/index.html">the configuration guide</a> to see how to configure things; in particular security.</p>\n<p>If you don\'t see a Tomcat / Jetty tab for your container you may need to enable JMX.</p>\n<p><a name="osgi"></a></p>\n<h2 id="using-jboss-fuse"><a href="#using-jboss-fuse" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using JBoss Fuse</h2>\n<p>If you are using 6.1 or later of <a href="http://www.jboss.org/products/fuse">JBoss Fuse</a>, then hawtio is installed out of the box</p>\n<h2 id="using-apache-karaf-or-apache-servicemix"><a href="#using-apache-karaf-or-apache-servicemix" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Apache Karaf or Apache ServiceMix</h2>\n<p>By default installing <code>hawtio</code> installs the Maven and Git plugin which uses online connection over the internet to work. You may want to install <code>hawtio-offline</code> instead which disables those plugins, and runs hawtio without any internet connectivity. When installing <code>hawtio-core</code> then those plugins are not installed and its also in offline mode.</p>\n<p>If you are using <a href="http://karaf.apache.org/">Apache Karaf</a> 2.x:</p>\n<pre><code>features:chooseurl hawtio 1.5.9\nfeatures:install hawtio\n</code></pre>\n<p>If you are using <a href="http://karaf.apache.org/">Apache Karaf</a> 3.x:</p>\n<pre><code>feature:repo-add hawtio 1.5.9\nfeature:install hawtio-core\n</code></pre>\n<p>If you are using <a href="http://karaf.apache.org/">Apache Karaf</a> 4.x:</p>\n<pre><code>feature:repo-add hawtio 1.5.9\nfeature:install hawtio\n</code></pre>\n<p>If you are using <a href="http://servicemix.apache.org/">Apache ServiceMix</a> 5.x/6.x:</p>\n<pre><code>feature:repo-add hawtio 1.5.9\nfeature:install hawtio-core\n</code></pre>\n<p>If you are using <a href="http://servicemix.apache.org/">Apache ServiceMix</a> 7.x:</p>\n<pre><code>feature:repo-add hawtio 1.5.9\nfeature:install hawtio\n</code></pre>\n<p><strong>NOTE</strong> Karaf 2.x/3.x has an issue with the <code>hawtio-log</code> and <code>hawtio-terminal</code> which does not work. And therefore you need to install <code>hawtio-core</code> instead of <code>hawtio</code>. </p>\n<p>The hawtio console can then be viewed at <a href="http://localhost:8181/hawtio/">http://localhost:8181/hawtio/</a>. The default login for Karaf is <code>karaf/karaf</code>, and for ServiceMix its <code>smx/smx</code>.</p>\n<h3 id="if-you-use-a-http-proxy"><a href="#if-you-use-a-http-proxy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>If you use a HTTP proxy</h3>\n<p>If you are behind a http proxy; you will need to enable HTTP Proxy support in Fuse / Karaf / ServiceMix to be able to download hawtio from the central maven repository.</p>\n<p>There are a few <a href="http://mpashworth.wordpress.com/2012/09/27/installing-apache-karaf-features-behind-a-firewall/">articles about</a> <a href="http://stackoverflow.com/questions/9922467/how-to-setup-a-proxy-for-apache-karaf">this</a> which may help. Here are the steps:</p>\n<p>Edit the <strong>etc/org.ops4j.pax.url.mvn.cfg</strong> file and make sure the following line is uncommented:</p>\n<pre><code>org.ops4j.pax.url.mvn.proxySupport=true\n</code></pre>\n<p>You may also want <strong>org.ops4j.pax.url.mvn.settings</strong> to point to your Maven settings.xml file. <strong>NOTE</strong> use / in the path, not .</p>\n<pre><code>org.ops4j.pax.url.mvn.settings=C:/Program Files/MyStuff/apache-maven-3.0.5/conf/settings.xml\n</code></pre>\n<p>Fuse / Karaf / ServiceMix will then use your <a href="http://maven.apache.org/guides/mini/guide-proxies.html">maven HTTP proxy settings</a> from your <strong>~/.m2/settings.xml</strong> to connect to the maven repositories listed in <strong>etc/org.ops4j.pax.url.mvn.cfg</strong> to download artifacts.</p>\n<p>If you\'re still struggling getting your HTTP proxy to work with Fuse, try jump on the <a href="https://community.jboss.org/en/jbossfuse">Fuse Form and ask for more help</a>.</p>\n<h2 id="other-containers"><a href="#other-containers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Other containers</h2>\n<p>The following section gives details of other containers</p>\n<p><a name="jee"></a></p>\n<h3 id="if-you-use-jboss-as-or-wildfly"><a href="#if-you-use-jboss-as-or-wildfly" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>If you use JBoss AS or Wildfly</h3>\n<p>You may have issues with slf4j JARs in WAR deployments on JBoss AS or Wildfly. To resolve this you must use <a class="btn-default" href="https://oss.sonatype.org/content/repositories/public/io/hawt/hawtio-no-slf4j/1.5.9/hawtio-no-slf4j-1.5.9.war">Download hawtio-no-slf4j.war</a>.</p>\n<p>See more details <a href="http://totalprogus.blogspot.co.uk/2011/06/javalanglinkageerror-loader-constraint.html">here</a>.</p>\n<p>Additionally related to logging, you can remove the log4j.properties from the root of the classpath so that Wildlfy\nuses its logging mechanisms instead of trying to use the embedded log4j. From the command line, you can\ntry:</p>\n<pre><code>zip -d hawtio.war WEB-INF/classes/log4j.properties\n</code></pre>\n<p>Since hawtio does use some CDI beans, but does not deploy a beans.xml CDI descriptor, you can also relax\nWildfly\'s <a href="https://docs.jboss.org/author/display/WFLY8/CDI+Reference">implicit CDI detection</a> by changing the\nWeld config to look like this:</p>\n<pre><code>    &#x3C;system-properties>\n        &#x3C;property name="hawtio.authenticationEnabled" value="false" />\n    &#x3C;/system-properties>\n    \n</code></pre>\n<p>To enable security, you\'ll need to set you configuration up like this:</p>\n<pre><code>&#x3C;extensions>\n    ...\n&#x3C;/extensions>\n\n&#x3C;system-properties>\n    &#x3C;property name="hawtio.authenticationEnabled" value="true" />\n    &#x3C;property name="hawtio.realm" value="jboss-web-policy" />\n    &#x3C;property name="hawtio.role" value="admin" />\n&#x3C;/system-properties>\n</code></pre>\n<p>You can follow the <a href="http://www.christianposta.com/blog/?p=403">steps outlined in this blog</a> for a more comprehensive\nlook at enabling security in Wildfly with hawtio.</p>\n<p>If you experience problems with security, you would need to disable security in hawtio by <a href="http://www.mastertheboss.com/jboss-configuration/how-to-inject-system-properties-into-jboss">configure the system properties</a> by adding the following to your <strong>jboss-as/server/default/deploy/properties-service.xml</strong> file (which probably has the mbean definition already but commented out):</p>\n<pre><code>&#x3C;mbean code="org.jboss.varia.property.SystemPropertiesService"\n name="jboss:type=Service,name=SystemProperties">\n\n  &#x3C;attribute name="Properties">\n        hawtio.authenticationEnabled=false\n  &#x3C;/attribute>\n&#x3C;/mbean>\n</code></pre>\n<p>Or in newer versions (Wildfly 8.1) you\'ll want to add this to standalone/configuration/standalone.xml:</p>\n<pre><code>&#x3C;extensions>\n    ...\n&#x3C;/extensions>\n\n&#x3C;system-properties>\n    &#x3C;property name="hawtio.authenticationEnabled" value="false" />\n&#x3C;/system-properties>\n</code></pre>\n<h3 id="enable-jmx-on-jetty-8x"><a href="#enable-jmx-on-jetty-8x" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enable JMX on Jetty 8.x</h3>\n<p>If you are using Jetty 8.x then JMX may not enabled by default, so make sure the following line is not commented out in <strong>jetty-distribution/start.ini</strong> (you may have to uncomment it to enable JMX).</p>\n<pre><code>etc/jetty-jmx.xml\n</code></pre>\n<p><a name="embedded"></a></p>\n<h2 id="using-hawtio-inside-a-stand-alone-java-application"><a href="#using-hawtio-inside-a-stand-alone-java-application" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using hawtio inside a stand alone Java application</h2>\n<p>If you do not use a servlet container or application server and wish to embed hawtio inside your process try the following:</p>\n<p>Add the following to your pom.xml</p>\n<pre><code>&#x3C;dependency>\n  &#x3C;groupId>io.hawt&#x3C;/groupId>\n  &#x3C;artifactId>hawtio-embedded&#x3C;/artifactId>\n  &#x3C;version>${hawtio-version}&#x3C;/version>\n &#x3C;/dependency>\n</code></pre>\n<p>Then in your application run the following code:</p>\n<pre><code>import io.hawt.embedded.Main;\n\n...\nMain main = new Main();\nmain.setWar("somePathOrDirectoryContainingHawtioWar");\nmain.run();\n</code></pre>\n<p>If you wish to do anything fancy it should be easy to override the Main class to find the hawtio-web.war in whatever place you wish to locate it (such as your local maven repo or download it from some server etc).</p>\n<p>Depending on the war you are loading, you may also need to turn off authentication before running the embedded hawtio so that it can be accessible in an unauthenticated environment:</p>\n<pre><code>System.setProperty("hawtio.authenticationEnabled", "false");\n</code></pre>\n<p><a name="chrome-ext"></a></p>\n<h2 id="using-the-chrome-extension-currently-not-working"><a href="#using-the-chrome-extension-currently-not-working" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using the Chrome Extension (currently not working)</h2>\n<blockquote>\n<p>Chrome Extension currently does not work, as Google requires extensions to be installed using their app store, and hawtio are not yet published to the app store. This may change in the future.</p>\n</blockquote>\n<p><a class="btn btn-large btn-primary" href="http://central.maven.org/maven2/io/hawt/hawtio-crx/1.4.47/hawtio-crx-1.4.47.crx">Download the hawtio Chrome Extension version 1.4.47</a></p>\n<ul>\n<li>\n<p>Then you\'ll need to open the folder that the CRX file got downloaded to. On a Mac in Chrome you right click the downloaded file and click <b>Show in Finder</b></p>\n</li>\n<li>\n<p>now in <a href="https://www.google.com/intl/en/chrome/browser/">Google Chrome</a> open the <a class="btn btn-default btn-large" href="chrome://extensions/">Extensions Page</a> at <b>chrome://extensions/</b> or <b>Window pull down menu -> Extensions</b></p>\n</li>\n<li>\n<p>now drop the downloaded CRX file (from Finder or Windows Explorer) onto Chrome\'s <a href="chrome://extensions/">Extensions Page</a> at <b>chrome://extensions/</b> or <b>Window pull down menu -> Extensions</b> and it should install the hawtio extension for Chrome.</p>\n</li>\n<li>\n<p>now to open a <a href="http://hawt.io/">hawtio</a> tab or window at any point, just open a new tab / window in Chrome, click the <b>Apps</b> button on the left hand of the bookmark bar which should open a window with all your extensions in there....</p>\n</li>\n<li>\n<p>you should see a <a href="http://hawt.io/">hawtio icon</a> in the apps page. If not <a href="http://hawt.io/community/index.html">let us know!</a>.</p>\n</li>\n<li>\n<p>Click the <a href="http://hawt.io/">hawtio icon</a></p>\n</li>\n<li>\n<p>the <b>Connect</b> page should appear where you can then connect to any processes which are running a <a href="http://jolokia.org/">jolokia agent</a>.</p>\n</li>\n<li>\n<p>have fun and profit! Please share with us your <a href="http://hawt.io/community/index.html">feedback!</a> or <a href="https://twitter.com/hawtio">tweet us!</a></p>\n</li>\n</ul>\n<h2 id="using-a-git-clone"><a href="#using-a-git-clone" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using a git Clone</h2>\n<p>From a git clone you should be able to run the a sample hawtio console as follows:</p>\n<pre><code>git clone git@github.com:hawtio/hawtio.git\ncd hawtio/sample\nmvn jetty:run\n</code></pre>\n<p>Then opening <a href="http://localhost:8282/hawtio/">http://localhost:8282/hawtio/</a> should show hawtio with a sample web application with some ActiveMQ and Camel inside to interact with.</p>\n<p>A good MBean for real time values and charts is <code>java.lang/OperatingSystem</code>. Try looking at queues or Camel routes. Notice that as you change selections in the tree the list of tabs available changes dynamically based on the content.</p>\n<h2 id="using-third-party-plugins"><a href="#using-third-party-plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Third Party Plugins</h2>\n<p><strong>hawtio</strong> is fully pluggable, and allows to integrate with custom plugins, as if they are out of the box. There is different approaches how you can install and use custom plugins with hawtio, which you can read more about at <a href="http://hawt.io/plugins/howPluginsWork.html">How Plugin Works</a>.</p>\n<h2 id="using-hawtio-maven-plugins"><a href="#using-hawtio-maven-plugins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using hawtio Maven Plugins</h2>\n<p><strong>hawtio</strong> offers a number of <a href="http://hawt.io/maven/">Maven Plugins</a>, so that users can bootup Maven projects and have hawtio embedded in the running JVM.</p>\n<h2 id="trying-snapshot-builds"><a href="#trying-snapshot-builds" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Trying SNAPSHOT builds</h2>\n<p>The <strong>hawtio</strong> project has a CI server which builds and deploys daily builds to a <a href="https://repository.jboss.org/nexus/content/repositories/fs-snapshots/io/hawt">Maven repository</a>. For example to try the latest build of the \'hawtio-default\' WAR you can\ndownload it from the <a href="https://repository.jboss.org/nexus/content/repositories/fs-snapshots/io/hawt/hawtio-default">Maven repository</a>.</p>\n<h2 id="further-reading"><a href="#further-reading" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Further Reading</h2>\n<ul>\n<li><a href="http://hawt.io/articles/index.html">Articles and Demos</a></li>\n<li><a href="http://hawt.io/faq/index.html">FAQ</a></li>\n<li><a href="http://hawt.io/contributing/index.html">How to contribute</a></li>\n<li><a href="http://hawt.io/community/index.html">Join the hawtio community</a></li>\n</ul>',frontmatter:{title:"Get Started"}}},pathContext:{slug:"/docs/get-started/"}}}});
//# sourceMappingURL=path---docs-get-started-a34ddc51bc8aa77b6f9b.js.map
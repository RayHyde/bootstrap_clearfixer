<h2>Clearfixes for Bootstrap 3 columns</h2>

<p>When you are using columns in Bootstrap, you need to clear to prevent them from mis-aligning. And after how many columns you clear depends on your responsive width.</p>

<p>For instance, if you have a number of thumbnails, you might want two next to each other on a smartphone, four on a tablet and six on a desktop. You do this by giving them Bootstrap's grid classes: </p>

<code>&lt;div class="col-lg-2 col-md-2 col-sm-3 col-xs-4"&gt;</code>

<p>This ensures you have the right number of thumbnails next to each other on each device. But... if one thumbnail is higher than the other, the columns mis-align. To prevent this, you insert a clearfix div that is only visible at the right window size:</p>

<code>&lt;div class="clearfix visible-xs-block""&gt;&lt;/div&gt;</code><br>
or<br>
<code>&lt;div class="clearfix visible-md-block"&gt;&lt;/div&gt;</code><br>
etc. </p>

<p>The guys at Tutorialrepulic.com explain it quite well.</p>

<p><strong>This plugin automatically creates the divs for you on the fly, based on your settings.</strong></p>


<p>See it in action: <a href="http://rayhyde.github.io/bootstrap_clearfixer/">http://rayhyde.github.io/bootstrap_clearfixer/</a> </p>

<h2>My Playground</h2>
<p>This versatile jQuery plugin I made because including clearfixes by hand is accident-prone and difficult in CMS environments. It is project is part of my Playground - a collection of fun (and dare I say it: clever) stuff I made in the past, from jQuery games and plugins to CSS animation tricks.</p>
<p>Please drop in on my portfolio site <a href="http://www.rayhyde.nl">www.rayhyde.nl</a>!</p>
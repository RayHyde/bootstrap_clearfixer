* Plugin name:	jquery.bootstrap_clearfixer.js
* Version:			1.0
* Description:	inserts "clearfix visible" divs into bootstrap columns
* Website: 			generic jQuery plugin
* Version:			16-12-2015
* Author:				Ray Hyde - www.rayhyde.nl


Clearfixes for Bootstrap 3 columns

When you are using columns in Bootstrap, you need to clear to prevent them from mis-aligning. And after how many columns you clear depends on your responsive width.

For instance, if you have a number of thumbnails, you might want two next to each other on a smartphone, four on a tablet and six on a desktop. You do this by giving them Bootstrap's grid classes:

<div class="col-lg-2 col-md-2 col-sm-3 col-xs-4">

This ensures you have the right number of thumbnails next to each other on each device. But... if one thumbnail is higher than the other, the columns mis-align:

To prevent this, you insert a clearfix div that is only visible at the right window size:

<div class="clearfix visible-xs-block"></div>

or

<div class="clearfix visible-xs-block"></div>

etc. 

The guys at Tutorialrepulic.com explain it quite well.


How to use this plugin

1. Link the files you need
Include the jQuery script at the bottom of your page, e.g. through a CDN:
<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>

Then include the minimized version of the script:
<script src="[path to your script]/jquery.bootstrap_clearfixer.min.js"></script>

Change [path to your script] to where it resides, eg "js".
2. Call the plugin

Then initialize the plugin, telling it in which element it needs to run:

<script>
	$(<containing element here, e.g. "#photos">).bootstrapClearfixer({
		// clear columns after every Xth columns. Fill in the
		// column numbers below for each bootstrap size
			lg: 6,
			md: 6,
			sm: 4,
			xs: 3           
	});

	// a second container:
	$(<containing element here, e.g. "#photos2">).bootstrapClearfixer({
			lg: 4,
			md: 4,
			sm: 3,
			xs: 2           
	});
</script>

This versatile jQuery plugin I made as including clearfixes by hand is accident-prone and difficult in CMS environments. It is part of my Playground - a collection of fun stuff I made in the past, from jQuery games to CSS animation tests.

Please drop in on the playground section of my portfolio site www.rayhyde.nl!

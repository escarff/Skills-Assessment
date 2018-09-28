This project was broken up into  three phases: the planning phase, the markup and styling phase, and the scripting & animating phase.

#The Planning Phase
When starting this project I first looked at the mock up and visually broke it up into different Sections
so that I could plan how I would write the mark up and style everything. I saw that layout as two separate sections
1. The Hero section. This section held the hero images, the title text, the red bar, and the video player.
2. The content section which consisted of the Grid of images and the copy.

#The Markup and Styling Phase
When had a plan and was ready to start coding it out I Installed Gulp and ran the command from the README file but when I
ran Gulp I was getting an error saying it couldn't find @babel/core. With a little research on the internet I found that
there was an issue with a new version of babel and I was able to find a command that would fix the issue. After that Gulp
worked great and was compiling all of my SASS and JS files.

Once I was able to get Gulp working I started setting up my file structure. I created three new SASS files one for each of the two sections and another for the typography or the styles that would be applied to the different text elements. I used the main.sass file to import all of the sass files to be compiled into the minified css file that is linked to the index.html file.

When writing the markup I went down the mockup image putting each element in according to the way I first planned. Starting with the hero section I knew I wanted to use flexbox to position the title and subtitle in the middle and I planned on using the hero images as background-images for the hero section. I planned to use the ::after pseudo element on the hero section to place the red bar, but because this section was using flexbox it didn't position the bar under the hero section. To fix this I went back to the HTML and added a div between the hero section and the content section which I gave a height of 3rem and a background color of red, it also gave me a place to put the video player so that it would be in the center of the layout.
When writing the markup for the content section I broke it up into two divs one that would hold the grid of images and one the would hold the paragraphs and watermark image, and I used flexbox position them next to each other and give them each an equal amount of space. The image grid area I used css grid to try and layout the images as they were on the mockup, I set up a grid template on the parent div and then placed each image on the grid by specifying which grid column and grid row line they started and ended at. I feel that there is probably a better way to lay them on the grid and also how to get some images to not take up a whole row like the mockup show.
The copy area of the content section put the title in a div and then all of the paragraphs in another div and then I put the watermark as an image inside the content copy div so that I could control each section individually if needed. Putting the title of the copy section in a div allowed me to use the ::after pseudo element to make the black line that was between the title and the paragraphs. Having the watermark as an image element allowed me to absolutely position it, set the z-index to -1 so it was behind the copy, and lower the opacity of it without effecting the opacity of the title and copy opacity.

#The Scripting and Animating stage
During this stage I realized early on that it used jQuery but there wasn't any jQuery linked to the index file, so I went to jQuery.com and linked to the CDN. I had to do a little research on the syntax of jQuery and other feature so that I could get the hero image to change on page load and also how the trigger animations when scrolling. I found jQuery.com's documents and other message boards very helpful here. With my understanding of JavaScript I found jQuery pretty easy to grasp.
To randomize the hero image I created an array of the three hero images and the used the Math.floor(Math.random) times the length of the array function to randomly select an image. From my research this appears to be a basic and easy way to accomplish it.
To create the animations I used CSS to transform the position and opacity of the elements that I was going to animate and also set a transition on them. Using jQuery I used the .scroll() function to change the transform and the opacity as the page started to scroll. This worked great for the video player, but for the other elements they animated too soon so I had to set a point of how far the window has to scroll before the grid elements and the copy animated. Using the window.pageYOffset I was able to have the grid and copy animate after the page scrolled 350px. This worked well for the copy, but it animated all of the images at the same time. With a little research I was able to create a loop that delayed the time each image in the grid would animate.

I enjoyed this Skill Assessment and with some research I completed it to the best of my ability. I feel that it is closest to the mock up I can make it right now. 

# About this project #
This is just a small app that I made while following a "30 projects in 30 days" routine. 
the project itself gave a general guideline, and there was a video however I managed to complete this before watching it so
the code here will most likely not look anything like the video. This is intentional; I want to focus on doing it myself and then
if I DO need help on something, I can go back and watch a certain part.

# Some useful things I did #
### Javascript ###
 - Since the project is small, I could have just hard coded the "keys" into the html and then only used js for the effects
 - however since I always try to build as if it could get bigger, I decided to use ```document.createDocumentFragment()``` to 
  append my dynamically created elements to, and THEN append the fragment to the DOM. 
   - This helps if you wanted to, say, add every key on your keyboard as a musical note.
   - Not only do you save time by not having to hard code the HTML, but also by not adding more ```document.createElement``` lines.
### CSS ###
 - My CSS is structured by section, and I'm trying to get better at refactoring it in such a way that there are less redundant lines,
   - That is to say, I want to avoid having ```color: #fff``` on more than one line, or multiple selectors that only remove margins, etc.
  

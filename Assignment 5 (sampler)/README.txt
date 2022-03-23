Hello Professor Allison,

I got everything to work expect for the sliders. For some reason I 
couldn't get p5 to detect my mouse when setting the values with the 
sliders. I'm not really sure why this was happening I tried many of 
ways to initalize the function (reference below) but to no success.
Maybe the code will work on your end since the methods i used you 
also used in the lecture videos but i couldn't get it to work on my
machine. I went ahead and still recorded a video of the program playing 
sound with the affects manually changing the values. Finally, if you 
realize my mistake please let me know for future reference and peace 
of mind because I spent way too long trying to resolve this problem.

slider.mouseReleased (() => { 
    delay.delayTime.value = slider.value();  
})

slider.mouseReleased = function () { 
    delay.delayTime.value = slider.value();   
}

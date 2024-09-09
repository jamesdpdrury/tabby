// script.js

// Add a random float effect to the text
document.querySelectorAll('.floating-text').forEach(text => {
    const floatEffect = () => {
        const randomX = (Math.random() * 20) - 10; // random x between -10 and 10
        const randomY = (Math.random() * 20) - 10; // random y between -10 and 10
        text.style.transform = `translate(-50%, -50%) translate(${randomX}px, ${randomY}px)`;
    };

    setInterval(floatEffect, 3000); // change position every 3 seconds
});



  // Listen for messages from the iframe
  window.addEventListener('message', function(event) {
    var data = event.data;

 // Check if the data is of expected type/format
if (typeof data === 'object' && data !== null) {
    // Update the content of the divs with the received data
    document.getElementById("title").innerHTML = '<h2>' + (data.title || '') + '</h2>';

    document.getElementById("child_one").innerHTML = '<h3>' + (data.one_name || '') +
        ((data.one_name && data.one_age) ? '<br><span>Age ' + data.one_age : '') + '</span></h3><span>' + (data.one_item || '') + '</span>';

    document.getElementById("child_two").innerHTML = '<h3>' + (data.two_name || '') +
        ((data.two_name && data.two_age) ? '<br><span>Age ' + data.two_age : '') + '</span></h3><span>' + (data.two_item || '') + '</span>';

    document.getElementById("child_three").innerHTML = '<h3>' + (data.three_name || '') +
        ((data.three_name && data.three_age) ? '<br><span>Age ' + data.three_age : '') + '</span></h3><span>' + (data.three_item || '') + '</span>';

    document.getElementById("child_four").innerHTML = '<h3>' + (data.four_name || '') +
        ((data.four_name && data.four_age) ? '<br><span>Age ' + data.four_age : '') + '</span></h3><span>' + (data.four_item || '') + '</span>';
}
 // Add the 'level' data as a class to the div with id="title" and append the word "level"
 var titleDiv = document.getElementById("title");
 if (data.level) {
     titleDiv.classList.add("level" + data.level);
 }


  });


   // Function to reload the iframe every 60 seconds
   function reloadIframe() {
    const iframe = document.getElementById('data-iframe');
    iframe.src = iframe.src; // This forces the iframe to reload
}

// Set an interval to reload the iframe every 60000 milliseconds (60 seconds)
setInterval(reloadIframe, 5000); // 60000 milliseconds = 60 seconds
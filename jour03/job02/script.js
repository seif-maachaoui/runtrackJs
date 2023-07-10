$(document).ready(function() {
    // Get the rainbow images and message element
    let rainbowImages = $('.rainbow-image');
    let messageElement = $('#message');
    const correctOrder = [1, 2, 3, 4, 5, 6];
  
    // Check if the rainbow images are in the correct order
    function checkRainbowOrder() {
      let currentOrder = rainbowImages.map(function() {
        return parseInt($(this).find('img').data('position'));
      }).get();
  
      return arraysEqual(currentOrder, correctOrder);
    }
  
    // Compare two arrays for equality
    function arraysEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        return false;
      }
  
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
  
      return true;
    }
  
    // Display the appropriate message
    function displayMessage(isCorrect) {
      if (isCorrect) {
        messageElement.text('Vous avez gagné');
      } else {
        messageElement.text('Vous avez perdu');
      }
    }
  
    // Shuffle the rainbow images
    $('#shuffle-button').click(function() {
      rainbowImages.sort(function() {
        return Math.random() - 0.5;
      }).detach().appendTo('#rainbow-container');
  
      rainbowImages.each(function(index) {
        $(this).find('img').data('position', index + 1);
      });
  
      messageElement.text('');
    });
  
    // Enable sortable functionality using jQuery UI Sortable
    $('#rainbow-container').sortable({
      axis: 'x',
      containment: 'parent',
      tolerance: 'pointer',
      stop: function(event, ui) {
        let isCorrect = checkRainbowOrder();
        displayMessage(isCorrect);
      }
    });
  });
  
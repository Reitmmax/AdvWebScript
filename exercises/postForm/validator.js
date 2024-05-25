"use strict";
      $('#opt01').focus(); // Focus on #opt01 when the page loads

      $('#store').submit(function(event) {
        // Get the values of input fields
        const opt01 = $('#opt01').val();
        const opt02 = $('#opt02').val();
        const opt03 = $('#opt03').val();

        // Set a flag for validation
        let isValid = true;

        // Validation for opt01
        if (opt01 === '' || isNaN(opt01) || opt01 === undefined || Number(opt01) < 0) {
          isValid = false;
          $('#mess').text('Please enter a number.');
          $('#01').text('*');
          $('#opt01').focus();
        } else {
          $('#01').text('');
        }

        // Validation for opt02
        if (opt02 === '' || isNaN(opt02) || opt02 === undefined || Number(opt02) < 0) {
          isValid = false;
          $('#mess').text('Please enter a number.');
          $('#02').text('*');
          $('#opt02').focus();
        } else {
          $('#02').text('');
        }

        // Validation for opt03
        if (opt03 === '' || isNaN(opt03) || opt03 === undefined || Number(opt03) < 0) {
          isValid = false;
          $('#mess').text('Please enter a number.');
          $('#03').text('*');
          $('#opt03').focus();
        } else {
          $('#03').text('');
        }

        // Prevent form submission if validation fails
        if (!isValid) {
          event.preventDefault();
        }
      });
    
    
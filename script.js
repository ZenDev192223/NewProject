// Form validation and event handlers
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        // onfocus and onblur for focus management
        [nameInput, emailInput, messageInput].forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '#0056b3';
            });
            input.addEventListener('blur', function() {
                this.style.borderColor = '#ccc';
                validateField(this);
            });
        });

        // oninput for real-time validation
        nameInput.addEventListener('input', function() {
            validateName();
        });
        emailInput.addEventListener('input', function() {
            validateEmail();
        });
        messageInput.addEventListener('input', function() {
            validateMessage();
        });

        // onclick for submit
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm()) {
                alert('Form submitted successfully!');
                form.reset();
                clearErrors();
            }
        });

        function validateField(field) {
            if (field === nameInput) validateName();
            else if (field === emailInput) validateEmail();
            else if (field === messageInput) validateMessage();
        }

        function validateName() {
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required.';
            } else {
                nameError.textContent = '';
            }
        }

        function validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required.';
            } else if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address.';
            } else {
                emailError.textContent = '';
            }
        }

        function validateMessage() {
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required.';
            } else if (messageInput.value.length < 10) {
                messageError.textContent = 'Message must be at least 10 characters.';
            } else {
                messageError.textContent = '';
            }
        }

        function validateForm() {
            validateName();
            validateEmail();
            validateMessage();
            return !nameError.textContent && !emailError.textContent && !messageError.textContent;
        }

        function clearErrors() {
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
        }
    }

    // Example onmouseover for demo (though not recommended for accessibility)
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.opacity = '0.8';
        });
        img.addEventListener('mouseout', function() {
            this.style.opacity = '1';
        });
    });
});
class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.setupForm();
    }

    setupForm() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    async handleSubmit() {
        const formData = {
            name: this.form.querySelector('input[name="name"]').value,
            email: this.form.querySelector('input[name="email"]').value,
            message: this.form.querySelector('textarea[name="message"]').value
        };

        try {
            // Here you would typically send the data to your server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', formData);
            
            // Show success message
            this.showMessage('Thank you for your message! We will get back to you soon.', 'success');
            
            // Reset form
            this.form.reset();
        } catch (error) {
            this.showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
        }
    }

    showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Remove any existing messages
        const existingMessage = this.form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        this.form.insertAdjacentElement('beforebegin', messageDiv);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Initialize contact forms when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        new ContactForm(form.id);
    });
}); 
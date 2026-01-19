# Recipe Haven

A delightful recipe website sharing authentic, tested recipes from home cooks worldwide. This site seamlessly incorporates accessibility features as a hidden gem, ensuring an inclusive experience for all users without overt accessibility messaging.

## Features

- **Authentic Recipes**: Curated collection of real recipes with detailed ingredients and step-by-step instructions.
- **Recipe Index**: Organized table of recipes by cuisine, prep time, and servings.
- **User Submissions**: Form for sharing personal recipes with validation.
- **Subtle Accessibility**: Integrated WCAG-compliant features like semantic HTML, keyboard navigation, and screen reader support, designed to enhance usability naturally.

## Pages

- **Home (index.html)**: Welcome page with popular recipe highlights.
- **About (about.html)**: Story of Recipe Haven and cooking philosophy.
- **Recipes (blogs.html)**: Full recipe collection with detailed instructions.
- **Contact (contact.html)**: Recipe submission form.

## How to Run

1. Open `index.html` in your web browser.
2. Browse recipes using keyboard or mouse navigation.
3. Submit your own recipes via the contact form.

For a local server:
- Python: `python -m http.server 8000`
- Node.js: Install `http-server` and run `http-server`

## Accessibility

While the site appears as a standard recipe blog, it follows WCAG 2.2 guidelines subtly:
- **Perceivable**: Descriptive alt text for recipe images, clear labels.
- **Operable**: Full keyboard navigation, focus management.
- **Understandable**: Intuitive recipe structure, predictable interactions.
- **Robust**: Semantic markup for assistive technologies.

## Technologies

- HTML5
- CSS3
- JavaScript

## Tips

- Test keyboard navigation (Tab key) through recipes.
- Use screen readers to experience natural recipe reading.
- Form validation provides helpful feedback for submissions.
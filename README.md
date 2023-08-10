# react-dev-portfolio

A project portfolio made with React

## About the project:

This was a relatively straight-forward project-- I wanted to rework my dev portfolio using React instead of HTML and CSS as my original one was.

The moving colored lines are SVGs animated using keyframes to rotate their orientation through a transform. The timings are offset to have the lines overlap each other at various times.

The tilt animations on the images on the page are done using a library called `react-parallax-tilt` and the slide in animations on scroll are from a library `react-awesome-reveal`.

The dark mode was accomplished by having a darkMode prop passed to each component and conditionally applying a "dark" class where needed to change the applied css style. The switch toggles the bool value of the darkMode prop.

Care was taken to make the page responsive to viewport sizes down to phone screen widths. This was done using media query breakpoints.

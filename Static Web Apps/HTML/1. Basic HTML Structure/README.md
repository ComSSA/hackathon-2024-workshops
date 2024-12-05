# 1. Root HTML File


This `README.md` file provides a brief yet comprehensive explanation of what users can expect to learn in the "1. Root HTML File" sub-directory. It explains the key elements of the root HTML file, including the `<html>`, `<head>`, and `<body>` tags, as well as how to make the page responsive.


## Overview

In this sub-directory, you'll learn about the basic structure of a root HTML file, which serves as the foundation of any web page. We will focus on three key sections:

1. **The `<html>` Tag**
2. **The `<head>` Tag**
3. **The `<body>` Tag**

Additionally, we'll cover how to set up a responsive design by including the necessary meta tags in the `<head>` section, ensuring that your web page looks great on both desktop and mobile devices.

## What You Will Learn

### 1. The `<html>` Tag
The `<html>` tag is the root element that wraps all the content of your HTML page. It defines the document type and is the top-level container for all HTML elements, including the `<head>` and `<body>` sections.

### 2. The `<head>` Tag
The `<head>` tag contains metadata and links to external resources (such as CSS stylesheets, fonts, and JavaScript files). It is crucial for setting up various page properties, like the page's title and description.

Key concepts covered:
- **The `<meta>` Tag for Character Encoding**: Ensuring proper display of text.
- **The `<meta>` Tag for Viewport Settings**: Crucial for responsive web design, the viewport meta tag tells the browser how to scale the page on different devices.
- **Linking External Resources**: Connecting to CSS files for styling.

### 3. The `<body>` Tag
The `<body>` tag contains all the content visible to users, including text, images, forms, and other interactive elements. This section is where the majority of your web page content will be placed.

Key concepts covered:
- Adding content like headings, paragraphs, links, and images.
- Structuring the layout of your page using HTML elements.

### 4. Responsive Design Basics
To make sure your web page is responsive, we'll add a `<meta>` tag in the `<head>` to control the viewport. This will make sure the page adapts to different screen sizes, especially mobile devices.

Example of a responsive `<meta>` tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
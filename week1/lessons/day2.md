# Week 1 Day 2

## Overview
1. [Review of Dev Env](#review-of-dev-env)
2. [HTML](#html)
3. [CSS](#css)
4. [Project Overview](#project-overview)

## Review of Dev Env
- Ensure everyone's dev enviroment is set up
- Quick guide around VS Code
  ![overview of vs code ui](https://github.com/kevinatown/nupaths_web_app/blob/main/resources/vs_code_overview.png?raw=true)
- Questions?

## HTML
- HTML Structure
  + Hyper Text Markup Language is "Markup" used to display elements in a browser.
  + HTML is not a programming language
  + HTML is not responsible for styling or interaction, but for displaying the content
  + HTML is nested (like XML)
    * the nesting is important:
      - for combinining elements in groups (and using CSS for styling)
      - displaying elements with context to their parents, grandparents, or syblings
      - Helps the bowser specify the styling from CSS
    ![nested html elements](https://github.com/kevinatown/nupaths_web_app/blob/main/resources/nested_html_example.png?raw=true)
  + HTML5 added more tags that contain context to their purpose
- Semantic HTML
  + **Semantic HTML Tags** have extra context to them. This extra context helps the developer and the browser know more about **PURPOSE** the element is used.
  + Example of semantic elements:
    * `article` - just like a magazine/newspaper/blog artilce, should contain information that stands alone by itself (like you can send a newspaper or magazine article to someone, you shouldnt have to provide any extra infomation). `div` with(or without) `p` tags are a non-semantic version of the `article` tag
    * `section` - similar to article however, it does not need to live on it's own. (`article`'s can have chapters :).
    * `strong` - the semantic way to explain that something should be conveyed **stongly**. The non-semantic version will be `b`, which only adds the bold style to the content. `strong` also conveys to the developer and browser (the end user's access) that the content is not just visualy bold but also of importance.
    * `em` - the semantic way to explain that something should be conveyed _empatically_. The non-semantic version will be `i`, which only adds the bold style to the content. `em` also conveys to the developer and browser (the end user's access) that the content is not just visualy italicised but also should be emphasized.
    * `header` - the header of the page (see below for the page structure)
    * `footer` - the footer of the page (see below for the page structure)
    * `main` - the main content of the page (see below for the page structure)
    ![mock up with semantic HTML](https://github.com/kevinatown/nupaths_web_app/blob/main/resources/header_main_footer.png?raw=true)

  + Examples of non-semantic elements:
    * `div` - the `div` tag has become the swiss army knife of stlying, however because of this is often over used.
    * `b` - adds bold stlying, which can also be done with CSS or semanticaly done with `strong` (see above)
    * `i` - adds italicised styling, which can also be done with CSS or semanticaly done with `em` (see above)
    * `span` - often used for text to `inline` it. Can also be accomplised with CSS
  + [Further Reading about semantic tags](https://www.w3schools.com/html/html5_semantic_elements.asp) 
- [Overview of HTML tags](https://www.w3schools.com/tags/default.asp)
- Questions?

## CSS
- Overview of CSS
- Writing CSS
- CSS Selectors
- Specifing CSS
- Questions

## Project Overview
- Rubric
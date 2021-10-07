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
  + CSS (Cascading Style Sheet) are used to apply styling to a rendered HTML page
  + HTML does NOT apply styling
  + Most browsers have a default styling for old HTML tags `h1`, `ol`, `table`, `b`, `i`
    * These stylings *ARE NOT THE SAME ON EVERY BROWSER!!*
    * Check out [Warren Buffet's Berkshire Hathaway site](https://www.berkshirehathaway.com/)
      - You'll notice there are no CSS files downloaded
      - If you vist this site in different browser you may see slightly different renderings.
      - This is a throwback to the early days of the internet.
- Writing CSS
  + CSS can be written inline HTML, in a `<style>` tag, or in a sperate CSS file (there are other ways to write CSS/styling, but for now let's keep with these 3 :)
  ![mock up with semantic HTML](https://github.com/kevinatown/nupaths_web_app/blob/main/resources/css_overview1.png?raw=true)
  + CSS is written with the selector, brackets, property, and value, such as:
    ```css
      selector {
        property: value;
      }
    ```
- CSS Selectors
  + CSS selectors tell the browser which element to "select" and apply the styling properties & values to.
  + There are many different types of selectors, but we'll stick to 3 for now:
    1. Id
      - There should only be 1 ID per page/context, and should not be reused
      - They should relate to **ONE** specific element
      ```html
        <style type="text/css">
          #main-title {
            color: #0000ff;
          }
        </style>
        <h1 id="main-title">My title<</h1>
      ```
    2. Class
      - These should be reused
      - A good idea is to make a bunch of generic classes and reuse them (bootstrap does this) (e.g. setting text colors, font-size, padding, etc)
      ```html
        <style type="text/css">
          .blue-txt-clr {
            color: #0000ff;
          }
        </style>
        <h1 class="blue-txt-clr">My title<</h1>
      ```
    3. Tag
      - Tag selectors should be used for global styles. (e.g. you want all tags to have the same font or you want to set a global text color or background color).
       ```html
        <style type="text/css">
          h1 {
            color: #0000ff;
          }
        </style>
        <h1>My title</h1>
      ```
  + In the above examples all of the CSS will do the same things. The importance is to pick the correct selector for the job.
    * Being too general or specific can create visual bugs and heartaches, so be careful!
- Specifing CSS
  + CSS uses both HTML's nesting and specificity for determining styling.
  + (I'll add more on this soon)
- Questions

## Project Overview
- Rubric
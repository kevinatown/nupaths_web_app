# Project 1 Outline

## Initial Dev Enviroment Set Up
1. [Install Visual Studio Code](https://code.visualstudio.com/Download)
    - make sure you get the right version for your machine (32 v 64)
        ![download vs code](https://github.com/kevinatown/nupaths_web_app/blob/main/resources/vs_code_download.png?raw=true)
2. [Install Node.js](https://nodejs.org/en/download/)
    - Pick the LTS (node-v14.x.x)
    - make sure you get the right version for your machine (32 v 64)
        ![download node.js](https://github.com/kevinatown/nupaths_web_app/blob/main/resources/node_js_download.png?raw=true)

## Project Enviroment Set Up
1. [Download This Repository](https://github.com/kevinatown/nupaths_web_app)
    - Click on the breen "Code" button
    - Click on 'Download zip'
        ![download zip image](https://github.com/kevinatown/nupaths_web_app/blob/main/resources/github_zip_download.png?raw=true)
    - Unzip the zipped directory
    - Move the directory to a location of your choosing (your new workspace)
2. Open VS Code
    - you will be given an option to pick a theme (dont stress too much we can always change this later)
3. Click on File in the top left
4. Find your folder (directory) where your code lives.
5. Click on open
6. Navigate to and open the directory downloaded in step 1.
7. Open the intergrated VS Code terminal
    - View > Terminal
    - The terminal will open at the bottom
    ![terminal overview](https://github.com/kevinatown/nupaths_web_app/blob/main/resources/terminal.png?raw=true)
    (**NOTE:** Your terminal will look different and may have a longer path
        e.g.)
        ```cmd
            C:\Users\<USER_NAME>\<PATH>\<TO>\project
        ```

8. Installing the devlopment dependencies
    - Click in the terminal then write or type the following:
    ```cmd
        npm install
    ```
    - This will install node's `http-server` (which i was using) and someother tools to allow for hot-reloading, so that your web apps will reload on all CSS, HTML, and JS changes!
    (**NOTE:** You only really need to run `npm install` once for each project, however it doesnt hurt to run it again.)
    ![npm install output](https://github.com/kevinatown/nupaths_web_app/blob/main/resources/npmi_output.png?raw=true)

## Run the project!
1. In the teminal run:
    ```cmd
        npm start
    ```
    - This _may_ open up your default browser
    - If it doesnt or it's not you browser of choice (*cough* IE, Edge, Safari *cough*)
    - Then copy either the top `Local` or `External` Access URL into you browser of choice
    (**NOTE:** Inculde the port number in the URL: `http://<URL>:<PORT>`)
    (**NOTE:** The `Local` URL can only be used on the local machine (i.e. your PC))
    (**NOTE:** The `External` URL can be used on any machine on your network!!(e.g. your mobile phone -- this is great for testing websites on your phone!!))
2. Feel free to code away! Also notice that ever time you save (hotkey `ctrl + s` (or `ctrl + k + s` or save all) your website should update!)

## Stopping the App
1. In the teminal pane's top left you should see `Node`
    - Either right click on that to expose the context menu and click `Kill Terminal`
    - OR Click on the trash can icon
    (**NOTE:** If you click on the trash can icon you'll have to reopen another terminal [see step 6 in Project Enviroment Setup](#project-enviroment-set-up)) 

## Other Tools
- [Slack](https://slack.com/downloads)
    - Slack is a multiplatform IM service that allows for sending files, code, images, etc
    - I'll create a slack group for us and send out invites this week.
    - It's a great way to communicate asynconously!
    - Also it's built using JS, CSS, and HTML!!
- [GitHub](https://github.com/)
    - GitHub is one of many remote `git` repositories
    - `git` is currently the most widely used versioning tool for developers/engineers
    - We may not use `git` in this class but I will share a lot on it
    - I do recommend getting an account as it's something that you can use to show off you code!

## Useful Links
- (w3Schools)[https://www.w3schools.com/]
- (w3Schools HTML Tag Reference)[https://www.w3schools.com/tags/default.asp]
- (w3Schools HTML CSS Reference)[https://www.w3schools.com/css/default.asp]
- (MDN)[https://developer.mozilla.org/en-US/]
- (StackOverflow)[https://stackoverflow.com/] (**NOTE:** Best way to use stackoverflow is to just google the question and look for the stackoverflow answer -- you might have to improve your googling!)



## Useful things for kevin:
- https://browsersync.io/docs
    - live server tool
# Brainstation 3D - Team Website Template

## Setup
### 1. Team Dynamics

1. Pick someone into your time to host the main repository on their GitHub account.

2. Create the git repository on GitHub. It doesn't matter if the repo is public or private. **DON'T initialize the repository!**

3. Add your team members as collaborators to the repository.

4. Clone the repo to you and your team members' computers. 

   `git clone <<your_github_repo_url>>`

### 2. Production Github Account Setup

1. Contact the Lead Educator for the Web Development program to get the repo to clone from.

2. Send the GitHub username that will be pushing changes for your team. We will add you as a collaborator to this additional *production* repository.

3. Add the production repo as an another remote, apart from `origin` in your own local git directory

    ```bash
    $ git remote add production <<production_github_repo_url>>
    ```

4. Pull in the files from the `production` remote

    ```bash
    $ git pull production master
    ```

5. Ensure that the client works. You should see the site once everything is done.  

    To install the client & start it for *local development*, run:
    ```bash
    $ npm run setup:client
    ```

    The next time you develop for the client, you don't have to install it. Just start it:
    ```bash
    $ npm run start:client
    ```

    > **FYI**: The client contains npm packages **installed by default** so you can get ship your *minimum viable website* faster. They are listed in their respective `package.json` files and in the *Resources* section at the bottom of this README.

6. Add and commit the files

   ```bash
   # on master
   $ git commit -a -m "Initial files from the production repo"
   ```

7. Push the changes to your own GitHub account

   ```bash
   # on local master
   $ git push origin master
   ```

8. The other dev team members should now be able to do the following. Once completed, they should see the site running on their computer.

   ```bash
   # on their local master
   $ git pull
   $ npm run setup:client
   ```


### 3. Production Push

Early in the afternoon, do a push to the production repository (regardless of the current visual state).

First, merge your changes into the `master` branch. Once completed, test that your site is still working correctly. 

Lastly, push your changes to the `production` remote.

```bash
$ git push production
```

### 4. Publish to a live server
When the code is pushed to the production remote on GitHub, Netlify will build and deploy the client on Netlify servers, so you can see the site live!

> **Please allow a _minimum_ of 5 minutes for the build process to complete and publish your site on Netlify.**

#### Public Site Link
The URL for **YOUR TEAM's** public site is: `https://bstn-3d-{SEASON HERE}-{YEAR HERE}-team-{TEAM NUMBER HERE}.netlify.com`  
(For example: `https://bstn-3d-fall-2019-team-5.netlify.com`)

#### Debugging
- run a production react build locally (npm run build), serve it with the `LiveServer ` extension and try debugging it locally
- Use all of the debugging tools at your disposal:
  - React Developer Tools
  - Debugger Tab in the Browser
  - `console.log()` + the Browser Console and the `debugger;` statement
  - Inspect tool & Elements Tab in the Browser
- ask the Educators to check the Netlify build logs for any issues

## Resources
### Client (default installs)
- React: https://reactjs.org/docs/getting-started.html
- React Router: https://reacttraining.com/react-router/web/guides/quick-start
- React Helmet: https://github.com/nfl/react-helmet
- SASS: https://sass-lang.com/documentation
- nanoid: https://github.com/ai/nanoid
- Axios: https://github.com/axios/axios
- React Burger Menu: https://github.com/negomi/react-burger-menu
- React Context Menu: https://vkbansal.github.io/react-contextmenu/#/simple-menu
- React Headroom: https://kyleamathews.github.io/react-headroom/
- React Tabs: https://reactcommunity.org/react-tabs/
- Reaviz: https://github.com/jask-oss/reaviz (simple charting - installed by default)
- Tippy JS for Tooltips: https://atomiks.github.io/tippyjs/getting-started/
- React Modal: https://github.com/reactjs/react-modal
- React Select: https://react-select.com/home
- React Autosuggest: http://react-autosuggest.js.org/
- React Spring (animations): https://www.react-spring.io/docs/props/spring

#### Other Client Resources (not installed)
- Anime.js (animations): https://animejs.com/documentation/
- React Slick (carousel): https://react-slick.neostack.com/, http://kenwheeler.github.io/slick/
- Text Mask (input auto-formatting): https://github.com/text-mask/text-mask
- Recharts (charting): http://recharts.org/en-US (highly customizable)
- React Drag n Drop: https://github.com/atlassian/react-beautiful-dnd
- React Component Awesome List (install others you want to use as you please!): https://github.com/brillout/awesome-react-components

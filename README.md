# **Socializer - PP5**

Socializer was created to be able to share interests and hobbies with other people around the world at the same time you could use it as a productivity application with the notes functionality. You can also message and interact with other users.

This fictional site was created for Portfolio Project #5 (Advanced Front End) - Diploma in Full Stack Software Development Diploma at the [Code Institute](https://www.codeinstitute.net).

[View live website here](https://socializer-pp5-react-7dce002eea27.herokuapp.com/)

![Responsive design](images/mockup.jpg)

# **Project**

## Objective

The objective was to create a social media platform where you can share your experiences with other people and your hobbies and interests while keeping it productive with your notes.

## Site User's Goal

## Site Owner's Goal

As a site owner I wanted to connect people all around the world and see people share their experiences and interests.

## Project Management

### Github Project Board

I have been using the github project board for a bit but have not implemented everything I want to yet.
[Project Board](https://github.com/users/Jonathan97-web/projects/5).

### Database Schema

All the models have been set up in a separate DRF repository. Click [here](https://github.com/Jonathan97-web/socializer-api) to view the repository or [here](https://socializer-pp5-api-aa36f444d240.herokuapp.com/) to view the deployed API.

# **User Experience (UX)**

## Wireframes

I have not created any wireframes so far unfortunately due to time constraints and a lot of problems with the CDE.

## User Stories

I have not made any testing so far unfortunately

### Logged Out Site User

|                      |                                                                                             |         |
| :------------------: | :------------------------------------------------------------------------------------------ | :------ |
| As a Logged out User | I can log in so that I can interact fully with the site                                     | &check; |
| As a Logged out User | I can sign up so that I can interact fully with the site                                    | &check; |
| As a Logged out User | I can see a list of all posts so that I can see all posts that have been shared to the site | &check; |
| As a Logged out User | I can view a single post so that I can see single post details                              | &check; |
| As a Logged out User | I can view the top upcoming posts so that I know which posts have the highest going count   | &check; |
| As a Logged out User | I can view the popular profiles so that I can see who has the most followers                | &check; |
| As a Logged out User | I can view the details of an individual profile page so that I can see more profile data    | &check; |
| As a Logged out User | I can filter posts by category so that I can view only the posts I'm interested in          | &check; |
| As a Logged out User | I can search posts by title, profile, date or tag so that I can find one particular post    | &check; |
| As a Logged out User | I can view comments of an post so that I can see what other users think about the post      | &check; |

### Logged In Site User

|                     |                                                                                             |         |
| :-----------------: | :------------------------------------------------------------------------------------------ | :------ |
| As a Logged in User | I can log in so that I can interact fully with the site                                     | &check; |
| As a Logged in User | I can log out from the site so that no-one else can interact with the site using my details | &check; |

POSTS
| As a Logged in User | I can see a list of all posts so that I can see all posts that have been shared to the site | &check;
| As a Logged in User | I can view a single post so that I can see single post details | &check; |
| As a Logged in User | I can view the top upcoming posts so that I know which posts have the highest going count | &check; |
| As a Logged in User | I can view the feed page so that I can only see posts of profiles I follow | &check; |
| As a Logged in User | I can view the My posts page so that I can see only the posts i'm interested in or going to | &check; |
| As a Logged in User | I can view the details of an individual profile page so that I can see more profile data | &check; |
| As a Logged in User | I can see all the posts from one profile so that I can view all the posts of one profile easily | &check; |
| As a Logged in User | I can filter posts by category so that I can view only the posts I'm interested in | &check; |
| As a Logged in User | I can search posts by title, profile, date or tag so that I can find one particular post | &check; |
| As a Logged in User | I can create a new post so that I can promote an post in the town| &check; |
| As a Logged in User | I can edit my posts so that I can change the details or correct mistakes | &check; |
| As a Logged in User | I can delete my own posts so that I can remove posts from the site | &check; |
LIKES
| As a Logged in User | I can add interested to a post so that I can publicly display my interest in an post | &check; |
| As a Logged in User | I can remove interested to a post so that I can remove interest in an post if i change my mind | &check; |
| As a Logged in User | I can add going to an post so that I can publicly show that i plan to attend | &check; |
| As a Logged in User | I can remove going from an post so that I can remove going to an post if i no longer plan to attend | &check; |
COMMENTS
| As a Logged in User | I can view comments of an post so that I can see what other users think about the post | &check; |
| As a Logged in User | I can create a comment so that I can publicly show my thoughts about an upcoming post | &check; |
| As a Logged in User | I can edit my comments so that I can correct mistakes | &check; |
| As a Logged in User | I can delete a comment that I created so that I can remove comments as I see fit | &check; |
| As a Logged in User | I can delete a comment that I created so that I can remove comments as I see fit | &check; |
FOLLOW
| As a Logged in User | I can follow another user so that I can see their posts in my feed page | &check; |
| As a Logged in User | I can unfollow another user so that I can stop seeing their posts in my feed page | &check; |
REVIEWS
| As a Logged in User | I can view all posts that have happened so that I can see their average rating and review count | &check; |
| As a Logged in User | I can view all the reviews relating to a single post so that I can see other user's opinions of the post | &check; |
| As a Logged in User | I can post a review on a past post so that I can share my opinion on the post | &check; |
| As a Logged in User | I can edit my own reviews so that I can correct my comments | &check; |
| As a Logged in User | I can delete a review that I created so that I can remove reviewsI no longer want published | &check; |
PROFILES
| As a Logged in User | I can view the popular profiles so that I can see who has the most followers | &check; |
| As a Logged in User | I can view the profile page of another user so that I can see more details about that user | &check; |
| As a Logged in User | I can edit my own profile page so that I can add additional information for other users to see about me | &check; |
| As a Logged in User | I can change my username and password so that I can change my login details if I feel they are not secure | &check; |
| As a Logged in User | I can change my username and password so that I can change my login details if I feel they are not secure | &check; |
CHAT
| As a Logged in User | I can view messages in my profile page so that I can read messages other users have sent me | &check; |
| As a Logged in User | I can send a message to another user so that I can ask a question about an post they are hosting | &check; |

## Site Structure

Socializer is split up in two sections ,for a logged in user they see the logged in sections. A logged out user can see posts but not interact with them and they can sign in or sign up.

## Design Choices

- ### Color Scheme

The color scheme comes mostly from the moments walkthrough this will be changed later.

- ### Typography

I used the standard font that comes with the react package.

# **Existing Features**

- ## Navigation

I choose the navigation from the moments walkthrough mostly because its very clean and easy to navigate.

On accessing the site for the first time, the user is logged out and the following menu items are visible:

- Socializer Logo - On the far left hand side of the navigatin bar is the Happening brand logo. This is visible throughout the site to all user types and contains a link back to the homepage.
- Home - the first menu item, and the initial default start page, is 'Home', where all posts shared among the community are displayed.
- Authentication - You can see your profile and a sign out button if you're logged in, if not logged in it says sign in and sign up.

Once the user logs in, additional links become available to select:

- Feed - Logged in users can access the feed page where they can see posts of other profiles they follow.
- My posts - Logged in users can access the My posts dropdown menu where they can view either all the posts where they have clicked 'interested' or all the posts where they have clicked 'going'.
- Reviews - Logged in users can go to the reviews page and read reviews about posts
- Authentication - The icons within the authentication change once a user has logged in, and now display a link to the user's own profile page or a link to sign out of the site.
- Add post - Logged in users can access the post creation page to share their own posts to the site.

## Authentication

I have used the standard dj-rest/auth/registration user account authentication.

If a user has a Socializer user account, they can click on the Signin menu option in the Navigation Bar to sign into their account.

If the user wishes to sign out, once signed in, the sign out option becomes visible in the Navigation Bar for them to select.

- ## Homepage

There are two main react components which make up the Home posts page.

1. Popular Profiles Component
2. Posts

### Popular Profiles Component

The popular profiles component is a permanent feature across the entire site. It appears at the top of all pages. This component uses a filter to order all site users by followers count from highest to lowest. The users with the highest follower count are determined to be the most popular profiles and the top six are displayed within the popular profiles component.

# **Features Left to Implement**

# **Technologies Used - Frontend**

## Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML) - Provides the content and structure for the website.
- [CSS3](https://en.wikipedia.org/wiki/CSS) - Provides the styling for the website.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Provides interactive elements of the website
- [React.js](<https://en.wikipedia.org/wiki/React_(software)>) - Provides the base for the frontend components

## Frameworks & Software

- [React Bootstrap](https://react-bootstrap.github.io/) - A CSS framework that helps build solid, responsive, mobile-first sites
- [Balsamiq](https://balsamiq.com/) - Used to create the wireframes
- [Github](https://github.com/) - Used to host the repository, store the commit history and manage the project board containing user stories and bug reports.
- [Heroku](https://en.wikipedia.org/wiki/Heroku) - A cloud platform that the application is deployed to.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Used to test site performance.
- [Responsive Design Checker](https://www.responsivedesignchecker.com/) - Used for responsiveness check across devices.
- [Favicon](https://favicon.io/) - Used to create the favicon.
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to debug and test responsiveness.
- [Cloudinary](https://cloudinary.com/) - A service that hosts image files in the project.
- [My Free Logo Maker](https://myfreelogomaker.com/explore) - Used to create the Happening brand logo
- [ColorSpace](https://mycolor.space/?hex=%23081045&sub=1) - Used to create the colour palette
- [HTML Validation](https://validator.w3.org/) - Used to validate HTML code
- [CSS Validation](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code
- [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code

## Libraries

- [NPM React-star-rating](https://www.npmjs.com/package/react-simple-star-rating) - A simple react component for adding a star rating to your project.

# Testing

Testing has not been made unfortunately yet

# Deployment

### Deployment to Heroku

Once you have created a new gitpod workspace and set up the new project, you are ready to deploy to Heroku.

1. In your heroku account, select Create New App, and give it a unique name related to your project.
2. Select a region corresponding to where you live and click 'Create App'.
3. Head into the 'Deploy' tab select GitHub as the 'deployment method', find your project repository and click 'Connect'.
4. Click 'Deploy branch' to trigger Heroku to start building the application.
5. Once you see the message saying 'build succeeded' you can click 'Open App' to see your application in the browser.

### Connect React Frontend to the API backend

Once you have set up the workspace and done a basic deploy to Heroku, you can connect the react workspace to your API, in order to send data to the API

1. In the Heroku dashboard, go into the API application settings
2. In 'Settings' add a new Config Var called 'CLIENT_ORIGIN' and set that to the URL for your deployed React application. In my case, this would be [https://socializer-pp5-react-7dce002eea27.herokuapp.com/](https://socializer-pp5-react-7dce002eea27.herokuapp.com/).
3. Then add another Config Var called 'CLIENT_ORIGIN_DEV' and enter the URL of your Gitpod preview link, remembering to remove the trailing slash at the end. Gitpod occasionally changes this URL so keep an eye on it, as you are working on your project.
4. Go back into your frontend Gitpod workspace, and install the Axios library using the command 'npm install axios'.
5. Create a folder called 'API' and inside it create a file called 'axiosDefaults'.
6. import axios at the top of the file
7. Define your baseURL which is the unique URL of your deployed API project. In my case this would be [https://socializer-pp5-api-aa36f444d240.herokuapp.com/](https://socializer-pp5-api-aa36f444d240.herokuapp.com/)
8. Set the content-type header to multi-part/form-data as the API will need to deal with images as well as text in it's requests.
9. In order to avoid any CORS issues, set withCredentials to True.
10. Import this file into App.js to be used across all pages

### Fork this Project Repository

It is possible to make an independent copy of a GitHub Repository by forking the GitHub account. The copy can then be viewed and it is also possible to make changes in the copy without affecting the original repository. To fork the repository, follow these steps:

1. After logging in to GitHub, locate the repository. On the top right side of the page there is a 'Fork' button. Click on the button to create a copy of the original repository.

### Clone this Project Repository

A Git clone creates a linked copy of the project that will continue to synchronize with the original repository. In order to create a clone, you can click on the 'Code' button inside the selected repository and then select the 'Clone' option from the dropdown list.

# Credits

- The mockup images on the website are from the moment's walkthrough currently
- The messaging and topics function are primarily from [QuiltingCode](https://github.com/quiltingcode) I have remade them a bit to fit my purpose, the basic readme layout is also from their PP5.
- The darkmode I found a tutorial on youtube [Darkmode react tutorial](https://www.youtube.com/watch?v=Uz35Qiia84g)

# Acknowledgements

This website was created for PP5 for Code Institute's full stack developer course.

# **Happening**

Socializer was created to be able to share interests and hobbies with other people around the world at the same time you could use it as a productivity application with the notes functionality. You can also message and interact with other users.

This website was created for Code Institute's (Advanced Front End) - Diploma in Full Stack Software Development Diploma at the [Code Institute](https://www.codeinstitute.net).

[View live website here](https://socializer-pp5-react-7dce002eea27.herokuapp.com/)

# **Project**

## Objective

The objective of this project is to build a community-based content sharing web application for a small local area allowing users to learn about events happening in the area and to interact with the published content. The platform allows users to view, create, edit, delete, comment and review event postings. The content can be viewed in a logical order, filtered by category, and searched on by keywords. Users can also follow each other and register their interest in other user's shared content.

## Site User's Goal

For the user's the goal will be to connect with other people around the world to share your experience and also be able to chat with them interactively. As a site user it's also nice to be able to take notes if needed.

## Site Owner's Goal

As the site owner I see that the goal is to connect people all around the world and let them share their experiences.

## Project Management

### Github Project Board

I used the github project board to implement agile methodologies, I did not however completely use it to it's full extent due to the lack of time. [Project Board](https://github.com/users/Jonathan97-web/projects/5). I have created a list item for each component and function I've implemented as well as user stories.

Since I have not had enough time there aren't many issues open/done yet.

### Database Schema

All the models have been set up in a separate DRF repository. Click [here](https://github.com/Jonathan97-web/socializer-api) to view the repository or [here](https://socializer-pp5-api-aa36f444d240.herokuapp.com/) to view the deployed API.

# **User Experience (UX)**

## Wireframes

As of writing, no wireframes are currently developed but I will implement this in the future.

## User Stories

Here I have listed the main user stories for a user who is not logged in, or has no account and a logged in user. These user stories were then tested and confirmed in the [Testing](#testing) section.

### Logged Out Site User

|                      |                                                                                         |         |
| :------------------: | :-------------------------------------------------------------------------------------- | :------ |
| As a Logged out User | I can log in so that I can interact fully with the site                                 | &check; |
| As a Logged out User | I can sign up so that I can interact fully with the site                                | &check; |
| As a Logged out User | I can see a list of all the posts that have been created on the frontpage               | &check; |
| As a Logged out User | I can view a single post and interact with it fully                                     | &check; |
| As a Logged out User | I can view the popular profiles so that I can see who has the most followers            | &check; |
| As a Logged out User | I can view the details of an individual profile page so that I can get more information | &check; |
| As a Logged out User | I can filter posts by topics so I can search for things I am interested in              | &check; |
| As a Logged out User | I can search posts by title and content so that I can find things faster                | &check; |
| As a Logged out User | I can view comments of a post so that I can interact with other users                   | &check; |

### Logged In Site User

|                     |                                                                                             |         |
| :-----------------: | :------------------------------------------------------------------------------------------ | :------ |
| As a Logged in User | I can log in so that I can interact fully with the site                                     | &check; |
| As a Logged in User | I can log out from the site so that no-one else can interact with the site using my details | &check; |

POSTS
| As a Logged in User | I can see a list of all events so that I can see all events that have been shared to the site| &check;
| As a Logged in User | I can view a single event so that I can see single event details | &check; |
| As a Logged in User | I can view the top upcoming events so that I know which events have the highest going count | &check; |
| As a Logged in User | I can view the feed page so that I can only see events of profiles I follow | &check; |
| As a Logged in User | I can view the My Events page so that I can see only the events i'm interested in or going to | &check; |
| As a Logged in User | I can view the details of an individual profile page so that I can see more profile data | &check; |
| As a Logged in User | I can see all the events from one profile so that I can view all the events of one profile easily | &check; |
| As a Logged in User | I can filter events by category so that I can view only the events I'm interested in | &check; |
| As a Logged in User | I can search events by title, profile, date or tag so that I can find one particular event | &check; |
| As a Logged in User | I can create a new event so that I can promote an event in the town| &check; |
| As a Logged in User | I can edit my events so that I can change the details or correct mistakes | &check; |
| As a Logged in User | I can delete my own events so that I can remove events from the site | &check; |
LIKES
| As a Logged in User | I can like other people's posts so that I can show my interest for their experiences/posts| &check; |
| As a Logged in User | I can unlike if I decide that I didn't like what they posted or I missclicked. | &check; |
COMMENTS
| As a Logged in User | I can view comments that other users have made on posts. | &check; |
| As a Logged in User | I can create a comment that other users can read | &check; |
| As a Logged in User | I can edit my comments to fix any spelling errors etc. | &check; |
| As a Logged in User | I can delete a comment that I created so that I can remove comments I do not like. | &check; |
FOLLOW
| As a Logged in User | I can follow another user so that I can see their events in my feed page | &check; |
| As a Logged in User | I can unfollow another user so that I can stop seeing their events in my feed page | &check; |
NOTES
| As a Logged in User | I can view all events that have happened so that I can see their average rating and review count | &check; |
| As a Logged in User | I can view all the reviews relating to a single event so that I can see other user's opinions of the event | &check; |
| As a Logged in User | I can post a review on a past event so that I can share my opinion on the event | &check; |
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
| As a Logged in User | I can send a message to another user so that I can ask a question about an event they are hosting | &check; |

## Site Structure

Socializer is split into 2 sections, one for logged in users and one for logged out users, for logged in users you can access all the content. As a logged out user you can see the feed but you cannot interact with anything except for signup/sign in.

## Design Choices

- ### Color Scheme

The color theme is almost like the moments walkthrough at the moment, it will be fixed later.

- ### Typography

The main font is the standard font that react uses when installed with this package.

# **Existing Features**

- ## Navigation

I choose a clean navigation bar that was largely from the moments walkthrough, I found it's simple and clean style good for a nice user experience.

On accessing the site for the first time, the user is logged out and the following menu items are visible:

- Socializer - On the far left hand side of the navbar is the Socializer logo. This is visible throughout the site to all user types and contains a link back to the homepage.
- Home - the first menu item,
- Authentication - They have a sign in and sign out button.

Once the user logs in, additional links become available to select:

- Feed - Logged in users can access the feed page where they can see posts that other people have posted.
- Likes - Logged in users can like other people's posts to gain their favorite posts on their liked page.
- Notes - Logged in users can create new notes and delete old ones.
- Authentication - After logging in you will be able to click your profile picture on the right hand corner or log out if you so wish.
- Add Post - Logged in users can create posts and share them with everyone.

## Authentication

I have used dj-rest/auth/registration user account signup authentication.

If a user has a Socializer user account, they can click on the Signin menu option in the Navigation Bar to sign into their account.

If the user wishes to sign out, once signed in, the sign out option becomes visible in the Navigation Bar for them to select.

- ## Homepage

# **Technologies Used - Frontend**

## Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML) - Provides the content and structure for the website.
- [CSS3](https://en.wikipedia.org/wiki/CSS) - Provides the styling for the website.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Provides interactive elements of the website
- [React.js](<https://en.wikipedia.org/wiki/React_(software)>) - Provides the base for the frontend components

## Frameworks & Software

- [React Bootstrap](https://react-bootstrap.github.io/) - A CSS framework that helps build solid, responsive, mobile-first sites
- [Balsamiq](https://balsamiq.com/) - Will be used to create wireframes
- [Github](https://github.com/) - Used to host the repository, store the commit history and manage the project board containing user stories and bug reports.
- [Heroku](https://en.wikipedia.org/wiki/Heroku) - A cloud platform that the application is deployed to.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Will be used to test.
- [ColorSpace](https://mycolor.space/?hex=%23081045&sub=1) - Used to create the colour palette
- [HTML Validation](https://validator.w3.org/) - Used to validate HTML code
- [CSS Validation](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code
- [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code
- [Favicon](https://favicon.io/) - Used to create the favicon and logo.
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to debug and test responsiveness.
- [Cloudinary](https://cloudinary.com/) - A service that hosts image files in the project.

# Testing

Testing will be added later when it's time for resubmission.

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

# Acknowledgements

This website was created for PP5 for Code Institute's full stack developer course.

# Profile Finder 

### still just a WebApplication

<>
### Profile-Finder v0.0.4

> New navigation bar on top without functionalities yet

> Created Index layout with field for search purpose

> Use session on the profile page to access data


###  (future) Functionalities, ideas, requirements and specifications (to be developed)
- (Native) React application for Android and iOS, functioning exactly the same as the webapp.

- Has to be always fast, app has to be very smooth to handle and very fast, no noticeable loading times and has to respond immediately when user selects/browses/configures/searches/opens pages etc.

- You can create an account and register, login/logout. You can login with your Google/Facebook/Github account if you want (secured with OAuth authorization).
  
- You can create your own profile page with your Story-timeline, (sort of blog functionality), the possibility to add media, photo's, videos etc. You can also mention other users in your posts, who will be notified and able to respond on the Story-post. 

- People can share publicly shared Story posts or media.
  
- There is going to be a search functionality to find profiles. Has to be a very smart search engine which brings the most relevant and popular profiles to top of search results. Users can configure keywords that fit the best with their profile if they want users to find their public profile. There has to be a little bit of popularity competition between the people who want to share their information, activities, productions, media (owned music, photo's, videos). 

- Users can associate themselves with profiles when they find a interesting profile they want to see more often, Or if they want to make use of a service a profile owner offers. If you want to engage on a profile page, then you have to first become an associate user to the profile. 

- Because you have to associate with a profile before you can actively engage/communicate/react etc. Than the profile page owners are much more safe and protected against hate comment. It has to feel like the people who follow and comment are in your community. 

- Hate accounts and trolls who leave toxic messages and reactions, you can report them and that will have consequences for their account if they really go too far. Everybody should have the chance to follow every profile page, and associated people, you can only dissociate them from your account with reporting their behavior. Of course when a report is issued, the account is temporary incapable to engage with your profile anymore until verified if he can be kicked from your profile page.

- There will be a possibility for groups to register people club, community, school (or school class), organization or business (only if it is the confirmed owner, has to be checked). Those groups can also have their shared profile page.
There will be different kinds of authorization for users in the group, because moderation will be necessary if you don't want a profile Story (blog) not to become a big chaotic collection of random trash posts. It has to be possible to keep a profile page tidy and clear and at the same time everybody has to be able to interact, by placing reactions under posts or media, or talk in a group chat. 

- A profile should be a social place, with many people like yourself, with the same interests and maybe there are 150 people active on the profile, but still UX is like browsing in a tidy and clear place where it is very easy to find what you want to find because all the functionalities are on the most logical spots where you would look intuitively, browse around and every functionality you are on the app for, is not more than 1 button press away.

- There will be a messenger (personal chat functionality) where you can write personal messages to other users and create group chats like Whatsapp.

<>


# Older versions:
<>

### Profile-Finder v0.0.3

> NextJS upgrade to version 13, ready for migrating pages files to App folder
> Created user profile page, user hase to be authorize to land on profile page, otherwise redirected to /login
<>

### Profile-Finder v0.0.2
  
> API end-point for registering users /api/auth/aanmelden works without problems.  
  
> Newly registered users are saved in MongoDB database collection 'users'  
  
> On /login page you can login with the newly registered account, account credentials email and hashed password are found and compared to credentials in database collection 'users'.  
  
>Password hash is compared and verified that the password is correct and still is securely saved.  



<>
### Profile-Finder v0.0.1

> Profile social webapp project, is going to be developed to have search functionality to list and find profiles.   
  
> Users can already register an account with their Facebook, Google or Github account and login/logout without problem.     
  
> Api HTTP (POST only) end-point for creating user accounts.  
   
> Created usermodel schema compatible with MongoDB database where I save usersaccounts. Username, email and hashed password are saved to "users" table.  

<>

#### Search functionality:
##### **basic search functionality to start with**: https://react.dev/learn/thinking-in-react  
  
##### **Search query and filter list functionaly example in challenge 2**: https://react.dev/learn/sharing-state-between-components#challenges
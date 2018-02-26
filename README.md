![Image of whisky!!!!](https://cdn.gearpatrol.com/wp-content/uploads/2013/10/tasting-notes-japanese-whisky-gear-patrol-lead-full-v3.jpg)

# WISHkey - WDI 14 Project 2
#### This project will be my first project utilizing a MEN stack deployed with Heroku! WISHkey is an app that will provide a platform for users to declare their love of whisk(e)y! A user can declare their favorites and add some great finds to our online database broken down by country or region. It's like an online wish list for whisky from around the world. Have a favorite whisky? Sign up and add it on WISHkey!!!!!

### App on Heroku

https://agile-fortress-58020.herokuapp.com/

### Data Models
https://github.com/Saf3ty1nnumb3rs/MENstackApp/blob/master/project_items/ERD.JPG

### Updated/Final Data Models

https://github.com/Saf3ty1nnumb3rs/MENstackApp/blob/master/project_items/ERD-update.JPG

### Wireframes

https://github.com/Saf3ty1nnumb3rs/MENstackApp/blob/master/project_items/wireframe_project2.JPG

### Updated/Final Wireframes
https://github.com/Saf3ty1nnumb3rs/MENstackApp/blob/master/project_items/Wireframe-update.JPG

### Trello Workflow

https://trello.com/b/8XBgNv6q/wdi-project-2-data-connection

### gitHub

https://github.com/Saf3ty1nnumb3rs/MENstackApp



## Technologies Used for the Development of This App

* MongoDB
* ExpressJS
* NodeJS
* Heroku

### Favorite Bug - When editing Country object, the list of whiskies would remain on return to page as expected. While editing User object, the list of whiskies associated would be removed on return to the page which was not the desired result.
### All processes were identical on view pages. Checking the database on Mongo revealed that the whisky objects had been deleted. This led to observing the routes - this revealed that the `favoriteWhisky` was being called when patching the User when no value was being entered for `favoriteWhisky`. This effectively eliminated all objects in the array. Simply removing the req for favorites meant the original data would persist unless being manipulated through it's proper route.

### Overall, this process was fairly smooth. I prepared for this project by setting up a database and project folder for practice before the start date. That put my mind in a place where I was familiar with the task and ready to go deep into organizing and defining my requirements and workflow.

## Takeaways

### I found that spending more time on user stories, data objects, and wireframes set me up for success. Where previously I would do minimal planning and dive in, this go around I spent more time setting up and polishing. Very little time was required coding the project due to a much improved planning process. I truly recognize the value of user stories and thorough planning and design - it's changed the entire experience and given me a great appreciation for the ENTIRE process.

### Routing is making sense. Although the interactions on this app are simple, it has opened the door for limitless possibilites as we add on more techniques and tools to add multiple nuances and layers to object relationships. I've learned quite a bit, but I am much more aware of how much there is to learn.
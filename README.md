NOOD - A comprehensive guidebook about NUS cuisine
==================================================
Proposed Level of Achievement: **Apollo 11**

# Visit the website at https://nusfood.herokuapp.com/

### Motivation

When you arrive at NUS, you will tentatively be amazed by the complicated structure of the university. Because of this complication, it is a real challenge for you to find the most convenient food or beverage outlet that satisfies your thirst or hunger.

The first difficulty that you might face when finding a suitable place for your refreshment is the incompatibility of your order and your requirement. Although many food stalls of NUS are gathered in many big canteens with various options, there is still a big chance that you will be unable to have your favourite combos or order food that does not match your taste or your consumption requirement (eg. too spicy, too sour, too greasy, too much, too little …). Improving this fact is important since if food or drinks does not match your expectation, there would be a likely possibility for excessive food waste.  

The second thing that can prevent you from enjoying most of NUS food offers is the isolated location and unclear direction to some canteens. Most students are only familiar with dining places in their own faculty. This comes from my experience with NUS Engineering’s Halal canteen, a place with very diverse and tasty food options but also is hidden from view. Currently NUS has its own page about dining options, but the page only provides an incomplete  list of food and is also hard to navigate.

### Aim

Our target is to construct a website that provides comprehensive information about NUS eateries and food options as well as an interactive platform for people to share their own experiences and recommendations.  With Nood, everyone now can search and know about the various options of food and beverage offered within NUS campuses and leave useful feedback or suggestions to university’s managers on food quality and service. 

### User story
1. As a visitor or a freshman or exchange student, this website provides a great overview.
2. As a student who has tried a lot of NUS food, I want to discover new hidden gems.
3. As NUS staff, I want to know opinions from students and visitors about the quality of dining places on campus.
4. As a student and staff who cannot decide know what to eat, let the website recommend for you.

### System features and development plan

#### By 1 July (Milestone 2):
- A responsive website application on Heroku
- Search and filter function
- Populate database, including opening hours, location, faculties nearby, special requirements, menu, signature dishes
#### By 1 August (Milestone 3):
- User login system with Google sign-in function
- Review and rating about a dining place
- Popularity system for users 
- (Pseudo) Machine-learning to suggest food for meal

### Tech stack
- Front-end:
<img src = "https://www.nicepng.com/png/detail/222-2229500_html5-vector-javascript-html-css-javascript-bootstrap.png" width = "300" height = "300" align-text = "center">

- Back-end:
<img src = "https://hevodata.com/blog/wp-content/uploads/2017/09/mn.png" width = "900" height = "300" align-text = "center">

### How to run it locally
1. Go to folder `./client` and run `npm install` to install dependencies, then `npm start`
2. To run the server, at home directory, install dependencies by `npm install express cors mongoose dotenv`. Start the server by `nodemon server`.




# Assignment Project

This is assignment project for Alemeno Pvt. [Live-Link](https://quore-frontend.onrender.com/)

if you want to go with Live link if you saw that in course tab haven't any course please reload aging ( minimum two times ) . this is render issue

## Key Features

- ### Users can login and registration (used token and refresh token)
- ### Users can scroll courses in our popular courses section of Home page .( If you User click on this course image they will redirect to single course Details page;)
- ### Users have access to see all courses in our courses tab(click on courses menu)
- ### Users can filter courses by course name and course author name in our courses page;
- ### Users will navigate when click on specific course in our courses page;
- ### Users can add courses in their cart from course details page (click on add to cart button);
- ### Users can enroll in a new course from course details page (click on enroll now). can't enroll two time this is validate from backend and frontend;
- ### Users can watch intro video in course details page (click on course banner)
- ### User can see their enrolled courses in Dashboard (click on profile icon top of the navbar than click on dashboard menu );
- ### Users can watch their enrolled course content in our content player page(dashboard page => click on continue button of specific course) ;

- ### Users can watch intro video in our content player page if they click on content syllabus it will show their all contents that already uploaded and they can watch this contents(click on accordion and click on accordion item)

## GitHub Repository

[GitHub Repository](https://github.com/readul-islam/Frontend-Assignement)

## Installation step by step

## Clone the repository:

```bash
git clone https://github.com/readul-islam/Frontend-Assignement
```

## For Frontend

```bash
cd frontend
```

```bash
npm install
```

```bash
ADD .env File in root folder and add credentials
```

```bash
npm run dev
```

## For Backend

```bash
cd backend
```

```bash
npm install
```

```bash
ADD .env File in root folder and add credentials
```

```bash
npm run dev
```

if you changing anything in backend you need install transpiler for typescript

```bash
npm run tsc-js
```

or if you globally installed typescript

```bash
tsc -w
```

## Folder Structure

```bash
 src/

    api/            # axios instance there

    assets/         # all assets there

    components/     # all common and reuseable components there

    hooks/          # contain  one hooks for for data refreshing

    modules/
           Auth/     # Login and Logout page there and some additional folders

                api/  #login and logout api there

                constants/

                pages/    #login and logout page there

                schema/

           Courses/

                  api/    # all course related api there

                  components/    # all course related components there

                  pages/         # course list page and course details view page

           Dashboard/

                   api/    # all dashboard related api there

                  components/    # all dashboard related components there

                  pages/         # Dashboard page and content player page(you can watch all video there)

           Home/ # there some components for home page

    store/   # For state Management (redux config and slice)
```

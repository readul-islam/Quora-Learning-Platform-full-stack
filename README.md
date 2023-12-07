# Assignment Project

This is assignment project for Alemeno Pvt. [Live-Link](https://quore-frontend.onrender.com/)

if you want to go with Live link if you saw that in course tab haven't any course please reload aging ( minimum two times ) . this is render issue

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



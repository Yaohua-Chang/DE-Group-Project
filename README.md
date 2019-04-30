# Group Project: University Management App

*Due 5 PM, Tuesday May 14, 2019*

In this group project you will utilize all the expertise gained in this course to build a cloud-hosted application, 
the University Management Service we've been building in pieces throughout this course. The app itself is relatively simple.
It will help universities track and manage students, faculty, and courses. 

## App Components

UMS will consist of the following components/layers:

**App Server**
: A GraphQL service that will provide an API to clients. Groups will implement a single GraphQL specification provided below.

**App Backend**
: This is the business-logic layer of the application. It will be connected to a cloud-hosted Postgres database. The GraphQL
app server will accept client calls and direct them to the backend layer.

**Client**
: A web-based client that connects to the app server and lets users (students, faculty, and admins) interact with the app
from a browser. The client will communicate with the app server using the GraphQL protocol.

## Implementation Requirements/Options


## App Server/Backend

The App server and backend can be implemented in either JavaScript or Python. You will be provided with a stubbed out implementation
of the server written with the popular [GraphQL Apollo Server](https://www.apollographql.com/docs/apollo-server/). The backend 
model-layer (not provided) can be implemented with [Sequelize](http://docs.sequelizejs.com).

A starter project implemented with the [Apollo GraphQL Platform](https://www.apollographql.com) is available [here](https://github.com/makeitnew/dse-i2400-project-template.git).
The starter project includes the GraphQL specification of the server API. 

Another option is to implement the GraphQL API server and backend in Python. You could use the [Graphene library](https://docs.graphene-python.org/projects/sqlalchemy/en/latest/)
along with SQLAlchemy and Flask. However, no starter project for Python will be provided and you will have to manually
translate the GraphQL API specification to Graphene, which uses a Python class-based syntax for specifying the API.

## Web Client

The web client should be implemented with Javascript and React. 

# Team Organization

Teams will have three members each. The professor will choose the teams.

How you organize your team is generally up to you. One approach is where one team member
is responsible for the client, one for the GraphQL app server and the third for the backend. There are other ways to split up
the work however. Each team should determine early on how they are going to split the work within the team. They should also create a schedule.

# Expectations

It is important to realize that this project will **require** you to do a fair amount of independent exploration and research.
For example, we've played SQLAlchemy, the database abstraction toolkit. If you choose to implement the server in JavaScript
you will have to research and learn about Sequelize. Similarly, if you want to use Python for the server, you'll have
to learn about Graphene or some other library that does the same thing. **Bake the learning curves into the planning for the project.**

Also, expect to spend between **10 to 15 hours on the project per week**, possibly more towards the end. There will be no
other homework assigned for the rest of the semester.

Because this project is relatively broad, team members have to specialize. One person becomes the client-side expert, one the GraphQL person,
the third focuses on the database. Regardless, we strongly encourage you to engage in all aspects of the design processes and to learn about
the technologies outside your designated area.


# Schedule

You have roughly five weeks including Spring Recess to complete the project. 
We will check in with the class every Tuesday. 
Your team should seek to make incremental progress every week.

Proceed incrementally. 
If you follow the suggested plan below, 
your team should have no problem completing the project.

Here's a suggested plan:

## Week 1

*Tuesday, April 9 - April 15*

### GraphQL server

* Set up the development environment; install Nodejs, npm, and yarn. 
* [Clone)[https://github.com/makeitnew/dse-i2400-project-template.git] and run the starter project. Stub out and mock all API calls so you have a server.

### Database/model layer

* Install Postgres on your laptop.
* Explore and learn about the ORM library. Go through online tutorials
both for running [Postgres](http://www.postgresqltutorial.com) and the ORM.
* Think about how you will model the resources in your project (e.g., courses, assignments)
as database tables.

### Web Client

* Set up your development environment by installing nodejs, npm and yarn.
* Use [React Create App](https://github.com/facebook/create-react-app) to create the client app starter and learn how
to use the development environment.
* Learn about how to create a Single Page App in React. (You can find a good tutorial [here](https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm).
Create a minimal prototype with a login form to authenticate with the server.
* Learn how to access the stubbed server from the React client. Use the [Apollo React Client Library](https://www.apollographql.com/docs/react/).
Aim to list users on a page for this week.

## Week 2
*Tuesday, April 16 - April 22*

The main goal for this week should be to get all three components of the project hooked
up and communicating with each other in some form. In the very least, the UI should
be integrated with the GraphQL server and the models for the database layer should
be stubbed out with mock data.

### GraphQL Server

### Database/model layer

* Set up all the tables for the project using database migrations.Think of
database migrations as revision control for the database schema.
* Learn about data migrations in the ORM you've selected for the project. 

 For Sequelize,
you can find an introduction [here](http://docs.sequelizejs.com/manual/migrations.html).
For SqlAlchemy, look at [Alembic](https://alembic.sqlalchemy.org/en/latest/tutorial.html#running-our-first-migration).
* Create migrations for all the tables in the project. 
* Seed the database with data. In particular, the `admin` user should be set up. Use
a migration to seed each table of the database. More info [here](http://docs.sequelizejs.com/manual/models-definition.html#validations).
* Define models for each table. In particular, figure out how to model the relationships
between the various models. For example, you want to access all the courses taken
by a student, all the courses taught by a faculty member. For a given course, you will
want to find all the students enrolled in it. Modeling these relationships is the
most difficult part of the database layer.
* Create validations for each model. Your can learn about Sequelize validations [here]().


### Web Client

* Minimally, create a form to login a user. Figure out how to save the access token
once logged in.
* Design the structure of all your screens. Sketch out the flow between the pages.
Learn how to "route" between pages of a single page app.

## Week 3
*Tuesday, April 23 - April 29*

Spring Break! But this is grad school and it's unlikely many of us will be sipping Piña Coladas
on the beach, right? Use the the time to catch up or get ahead.

## Week 4
*Tuesday, April 30 - May 6*

This week should focus on getting all the basic functionality done. Certainly,
the database/model layer should be complete by now. Same for integration between
the backend and the GraphQL server. 

This leaves the UI, which might take a little longer and can lag behind the other pieces.

## Week 5

*Tuesday, May 7 - May 13

The focus now should be on two things:

1. Deploying the database and GraphQL server to the cloud. Don't worry--we will
covered cloud, virtualization, Kubernetes, etc in the previous class.
1. Finishing the UI and deploying it to a cloud host like [Netlify](https://www.netlify.com) or [Zeit](https://zeit.co).

## Week 6: Demo Day

*Tuesday, May 14*

All done! Now we sip those Piña Coladas. No, yet... there's the final!

# Project Specification

## Client Specification

The client will be a [Single Page App](https://flaviocopes.com/single-page-application/) or SPA implemented in React. 

It will have the following screens.

Login: When an unauthenticated user first loads the app they will be directed to a login panel. If the user is already
logged in, skip the login panel and take the user to the main screen.

Depending on the current user's role, the UI allow users to do the following:

* Students will have a "Courses" panel. It will show only courses that the logged in user is enrolled in. 
  Clicking on a course link will show detail for that course. 
* Faculty will see a "Courses" panel. It will show courses that the logged in user teaches.
Faculty will also be able to create and manage courses.
* Admins will have be able to list, create and manage users.

## Server Specification

The server is specified as a GraphQL schema, shown below:

```graphql
  type Query {
    users: [User]
    students: [Student]
    faculty: [Faculty]
    currentUser: User
  }

  type Mutation {
    loginUser(email: String!, password: String!): AuthPayload
    logoutUser: Boolean

    # Only Admin can create/update users
    createUser(user: UserInput): User
    updateUser(id: ID!, user: UserInput): User

    # Only Faculty can create/update and manage courses
    createCourse(name: String!, facultyID: ID!): Course
    deleteCourse(courseID: ID!): Course
    addCourseStudent(courseID: ID!, studentID: ID!): Course
    deleteCourseStudent(courseID: ID!, studentID: ID!): Course

    createAssignment(courseID: ID!, name: String!): Assignment
    createAssignmentGrade(
      assignmentID: ID!
      studentID: ID!
      grade: Float!
    ): AssignmentGrade
  }

  # extra credit: monitor when assignments are add
  type Subscription {
    assignmentAdded(studentID: ID!): Assignment
  }

  type AuthPayload {
    token: String
    user: User
  }

  input UserInput {
    # First and last name
    name: String!
    email: String!
    role: Role
    password: String
  }

  enum Role {
    Admin
    Student
    Faculty
  }

  interface User {
    id: ID!
    name: String!
    email: String!
    role: Role!
  }

  type Student implements User {
    id: ID!
    name: String!
    email: String!
    role: Role!
    courses: [Course]
    assignments: [Assignment]
    gpa: Float!
  }

  type Faculty implements User {
    id: ID!
    name: String!
    email: String!
    role: Role!
    courses: [Course]
  }

  type Admin implements User {
    id: ID!
    name: String!
    email: String!
    role: Role!
  }

  type Course {
    id: ID!
    name: String!
    professor: Faculty
    students: [Student]
    assignments: [Assignment]
  }

  type Assignment {
    id: ID!
    name: String!
    course: Course!
    grades: [AssignmentGrade]
  }

  type AssignmentGrade {
    id: ID!
    assignment: Assignment
    student: User
    grade: String!
  }

```

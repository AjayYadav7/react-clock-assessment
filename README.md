# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

first install the node modules

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# This Project is showing one leading analog clock for uk and other two clocks changeable according to user's choice of time zone and their initial default timezones are "America/New_York, Asia/Tokyo"

we have used a separate component for clock which recieves the timeZone Prop to know which timezone it should display

Right now we have not used any third party library and the styling also been done by using CSS instead of any framework. The code is scalable in future if we want to add or remove clock or made it dynamic we can easily update the code.

# Library:[react-toastify](https://www.npmjs.com/package/react-toastify)

We have used this library to have the notification (toast) functionality, It will show us the toast when ever any clock hits the hours like 1'o clock, 2'o clock etc
plus we have highlighted the europe clock so as to show the dominance of the clock on the page

# Bookbub Coding Challenge:
Done using Node.js

# Getting Started
On a machine installed with Node.js
In the project directory
`npm install`
`node app.js`

# Time Spent
Timeboxed for 2 hours

# Considerations & Tradeoffs
Some of the most interesting edge cases is in invalid input:
- Keywords for one genre appearing multiple times
- Keywords for one genre appearing multiple times with different value
- Malformed data
- Missing files

If given more time, I listed below how I would solve them.

# If given more time
- Develop Unit tests
- Error handling, (bad input should end program gracefully)
- Not hardcoding the input files, add it as a parameter for the Classifer
- A proper printer for the results
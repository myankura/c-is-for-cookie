console.log("cookie.js")

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
//This variable is not required
// let y = 1

//reinitialize x from 1 to 0
for (let x = 0; x < cookies.length; x++) {
    //change counter variable to from y to x
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}
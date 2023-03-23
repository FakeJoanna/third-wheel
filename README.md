# Third Wheel

The fastest and safer way to sell your e-bike online

### Description

Second hand market place to buy and sell second hand e-bikes

### User Stories

404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

homepage - As a user I want to be able to access the homepage so that I see what the app is about and login and signup

sign up - As a user I want to sign up on the webpage so that I can create and edit my listings

login - As a user I want to be able to log in on the webpage so that I can get back to my account

logout - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account

product - As a user I want to see all the products available so that I can choose which ones I want to buy

product create - As a user I want to post a product so that I can sell it to others

product detail - As a user I want to see the product details and product specs of one bike so that I can decide if I want to purchase it

cart - As a user I want to monitor my cart and the costs

Backlog

- nodemailer
- check-out
- reviews
- reset password
- google map API
- fency Bootstrap animations and status changes

### User profile:

browse for products
see my profile
create post and add images
list of all listing created by the user
edit or delete his own product listing
log-out

## ROUTES:

- INDEX-ROUTES
  GET /
  GET /search
  GET /user-profile if (isLoggedIn)

- AUTH-ROUTES
  GET /singup
  POST /signup
  POST /api/users
  POST /logout

- PRODUCT-ROUTES
  GET /new-listing
  POST /new-listing
  GET /product/:productID
  GET /product/:productID/edit
  POST /product/:productID/edit
  GET /allListings
  POST /allListings

- QUICK-LINKS-ROUTES
  GET /qL

- CART-ROUTES
  GET /cart
  POST /cart

## Models

User model

const userSchema = new Schema(
{
username: {
type: String,
trim: true,
required: true,
unique: true,
},
email: {
type: String,
required: true,
unique: true,
lowercase: true,
trim: true,
},
password: {
type: String,
required: true,
},
stars: {
type: [Number],
},
productsInCart: [{ type: Schema.Types.ObjectId, ref: "Product" }],
},
{
timestamps: true,
}
)

Product model

const productSchema = new Schema(
{
title: {
type: String,
required: true,
},
brand: {
type: String,
required: true,
},
model: {
type: String,
required: true,
},
year: {
type: Number,
required: true,
},
description: {
type: String,
required: true,
},
price: {
type: Number,
required: true,
},
image: [
{
type: String,
required: true,
},
],
condition: {
type: String,
required: true,
},
isSold: {
type: Boolean,
required: true,
default: false,
},
specifications: {
frameSize: { type: String },
motorType: { type: String },
batteryCapacity: { type: String },
wheelsSize: { type: String },
maxSpeed: { type: String },
range: { type: String },
gears: { type: String },
},
postedBy: { type: Schema.Types.ObjectId, ref: "User" },
},
{
timestamps: true,
}
)

# Links

# Git

The url to our repository and to the deployed project

### Repository Link

https://github.com/FakeJoanna/third-wheel

### Deploy Link

https://purple-penguin-cuff.cyclic.app/

### Figma

https://www.figma.com/file/QF1sxv2ELmQ0TwqxZkdqs1/Third-Wheel?node-id=0%3A1&t=08lW2iR4MrnjpyXm-1

### Slides Link

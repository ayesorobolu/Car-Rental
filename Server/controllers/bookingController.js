import Booking from "../models/Booking.js"

//Function to check availability of Car for a given date
export const checkAvailalbility =  async (car, pickupDate, returnDate) => {
const bookings = await Booking.find({
    car,
    pickupDate: {$lte: returnDate},
    returnDate: {$gte: pickupDate},
})
return bookings.length === 0;
}
import Booking from "../models/Booking.js"
import Car from "../models/Car.js";

//Function to check availability of Car for a given date
export const checkAvailalbility =  async (car, pickupDate, returnDate) => {
const bookings = await Booking.find({
    car,
    pickupDate: {$lte: returnDate},
    returnDate: {$gte: pickupDate},
})
return bookings.length === 0;
}

//API to check AVilability of Cars for the given date and location
export const checkAvailalbilityofCar = async (req, res) =>{
    try {
        const {location, pickupDate, returnDate} = req.body
        
        //fetch all available cars for given location
        const cars = await Car.find({location, isAvaliable: true})

        //check car availability for the given date range using promise
        const availableCarsPromises =  cars.map(async (car) => {
            await checkAvailalbility(Car._id, pickupDate, returnDate)
            return{...car._doc, isAvailable: isAvailable}
        })

        let availableCars = await Promise.all(availableCarsPromises);
        availableCars = availableCars.filter(car => car.isAvailable === true)

        res.json({success: false, message: error.message})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}
-- **************************** Meal
-- Get all meals
SELECT * 
FROM Meal

-- Add a new meal
 INSERT INTO MEAL (
    id,title,description,location,time, max_reservations,price,created_date 

 )
 VALUES(defult,soup,'soup is a starter, a good choise for cold weather.','copenhagen',2025-06-06,5,20,2025-06-06)
-- Get a meal with any id, fx 1
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a meal with any id, fx 1


-- **************************** Reservation
-- Get all reservations
-- Add a new reservation
-- Get a reservation with any id, fx 1
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a reservation with any id, fx 1


-- **************************** Review
-- Get all reviews
-- Add a new review
-- Get a review with any id, fx 1
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
-- Delete a review with any id, fx 1
-- Additional queries
-- Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries

-- **************************** Functionality
-- Get meals that has a price smaller than a specific price fx 90
-- Get meals that still has available reservations
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
-- Get meals that has been created between two dates
-- Get only specific number of meals fx return only 5 meals
-- Get the meals that have good reviews
-- Get reservations for a specific meal sorted by created_date
-- Sort all meals by average number of stars in the reviews

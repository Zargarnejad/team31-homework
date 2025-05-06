-- **************************** create tables 
create database mealsharing; 

-- Meal
CREATE TABLE Meal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    `when` DATETIME NOT NULL,
    max_reservations INT,
    price DECIMAL(7, 2),
    created_date DATE DEFAULT CURRENT_DATE
);

-- Reservation
CREATE TABLE Reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT NOT NULL,
    meal_id INT,
    created_date DATE DEFAULT CURRENT_DATE,
    contact_phonenumber VARCHAR(20),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

 -- Review
CREATE TABLE Review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (meal_id) REFERENCES Meal(id)  
);
 

-- **************************** Meal
-- Get all meals
SELECT * 
FROM Meal;

-- Add a new meal
 INSERT INTO MEAL (id,title,description,location,`when`,reservations,price,created_date)
 VALUES(1,'Soup','soup is a starter, a good choise for cold weather.','copenhagen','2025-06-06 11:00:00',5,20,2025-05-06);

-- Get a meal with any id, fx 1
SELECT *
FROM meal
WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal 
SET title = 'chicken salad', description ='The great food in a short time. '
WHERE id = 1;


-- Delete a meal with any id, fx 1
DELETE FROM meal 
WHERE id = 1;

-- **************************** Reservation
-- Get all reservations
SELECT * 
FROM reservation;

-- Add a new reservation
INSERT INTO reservation(id, number_of_guests,meal_id,created_date, contact_phonenumber, contact_name, contact_email)
VALUES(1, 5, 1,'2025-05-06', 4567890, 'Anderson','anderson@gmail.com');

-- Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET  contact_name = 'Robinson' ,contact_email='robinson@yahoo.com', number_of_guests = 10
WHERE id =1;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 1;



-- **************************** Review
-- Get all reviews
SELECT * 
FROM review;

-- Add a new review
INSERT INTO review(id, title, description,meal_id,stars,created_date)
VALUES(1,'Review for service','The customer service was great.', 1, 5, '2025-05-06')
-- Get a review with any id, fx 1
SELECT *
FROM review
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE review
SET  title = 'Review for food' ,description='The food was yummy.', stars = 6
WHERE id =1;

-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 1;


-- Additional queries
-- Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries

INSERT INTO meal (id, title, description, location,`when`,max_reservations, price, created_date) 
VALUES(2, 'Italian Pasta Night', 'Delicious homemade pasta with wine', 'Rome', '2025-06-06 11:00:00' ,3, 25.00, '2024-01-10'),
      (3, 'Sushi Evening', 'Fresh sushi prepared by a Japanese chef', 'Tokyo', '2025-03-06 11:00:00',5, 40.00, '2024-02-15'),
      (4, 'BBQ Feast', 'Grilled meats and sides buffet style', 'Texas', '2025-04-06 11:00:00',4, 30.00, '2024-03-20');

INSERT INTO reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
VALUES(2, 2, 1, '2024-01-11', '1234567890', 'Alice Smith', 'alice@example.com'),
      (3, 4, 2, '2024-02-16', '0987654321', 'Bob Johnson', 'bob@example.com'),
      (4, 3, 3, '2024-03-21', '1122334455', 'Carol White', 'carol@example.com');

INSERT INTO review (id, title, description, meal_id, stars, created_date) 
VALUES(2, 'Great Pasta!', 'Loved the homemade taste.', 1, 5, '2024-01-12'),
      (3, 'Fresh Sushi', 'Very authentic experience.', 2, 4, '2024-02-17'),
      (4, 'BBQ Bliss', 'Meats were juicy and flavorful.', 3, 5, '2024-03-22');


-- **************************** Functionality
-- Get meals that has a price smaller than a specific price fx 90 (I used my own data for queries)

SELECT * FROM meal 
WHERE price < 30;
-- result : 
	id	title	description	                                       location	    time	           max_reservations	price	created_date
	1	soup	soup is a starter, a good choise for cold weather.	copenhagen	2025-06-06 11:00:00	5	            15.30	2025-04-06
	2	Italian Pasta Night	Delicious homemade pasta with wine	    Rome	    2025-06-06 11:00:00	3	            25.00	2024-01-10
								
-- Get meals that still has available reservations

SELECT distinct m.*
 from meal m 
 join reservation r 
 on m.id = r.meal_id

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * 
FROM meal 
WHERE title LIKE "Italian%"
---------------------------------
SELECT * 
FROM meal 
WHERE title LIKE "%even%"

-- Get meals that has been created between two dates

SELECT *
FROM meal 
WHERE created_date > "2024-01-01" AND created_date < "2024-03-15"


-- Get only specific number of meals fx return only 5 meals 

SELECT *
FROM meal 
limit 5


-- Get the meals that have good reviews

SELECT * 
FROM meal m
JOIN review r
ON m.id = r.meal_id
and r.stars>= 4

-- Get reservations for a specific meal sorted by created_date

SELECT *
FROM reservation r
JOIN meal m 
ON r.meal_id = m.id  and m.id = 1
ORDER BY r.created_date desc

-- Sort all meals by average number of stars in the reviews

select m.title, avg(r.stars) as avg_stars
from meal m 
join review r 
on m.id = r.meal_id
group by m.title 
order by avg(stars);

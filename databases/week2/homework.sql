
-- Part 1: Working with tasks

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO task (id, title, description, created, updated, due_date, status_id)
 VALUES (default, 'Do homework for week2', 
 'This row is description for a new task in week2', 
 '2025-04-28 01:41:00',
 '2025-04-30 14:00:00',
 '2025-05-03 23:00:00',
  2);


-- Change the title of a task

 UPDATE task 
 SET title = 'change the title of the task'
 WHERE title = 'Do homework for week2'

-- Change a task due date
 UPDATE task 
 SET due_date = '2025-05-05 23:00:00' 
 WHERE id = 36

-- Change a task status
 UPDATE task 
 SET status_id = 1 
 WHERE id = 36

-- Mark a task as complete
 UPDATE task 
 SET status_id = 3 
 WHERE id = 36

-- Delete a task
 DELETE FROM task
 WHERE id = 36

-- *******************************************************************

-- Part 2: School database

-- Create a new database containing the following tables: 

CREATE DATABASE school 

-- Class: with the columns: id, name, begins (date), ends (date)

CREATE TABLE CLASS(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
begins DATETIME, 
ends DATETIME
)

-- Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE TABLE student(
id INT PRIMARY KEY AUTO_INCREMENT, 
name VARCHAR(255) NOT NULL, 
email VARCHAR(255),
phonE INT,
class_id INT ,
FOREIGN KEY (class_id) REFERENCES class (id)
)

-- Create an index on the name column of the student table.

CREATE INDEX index_name
ON student (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE class 
ADD COLUMN status ENUM ('not-started', 'ongoing', 'finished')


-- *******************************************************************

-- Part 3: More queries

-- Get all the tasks assigned to users whose email ends in @spotify.com
select title
from task t
join user_task ut 
on t.id = ut.task_id 
join user u
on u.id = ut.user_id
where u.email LIKE '%@spotify.com';

-- result : 
-- Order groceries online
-- Fix the flat tire on the bike
-- Empty Mr Fluffy's litterbox
-- Sign up for linkedin



-- Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT title 
 FROM task t 
 JOIN user_task ut 
 ON t.id = ut.task_id
 JOIN user u 
 ON u.id = ut.user_id
 JOIN status s 
 ON t.status_id = s.id 
 WHERE u.name = 'Donald Duck' AND s.name = 'Not started'


-- result:
-- Setup salary databases for accounting
-- Buy new dining room table and chairs


-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT title
FROM task t 
JOIN user_task ut 
ON t.id = ut.task_id
JOIN user u 
ON u.id = ut.user_id
WHERE u.name = 'Maryrose Meadows' AND t.created LIKE '%-09-%'

--   result: 
--   Buy gift for Paul
--   Buy new dining room table and chairs


-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT month(task.created),count(*)
FROM task
GROUP BY month(task.created)

--  result:
--  month 10 :	18 tasks
--  month 9  : 17 tasks

-- *******************************************************************

-- Part 4: Creating a database (db: Yummy_ dish)
-- yummy_dish_erd.png is entity relationship diagram 

CREATE DATABASE yummy_dish

CREATE TABLE category (
id int PRIMARY KEY, 
name varchar(255) NOT NULL
)

CREATE TABLE recipe(
id int PRIMARY KEY auto_increment,
title varchar(255) NOT NULL, 
deescription text,
category_id int,
FOREIGN KEY (category_id) REFERENCES category(id),
cooking_time int
)

 CREATE TABLE ingredient (
 id int primary key auto_increment,
 name varchar(255) NOT NULL, 
 price decimal(7,2) NOT NULL,
 unit enum('cup','ts','gr','kg','ml')
 )
 
 CREATE TABLE recipe_ingredient(
 recipe_id int ,
 FOREIGN KEY (recipe_id) REFERENCES recipe(id),
 ingredient_id int, 
 FOREIGN KEY (ingredient_id) REFERENCES ingredient(id),
 amount decimal(7,2)
 )


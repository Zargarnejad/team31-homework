--1) Find out how many tasks are in the task table
SELECT count(*) FROM task;

--result: 35 task.

--2) Find out how many tasks in the task table do not have a valid due date
SELECT count(*)
FROM task
WHERE due_date IS NULL;

--result: 8 task.

--3) Find all the tasks that are marked as done 
SELECT * FROM task WHERE status_id=3;

--result: 12 rows returned. 

--4) Find all the tasks that are not marked as done
SELECT * FROM task WHERE status_id !=3;

result: 23 rows returned 

--5) Get all the tasks, sorted with the most recently created first
SELECT * FROM task order by created desc;

--result: 35 tasks ordered by newest to oldest based on date and time.

--6) Get the single most recently created task
SELECT * FROM task order by created desc limit 1;

--result: one taske with task_id = 25 returned.

--7) Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';

--result: 
-- Setup salary databases for accounting	2017-12-05 00:19:08
-- Learn how databases work	                2017-12-18 05:08:05
-- Make the databases perform better	    2017-12-01 13:28:35
-- Backup databases to external disk	    2017-12-23 14:21:01
-- Learn about NoSQL databases	            2017-12-23 10:13:42

--8) Get the title and status (as text) of all tasks
SELECT task.title,status.name 
FROM task 
INNER JOIN status 
ON title.status_id=status_id;

--result: 2 column(title - name) from (task - status)with 35 rows.

--9) Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, count(task.id) FROM status 
INNER JOIN task ON task.status_id=status.id 
group by(status.name);

--result: Not started:8, In progress:15, Done:12

--10) Get the names of all statuses, sorted by the status with most tasks first

SELECT status.name, count(task.id) FROM status 
INNER JOIN task ON task.status_id=status.id 
group by(status.name)
order by count(task.id) desc;

--result: In progress:15, Done:12, Not started:8
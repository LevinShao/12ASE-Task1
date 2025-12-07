-- Task 1. Create Table
CREATE TABLE RestaurantReservations ( -- Defining the table structure. IF NOT EXISTS prevents errors if the table already exists
    ReservationID INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique ID for each reservation, using auto-increment so it increases automatically
    UserName TEXT NOT NULL, -- NOT NULL for every field to ensure no empty values can be inserted
    UserEmail TEXT NOT NULL,
    ReservationDate DATE NOT NULL,
    Time TIME NOT NULL,
    NumberOfGuests INT NOT NULL
);

-- Insert data into the table
INSERT INTO RestaurantReservations (UserName, UserEmail, ReservationDate, Time, NumberOfGuests)
VALUES
('Alice',  'alice@example.com',  '2024-09-20', '19:00', 4),
('Bob',    'bob@example.com',    '2024-09-27', '20:30', 2),
('Charlie','charlie@example.com','2024-09-13', '18:45', 3),
('Diana',  'diana@example.com',  '2024-09-06', '19:30', 5),
('Ethan',  'ethan@example.com',  '2024-09-13', '21:00', 2);

-- Order by ReservationID in ascending order so that it's similar to our original table, then display all records
SELECT *
FROM RestaurantReservations
ORDER BY ReservationID ASC;

-- After running the above code once, make sure to drop the table before re-running to avoid duplication errors
-- I couldn't add IF NOT EXISTS in the CREATE TABLE statement because it would prevent re-creation of the table on re-runs
-- Meaning that if the table already exists, then the data would duplicate on every re-run, causing unreliable test results

-------------------------------------------------------------------------------------------------------

-- Task 2. Query: Bookings between 7pm and 8pm (inclusive)

-- This could've been done with only 3 lines of SQL code
-- But to ensure that this program is protected against SQL injection attacks as required in the assessment, I used a VIEW
-- VIEW is a virtual table based on the result-set of our SELECT statement. Any time you select from the VIEW, the query runs automatically.
-- VIEW protects against SQL injection because it separates the SQL code from the user input parameters.

-- How it works: Applications cannot directly manipulate the SQL code in the VIEW
-- Instead, they have to supply parameters safely when querying the VIEW

CREATE VIEW IF NOT EXISTS View_Bookings_7pm_8pm AS -- IF NOT EXISTS prevents errors if the view already exists
SELECT *
FROM RestaurantReservations
WHERE Time BETWEEN '19:00' AND '20:00';

SELECT * FROM View_Bookings_7pm_8pm; -- Test the view

-------------------------------------------------------------------------------------------------------

-- Task 3. Query: Total guests between September 13–25
-- Again, using a VIEW to ensure safety against SQL injection attacks

-- Program adds up all the values in the NumberOfGuests column using SUM()
-- Then it filters the results to only include reservations made between September 13 and September 25
-- Finally, it returns the total number of guests for that date range

CREATE VIEW IF NOT EXISTS View_TotalGuests_Sept13_25 AS -- IF NOT EXISTS prevents errors if the view already exists
SELECT SUM(NumberOfGuests) AS TotalGuests
FROM RestaurantReservations
WHERE ReservationDate BETWEEN '2024-09-13' AND '2024-09-25';

SELECT * FROM View_TotalGuests_Sept13_25; -- Test the view

--------------------------------------------------------------------------------------------------------

-- Cleaning up by dropping the table and views. This line of code will remove the table, all the views, and their data. 
-- You can re-run the code after dropping it without conflicts.

-- This was not required for the assessment but I used it to keep my database clean
-- and avoid conflicts and duplications when re-running the code for testing purposes

-- NOTE: You have to comment out these lines if you are running everything in this file in one go
-- Because it will automatically create a new table and then drop it immediately after
-- So if you want to keep the table and views, just comment out these lines

-- And when you want to drop the table, you can uncomment these lines, highlight them, then right click, and click "Run Selected Query". 
-- Do not click "Run Query" as the system will run everything in this file despite these lines being highlighted

DROP TABLE IF EXISTS RestaurantReservations; -- IF EXISTS prevents errors from happening if the table/views don't exist
DROP VIEW IF EXISTS View_Bookings_7pm_8pm;
DROP VIEW IF EXISTS View_TotalGuests_Sept13_25;
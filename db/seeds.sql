INSERT INTO department (department_name)
VALUES 
("Sales"), 
("Marketing"), 
("Finance"), 
("IT and Development"), 
("Human Resources");

INSERT INTO roles (id, title, salary, department_id)
VALUES 
(001, "Entry Level Sales", 45000, 001),
(002, "Senior Sales Representative", 85000, 001),
(003, "Sales Manager", 115000, 001),
(004, "Digital Marketing", 45000, 002),
(005, "Director of Marketing", 75000, 002),
(006, "Chief Marketing Offiver", 105000, 002),
(007, "Bookkeeper", 50000, 003),
(008, "Financial Analyst", 80000, 003),
(009, "Chief Financial Officer", 145000, 003),
(010, "Junior Developer", 65000, 004),
(011, "IT Project Manager", 70000, 004),
(012, "Chief Technology Officer", 150000, 004),
(013, "Entry Level Human Resource", 50000, 005),
(014, "Human Resources Director", 65000, 005);

INSERT INTO employee (last_name, first_name, role_id, manager_id)
VALUES
("Johnson", "Jennifer", 001, 003),
("Robinson", "Natalie", 002, 003),
("Ferguson", "John", 003, null),
("Patterson", "Samuel", 004, 006),
("James", "Jasmine", 005, 006),
("Hamilton", "Patricia", 006, null),
("Hensley", "Michael", 007, 009),
("Fisher", "Elijah", 008, 009),
("Wright", "Justin", 009, null),
("Reyes", "Paula", 010, 012),
("Huffman", "Emery", 011, 012),
("Skylar", "Ali", 012, null),
("Floyd", "Clayton", 013, 014),
("Newman", "Rocco", 014, null);
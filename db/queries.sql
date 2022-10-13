SELECT * FROM roles
JOIN department ON roles.department_id = department.id;

SELECT * FROM employee
JOIN roles ON employee.role_id = roles.id;
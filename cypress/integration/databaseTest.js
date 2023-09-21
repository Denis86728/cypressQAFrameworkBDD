import BasePage from "../page-objects/pages/web/basePage";
const basePage = new BasePage();

//In order to execute these tests you will need to have a DB server + client installed and perform the insert and populate SQL queries from "support" folder. I recommend using DBeaver client and mandatory mySQL server.

describe("SQL exercises", () => {
  it("SQL query to find the first name, last name, department name, and department id for each employee", function () {
    //Perform a join SELECT between employees and departments tables 
    basePage
      .task(
        "queryDb",
        "SELECT first_name, last_name, employees.department_id, department_name FROM employees INNER JOIN departments  on employees.department_id = departments.department_id"
      )
      .then((result) => {
    //Validate the first returned data
        basePage.logInfo("First row validation").then(() => {
          expect(result[0].first_name).to.eq("Jennifer");
          expect(result[0].last_name).to.eq("Whalen");
          expect(result[0].department_id).to.eq(1);
          expect(result[0].department_name).to.eq("Administration");
        });
      });
  });
  it("From employee table return the salary for employee with ID = 100", () => {
    //Perform the query
    basePage
      .task(
        "queryDb",
        "SELECT salary FROM employees e  where employee_id = 100"
      )
      .then((result) => {
    //Validate the query
        basePage.logInfo("First row validation").then(() => {
          expect(result[0].salary).to.eq("24000.00");
        });
      });
  });
  it('Add a new job', () => {
    //Perform the query
    basePage.task('queryDb', "Insert into Jobs(job_title, min_salary, max_salary) values ('Programator', 14000, 25000)").then((result) => {
        basePage.logInfo("If row was created successfully").then(() => {
    //First validation
            expect(result.affectedRows).to.eq(1)
        })
    })
    //Perform a SELECT query in order to validate the INSERT one
    basePage.task('queryDb', "Select job_title, min_salary, max_salary FROM Jobs WHERE job_id = 21").then((result) => {
        basePage.logInfo("Row validation").then(() => {
            expect(result[0].job_title).to.eq('Programator')
            expect(result[0].min_salary).to.eq('14000.00')
            expect(result[0].max_salary).to.eq('25000.00')
        })
    })
  });
  it('Update an Entry into the table and verify', () => {
    //Update SQL query
    basePage.task("queryDb", "Update employees SET first_name = 'Cypress' WHERE last_name = 'King'").then((result) => {
        basePage.logInfo("Row was updated successfully").then(() => {
    //Validate if the query was successfully executed 
            expect(result.affectedRows).to.eq(1)
        })
    })
    basePage.task("queryDb", "Select first_name FROM employees where last_name = 'King'").then((result) => {
    //Validate if the first_name was updated 
        basePage.logInfo("Row validation").then(() => {
            expect(result[0].first_name).to.eq('Cypress')
        })
    })
  })
});

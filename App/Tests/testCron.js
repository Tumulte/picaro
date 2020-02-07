import shell from "shelljs";
import schedule from "node-schedule";

schedule.scheduleJob("*/15 * * * *", function () {
    console.log("Testing start…");
    shell.exec("npx cypress run");
    shell.exec("npm run jest --coverage");
    console.log("Testing done !");
});

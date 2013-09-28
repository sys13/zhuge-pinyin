/**
 * Created with PyCharm.
 * User: Steven
 * Date: 30/04/13
 * Time: 11:55 PM
 * To change this template use File | Settings | File Templates.
 * ^ In high school we'd get graded on including this, now PyCharm does it for us
 */

/*
    I think including the year looks better, not sure though.
*/

function formatDate(rawDate) {
    "use strict";
    //Months are passed as numbers so this array converts them into months
    var month_names = ["January", "February", "March",
        "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];

    //This represents the current date
    var today = new Date();
    var currentDay = today.getDate();
    var currentMonth = month_names[today.getMonth() + 1];
    var currentYear = today.getFullYear();
    currentDay.toString();
    currentMonth.toString();
    currentYear.toString();

    //This represents the relevant date taken from the database
    var dateString = new Date(rawDate);
    var day = dateString.getDate();
    var month = month_names[dateString.getMonth() + 1];
    var year = dateString.getFullYear();
    day.toString();
    month.toString();
    year.toString();

    //This puts the date together in a string
    var strBuilder = "";
    //If it happened today, we will include the time
    if (day === currentDay && month === currentMonth && year === currentYear) {
        var hours = dateString.getHours();
        var minutes = dateString.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours || 12;  //formerly hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var timeString = hours + ':' + minutes + ampm;
        strBuilder = "at " + timeString; // + month + "&nbsp;" + day + "&nbsp;";
    } else if (year === currentYear) {
        //If it happened this year, we won't include the year
        strBuilder = month + "&nbsp;" + day + "&nbsp;";
    } else {
        //Otherwise the date takes on a standard format
        strBuilder = month + "&nbsp;" + day + ", " + year + "&nbsp;";
    }
    return strBuilder;
}
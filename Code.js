// Compiled using undefined undefined (TypeScript 4.8.4)
var calendarSheetURL = 'https://docs.google.com/spreadsheets/d/15Yyqt784HFmohsvc44Ewe_EiOdfw3khYdIE6vQJGWw4/edit#gid=0';
function getAllCalendars() {
    return CalendarApp.getAllCalendars();
}
function getSpreadsheetsAll() {
    return SpreadsheetApp.getActiveSpreadsheet().getSheets();
}
function getSheetsFromFile(fileIterator) {
    var filesArray = [];
    var fileObject = {};
    var fileIndex = 0;
    while (fileIterator.hasNext()) {
        var file = fileIterator.next();
        Logger.log(file.getName());
    }
}
function getScriptAppByName(id) {
    return DriveApp.getFileById(id).getName();
}
function getScriptAppId() {
    return ScriptApp.getScriptId();
}
function initialize() {
    var calendars = getAllCalendars();
    var calendarsSheet = SpreadsheetApp.openByUrl(calendarSheetURL);
    var endDate = new Date();
    var startDate = new Date();
    function setToLastYear() {
        startDate.setFullYear(endDate.getFullYear() - 1);
    }
    function getCalendarEvents() {
        setToLastYear();
        for (var x = 0; x < calendars.length; x++) {
            calendars[x].getEvents(startDate, endDate);
        }
    }
    // initialize
    getCalendarEvents();
    calendarsSheet.getSheets();
}

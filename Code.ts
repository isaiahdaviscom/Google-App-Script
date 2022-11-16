const calendarSheetURL = 'https://docs.google.com/spreadsheets/d/15Yyqt784HFmohsvc44Ewe_EiOdfw3khYdIE6vQJGWw4/edit#gid=0';

function getAllCalendars(): GoogleAppsScript.Calendar.Calendar[] {
  return CalendarApp.getAllCalendars();
}

function getSpreadsheetsAll(): GoogleAppsScript.Spreadsheet.Sheet[] {
  return SpreadsheetApp.getActiveSpreadsheet().getSheets();
}

function getSheetsFromFile( fileIterator: { hasNext: () => any; next: () => any; } ) {
  while ( fileIterator.hasNext() ) {
    let file = fileIterator.next();
    Logger.log( file.getName() );
  }
}

function getScriptAppByName( id ): string {
  return DriveApp.getFileById( id ).getName();
}

function getScriptAppId(): string {
  return ScriptApp.getScriptId();
}

function initialize(): void {
  const calendars = getAllCalendars();
  const calendarsSheet = SpreadsheetApp.openByUrl( calendarSheetURL );
  const endDate = new Date();
  const startDate = new Date();

  function setToLastYear() {
    startDate.setFullYear( endDate.getFullYear() - 1 );
  }

  function getCalendarEvents() {
    setToLastYear();
    for ( let x = 0; x < calendars.length; x++ ) {
      Logger.log( calendars[x].getEvents( startDate, endDate ) );
    }
  }

  // initialize
  getCalendarEvents();
  Logger.log({...calendarsSheet.getSheets()});
}
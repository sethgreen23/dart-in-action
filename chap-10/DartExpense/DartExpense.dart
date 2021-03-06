library dartexpense;

import 'dart:html';
import 'dart:json';

// the base UI
part "ui_edit.dart"; // the edit screen definition
part "ui_list.dart"; // the list screen definition
part "models.dart"; // the data model classes
part "app.dart";  // main application functions
part "data_access.dart"; // data access layer
part "navigate.dart"; // navigation functions
part "genericListView.dart";

part "mocks/mock_data.dart";
part "mocks/mock_expense_types.dart";
part "mocks/mock_expenses.dart";

void main() {
  var uiContainer = document.query("#dartexpense");
  var dataSource = new MockData();

  _app = new AppController(uiContainer, dataSource);
  app.buildUI();
  app.loadFirstView();


}

/// top level setter and getter which holds the running app
AppController _app;
AppController get app => _app;




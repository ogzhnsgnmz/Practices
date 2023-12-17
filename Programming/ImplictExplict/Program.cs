using ImplictExplict;

int dayNumber = 1;
CustomDay myDay = new CustomDay(dayNumber);

//int day = myDay;
//CustomDay MyanotherDay = 1;

CustomDay myAnotherDay = (CustomDay)dayNumber;

int day = (int)myAnotherDay;

Console.ReadLine();
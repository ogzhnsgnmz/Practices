var numbers = new[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

//
var first = numbers[0];
var last = numbers[numbers.Length-1];
first = numbers.First();

//
var fIndex = 0;
var lIndex = numbers.Length - 1;

Index firstIndex = new Index(fIndex, false);
firstIndex = Index.FromStart(fIndex);
Index lastIndex = new Index(lIndex, true);
lastIndex = Index.FromEnd(lIndex);

//lastIndex = numbers[^fIndex];

firstIndex = 0;

first = numbers[firstIndex];
last = numbers[lastIndex];

Range r = new Range(fIndex, lIndex);
r = Range.StartAt(fIndex);
r = Range.EndAt(lIndex);
var rangeArr = numbers[r];

//rangeArr = numbers[fIndex..LIndex]; 2,3,4
//rangeArr = numbers[2..^2]; 2,3,4,5,6,7

Array.Clear(numbers);

foreach (var arrItem in rangeArr)
    Console.WriteLine(arrItem);

Console.WriteLine($"{first}, {last}");
Console.ReadLine();
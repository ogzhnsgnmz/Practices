using PatternMatching;

var studentList = new List<Student>()
{
    new ITStudent(new Random().Next(100)),
    new MISStudent(new Random().Next(100))
};

var student = studentList[new Random().Next(studentList.Count)];

if (student is ITStudent)
{
    ITStudent itStudent = (ITStudent)student;

    Console.WriteLine($"FullName: {itStudent.ExamResult}");
}

if (student is ITStudent itStudent)
{
    Console.WriteLine($"FullName: {itStudent.FullName}");
}

if (student is ITStudent itStudent)
{
    if(itStudent.ComputerExamResult > 25 && itStudent.ComputerExamResult < 50)
        Console.WriteLine("Between 25 and 50");
    else
        Console.WriteLine($"NOT BETWEEN {itStudent.ComputerExamResult}");
}

if(student is ITStudent { ComputerExamResult: >25 and <50 } itStudent)
    Console.WriteLine("Between 25 and 50");
else
    Console.WriteLine($"NOT BETWEEN.");


if(student is ITStudent || student is not MISStudent { ProjectManagmentExamResult: >30})
{
    Console.WriteLine(student.GetType().FullName);

    if (student is MISStudent mis)
        Console.WriteLine($"Result: {mis.ProjectManagmentExamResult}");
}

switch(student)
{
    case ITStudent itStudent:
        Console.WriteLine($"FullName: {itStudent.FullName}");
        break;
    case MISStudent mISStudent:
        Console.WriteLine();
        break;
    default:
        break;
}

var alumni = student switch
{
    ITStudent itStudent => itStudent.ComputerExamResult > 49,
    MISStudent itStudent => itStudent.ProjectManagmentExamResult > 69,
    Student student => student.ExamResult > 29,
    _ => false
};

Console.ReadKey();
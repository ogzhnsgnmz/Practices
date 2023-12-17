using PatternMatching;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatternMatching
{
    public abstract class Student
    {
        public string FullName { get; set; } = "Oğuzhan X";
        public int ExamResult { get; set; }
        public Student(int ExamResult)
        {
            ExamResult = ExamResult;
        }
    }
}
public class ITStudent : Student
{
    public ITStudent(int examResult) : base(examResult)
    {

    }

    public int ComputerExamResult { get; set; }
}
public class MISStudent : Student
{
    public MISStudent(int ExamResult) : base(ExamResult)
    {
    }

    public int ProjectManagmentExamResult { get; set; }
}
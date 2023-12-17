using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImplictExplict
{
    public class Cars
    {

    }
    public class Mercedes : Cars
    {

    }

    public class Test
    {
        public Test()
        {
            Cars c1 = new Cars();

            Mercedes m1 = new Mercedes();

            m1 = (Mercedes)c1;
        }
    }
}

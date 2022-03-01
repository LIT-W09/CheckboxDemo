using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WebApplication15.Models;

namespace WebApplication15.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult CheckboxDemo(string name, bool isAwesome)
        {
            var vm = new CheckboxDemoViewModel
            {
                Name = name,
                IsAwesome = isAwesome
            };
            return View(vm);
        }

        public IActionResult Signup()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Signup(Signup signup)
        {
            SignupDb db = new SignupDb(@"Data Source=.\sqlexpress;Initial Catalog=SignupsDb;Integrated Security=true;");
            db.Add(signup);
            return Redirect("/home/signup");
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataLibrary.Models;
using DataLibrary.Extensions;
using NUnit.Framework;

namespace Tests.Data
{
    [TestFixture]
    public class JSON
    {
        [Test]
        public void JsonExtensionReturnsExpectedString()
        {
            var pi_2images = new PortfolioItemModel()
            {
                Id=1234,
                Title="My Portfolio Item",
                Images=new SiteImage[]{
                    new SiteImage(){Source = "/images/image1.jpg",Title="A site image"},
                    new SiteImage(){Source = "/images/image1.jpg",Title="A site image"}
                }
            };

            var strExpected = "";
            var strReturned = pi_2images.ToJson();
            Assert.AreEqual(strExpected,strReturned);




        }
    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Models
{
    public class PortfolioItemModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public SiteImage[] Images { get; set; }
    }
}

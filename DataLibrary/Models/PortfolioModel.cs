﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Models
{
    public class PortfolioModel
    {
        public IEnumerable<PortfolioItemModel> items { get; set; }
    }
}

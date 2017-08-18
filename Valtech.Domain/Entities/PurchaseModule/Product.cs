﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Domain.Entities.PurchaseModule
{
    public class Product : AbstractEntity
    {
        public ProductCategory Category { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public Guid CategoryId { get; set; }
    }
}
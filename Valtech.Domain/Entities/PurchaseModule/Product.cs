﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Domain.Entities.PurchaseModule
{
    public class Product : AbstractEntity
    {
        public Product()
        {
            Id = Guid.NewGuid().ToString();
        }
        public string Name { get; set; }
        public double Price { get; set; }
        public ProductCategory Category { get; set; }
        public string CategoryId { get; set; }
    }
}

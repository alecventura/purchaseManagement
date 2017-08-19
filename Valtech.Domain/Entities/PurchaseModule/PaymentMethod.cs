﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Valtech.Domain.Entities.PurchaseModule
{
    public class PaymentMethod : AbstractEntity
    {
        public PaymentMethod()
        {
            Id = Guid.NewGuid().ToString();
        }
        public string Type { get; set; }
    }
}

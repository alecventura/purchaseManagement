﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Application.Interface.PurchaseModule;
using Valtech.Domain.Entities.PurchaseModule;
using Valtech.Domain.Interfaces.Services.PurchaseModule;

namespace Valtech.Application.Implementation.PurchaseModule
{
    public class PurchaseApplication : AppServiceBase<Purchase>, IPurchaseApplication
    {
        private readonly IPurchaseService _service;
        public PurchaseApplication(IPurchaseService service)
            : base(service)
        {
            _service = service;
        }
    }
}
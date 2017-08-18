﻿using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Domain.Entities.PurchaseModule;

namespace Valtech.Data.EntityConfig.PurchaseModule
{
    public class ProductCategoryConfig : EntityTypeConfiguration<ProductCategory>
    {
        public ProductCategoryConfig()
        {
            HasKey(u => u.Id);

            Property(u => u.Name)
                .IsRequired()
                .HasMaxLength(512);
        }

    }
}

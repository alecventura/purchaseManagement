using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Domain.Entities.PurchaseModule;

namespace Valtech.Data.EntityConfig.PurchaseModule
{
    public class ProductConfig : EntityTypeConfiguration<Product>
    {
        public ProductConfig()
        {
            HasKey(u => u.Id);

            Property(u => u.Id)
                .IsRequired()
                .HasMaxLength(128);

            Property(u => u.Name)
                .IsRequired()
                .HasMaxLength(512);

            Property(u => u.Price)
                .IsRequired();

            HasRequired(u => u.Category)
                .WithMany()
                .HasForeignKey(k => k.CategoryId)
                .WillCascadeOnDelete(false);
            Property(u => u.CategoryId)
                .HasMaxLength(128);
        }

    }
}

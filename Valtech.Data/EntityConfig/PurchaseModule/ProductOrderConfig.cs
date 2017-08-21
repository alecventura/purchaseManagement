using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Domain.Entities.PurchaseModule;

namespace Valtech.Data.EntityConfig.PurchaseModule
{
    public class ProductOrderConfig : EntityTypeConfiguration<ProductOrder>
    {
        public ProductOrderConfig()
        {
            HasKey(u => u.Id);

            Property(u => u.Id)
                .IsRequired()
                .HasMaxLength(128);

            Property(u => u.Name)
                .IsRequired()
                .HasMaxLength(512);

            HasRequired(u => u.Product)
                .WithMany()
                .HasForeignKey(k => k.ProductId)
                .WillCascadeOnDelete(false);
            Property(u => u.ProductId)
                .HasMaxLength(128);

            HasRequired(u => u.Purchase)
                .WithMany(x => x.Products)
                .HasForeignKey(k => k.PurchaseId)
                .WillCascadeOnDelete(true);
            Property(u => u.PurchaseId)
                .HasMaxLength(128);
        }

    }
}

using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Domain.Entities.PurchaseModule;

namespace Valtech.Data.EntityConfig.PurchaseModule
{
    public class PurchaseConfig : EntityTypeConfiguration<Purchase>
    {
        public PurchaseConfig()
        {
            HasKey(u => u.Id);

            Property(u => u.Id)
                .IsRequired()
                .HasMaxLength(128);

            Property(u => u.TotalPrice)
                .IsRequired();

            HasRequired(u => u.PaymentMethod)
                .WithMany()
                .HasForeignKey(k => k.PaymentMethodId)
                .WillCascadeOnDelete(false);

            Property(u => u.PaymentMethodId)
                .HasMaxLength(128);
        }

    }
}

using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Domain.Entities.PurchaseModule;

namespace Valtech.Data.EntityConfig.PurchaseModule
{
    public class PaymentMethodConfig : EntityTypeConfiguration<PaymentMethod>
    {
        public PaymentMethodConfig()
        {
            HasKey(u => u.Id);

            Property(u => u.Id)
                .IsRequired()
                .HasMaxLength(128);

            Property(u => u.Type)
                .IsRequired()
                .HasMaxLength(256);
        }

    }
}

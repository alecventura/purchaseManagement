using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Metadata.Edm;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Valtech.Data.EntityConfig.PurchaseModule;

namespace Valtech.Data.Context
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext()
            : base("ApplicationContext")
        {
            //Disable initializer
            Database.SetInitializer<ApplicationContext>(null);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {


            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
            modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();
            modelBuilder.Conventions.Remove<ForeignKeyIndexConvention>();

            modelBuilder.Configurations.Add(new ProductCategoryConfig());
            modelBuilder.Configurations.Add(new PaymentMethodConfig());
            modelBuilder.Configurations.Add(new ProductConfig());
            modelBuilder.Configurations.Add(new PurchaseConfig());


            base.OnModelCreating(modelBuilder);
        }

        public override int SaveChanges()
        {
            foreach (var entry in ChangeTracker.Entries().Where(p => p.Entity.GetType().GetProperty("RecordDate") != null))
            {
                string dbSet = GetTableSet(entry);
                if (entry.State == EntityState.Added)
                {
                    if (entry.Property("RecordDate") == null || Convert.ToDateTime(entry.Property("RecordDate").CurrentValue) < new DateTime(2010, 1, 1))
                    {
                        entry.Property("RecordDate").CurrentValue = DateTime.Now;
                    }
                    else
                    {
                        entry.Property("RecordDate").IsModified = false;
                    }
                }
                else if (entry.State == EntityState.Modified)
                {
                    if (entry.Property("RecordDate") != null && Convert.ToDateTime(entry.Property("RecordDate").CurrentValue) < new DateTime(2010, 1, 1))
                    {
                        entry.Property("RecordDate").IsModified = false;
                    }
                    entry.Property("UpdateDate").CurrentValue = DateTime.Now;
                }
            }
            try
            {
                return base.SaveChanges();
            }
            catch (System.Data.Entity.Validation.DbEntityValidationException dbEx)
            {
                Exception raise = dbEx;
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        string message = string.Format("{0}:{1}",
                            validationErrors.Entry.Entity.ToString(),
                            validationError.ErrorMessage);
                        // raise a new exception nesting
                        // the current instance as InnerException
                        raise = new InvalidOperationException(message, raise);
                    }
                }
                throw raise;
            }
        }

        private string GetTableSet(DbEntityEntry ent)
        {
            ObjectContext objectContext = ((IObjectContextAdapter)this).ObjectContext;
            Type entityType = ent.Entity.GetType();

            if (entityType.BaseType != null && entityType.Namespace == "System.Data.Entity.DynamicProxies")
                entityType = entityType.BaseType;

            string entityTypeName = entityType.Name;

            EntityContainer container =
                objectContext.MetadataWorkspace.GetEntityContainer(objectContext.DefaultContainerName, DataSpace.CSpace);
            string entitySetName = (from meta in container.BaseEntitySets
                                    where meta.ElementType.Name == entityTypeName
                                    select meta.Name).First();
            return entitySetName;
        }
    }
}

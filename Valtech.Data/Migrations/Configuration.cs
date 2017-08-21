namespace Valtech.Data.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Valtech.Domain.Entities.PurchaseModule;

    internal sealed class Configuration : DbMigrationsConfiguration<Valtech.Data.Context.ApplicationContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Valtech.Data.Context.ApplicationContext context)
        {
            #region Payment methods
            context.Set<PaymentMethod>().AddOrUpdate(new PaymentMethod()
            {
                Id = "1b4c743c-b8f3-4ecb-812b-91ecae2f2787",
                RecordDate = DateTime.Now,
                Type = "master"
            });
            context.Set<PaymentMethod>().AddOrUpdate(new PaymentMethod()
            {
                Id = "c8bdec4b-fc1b-4759-b70e-ef43f34e4f8c",
                RecordDate = DateTime.Now,
                Type = "visa"
            });
            context.Set<PaymentMethod>().AddOrUpdate(new PaymentMethod()
            {
                Id = "ed0f41d7-2e64-442b-b3fa-a5c6a28cc966",
                RecordDate = DateTime.Now,
                Type = "cash"
            });
            #endregion

            #region Products categories
            context.Set<ProductCategory>().AddOrUpdate(new ProductCategory()
            {
                Id = "34e66372-18af-4de8-b4c1-840897aedb96",
                RecordDate = DateTime.Now,
                Name = "Car Parts"
            });
            context.Set<ProductCategory>().AddOrUpdate(new ProductCategory()
            {
                Id = "3f02f506-0e38-4d38-8e9c-42cd9f1a779d",
                RecordDate = DateTime.Now,
                Name = "TV"
            });
            context.Set<ProductCategory>().AddOrUpdate(new ProductCategory()
            {
                Id = "897fdf5c-b2e5-4683-8117-7620793d2ff8",
                RecordDate = DateTime.Now,
                Name = "Cloths"
            });
            context.Set<ProductCategory>().AddOrUpdate(new ProductCategory()
            {
                Id = "e2f67608-2d89-4fae-807d-07094ccf5320",
                RecordDate = DateTime.Now,
                Name = "Cell Phone"
            });
            context.Set<ProductCategory>().AddOrUpdate(new ProductCategory()
            {
                Id = "f9cd5c7b-ee1d-440a-a250-01fe1d08b5ba",
                RecordDate = DateTime.Now,
                Name = "Music stuff"
            });
            #endregion

            #region Products
            context.Set<Product>().AddOrUpdate(new Product()
            {
                Id = "8fd3a6af-5c88-4964-a88d-e0691d5ad693",
                RecordDate = DateTime.Now,
                Name = "LG",
                Price = 200,
                CategoryId = "3f02f506-0e38-4d38-8e9c-42cd9f1a779d"
            });
            context.Set<Product>().AddOrUpdate(new Product()
            {
                Id = "9db90c7b-ed89-432b-a6e6-c947de4cee2f",
                RecordDate = DateTime.Now,
                Name = "Guitar",
                Price = 130,
                CategoryId = "f9cd5c7b-ee1d-440a-a250-01fe1d08b5ba"
            });
            context.Set<Product>().AddOrUpdate(new Product()
            {
                Id = "c3cc222c-96e3-4e58-8fa7-488854cc820d",
                RecordDate = DateTime.Now,
                Name = "Whell",
                Price = 150,
                CategoryId = "34e66372-18af-4de8-b4c1-840897aedb96"
            });
            context.Set<Product>().AddOrUpdate(new Product()
            {
                Id = "de3bfce0-1a99-4c43-ac18-622a39182473",
                RecordDate = DateTime.Now,
                Name = "Bass",
                Price = 400,
                CategoryId = "f9cd5c7b-ee1d-440a-a250-01fe1d08b5ba"
            });
            context.Set<Product>().AddOrUpdate(new Product()
            {
                Id = "ebec2bb0-9d74-4404-8c9d-d6f1ca5252f1",
                RecordDate = DateTime.Now,
                Name = "Sony",
                Price = 2500,
                CategoryId = "3f02f506-0e38-4d38-8e9c-42cd9f1a779d"
            });
            context.Set<Product>().AddOrUpdate(new Product()
            {
                Id = "f765993a-c626-4382-8c59-88a3b8a2312c",
                RecordDate = DateTime.Now,
                Name = "Lights",
                Price = 30,
                CategoryId = "34e66372-18af-4de8-b4c1-840897aedb96"
            });
            #endregion
        }
    }
}

namespace Valtech.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ProductCategory",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Name = c.String(nullable: false, maxLength: 512),
                        RecordDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.PaymentMethod",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Type = c.String(nullable: false, maxLength: 256),
                        RecordDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Product",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Name = c.String(nullable: false, maxLength: 512),
                        Price = c.Double(nullable: false),
                        CategoryId = c.Guid(nullable: false),
                        RecordDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ProductCategory", t => t.CategoryId);
            
            CreateTable(
                "dbo.Purchase",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        PurchaseSummary = c.String(nullable: false, maxLength: 2048),
                        PaymentMethodId = c.Guid(nullable: false),
                        TotalPrice = c.Double(nullable: false),
                        RecordDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.PaymentMethod", t => t.PaymentMethodId);
            
            CreateTable(
                "dbo.ProductPurchase",
                c => new
                    {
                        ProductId = c.Guid(nullable: false),
                        PurchaseId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => new { t.ProductId, t.PurchaseId })
                .ForeignKey("dbo.Purchase", t => t.ProductId)
                .ForeignKey("dbo.Product", t => t.PurchaseId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ProductPurchase", "PurchaseId", "dbo.Product");
            DropForeignKey("dbo.ProductPurchase", "ProductId", "dbo.Purchase");
            DropForeignKey("dbo.Purchase", "PaymentMethodId", "dbo.PaymentMethod");
            DropForeignKey("dbo.Product", "CategoryId", "dbo.ProductCategory");
            DropTable("dbo.ProductPurchase");
            DropTable("dbo.Purchase");
            DropTable("dbo.Product");
            DropTable("dbo.PaymentMethod");
            DropTable("dbo.ProductCategory");
        }
    }
}

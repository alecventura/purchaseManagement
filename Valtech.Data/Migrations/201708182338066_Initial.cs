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
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 512),
                        RecordDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.PaymentMethod",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Type = c.String(nullable: false, maxLength: 256),
                        RecordDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Product",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 512),
                        Price = c.Double(nullable: false),
                        CategoryId = c.String(nullable: false, maxLength: 128),
                        RecordDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ProductCategory", t => t.CategoryId);
            
            CreateTable(
                "dbo.Purchase",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        PurchaseSummary = c.String(nullable: false, maxLength: 2048),
                        PaymentMethodId = c.String(nullable: false, maxLength: 128),
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
                        ProductId = c.String(nullable: false, maxLength: 128),
                        PurchaseId = c.String(nullable: false, maxLength: 128),
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

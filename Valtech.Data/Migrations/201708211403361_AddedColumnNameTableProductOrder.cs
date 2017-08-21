namespace Valtech.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedColumnNameTableProductOrder : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ProductOrder", "Name", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.ProductOrder", "Name");
        }
    }
}

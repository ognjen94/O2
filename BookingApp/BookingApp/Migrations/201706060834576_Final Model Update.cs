namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FinalModelUpdate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AccommodationTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Accommodations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Address = c.String(),
                        Approved = c.Boolean(nullable: false),
                        AverageGrade = c.Single(nullable: false),
                        Description = c.String(),
                        ImageURL = c.String(),
                        Latitude = c.Double(nullable: false),
                        Longitude = c.Double(nullable: false),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Comments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Grade = c.Int(nullable: false),
                        Text = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Countries",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Code = c.Int(nullable: false),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Places",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Regions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.RoomReservations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        EndDate = c.String(),
                        StartDate = c.String(),
                        Timestamp = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Rooms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BedCount = c.Int(nullable: false),
                        Description = c.String(),
                        PricePerNight = c.Int(nullable: false),
                        RoomNumber = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Rooms");
            DropTable("dbo.RoomReservations");
            DropTable("dbo.Regions");
            DropTable("dbo.Places");
            DropTable("dbo.Countries");
            DropTable("dbo.Comments");
            DropTable("dbo.Accommodations");
            DropTable("dbo.AccommodationTypes");
        }
    }
}

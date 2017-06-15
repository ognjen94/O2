namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Model : DbMigration
    {
        public override void Up()
        {
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
                        accommodationType_Id = c.Int(nullable: false),
                        owner_Id = c.Int(nullable: false),
                        place_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AccommodationTypes", t => t.accommodationType_Id, cascadeDelete: false)
                .ForeignKey("dbo.AppUsers", t => t.owner_Id, cascadeDelete: false)
                .ForeignKey("dbo.Places", t => t.place_Id, cascadeDelete: false)
                .Index(t => t.accommodationType_Id)
                .Index(t => t.owner_Id)
                .Index(t => t.place_Id);
            
            CreateTable(
                "dbo.AccommodationTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
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
                        accommodation_Id = c.Int(nullable: false),
                        user_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Accommodations", t => t.accommodation_Id, cascadeDelete: false)
                .ForeignKey("dbo.AppUsers", t => t.user_Id, cascadeDelete: false)
                .Index(t => t.accommodation_Id)
                .Index(t => t.user_Id);
            
            CreateTable(
                "dbo.RoomReservations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        EndDate = c.DateTime(),
                        StartDate = c.DateTime(),
                        Timestamp = c.DateTime(),
                        AppUser_Id = c.Int(),
                        Room_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AppUsers", t => t.AppUser_Id)
                .ForeignKey("dbo.Rooms", t => t.Room_Id)
                .Index(t => t.AppUser_Id)
                .Index(t => t.Room_Id);
            
            CreateTable(
                "dbo.Rooms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BedCount = c.Int(nullable: false),
                        Description = c.String(),
                        PricePerNight = c.Int(nullable: false),
                        RoomNumber = c.Int(nullable: false),
                        accommodation_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Accommodations", t => t.accommodation_Id, cascadeDelete: false)
                .Index(t => t.accommodation_Id);
            
            CreateTable(
                "dbo.Places",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        region_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Regions", t => t.region_Id, cascadeDelete: false)
                .Index(t => t.region_Id);
            
            CreateTable(
                "dbo.Regions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        country_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Countries", t => t.country_Id, cascadeDelete: false)
                .Index(t => t.country_Id);
            
            CreateTable(
                "dbo.Countries",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Code = c.Int(nullable: false),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.AppUsers", "Email", c => c.String());
            AddColumn("dbo.AppUsers", "Password", c => c.String());
            AddColumn("dbo.AppUsers", "Username", c => c.String());
            AddColumn("dbo.AspNetUsers", "appUserId", c => c.Int(nullable: false));
            CreateIndex("dbo.AspNetUsers", "appUserId");
            AddForeignKey("dbo.AspNetUsers", "appUserId", "dbo.AppUsers", "Id", cascadeDelete: false);
            DropColumn("dbo.AppUsers", "FullName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AppUsers", "FullName", c => c.Int(nullable: false));
            DropForeignKey("dbo.AspNetUsers", "appUserId", "dbo.AppUsers");
            DropForeignKey("dbo.Accommodations", "place_Id", "dbo.Places");
            DropForeignKey("dbo.Places", "region_Id", "dbo.Regions");
            DropForeignKey("dbo.Regions", "country_Id", "dbo.Countries");
            DropForeignKey("dbo.Accommodations", "owner_Id", "dbo.AppUsers");
            DropForeignKey("dbo.RoomReservations", "Room_Id", "dbo.Rooms");
            DropForeignKey("dbo.Rooms", "accommodation_Id", "dbo.Accommodations");
            DropForeignKey("dbo.Comments", "user_Id", "dbo.AppUsers");
            DropForeignKey("dbo.RoomReservations", "AppUser_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Comments", "accommodation_Id", "dbo.Accommodations");
            DropForeignKey("dbo.Accommodations", "accommodationType_Id", "dbo.AccommodationTypes");
            DropIndex("dbo.AspNetUsers", new[] { "appUserId" });
            DropIndex("dbo.Regions", new[] { "country_Id" });
            DropIndex("dbo.Places", new[] { "region_Id" });
            DropIndex("dbo.Rooms", new[] { "accommodation_Id" });
            DropIndex("dbo.RoomReservations", new[] { "Room_Id" });
            DropIndex("dbo.RoomReservations", new[] { "AppUser_Id" });
            DropIndex("dbo.Comments", new[] { "user_Id" });
            DropIndex("dbo.Comments", new[] { "accommodation_Id" });
            DropIndex("dbo.Accommodations", new[] { "place_Id" });
            DropIndex("dbo.Accommodations", new[] { "owner_Id" });
            DropIndex("dbo.Accommodations", new[] { "accommodationType_Id" });
            DropColumn("dbo.AspNetUsers", "appUserId");
            DropColumn("dbo.AppUsers", "Username");
            DropColumn("dbo.AppUsers", "Password");
            DropColumn("dbo.AppUsers", "Email");
            DropTable("dbo.Countries");
            DropTable("dbo.Regions");
            DropTable("dbo.Places");
            DropTable("dbo.Rooms");
            DropTable("dbo.RoomReservations");
            DropTable("dbo.Comments");
            DropTable("dbo.AccommodationTypes");
            DropTable("dbo.Accommodations");
        }
    }
}

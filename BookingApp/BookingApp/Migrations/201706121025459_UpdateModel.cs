namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateModel : DbMigration
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
                        AccommodationType_Id = c.Int(nullable: false),
                        Owner_Id = c.Int(nullable: false),
                        Place_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AccommodationTypes", t => t.AccommodationType_Id, cascadeDelete: false)
                .ForeignKey("dbo.AppUsers", t => t.Owner_Id, cascadeDelete: false)
                .ForeignKey("dbo.Places", t => t.Place_Id, cascadeDelete: false)
                .Index(t => t.AccommodationType_Id)
                .Index(t => t.Owner_Id)
                .Index(t => t.Place_Id);
            
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
                        Accomodation_Id = c.Int(nullable: false),
                        User_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Accommodations", t => t.Accomodation_Id, cascadeDelete: false)
                .ForeignKey("dbo.AppUsers", t => t.User_Id, cascadeDelete: false)
                .Index(t => t.Accomodation_Id)
                .Index(t => t.User_Id);
            
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
                        Accomodation_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Accommodations", t => t.Accomodation_Id, cascadeDelete: false)
                .Index(t => t.Accomodation_Id);
            
            CreateTable(
                "dbo.Places",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Region_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Regions", t => t.Region_Id, cascadeDelete: false)
                .Index(t => t.Region_Id);
            
            CreateTable(
                "dbo.Regions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Country_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Countries", t => t.Country_Id, cascadeDelete: false)
                .Index(t => t.Country_Id);
            
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
            DropForeignKey("dbo.Accommodations", "Place_Id", "dbo.Places");
            DropForeignKey("dbo.Places", "Region_Id", "dbo.Regions");
            DropForeignKey("dbo.Regions", "Country_Id", "dbo.Countries");
            DropForeignKey("dbo.Accommodations", "Owner_Id", "dbo.AppUsers");
            DropForeignKey("dbo.RoomReservations", "Room_Id", "dbo.Rooms");
            DropForeignKey("dbo.Rooms", "Accomodation_Id", "dbo.Accommodations");
            DropForeignKey("dbo.Comments", "User_Id", "dbo.AppUsers");
            DropForeignKey("dbo.RoomReservations", "AppUser_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Comments", "Accomodation_Id", "dbo.Accommodations");
            DropForeignKey("dbo.Accommodations", "AccommodationType_Id", "dbo.AccommodationTypes");
            DropIndex("dbo.AspNetUsers", new[] { "appUserId" });
            DropIndex("dbo.Regions", new[] { "Country_Id" });
            DropIndex("dbo.Places", new[] { "Region_Id" });
            DropIndex("dbo.Rooms", new[] { "Accomodation_Id" });
            DropIndex("dbo.RoomReservations", new[] { "Room_Id" });
            DropIndex("dbo.RoomReservations", new[] { "AppUser_Id" });
            DropIndex("dbo.Comments", new[] { "User_Id" });
            DropIndex("dbo.Comments", new[] { "Accomodation_Id" });
            DropIndex("dbo.Accommodations", new[] { "Place_Id" });
            DropIndex("dbo.Accommodations", new[] { "Owner_Id" });
            DropIndex("dbo.Accommodations", new[] { "AccommodationType_Id" });
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

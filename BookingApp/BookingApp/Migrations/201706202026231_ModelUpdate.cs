namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ModelUpdate : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.RoomReservations", "EndDate", c => c.String());
            AlterColumn("dbo.RoomReservations", "StartDate", c => c.String());
            AlterColumn("dbo.RoomReservations", "Timestamp", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.RoomReservations", "Timestamp", c => c.DateTime());
            AlterColumn("dbo.RoomReservations", "StartDate", c => c.DateTime());
            AlterColumn("dbo.RoomReservations", "EndDate", c => c.DateTime());
        }
    }
}

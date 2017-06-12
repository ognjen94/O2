using BookingApp.Models;

namespace BookingApp.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<BookingApp.Models.BAContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(BookingApp.Models.BAContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Admin" };

                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "Manager"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Manager" };

                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "AppUser"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "AppUser" };

                manager.Create(role);
            }

            //var userStore = new UserStore<BAIdentityUser>(context);
            //var userManager = new UserManager<BAIdentityUser>(userStore);

            //if (!context.Users.Any(u => u.UserName == "admin"))
            //{
            //    var user = new BAIdentityUser() { Id = "admin", UserName = "admin", Email = "admin@yahoo.com", PasswordHash = BAIdentityUser.HashPassword("admin")};
            //    userManager.Create(user);
            //    userManager.AddToRole(user.Id, "Admin");
            //}


            //context.AppUsers.AddOrUpdate(
            //      p => p.Username,
            //      new AppUser() { Username = "AdminAdminovic" }
            //);
            //context.AppUsers.AddOrUpdate(
            //    p => p.Username,
            //    new AppUser() { Username = "AppUserAppUserovic" }
            //);
            //context.SaveChanges();
            //-------------------------------------------------------------------------------------------------
            //var userStore = new UserStore<BAIdentityUser>(context);
            //var userManager = new UserManager<BAIdentityUser>(userStore);
            //if (!context.Users.Any(u => u.UserName == "admin"))
            //{
            //    var _appUser = context.AppUsers.FirstOrDefault(a => a.Username == "AdminAdminovic");
            //    var user = new BAIdentityUser() { Id = "admin", UserName = "admin", Email = "admin@yahoo.com", PasswordHash = BAIdentityUser.HashPassword("admin"), appUserId = _appUser.Id };
            //    userManager.Create(user);
            //    userManager.AddToRole(user.Id, "Admin");
            //}

            //if (!context.Users.Any(u => u.UserName == "appu"))
            //{
            //    var _appUser = context.AppUsers.FirstOrDefault(a => a.Username == "AppUserAppUserovic");
            //    var user = new BAIdentityUser() { Id = "appu", UserName = "appu", Email = "appu@yahoo.com", PasswordHash = BAIdentityUser.HashPassword("appu"), appUserId = _appUser.Id };
            //    userManager.Create(user);
            //    userManager.AddToRole(user.Id, "AppUser");
            //}
            //--------------------------------------------------------------------------------------------

            RoomReservations roomres = new RoomReservations();
            //roomres.Id = 1;
            roomres.StartDate = DateTime.Now;
            roomres.EndDate = DateTime.Now;
            roomres.Timestamp = DateTime.Now;

            AccommodationType at = new AccommodationType();
            //at.Id = 2;
            at.Name = "Hotel";

            Room room = new Room();
            //room.Id = 1;
            room.RoomNumber = 212;
            room.BedCount = 2;
            room.Description = "Ima WIFI";
            room.PricePerNight = 100;
            room.m_RoomReservations = new System.Collections.Generic.List<RoomReservations>();
            room.m_RoomReservations.Add(roomres);

            Country county = new Country();
            //county.Id = 1;
            county.Code = 115;
            county.Name = "Srbija";

            Region reg = new Region();
            //reg.Id = 1;
            reg.Name = "Zapadna Srbija";
            reg.Country = county;
            county.m_Region = new System.Collections.Generic.List<Region>();
            county.m_Region.Add(reg);

            Place place = new Place();
            //place.Id = 1;
            place.Name = "Sabac";
            place.Region = reg;
            reg.m_Place = new System.Collections.Generic.List<Place>();
            reg.m_Place.Add(place);

            Comment c = new Comment();
            c.Grade = 4;
            //c.Id = 3;
            c.Text = "bal bla";

            AppUser user = new AppUser();
            user.Username = "admin";
            user.Email = "admin@yahoo.com";
            user.Password = "admin";
            user.m_Comment = new System.Collections.Generic.List<Comment>();
            user.m_Comment.Add(c);
            user.m_RoomReservations = new System.Collections.Generic.List<RoomReservations>();
            user.m_RoomReservations.Add(roomres);
            c.User = user;

            Accommodation ac = new Accommodation();
            ac.Address = "Akacija 29";
            ac.Approved = true;
            ac.AverageGrade = 4.5F;
            ac.Description = "Pun ";
            //ac.Id = 1;
            ac.ImageURL = "okilja.png";
            ac.Latitude = 45.22;
            ac.Longitude = 30.45;
            ac.Name = "Stan na dan";
            ac.m_Comment = new System.Collections.Generic.List<Comment>();
            ac.m_Comment.Add(c);
            c.Accomodation = ac;
            ac.m_Room = new System.Collections.Generic.List<Room>();
            ac.m_Room.Add(room);
            room.Accomodation = ac;

            at.m_Accommodation = new System.Collections.Generic.List<Accommodation>();
            at.m_Accommodation.Add(ac);
            ac.AccommodationType = at;

            ac.Owner = user;
            user.m_Accommodation = new System.Collections.Generic.List<Accommodation>();
            user.m_Accommodation.Add(ac);

            ac.Place = place;
            place.m_Accommodation = new System.Collections.Generic.List<Accommodation>();
            place.m_Accommodation.Add(ac);


            try
            {
                context.RoomReservationss.Add(roomres);
                context.AccommodationTypes.Add(at);                              
                context.Rooms.Add(room);
                context.Countries.Add(county);
                context.Regions.Add(reg);
                context.Places.Add(place);
                context.Comments.Add(c);
                context.AppUsers.Add(user);            
                context.Accommodations.Add(ac);

                context.SaveChanges();

                var userStore = new UserStore<BAIdentityUser>(context);
                var userManager = new UserManager<BAIdentityUser>(userStore);
                if (!context.Users.Any(u => u.UserName == "admin"))
                {
                    var _appUser = context.AppUsers.FirstOrDefault(a => a.Username == "AdminAdminovic");
                    var user1 = new BAIdentityUser() { Id = "admin", UserName = "admin", Email = "admin@yahoo.com", PasswordHash = BAIdentityUser.HashPassword("admin"), appUserId = _appUser.Id };
                    userManager.Create(user1);
                    userManager.AddToRole(user1.Id, "Admin");
                }
            }
            catch (Exception)
            {

            }















        }
    }
}

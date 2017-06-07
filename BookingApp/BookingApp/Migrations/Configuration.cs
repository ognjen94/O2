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


            context.AppUsers.AddOrUpdate(
                  p => p.Username,
                  new AppUser() { Username = "AdminAdminovic" }
            );
            context.AppUsers.AddOrUpdate(
                p => p.Username,
                new AppUser() { Username = "AppUserAppUserovic" }
            );
            context.SaveChanges();

            var userStore = new UserStore<BAIdentityUser>(context);
            var userManager = new UserManager<BAIdentityUser>(userStore);
            if (!context.Users.Any(u => u.UserName == "admin"))
            {
                var _appUser = context.AppUsers.FirstOrDefault(a => a.Username == "AdminAdminovic");
                var user = new BAIdentityUser() { Id = "admin", UserName = "admin", Email = "admin@yahoo.com", PasswordHash = BAIdentityUser.HashPassword("admin"), appUserId = _appUser.Id };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "Admin");
            }

            if (!context.Users.Any(u => u.UserName == "appu"))
            {
                var _appUser = context.AppUsers.FirstOrDefault(a => a.Username == "AppUserAppUserovic");
                var user = new BAIdentityUser() { Id = "appu", UserName = "appu", Email = "appu@yahoo.com", PasswordHash = BAIdentityUser.HashPassword("appu"), appUserId = _appUser.Id };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "AppUser");
            }



            Accommodation ac = new Accommodation();
            ac.Address = "Akacija 29";
            ac.Approved = true;
            ac.AverageGrade = 4.5F;
            ac.Description = "Pun ";
            ac.Id = 1;
            ac.ImageURL = "okilja.png";
            ac.Latitude = 45.22;
            ac.Longitude = 30.45;
            ac.Name = "Stan na dan";

            AccommodationType at = new AccommodationType();
            at.Id = 2;
            at.Name = "Hotel";

            Comment c = new Comment();
            c.Grade = 4;
            c.Id = 3;
            c.Text = "bal bla";

            RoomReservations roomres = new RoomReservations();
            roomres.Id = 1;
            roomres.StartDate = DateTime.Now;
            roomres.EndDate = DateTime.Now;
            roomres.Timestamp = DateTime.Now;

            Room room = new Room();
            room.Id = 1;
            room.RoomNumber = 212;
            room.BedCount = 2;
            room.Description = "Ima WIFI";
            room.PricePerNight = 100;

            Region reg = new Region();
            reg.Id = 1;
            reg.Name = "Zapadna Srbija";

            Place place = new Place();
            place.Id = 1;
            place.Name = "Sabac";

            Country county = new Country();
            county.Id = 1;
            county.Code = 115;
            county.Name = "Srbija";


        }
    }
}

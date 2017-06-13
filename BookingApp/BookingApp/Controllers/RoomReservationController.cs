using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BookingApp.Models;
using System.Web.Http.Description;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace BookingApp.Controllers
{
    public class RoomReservationController : ApiController
    {
        private BAContext database = new BAContext();

        // GET: api/RoomReservations
        public IQueryable<RoomReservation> GetRoomReservations()
        {
            return database.RoomReservations;
        }

        // GET: api/Rooms/5
        [ResponseType(typeof(RoomReservation))]
        public IHttpActionResult GetRoomReservations(int id)
        {
            RoomReservation rr = database.RoomReservations.Find(id);
            if (rr == null)
            {
                return NotFound();
            }
            return Ok(rr);
        }

        // PUT: api/RoomReservations/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRoomReservations(int id, RoomReservation rr)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rr.Id)
            {
                return BadRequest();
            }

            database.Entry(rr).State = EntityState.Modified;

            try
            {
                database.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoomReservationsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Room
        [ResponseType(typeof(RoomReservation))]
        public IHttpActionResult PostRoomReservations(RoomReservation rr)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            database.RoomReservations.Add(rr);
            database.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = rr.Id }, rr);
        }

        // DELETE: api/Rooms/5
        [ResponseType(typeof(RoomReservation))]
        public IHttpActionResult DeleteRoomReservations(int id)
        {
            RoomReservation rr = database.RoomReservations.Find(id);
            if (rr == null)
            {
                return NotFound();
            }

            database.RoomReservations.Remove(rr);
            database.SaveChanges();

            return Ok(rr);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                database.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RoomReservationsExists(int id)
        {
            return database.RoomReservations.Count(e => e.Id == id) > 0;
        }
    }
}

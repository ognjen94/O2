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
using System.Web.Http.OData;
using System.Web.Http.OData.Routing;

namespace BookingApp.Controllers
{
    public class AccommodationController : ApiController
    {
        private BAContext database = new BAContext();

        // GET: api/Accommodations
        [EnableQuery(MaxExpansionDepth = 4)]
        public IQueryable<Accommodation> GetAccommodations()
        {
            return database.Accommodations;
        }

        // GET: api/Accommodations/5
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult GetAccommodation(int id)
        {
            Accommodation acc = database.Accommodations.Find(id);
            if (acc == null)
            {
                return NotFound();
            }
            return Ok(acc);
        }

        // PUT: api/Accommodation/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAccommodation(int id, Accommodation acc)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != acc.Id)
            {
                return BadRequest();
            }

            database.Entry(acc).State = EntityState.Modified;

            try
            {
                database.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccommodationExists(id))
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

        // POST: api/Places
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult PostAccommodation(Accommodation acc)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            database.Accommodations.Add(acc);
            database.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = acc.Id }, acc);
        }

        // DELETE: api/Accommodations/5
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult DeleteAccommodation(int id)
        {
            Accommodation acc = database.Accommodations.Find(id);
            if (acc == null)
            {
                return NotFound();
            }

            database.Accommodations.Remove(acc);
            database.SaveChanges();

            return Ok(acc);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                database.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AccommodationExists(int id)
        {
            return database.Accommodations.Count(e => e.Id == id) > 0;
        }
    }
}

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

namespace BookingApp.Controllers
{
    public class PlacesController : ApiController
    {
        private BAContext database = new BAContext();

        // GET: api/Places
        [EnableQuery]
        public IQueryable<Place> GetPlaces()
        {
            return database.Places;
        }

        // GET: api/Places/5
        [ResponseType(typeof(Place))]
        public IHttpActionResult GetPlace(int id)
        {
            Place place = database.Places.Find(id);
            if(place == null)
            {
                return NotFound();
            }
            return Ok(place);
        }

        // PUT: api/Places/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPlace(int id, Place place)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != place.Id)
            {
                return BadRequest();
            }

            database.Entry(place).State = EntityState.Modified;

            try
            {
                database.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlaceExists(id))
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
        [ResponseType(typeof(Place))]
        public IHttpActionResult PostPlace(Place place)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            database.Places.Add(place);
            database.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = place.Id }, place);
        }

        // DELETE: api/Places/5
        [ResponseType(typeof(Place))]
        public IHttpActionResult DeletePlace(int id)
        {
            Place place = database.Places.Find(id);
            if (place == null)
            {
                return NotFound();
            }

            database.Places.Remove(place);
            database.SaveChanges();

            return Ok(place);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                database.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlaceExists(int id)
        {
            return database.Places.Count(e => e.Id == id) > 0;
        }
    }
}


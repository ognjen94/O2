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
    public class AccommodationTypeController : ApiController
    {
        private BAContext database = new BAContext();

        // GET: api/AccommodationTypes
        [EnableQuery]
        public IQueryable<AccommodationType> GetAccommodationTypes()
        {
            return database.AccommodationTypes;
        }

        // GET: api/AccommodationTypes/5
        [ResponseType(typeof(AccommodationType))]
        public IHttpActionResult GetAccommodationTypes(int id)
        {
            AccommodationType accType = database.AccommodationTypes.Find(id);
            if (accType == null)
            {
                return NotFound();
            }
            return Ok(accType);
        }

        // PUT: api/AccommodationTypes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAccommodationTypes(int id, AccommodationType accType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != accType.Id)
            {
                return BadRequest();
            }

            database.Entry(accType).State = EntityState.Modified;

            try
            {
                database.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccommodationTypeExists(id))
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

        // POST: api/AccommodationType
        [ResponseType(typeof(AccommodationType))]
        public IHttpActionResult PostAccommodationType(AccommodationType accType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            database.AccommodationTypes.Add(accType);
            database.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = accType.Id }, accType);
        }

        // DELETE: api/AccommodationTypes/5
        [ResponseType(typeof(AccommodationType))]
        public IHttpActionResult DeleteAccommodationTypes(int id)
        {
            AccommodationType accType = database.AccommodationTypes.Find(id);
            if (accType == null)
            {
                return NotFound();
            }

            database.AccommodationTypes.Remove(accType);
            database.SaveChanges();

            return Ok(accType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                database.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AccommodationTypeExists(int id)
        {
            return database.AccommodationTypes.Count(e => e.Id == id) > 0;
        }
    }
}

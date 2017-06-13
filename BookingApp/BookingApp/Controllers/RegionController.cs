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
    public class RegionController : ApiController
    {
        private BAContext database = new BAContext();

        // GET: api/Regions
        public IQueryable<Region> GetRegions()
        {
            return database.Regions;
        }

        // GET: api/Regions/5
        [ResponseType(typeof(Region))]
        public IHttpActionResult GetRegions(int id)
        {
            Region reg = database.Regions.Find(id);
            if (reg == null)
            {
                return NotFound();
            }
            return Ok(reg);
        }

        // PUT: api/Regions/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRegion(int id, Region reg)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != reg.Id)
            {
                return BadRequest();
            }

            database.Entry(reg).State = EntityState.Modified;

            try
            {
                database.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegionExists(id))
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

        // POST: api/Region
        [ResponseType(typeof(Region))]
        public IHttpActionResult PostRegion(Region reg)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            database.Regions.Add(reg);
            database.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = reg.Id }, reg);
        }

        // DELETE: api/Regions/5
        [ResponseType(typeof(Region))]
        public IHttpActionResult DeleteRegion(int id)
        {
            Region reg = database.Regions.Find(id);
            if (reg == null)
            {
                return NotFound();
            }

            database.Regions.Remove(reg);
            database.SaveChanges();

            return Ok(reg);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                database.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RegionExists(int id)
        {
            return database.Regions.Count(e => e.Id == id) > 0;
        }
    }
}

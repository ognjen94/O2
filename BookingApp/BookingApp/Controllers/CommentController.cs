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
    public class CommentController : ApiController
    {
        private BAContext database = new BAContext();

        // GET: api/Comments
        public IQueryable<Comment> GetComments()
        {
            return database.Comments;
        }

        // GET: api/Comments/5
        [ResponseType(typeof(Comment))]
        public IHttpActionResult GetComments(int id)
        {
            Comment comm = database.Comments.Find(id);
            if (comm == null)
            {
                return NotFound();
            }
            return Ok(comm);
        }

        // PUT: api/Comments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutComments(int id, Comment comm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != comm.Id)
            {
                return BadRequest();
            }

            database.Entry(comm).State = EntityState.Modified;

            try
            {
                database.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentExists(id))
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

        // POST: api/Comment
        [ResponseType(typeof(Comment))]
        public IHttpActionResult PostComment(Comment comm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            database.Comments.Add(comm);
            database.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = comm.Id }, comm);
        }

        // DELETE: api/Comments/5
        [ResponseType(typeof(Comment))]
        public IHttpActionResult DeleteComment(int id)
        {
            Comment comm = database.Comments.Find(id);
            if (comm == null)
            {
                return NotFound();
            }

            database.Comments.Remove(comm);
            database.SaveChanges();

            return Ok(comm);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                database.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CommentExists(int id)
        {
            return database.Comments.Count(e => e.Id == id) > 0;
        }
    }
}

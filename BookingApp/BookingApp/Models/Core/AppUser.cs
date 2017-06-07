using System;
using System.Collections.Generic;
using System.Text;
using System.IO;


namespace System {
	public class AppUser
    {

		private string email;
		private int id;
		private string password;
		private string username;
		public List<Comment> m_Comment;
		public List<RoomReservations> m_RoomReservations;
		public List<Accommodation> m_Accommodation;

		public AppUser(){

		}

		~AppUser(){

		}

		public string Email{
			get{
				return email;
			}
			set{
				email = value;
			}
		}

		public int Id{
			get{
				return id;
			}
			set{
				id = value;
			}
		}

		public string Password{
			get{
				return password;
			}
			set{
				password = value;
			}
		}

		public string Username{
			get{
				return username;
			}
			set{
				username = value;
			}
		}

    }//end AppUser

}//end namespace System